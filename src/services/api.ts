import type { Paper } from '@/store/useStore';

// ─── Europe PMC API ───

interface EpmcAuthor {
  fullName?: string;
  firstName?: string;
  lastName?: string;
}

interface EpmcMeshHeading {
  descriptorName?: string;
}

interface EpmcResult {
  pmid?: string;
  id?: string;
  title?: string;
  authorList?: { author?: EpmcAuthor[] };
  journalTitle?: string;
  source?: string;
  pubYear?: string;
  abstractText?: string;
  doi?: string;
  elocationid?: string;
  meshHeadingList?: { meshHeading?: EpmcMeshHeading[] };
  publisher?: string;
}

const STOP_WORDS = new Set([
  'using', 'based', 'role', 'effects', 'analysis', 'study', 'model', 'cell',
  'cells', 'human', 'mice', 'mouse', 'rat', 'novel', 'new', 'data', 'show',
  'shown', 'found', 'results', 'these', 'this', 'that', 'with', 'from',
  'into', 'through', 'between', 'among', 'within', 'during', 'after',
  'before', 'above', 'below', 'under', 'over', 'such', 'than', 'when',
  'where', 'what', 'which', 'their', 'there', 'they', 'them', 'have',
  'has', 'had', 'been', 'being', 'were', 'are', 'was', 'is', 'and',
  'but', 'for', 'not', 'all', 'any', 'can', 'had', 'her', 'was',
  'one', 'our', 'out', 'day', 'get', 'has', 'him', 'his', 'how',
  'its', 'may', 'now', 'old', 'see', 'two', 'who', 'boy', 'did',
  'she', 'use', 'her', 'way', 'many', 'oil', 'sit', 'set', 'run',
  'eat', 'far', 'sea', 'eye', 'ago', 'off', 'too', 'any', 'say',
  'man', 'try', 'ask', 'end', 'why', 'let', 'put', 'say', 'she',
  'try', 'way', 'own', 'say', 'too', 'old', 'tell', 'very', 'when',
  'come', 'here', 'just', 'like', 'long', 'make', 'many', 'over',
  'such', 'take', 'than', 'them', 'well', 'were', 'will', 'years',
  'that', 'with', 'they', 'have', 'from', 'word', 'what', 'said',
  'each', 'which', 'their', 'time', 'would', 'there', 'write',
  'about', 'could', 'other', 'after', 'first', 'never', 'these',
  'think', 'where', 'being', 'every', 'great', 'might', 'shall',
  'still', 'those', 'while', 'research', 'paper', 'review', 'article',
  'abstract', 'background', 'methods', 'conclusion', 'fig', 'figure',
  'used', 'also', 'however', 'thus', 'therefore', 'here', 'we',
]);

function stripHtml(html: string): string {
  if (!html) return '';
  return html
    .replace(/<h\d[^>]*>.*?<\/h\d>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#\d+;/g, (m) => String.fromCharCode(parseInt(m.slice(2, -1))))
    .replace(/\s+/g, ' ')
    .trim();
}

function extractKeywordsFromTitle(title: string): string[] {
  const clean = title.toLowerCase().replace(/<[^>]+>/g, '');
  return clean
    .split(/[\s,;:\-\(\)\[\]]+/)
    .map((w) => w.trim())
    .filter((w) => w.length > 4 && !STOP_WORDS.has(w))
    .filter((w, i, arr) => arr.indexOf(w) === i) // unique
    .slice(0, 5);
}

function transformEpmcPaper(raw: EpmcResult, forceSource?: 'pubmed' | 'biorxiv'): Paper {
  const authorList = raw.authorList?.author || [];
  const authors = authorList
    .slice(0, 6)
    .map((a) => a.fullName || `${a.firstName || ''} ${a.lastName || ''}`.trim())
    .filter(Boolean);

  // Get MeSH keywords
  const mesh = raw.meshHeadingList?.meshHeading || [];
  const meshKeywords = mesh
    .map((m) => m.descriptorName)
    .filter((k): k is string => Boolean(k));

  // Fallback: extract from title
  const titleKeywords = meshKeywords.length === 0
    ? extractKeywordsFromTitle(raw.title || '')
    : [];

  const keywords = meshKeywords.length > 0 ? meshKeywords : titleKeywords;

  // Determine source
  const isBiorxiv = forceSource === 'biorxiv' ||
    (raw.publisher || '').toLowerCase().includes('biorxiv') ||
    (raw.doi || '').includes('10.1101');

  return {
    id: `pmid_${raw.pmid || raw.id || Math.random().toString(36).slice(2, 10)}`,
    title: stripHtml(raw.title || 'Untitled'),
    authors: authors.length ? authors : ['Unknown'],
    journal: raw.journalTitle || raw.source || (isBiorxiv ? 'bioRxiv' : 'Unknown'),
    year: parseInt(raw.pubYear || '2025'),
    abstract: stripHtml(raw.abstractText || 'No abstract available.'),
    keywords: keywords.length ? keywords : ['research'],
    doi: raw.doi || raw.elocationid || '',
    source: isBiorxiv ? 'biorxiv' : 'pubmed',
  };
}

// ─── API Calls ───

export interface FetchOptions {
  /** When true, bias toward older foundational papers (pre-2020, sorted by citations) */
  foundation?: boolean;
}

export async function fetchPubmedPapers(
  query: string,
  page: number = 1,
  options: FetchOptions = {}
): Promise<Paper[]> {
  const pageSize = 25;
  const start = (page - 1) * pageSize;

  // Foundation mode: add date filter and sort by citation count
  let fullQuery = query;
  let sort = '';
  if (options.foundation) {
    fullQuery = `(${query}) AND (FIRST_PDATE:[2000-01-01 TO 2020-12-31])`;
    sort = '&sort=CITED desc';
  }

  const url = `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=${encodeURIComponent(fullQuery)}&pageSize=${pageSize}&resultType=core&format=json&cursorMark=${start}${sort}`;

  const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw new Error(`Europe PMC error: ${res.status}`);

  const data = await res.json();
  const results: EpmcResult[] = data.resultList?.result || [];

  return results
    .map((r) => transformEpmcPaper(r))
    .filter((p) => p.abstract.length > 50);
}

export async function fetchBiorxivPapers(
  page: number = 1
): Promise<Paper[]> {
  const pageSize = 25;
  const start = (page - 1) * pageSize;
  // Use Europe PMC with PUBLISHER:bioRxiv filter — the direct bioRxiv API is often down
  const url = `https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=PUBLISHER:bioRxiv&pageSize=${pageSize}&resultType=core&format=json&cursorMark=${start}`;

  const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
  if (!res.ok) throw new Error(`Europe PMC (bioRxiv) error: ${res.status}`);

  const data = await res.json();
  const results: EpmcResult[] = data.resultList?.result || [];

  return results
    .map((r) => transformEpmcPaper(r, 'biorxiv'))
    .filter((p) => p.abstract.length > 50);
}

// ─── Random starter keywords ───

const STARTER_KEYWORDS = [
  'autophagy', 'CRISPR', 'cancer immunotherapy', 'Alzheimer',
  'stem cells', 'microbiome', 'epigenetics', 'neurodegeneration',
  'protein structure', 'gene therapy', 'synthetic biology',
  'antibiotic resistance', 'metabolism', 'inflammation',
  'virology', 'oncology', 'cardiovascular', 'diabetes',
  'aging', 'immunology', 'cryo-electron microscopy',
  'RNA sequencing', 'single cell', 'bioinformatics',
  'pharmacology', 'tissue engineering', 'nanomedicine',
  'pathogenesis', 'oxidative stress', 'neuroscience',
  'lysosome', 'mitochondria', 'DNA repair', 'transcription',
  'proteomics', 'genomics', 'vaccine', 'infectious disease',
];

export function getRandomKeywords(count: number = 3): string[] {
  const shuffled = [...STARTER_KEYWORDS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function buildQueryFromKeywords(keywords: string[]): string {
  if (keywords.length === 0) return 'research';
  return keywords.map((k) => `"${k}"`).join(' OR ');
}
