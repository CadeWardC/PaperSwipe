export interface Paper {
  id: number;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  abstract: string;
  topic: 'autophagy' | 'protein_prep' | 'cryo_fib' | 'cryo_et';
  doi: string;
  keywords: string[];
}

export const papers: Paper[] = [
  {
    "id": 1,
    "title": "Micro-Patterned Substrates for Cryo-FIB Sample Orientation",
    "authors": [
      "Priya Dubois",
      "Lisa Rossi",
      "Sophie Cohen",
      "Michael Evans",
      "Matthew Garcia"
    ],
    "journal": "Journal of Cell Biology",
    "year": 2025,
    "abstract": "Lamella thickness is a critical parameter for high-resolution cryo-ET. We investigated the relationship between milling parameters, sample composition, and final lamella thickness. Our data reveal that milling rate and sample vitreous ice thickness are the primary determinants of lamella uniformity. We developed a predictive model that optimizes milling parameters for different sample types. Application of this model achieves target thickness within 10% across 95% of prepared lamellae.",
    "topic": "cryo_fib",
    "doi": "10.9683/ehgx75cz",
    "keywords": [
      "cryo-FIB",
      "in situ",
      "ion beam"
    ]
  },
  {
    "id": 2,
    "title": "Cryo-FIB Milling of Muscle Tissue Sarcomeres",
    "authors": [
      "Yuki Novak",
      "Yuki Kowalski",
      "Michael M\u00fcller"
    ],
    "journal": "Current Opinion in Structural Biology",
    "year": 2024,
    "abstract": "Automated cryo-FIB workflows are essential for scaling in situ structural biology. We engineered a robotic system that performs grid clipping, target selection, and lamella milling without human intervention. The system uses machine learning algorithms to identify optimal milling sites and predict lamella quality. Throughput is increased tenfold compared to manual operation while maintaining consistent quality. We demonstrate the system by preparing over two hundred lamellae from mammalian cells in a single session.",
    "topic": "cryo_fib",
    "doi": "10.7213/nrwyc5wm",
    "keywords": [
      "tomography",
      "cryo-FIB",
      "sample preparation"
    ]
  },
  {
    "id": 3,
    "title": "Chaperone-Mediated Autophagy and Protein Quality Control",
    "authors": [
      "Chen Evans",
      "Thomas Wilson",
      "Chen Patel",
      "Matthew Petrov"
    ],
    "journal": "Nature Communications",
    "year": 2021,
    "abstract": "Autophagy dysfunction has been implicated in numerous neurodegenerative disorders. Here we examined the role of mitophagy in Parkinson's disease using patient-derived induced pluripotent stem cells. Our results show that defective mitophagy leads to accumulation of dysfunctional mitochondria and increased oxidative stress. We identified a small molecule compound that restores mitophagy function in disease models. This compound shows promise as a potential therapeutic strategy for Parkinson's disease and related disorders.",
    "topic": "autophagy",
    "doi": "10.7543/n9es25ee",
    "keywords": [
      "p62",
      "mTOR",
      "lysosome",
      "PI3K",
      "Beclin1"
    ]
  },
  {
    "id": 4,
    "title": "Cryo-ET of Secretory Pathway Organelles",
    "authors": [
      "Andrew Kim",
      "Chen Wilson",
      "Chen Rossi"
    ],
    "journal": "Molecular Cell",
    "year": 2020,
    "abstract": "The resolution revolution in cryo-EM has extended to electron tomography. We report methodological advances that push the resolution of subtomogram averaging beyond 3 angstroms for in situ protein structures. Key innovations include improved tilt-series acquisition schemes, advancedCTF correction algorithms, and novel classification methods. We applied these methods to determine the atomic structure of a metabolic enzyme complex within bacterial cells. This work establishes cryo-ET as a tool for atomic-resolution structural biology in the cellular context.",
    "topic": "cryo_et",
    "doi": "10.3999/86xgg6q6",
    "keywords": [
      "cellular",
      "organelle",
      "in situ",
      "cryo-ET"
    ]
  },
  {
    "id": 5,
    "title": "Endosomal Microautophagy: An Alternative Degradation Pathway",
    "authors": [
      "Sophie Smith",
      "Yuki Silva",
      "Lisa Rodriguez"
    ],
    "journal": "Journal of Cell Biology",
    "year": 2019,
    "abstract": "The autophagosome is a double-membrane vesicle that engulfs cytoplasmic material for delivery to the lysosome. In this work, we use correlative light and electron microscopy to visualize autophagosome biogenesis in real time. Our observations challenge the conventional model by revealing an alternative membrane source for autophagosome formation. Through genetic and pharmacological approaches, we demonstrate that this alternative pathway becomes dominant under specific cellular stress conditions. This study provides a revised framework for understanding the membrane dynamics of autophagy.",
    "topic": "autophagy",
    "doi": "10.9337/yprrrefv",
    "keywords": [
      "autophagosome",
      "lysosome",
      "selective autophagy",
      "p62",
      "mitophagy"
    ]
  },
  {
    "id": 6,
    "title": "Cryo-ET of Chromatin Organization in the Cell Nucleus",
    "authors": [
      "Kevin Petrov",
      "Matthew Wang",
      "Michael Smith",
      "Anna Chen"
    ],
    "journal": "Journal of Molecular Biology",
    "year": 2019,
    "abstract": "In situ structural biology aims to determine protein structures within unperturbed cellular environments. Here we use cryo-electron tomography combined with subtomogram averaging to determine the structure of ribosomes actively engaged in translation on the endoplasmic reticulum membrane. Our analysis reveals the architecture of the translocon complex and its interaction with translating ribosomes. We observe distinct conformational states associated with different stages of protein translocation. These findings provide unprecedented insights into co-translational protein targeting and membrane insertion.",
    "topic": "cryo_et",
    "doi": "10.7705/yzzjjhbu",
    "keywords": [
      "subtomogram averaging",
      "cryo-ET",
      "organelle",
      "native structure"
    ]
  },
  {
    "id": 7,
    "title": "The ULK1 Complex as a Central Hub for Autophagy Signaling",
    "authors": [
      "Olga Anderson",
      "Maria Schmidt",
      "James Schmidt"
    ],
    "journal": "Trends in Biochemical Sciences",
    "year": 2025,
    "abstract": "Autophagy is a fundamental cellular process responsible for the degradation and recycling of cytoplasmic components. Here we investigate the molecular mechanisms governing selective autophagy in mammalian cells under nutrient starvation conditions. Using a combination of live-cell imaging, CRISPR knockout screens, and biochemical assays, we identify novel regulators of autophagosome formation. Our findings reveal a previously unknown regulatory pathway that coordinates autophagy initiation with cellular energy status. These results provide new insights into the complex network controlling autophagy and have implications for understanding autophagy-related diseases.",
    "topic": "autophagy",
    "doi": "10.6794/36pwe759",
    "keywords": [
      "p62",
      "autophagy",
      "autophagosome"
    ]
  },
  {
    "id": 8,
    "title": "Cryo-FIB Milling of Virus-Infected Cells",
    "authors": [
      "Akira Johnson",
      "Wei Johnson",
      "Christopher Liu",
      "Hans Nakamura"
    ],
    "journal": "Nature Communications",
    "year": 2023,
    "abstract": "Lamella thickness is a critical parameter for high-resolution cryo-ET. We investigated the relationship between milling parameters, sample composition, and final lamella thickness. Our data reveal that milling rate and sample vitreous ice thickness are the primary determinants of lamella uniformity. We developed a predictive model that optimizes milling parameters for different sample types. Application of this model achieves target thickness within 10% across 95% of prepared lamellae.",
    "topic": "cryo_fib",
    "doi": "10.7948/t4hmj8zd",
    "keywords": [
      "ion beam",
      "cryo-FIB",
      "sample preparation",
      "FIB milling",
      "tomography"
    ]
  },
  {
    "id": 9,
    "title": "Protein Stabilization Through Directed Evolution",
    "authors": [
      "Matthew Anderson",
      "Priya Schmidt",
      "Wei Garcia"
    ],
    "journal": "Cell Research",
    "year": 2023,
    "abstract": "Membrane proteins represent a significant fraction of the proteome and are important therapeutic targets. However, their purification remains challenging due to hydrophobicity and instability outside lipid bilayers. Here we present a systematic approach for optimizing membrane protein purification using a panel of novel detergents and lipid mimics. Our method achieves significantly higher yields and improved stability compared to conventional approaches. We validate this platform by successfully purifying twenty previously recalcitrant membrane proteins for structural studies.",
    "topic": "protein_prep",
    "doi": "10.5712/vmugxgd5",
    "keywords": [
      "membrane protein",
      "detergent",
      "expression",
      "stability"
    ]
  },
  {
    "id": 10,
    "title": "Subnanometer Resolution Structures from In Situ Cryo-ET Data",
    "authors": [
      "Akira Schmidt",
      "Yuki Thompson",
      "Andrew Chen",
      "David Johnson",
      "Maria Wang"
    ],
    "journal": "Cell",
    "year": 2022,
    "abstract": "The bacterial flagellar motor is a remarkable nanomachine that converts ion motive force into mechanical rotation. Using cryo-electron tomography of intact bacterial cells, we determined the in situ structure of the complete flagellar motor including stator complexes and the C-ring. Subtomogram averaging yielded a composite structure that reveals the organization of torque-generating units around the rotor. Our results support a model in which stator remodeling enables the motor to adapt to changing mechanical load. This study showcases the potential of cryo-ET for understanding dynamic molecular machines in action.",
    "topic": "cryo_et",
    "doi": "10.2342/rd3r6jwp",
    "keywords": [
      "macromolecular complex",
      "3D reconstruction",
      "electron tomography",
      "in situ"
    ]
  },
  {
    "id": 11,
    "title": "Cryo-FIB-SEM for Volume Imaging of Cellular Ultrastructure",
    "authors": [
      "Maria Thompson",
      "Rachel Martinez",
      "Rachel Zhang",
      "Michael Zhang"
    ],
    "journal": "Nature Methods",
    "year": 2023,
    "abstract": "The integration of cryo-FIB with cryo-electron tomography has transformed our ability to study cellular architecture. Here we present a comprehensive study comparing different ion sources and milling parameters for optimal sample preservation. Our systematic analysis reveals that gallium ion beams cause less structural damage than previously reported when appropriate milling strategies are employed. We introduce a step-wise milling protocol that minimizes heat-induced artifacts while maintaining structural integrity. These findings establish best practices for cryo-FIB sample preparation.",
    "topic": "cryo_fib",
    "doi": "10.6456/3te6e7kp",
    "keywords": [
      "in situ",
      "cryo-EM",
      "cellular",
      "tomography",
      "focused ion beam"
    ]
  },
  {
    "id": 12,
    "title": "Ion Beam-Induced Damage Mitigation in Cryo-FIB",
    "authors": [
      "Sophie Evans",
      "Yuki Anderson",
      "Christopher Wilson",
      "Daniel Davis",
      "Olga Rodriguez",
      "Sophie Smith"
    ],
    "journal": "Molecular Cell",
    "year": 2025,
    "abstract": "Automated cryo-FIB workflows are essential for scaling in situ structural biology. We engineered a robotic system that performs grid clipping, target selection, and lamella milling without human intervention. The system uses machine learning algorithms to identify optimal milling sites and predict lamella quality. Throughput is increased tenfold compared to manual operation while maintaining consistent quality. We demonstrate the system by preparing over two hundred lamellae from mammalian cells in a single session.",
    "topic": "cryo_fib",
    "doi": "10.6246/7npugej7",
    "keywords": [
      "ion beam",
      "in situ",
      "lamella",
      "FIB milling",
      "cellular"
    ]
  },
  {
    "id": 13,
    "title": "In Vitro Translation Systems for Incorporation of Unnatural Amino Acids",
    "authors": [
      "Juan Patel",
      "Chen Taylor",
      "Maria Kowalski",
      "Robert Rodriguez",
      "Rachel Liu"
    ],
    "journal": "Current Opinion in Structural Biology",
    "year": 2020,
    "abstract": "The choice of detergent significantly impacts membrane protein stability and functionality. We conducted a comprehensive survey of forty different detergents and amphipols for their effects on a model G protein-coupled receptor. Our analysis reveals that short-chain detergents provide better solubilization while long-chain variants preserve native conformation. We introduce a scoring system that predicts optimal detergent selection based on protein structural class. This framework streamlines the detergent screening process and reduces optimization time.",
    "topic": "protein_prep",
    "doi": "10.6055/scprhvbj",
    "keywords": [
      "SEC",
      "detergent",
      "protein purification",
      "stability",
      "cell-free synthesis"
    ]
  },
  {
    "id": 14,
    "title": "SEC-MALS for Accurate Molecular Weight Determination",
    "authors": [
      "Lisa Lee",
      "Robert Wang",
      "Anna Cohen",
      "Pierre Brown",
      "Daniel Davis",
      "Olga Lee",
      "Priya M\u00fcller"
    ],
    "journal": "Nature Structural & Molecular Biology",
    "year": 2025,
    "abstract": "Cell-free protein synthesis offers unique advantages for producing proteins that are toxic or difficult to express in living cells. This study establishes an optimized wheat germ-based expression system for eukaryotic protein production. We systematically evaluated translation efficiency using reporter constructs and identified critical parameters for maximizing protein yields. The platform was validated by producing a panel of kinases and transcription factors that were previously inaccessible through conventional expression systems. Our workflow provides a robust alternative for challenging protein targets.",
    "topic": "protein_prep",
    "doi": "10.4216/wudktsf8",
    "keywords": [
      "crystallization",
      "nanodisc",
      "protein purification"
    ]
  },
  {
    "id": 15,
    "title": "Advanced Cryo-FIB Workflows for High-Resolution Cryo-ET",
    "authors": [
      "Pierre Petrov",
      "Klaus Evans",
      "Kevin Yoshida",
      "Juan M\u00fcller",
      "David Kowalski"
    ],
    "journal": "Methods in Enzymology",
    "year": 2019,
    "abstract": "The integration of cryo-FIB with cryo-electron tomography has transformed our ability to study cellular architecture. Here we present a comprehensive study comparing different ion sources and milling parameters for optimal sample preservation. Our systematic analysis reveals that gallium ion beams cause less structural damage than previously reported when appropriate milling strategies are employed. We introduce a step-wise milling protocol that minimizes heat-induced artifacts while maintaining structural integrity. These findings establish best practices for cryo-FIB sample preparation.",
    "topic": "cryo_fib",
    "doi": "10.6816/fvuwx8m3",
    "keywords": [
      "cryo-FIB",
      "FIB milling",
      "in situ"
    ]
  },
  {
    "id": 16,
    "title": "Ferritinophagy: Iron Homeostasis Through Selective Autophagy",
    "authors": [
      "Pierre Lee",
      "Kevin Rossi",
      "Yuki Davis",
      "Sarah Schmidt",
      "Akira Evans",
      "Christopher Cohen",
      "Hans Smith"
    ],
    "journal": "Current Opinion in Structural Biology",
    "year": 2022,
    "abstract": "Selective autophagy maintains cellular homeostasis by targeting specific cargoes for lysosomal degradation. This study characterizes the role of autophagy receptors in recognizing ubiquitinated protein aggregates. We employed cryo-electron microscopy to determine the structure of the receptor-cargo complex at near-atomic resolution. Our structural analysis combined with functional assays demonstrates that receptor oligomerization is essential for cargo clustering and efficient degradation. These findings advance our understanding of how cells maintain protein quality control through selective autophagy pathways.",
    "topic": "autophagy",
    "doi": "10.5333/ddujvzgw",
    "keywords": [
      "Beclin1",
      "LC3",
      "selective autophagy",
      "autophagy"
    ]
  },
  {
    "id": 17,
    "title": "Cryo-ET of Peroxisomal Membrane Protein Import Machinery",
    "authors": [
      "Juan Wilson",
      "Olga Anderson",
      "Sarah Taylor",
      "Akira Rossi",
      "Christopher Lee",
      "Emma Silva"
    ],
    "journal": "Science",
    "year": 2020,
    "abstract": "Visualizing membrane protein complexes in their native environment is essential for understanding their biological function. We employed cryo-electron tomography to study the organization of ATP synthase dimers within mitochondrial cristae. Our subtomogram averaging analysis revealed how dimer rows shape membrane curvature and maintain cristae architecture. We observed disease-associated mutations that disrupt dimer organization and cristae morphology. These findings link molecular structure to organelle architecture and disease mechanism.",
    "topic": "cryo_et",
    "doi": "10.2609/9hk22kzv",
    "keywords": [
      "in situ",
      "native structure",
      "electron tomography"
    ]
  },
  {
    "id": 18,
    "title": "Thermostabilization of G Protein-Coupled Receptors",
    "authors": [
      "Jennifer Lee",
      "Sophie Liu",
      "Michael Zhang",
      "Daniel Silva",
      "Christopher M\u00fcller",
      "Yuki Novak",
      "Priya M\u00fcller"
    ],
    "journal": "Nature Methods",
    "year": 2019,
    "abstract": "Protein crystallization remains a major bottleneck in structural biology. We developed a microfluidic platform that enables nanoliter-scale crystallization screening using minimal protein material. The system integrates on-chip mixing, incubation, and optical detection for automated hit identification. We validated the platform by crystallizing fifteen proteins that had resisted crystallization using conventional methods. Our approach reduces protein consumption by two orders of magnitude while increasing crystallization success rates.",
    "topic": "protein_prep",
    "doi": "10.9307/nu8zb7uf",
    "keywords": [
      "SEC",
      "affinity chromatography",
      "crystallization",
      "protein purification",
      "expression"
    ]
  },
  {
    "id": 19,
    "title": "Cryo-ET of Bacterial Chemoreceptor Arrays",
    "authors": [
      "Chen Martinez",
      "Daniel Garcia",
      "Anna Rossi",
      "Lisa Brown",
      "Emma Yoshida",
      "Jennifer Brown",
      "Thomas Thompson"
    ],
    "journal": "Nature Structural & Molecular Biology",
    "year": 2025,
    "abstract": "The resolution revolution in cryo-EM has extended to electron tomography. We report methodological advances that push the resolution of subtomogram averaging beyond 3 angstroms for in situ protein structures. Key innovations include improved tilt-series acquisition schemes, advancedCTF correction algorithms, and novel classification methods. We applied these methods to determine the atomic structure of a metabolic enzyme complex within bacterial cells. This work establishes cryo-ET as a tool for atomic-resolution structural biology in the cellular context.",
    "topic": "cryo_et",
    "doi": "10.5668/3y5xkts2",
    "keywords": [
      "cryo-ET",
      "in situ",
      "native structure",
      "macromolecular complex"
    ]
  },
  {
    "id": 20,
    "title": "Cryo-ET of DNA Replication Factories in Human Cells",
    "authors": [
      "Klaus Kim",
      "Jennifer Petrov",
      "Priya Silva",
      "Klaus Taylor",
      "David Zhang",
      "Sophie Zhang"
    ],
    "journal": "PNAS",
    "year": 2019,
    "abstract": "In situ structural biology aims to determine protein structures within unperturbed cellular environments. Here we use cryo-electron tomography combined with subtomogram averaging to determine the structure of ribosomes actively engaged in translation on the endoplasmic reticulum membrane. Our analysis reveals the architecture of the translocon complex and its interaction with translating ribosomes. We observe distinct conformational states associated with different stages of protein translocation. These findings provide unprecedented insights into co-translational protein targeting and membrane insertion.",
    "topic": "cryo_et",
    "doi": "10.8096/4payfgfj",
    "keywords": [
      "cryo-ET",
      "in situ",
      "3D reconstruction"
    ]
  },
  {
    "id": 21,
    "title": "Helium Ion Microscopy as an Alternative to Gallium FIB",
    "authors": [
      "Andrew Wilson",
      "Michael Cohen",
      "Jennifer Schmidt",
      "Juan Wilson",
      "Olga Evans",
      "Jessica Schmidt",
      "Michael Wang"
    ],
    "journal": "Nature Reviews Molecular Cell Biology",
    "year": 2020,
    "abstract": "Site-specific targeting of cellular structures by cryo-FIB remains a major challenge. We developed a correlative microscopy approach combining fluorescence-guided targeting with cryo-FIB milling. The workflow enables precise lamella preparation at regions of interest identified by light microscopy. Using this method, we successfully targeted and visualized rare cellular events including virus assembly sites and autophagosome formation. Our approach bridges the resolution gap between light and electron microscopy for in situ structural studies.",
    "topic": "cryo_fib",
    "doi": "10.1256/8v2zpcfh",
    "keywords": [
      "tomography",
      "cryo-EM",
      "ion beam",
      "cellular"
    ]
  },
  {
    "id": 22,
    "title": "Cryo-ET of Lipid Droplet Biogenesis at the ER",
    "authors": [
      "Sophie Wilson",
      "James Silva",
      "Emma Patel",
      "Michael Kim",
      "Wei Dubois",
      "Hans Smith"
    ],
    "journal": "EMBO Journal",
    "year": 2019,
    "abstract": "Cryo-electron tomography provides three-dimensional views of cellular structures in their native state. We applied cryo-ET to determine the in situ architecture of the nuclear pore complex within intact nuclear envelopes. Through subtomogram averaging of thousands of individual complexes, we achieved sufficient resolution to trace the path of transport substrates through the central channel. Our results reveal conformational differences between nuclear pore complexes in different functional states. This work demonstrates the power of in situ structural biology for understanding macromolecular machines within their cellular context.",
    "topic": "cryo_et",
    "doi": "10.6632/4p2hbpt8",
    "keywords": [
      "native structure",
      "in situ",
      "organelle",
      "subtomogram averaging",
      "cryo-ET"
    ]
  },
  {
    "id": 23,
    "title": "Lipophagy: Lipid Droplet Degradation by Autophagy",
    "authors": [
      "Maria Wilson",
      "Michael Dubois",
      "Matthew Johnson",
      "Rachel Cohen",
      "Klaus Evans",
      "Hans Nakamura",
      "Chen Nakamura"
    ],
    "journal": "Nature Reviews Molecular Cell Biology",
    "year": 2022,
    "abstract": "Selective autophagy maintains cellular homeostasis by targeting specific cargoes for lysosomal degradation. This study characterizes the role of autophagy receptors in recognizing ubiquitinated protein aggregates. We employed cryo-electron microscopy to determine the structure of the receptor-cargo complex at near-atomic resolution. Our structural analysis combined with functional assays demonstrates that receptor oligomerization is essential for cargo clustering and efficient degradation. These findings advance our understanding of how cells maintain protein quality control through selective autophagy pathways.",
    "topic": "autophagy",
    "doi": "10.6967/q87wxd6s",
    "keywords": [
      "p62",
      "mitophagy",
      "PI3K",
      "selective autophagy",
      "autophagosome"
    ]
  },
  {
    "id": 24,
    "title": "Reticulophagy: Quality Control of the Endoplasmic Reticulum",
    "authors": [
      "Klaus Cohen",
      "Matthew Rossi",
      "Hans Novak",
      "Chen Rossi",
      "James Wilson"
    ],
    "journal": "Annual Review of Biophysics",
    "year": 2024,
    "abstract": "Selective autophagy maintains cellular homeostasis by targeting specific cargoes for lysosomal degradation. This study characterizes the role of autophagy receptors in recognizing ubiquitinated protein aggregates. We employed cryo-electron microscopy to determine the structure of the receptor-cargo complex at near-atomic resolution. Our structural analysis combined with functional assays demonstrates that receptor oligomerization is essential for cargo clustering and efficient degradation. These findings advance our understanding of how cells maintain protein quality control through selective autophagy pathways.",
    "topic": "autophagy",
    "doi": "10.2771/nbrg7m46",
    "keywords": [
      "autophagy",
      "ULK1",
      "ATG proteins"
    ]
  },
  {
    "id": 25,
    "title": "High-Pressure Techniques for Membrane Protein Crystallization",
    "authors": [
      "Matthew Rodriguez",
      "Sophie Chen",
      "Anna Thompson",
      "Lisa Taylor",
      "Priya Dubois",
      "Anna Nakamura"
    ],
    "journal": "eLife",
    "year": 2019,
    "abstract": "Cell-free protein synthesis offers unique advantages for producing proteins that are toxic or difficult to express in living cells. This study establishes an optimized wheat germ-based expression system for eukaryotic protein production. We systematically evaluated translation efficiency using reporter constructs and identified critical parameters for maximizing protein yields. The platform was validated by producing a panel of kinases and transcription factors that were previously inaccessible through conventional expression systems. Our workflow provides a robust alternative for challenging protein targets.",
    "topic": "protein_prep",
    "doi": "10.7532/enukrjhd",
    "keywords": [
      "stability",
      "cell-free synthesis",
      "expression",
      "affinity chromatography"
    ]
  },
  {
    "id": 26,
    "title": "Strategies for Minimizing Cryo-FIB Milling Artifacts",
    "authors": [
      "Andrew Taylor",
      "Robert Martinez",
      "Anna Lee",
      "Chen Dubois"
    ],
    "journal": "Frontiers in Molecular Biosciences",
    "year": 2023,
    "abstract": "Automated cryo-FIB workflows are essential for scaling in situ structural biology. We engineered a robotic system that performs grid clipping, target selection, and lamella milling without human intervention. The system uses machine learning algorithms to identify optimal milling sites and predict lamella quality. Throughput is increased tenfold compared to manual operation while maintaining consistent quality. We demonstrate the system by preparing over two hundred lamellae from mammalian cells in a single session.",
    "topic": "cryo_fib",
    "doi": "10.4971/mj3n7g9f",
    "keywords": [
      "cryo-FIB",
      "cellular",
      "sample preparation",
      "tomography",
      "lamella"
    ]
  },
  {
    "id": 27,
    "title": "Cryo-FIB Milling of Extracellular Matrix Components",
    "authors": [
      "Thomas Wang",
      "Andrew Lee",
      "Lisa Wang",
      "Anna Silva"
    ],
    "journal": "Frontiers in Molecular Biosciences",
    "year": 2023,
    "abstract": "Automated cryo-FIB workflows are essential for scaling in situ structural biology. We engineered a robotic system that performs grid clipping, target selection, and lamella milling without human intervention. The system uses machine learning algorithms to identify optimal milling sites and predict lamella quality. Throughput is increased tenfold compared to manual operation while maintaining consistent quality. We demonstrate the system by preparing over two hundred lamellae from mammalian cells in a single session.",
    "topic": "cryo_fib",
    "doi": "10.1878/58sgnuxp",
    "keywords": [
      "ion beam",
      "cellular",
      "tomography",
      "FIB milling"
    ]
  },
  {
    "id": 28,
    "title": "Surface Plasmon Resonance for Protein Interaction Kinetics",
    "authors": [
      "Laura M\u00fcller",
      "Daniel Brown",
      "Sarah Taylor",
      "Juan Smith"
    ],
    "journal": "Nature Methods",
    "year": 2023,
    "abstract": "Cell-free protein synthesis offers unique advantages for producing proteins that are toxic or difficult to express in living cells. This study establishes an optimized wheat germ-based expression system for eukaryotic protein production. We systematically evaluated translation efficiency using reporter constructs and identified critical parameters for maximizing protein yields. The platform was validated by producing a panel of kinases and transcription factors that were previously inaccessible through conventional expression systems. Our workflow provides a robust alternative for challenging protein targets.",
    "topic": "protein_prep",
    "doi": "10.3392/ej4yeyqa",
    "keywords": [
      "protein purification",
      "detergent",
      "expression"
    ]
  },
  {
    "id": 29,
    "title": "Cryo-ET Reveals the Native State of Cellular Proteasomes",
    "authors": [
      "Wei Garcia",
      "Matthew Dubois",
      "Laura M\u00fcller",
      "Yuki Evans",
      "Thomas Thompson",
      "Lisa Wilson",
      "Jennifer Lee"
    ],
    "journal": "Biophysics Journal",
    "year": 2021,
    "abstract": "Cryo-electron tomography provides three-dimensional views of cellular structures in their native state. We applied cryo-ET to determine the in situ architecture of the nuclear pore complex within intact nuclear envelopes. Through subtomogram averaging of thousands of individual complexes, we achieved sufficient resolution to trace the path of transport substrates through the central channel. Our results reveal conformational differences between nuclear pore complexes in different functional states. This work demonstrates the power of in situ structural biology for understanding macromolecular machines within their cellular context.",
    "topic": "cryo_et",
    "doi": "10.9377/79emv2xw",
    "keywords": [
      "macromolecular complex",
      "in situ",
      "cryo-ET",
      "electron tomography"
    ]
  },
  {
    "id": 30,
    "title": "Cell-Free Protein Synthesis for Structural Biology",
    "authors": [
      "Hans Anderson",
      "Thomas Petrov",
      "Yuki Anderson"
    ],
    "journal": "Nature Methods",
    "year": 2025,
    "abstract": "Membrane proteins represent a significant fraction of the proteome and are important therapeutic targets. However, their purification remains challenging due to hydrophobicity and instability outside lipid bilayers. Here we present a systematic approach for optimizing membrane protein purification using a panel of novel detergents and lipid mimics. Our method achieves significantly higher yields and improved stability compared to conventional approaches. We validate this platform by successfully purifying twenty previously recalcitrant membrane proteins for structural studies.",
    "topic": "protein_prep",
    "doi": "10.7523/j984cgw9",
    "keywords": [
      "nanodisc",
      "expression",
      "crystallization"
    ]
  },
  {
    "id": 31,
    "title": "Structural Basis of Vesicle Transport Visualized by Cryo-ET",
    "authors": [
      "David Silva",
      "Andrew Rossi",
      "Priya Patel",
      "Yuki Kowalski",
      "Hans Brown",
      "Robert Liu"
    ],
    "journal": "Autophagy",
    "year": 2021,
    "abstract": "Cryo-electron tomography provides three-dimensional views of cellular structures in their native state. We applied cryo-ET to determine the in situ architecture of the nuclear pore complex within intact nuclear envelopes. Through subtomogram averaging of thousands of individual complexes, we achieved sufficient resolution to trace the path of transport substrates through the central channel. Our results reveal conformational differences between nuclear pore complexes in different functional states. This work demonstrates the power of in situ structural biology for understanding macromolecular machines within their cellular context.",
    "topic": "cryo_et",
    "doi": "10.1547/kk8cfnzt",
    "keywords": [
      "3D reconstruction",
      "native structure",
      "organelle"
    ]
  },
  {
    "id": 32,
    "title": "Visualizing Ion Channels in Their Native Membrane by Cryo-ET",
    "authors": [
      "Klaus Lee",
      "Priya Evans",
      "Olga Anderson"
    ],
    "journal": "Protein Science",
    "year": 2023,
    "abstract": "Visualizing membrane protein complexes in their native environment is essential for understanding their biological function. We employed cryo-electron tomography to study the organization of ATP synthase dimers within mitochondrial cristae. Our subtomogram averaging analysis revealed how dimer rows shape membrane curvature and maintain cristae architecture. We observed disease-associated mutations that disrupt dimer organization and cristae morphology. These findings link molecular structure to organelle architecture and disease mechanism.",
    "topic": "cryo_et",
    "doi": "10.5327/nsvbjevy",
    "keywords": [
      "macromolecular complex",
      "3D reconstruction",
      "native structure"
    ]
  },
  {
    "id": 33,
    "title": "Optimization of Cryo-FIB Milling Parameters for Thin Lamellae",
    "authors": [
      "Kevin Rodriguez",
      "Maria Brown",
      "Emma Evans",
      "Christopher Brown",
      "Christopher Kowalski"
    ],
    "journal": "Scientific Reports",
    "year": 2021,
    "abstract": "Site-specific targeting of cellular structures by cryo-FIB remains a major challenge. We developed a correlative microscopy approach combining fluorescence-guided targeting with cryo-FIB milling. The workflow enables precise lamella preparation at regions of interest identified by light microscopy. Using this method, we successfully targeted and visualized rare cellular events including virus assembly sites and autophagosome formation. Our approach bridges the resolution gap between light and electron microscopy for in situ structural studies.",
    "topic": "cryo_fib",
    "doi": "10.4396/ysru7zju",
    "keywords": [
      "ion beam",
      "focused ion beam",
      "cryo-EM",
      "tomography",
      "FIB milling"
    ]
  },
  {
    "id": 34,
    "title": "In Situ Structure of the Exocyst Complex by Cryo-ET",
    "authors": [
      "Emma Yoshida",
      "Matthew Davis",
      "Sarah Novak",
      "Wei Kowalski"
    ],
    "journal": "Scientific Reports",
    "year": 2020,
    "abstract": "Cryo-electron tomography provides three-dimensional views of cellular structures in their native state. We applied cryo-ET to determine the in situ architecture of the nuclear pore complex within intact nuclear envelopes. Through subtomogram averaging of thousands of individual complexes, we achieved sufficient resolution to trace the path of transport substrates through the central channel. Our results reveal conformational differences between nuclear pore complexes in different functional states. This work demonstrates the power of in situ structural biology for understanding macromolecular machines within their cellular context.",
    "topic": "cryo_et",
    "doi": "10.8767/7xvah3k8",
    "keywords": [
      "cellular",
      "macromolecular complex",
      "in situ",
      "subtomogram averaging",
      "native structure"
    ]
  },
  {
    "id": 35,
    "title": "Cryo-FIB Milling of Cryo-EM Grids: Best Practices",
    "authors": [
      "Wei Johnson",
      "Matthew Kim",
      "Akira Yoshida"
    ],
    "journal": "Scientific Reports",
    "year": 2025,
    "abstract": "The integration of cryo-FIB with cryo-electron tomography has transformed our ability to study cellular architecture. Here we present a comprehensive study comparing different ion sources and milling parameters for optimal sample preservation. Our systematic analysis reveals that gallium ion beams cause less structural damage than previously reported when appropriate milling strategies are employed. We introduce a step-wise milling protocol that minimizes heat-induced artifacts while maintaining structural integrity. These findings establish best practices for cryo-FIB sample preparation.",
    "topic": "cryo_fib",
    "doi": "10.2113/yasnwxwr",
    "keywords": [
      "cryo-FIB",
      "focused ion beam",
      "ion beam",
      "tomography"
    ]
  },
  {
    "id": 36,
    "title": "Molecular Architecture of the Kinetochore by Cryo-ET",
    "authors": [
      "Laura Schmidt",
      "Anna Schmidt",
      "Lisa Nakamura",
      "Sarah Yoshida",
      "Andrew Lee",
      "Emma Cohen",
      "Matthew Martinez"
    ],
    "journal": "Methods in Enzymology",
    "year": 2019,
    "abstract": "Visualizing membrane protein complexes in their native environment is essential for understanding their biological function. We employed cryo-electron tomography to study the organization of ATP synthase dimers within mitochondrial cristae. Our subtomogram averaging analysis revealed how dimer rows shape membrane curvature and maintain cristae architecture. We observed disease-associated mutations that disrupt dimer organization and cristae morphology. These findings link molecular structure to organelle architecture and disease mechanism.",
    "topic": "cryo_et",
    "doi": "10.1578/v94mzywr",
    "keywords": [
      "3D reconstruction",
      "cellular",
      "macromolecular complex",
      "electron tomography",
      "native structure"
    ]
  },
  {
    "id": 37,
    "title": "Cryo-ET of Stress Granules and Phase-Separated Condensates",
    "authors": [
      "James Johnson",
      "Olga Rossi",
      "Wei Wilson",
      "Michael Rossi",
      "Andrew Davis",
      "Daniel Kowalski",
      "Jessica Brown"
    ],
    "journal": "Cell Research",
    "year": 2019,
    "abstract": "In situ structural biology aims to determine protein structures within unperturbed cellular environments. Here we use cryo-electron tomography combined with subtomogram averaging to determine the structure of ribosomes actively engaged in translation on the endoplasmic reticulum membrane. Our analysis reveals the architecture of the translocon complex and its interaction with translating ribosomes. We observe distinct conformational states associated with different stages of protein translocation. These findings provide unprecedented insights into co-translational protein targeting and membrane insertion.",
    "topic": "cryo_et",
    "doi": "10.2640/hht3z28u",
    "keywords": [
      "3D reconstruction",
      "subtomogram averaging",
      "electron tomography",
      "macromolecular complex"
    ]
  },
  {
    "id": 38,
    "title": "Yeast Two-Hybrid Systems for Protein-Protein Interaction Mapping",
    "authors": [
      "Daniel Lee",
      "Chen Taylor",
      "Wei Patel",
      "Kevin M\u00fcller"
    ],
    "journal": "Cell Research",
    "year": 2022,
    "abstract": "Membrane proteins represent a significant fraction of the proteome and are important therapeutic targets. However, their purification remains challenging due to hydrophobicity and instability outside lipid bilayers. Here we present a systematic approach for optimizing membrane protein purification using a panel of novel detergents and lipid mimics. Our method achieves significantly higher yields and improved stability compared to conventional approaches. We validate this platform by successfully purifying twenty previously recalcitrant membrane proteins for structural studies.",
    "topic": "protein_prep",
    "doi": "10.3549/ewxjxsqj",
    "keywords": [
      "membrane protein",
      "nanodisc",
      "stability",
      "protein purification",
      "crystallization"
    ]
  },
  {
    "id": 39,
    "title": "Site-Specific Cryo-FIB Milling of Mammalian Cells",
    "authors": [
      "Chen Anderson",
      "Wei Martinez",
      "Daniel Zhang",
      "Laura Zhang",
      "Jessica Evans"
    ],
    "journal": "Nature Communications",
    "year": 2022,
    "abstract": "The integration of cryo-FIB with cryo-electron tomography has transformed our ability to study cellular architecture. Here we present a comprehensive study comparing different ion sources and milling parameters for optimal sample preservation. Our systematic analysis reveals that gallium ion beams cause less structural damage than previously reported when appropriate milling strategies are employed. We introduce a step-wise milling protocol that minimizes heat-induced artifacts while maintaining structural integrity. These findings establish best practices for cryo-FIB sample preparation.",
    "topic": "cryo_fib",
    "doi": "10.6939/ucs2j9yd",
    "keywords": [
      "ion beam",
      "cryo-EM",
      "tomography"
    ]
  },
  {
    "id": 40,
    "title": "Cryo-ET of the Bacterial Flagellar Motor In Situ",
    "authors": [
      "Anna Cohen",
      "Chen Cohen",
      "Klaus M\u00fcller",
      "Jennifer Martinez",
      "Thomas Martinez"
    ],
    "journal": "Ultramicroscopy",
    "year": 2025,
    "abstract": "The resolution revolution in cryo-EM has extended to electron tomography. We report methodological advances that push the resolution of subtomogram averaging beyond 3 angstroms for in situ protein structures. Key innovations include improved tilt-series acquisition schemes, advancedCTF correction algorithms, and novel classification methods. We applied these methods to determine the atomic structure of a metabolic enzyme complex within bacterial cells. This work establishes cryo-ET as a tool for atomic-resolution structural biology in the cellular context.",
    "topic": "cryo_et",
    "doi": "10.6343/5t7ayv3d",
    "keywords": [
      "subtomogram averaging",
      "electron tomography",
      "cryo-ET"
    ]
  },
  {
    "id": 41,
    "title": "Cryo-FIB Milling of Plant Cells and Chloroplasts",
    "authors": [
      "Wei Wilson",
      "Anna Lee",
      "Jessica Nakamura",
      "Jessica Johnson",
      "Emma Yoshida",
      "Daniel Dubois"
    ],
    "journal": "Journal of Cell Biology",
    "year": 2022,
    "abstract": "The integration of cryo-FIB with cryo-electron tomography has transformed our ability to study cellular architecture. Here we present a comprehensive study comparing different ion sources and milling parameters for optimal sample preservation. Our systematic analysis reveals that gallium ion beams cause less structural damage than previously reported when appropriate milling strategies are employed. We introduce a step-wise milling protocol that minimizes heat-induced artifacts while maintaining structural integrity. These findings establish best practices for cryo-FIB sample preparation.",
    "topic": "cryo_fib",
    "doi": "10.2017/xrey762y",
    "keywords": [
      "in situ",
      "cryo-EM",
      "sample preparation",
      "FIB milling",
      "ion beam"
    ]
  },
  {
    "id": 42,
    "title": "Autophagy in Viral Infection and Antiviral Defense",
    "authors": [
      "Matthew Rodriguez",
      "Sarah Martinez",
      "Anna Schmidt",
      "Hans Rossi",
      "Laura Nakamura"
    ],
    "journal": "Journal of Cell Biology",
    "year": 2022,
    "abstract": "Selective autophagy maintains cellular homeostasis by targeting specific cargoes for lysosomal degradation. This study characterizes the role of autophagy receptors in recognizing ubiquitinated protein aggregates. We employed cryo-electron microscopy to determine the structure of the receptor-cargo complex at near-atomic resolution. Our structural analysis combined with functional assays demonstrates that receptor oligomerization is essential for cargo clustering and efficient degradation. These findings advance our understanding of how cells maintain protein quality control through selective autophagy pathways.",
    "topic": "autophagy",
    "doi": "10.8657/79t7vxcq",
    "keywords": [
      "autophagosome",
      "autophagy",
      "selective autophagy",
      "p62"
    ]
  },
  {
    "id": 43,
    "title": "Computational Image Processing for Cryo-ET Data",
    "authors": [
      "Wei Davis",
      "Priya Anderson",
      "Akira Zhang",
      "Rachel Rossi",
      "Robert M\u00fcller",
      "Christopher Dubois"
    ],
    "journal": "Journal of Molecular Biology",
    "year": 2025,
    "abstract": "The resolution revolution in cryo-EM has extended to electron tomography. We report methodological advances that push the resolution of subtomogram averaging beyond 3 angstroms for in situ protein structures. Key innovations include improved tilt-series acquisition schemes, advancedCTF correction algorithms, and novel classification methods. We applied these methods to determine the atomic structure of a metabolic enzyme complex within bacterial cells. This work establishes cryo-ET as a tool for atomic-resolution structural biology in the cellular context.",
    "topic": "cryo_et",
    "doi": "10.7609/e56af44h",
    "keywords": [
      "cryo-ET",
      "3D reconstruction",
      "native structure",
      "electron tomography"
    ]
  },
  {
    "id": 44,
    "title": "Cryo-FIB Milling of Synaptic Junctions in Brain Tissue",
    "authors": [
      "Akira Novak",
      "Klaus Rossi",
      "Matthew Schmidt"
    ],
    "journal": "Frontiers in Molecular Biosciences",
    "year": 2025,
    "abstract": "Automated cryo-FIB workflows are essential for scaling in situ structural biology. We engineered a robotic system that performs grid clipping, target selection, and lamella milling without human intervention. The system uses machine learning algorithms to identify optimal milling sites and predict lamella quality. Throughput is increased tenfold compared to manual operation while maintaining consistent quality. We demonstrate the system by preparing over two hundred lamellae from mammalian cells in a single session.",
    "topic": "cryo_fib",
    "doi": "10.3280/whxz3c9r",
    "keywords": [
      "tomography",
      "focused ion beam",
      "ion beam",
      "in situ"
    ]
  },
  {
    "id": 45,
    "title": "Autophagy in Liver Disease: From Steatosis to Cirrhosis",
    "authors": [
      "Yuki Wilson",
      "Kevin Rossi",
      "Juan Evans",
      "Wei Rodriguez",
      "Sophie Garcia",
      "Akira Nakamura",
      "Jessica Wilson"
    ],
    "journal": "Journal of Membrane Biology",
    "year": 2020,
    "abstract": "The autophagosome is a double-membrane vesicle that engulfs cytoplasmic material for delivery to the lysosome. In this work, we use correlative light and electron microscopy to visualize autophagosome biogenesis in real time. Our observations challenge the conventional model by revealing an alternative membrane source for autophagosome formation. Through genetic and pharmacological approaches, we demonstrate that this alternative pathway becomes dominant under specific cellular stress conditions. This study provides a revised framework for understanding the membrane dynamics of autophagy.",
    "topic": "autophagy",
    "doi": "10.5022/4c6hrvna",
    "keywords": [
      "autophagosome",
      "LC3",
      "ATG proteins",
      "mitophagy"
    ]
  },
  {
    "id": 46,
    "title": "Negative Stain Grid Preparation for Initial Screening",
    "authors": [
      "Thomas Lee",
      "Anna Smith",
      "Jennifer Taylor",
      "Hans Lee"
    ],
    "journal": "Current Opinion in Structural Biology",
    "year": 2023,
    "abstract": "Cell-free protein synthesis offers unique advantages for producing proteins that are toxic or difficult to express in living cells. This study establishes an optimized wheat germ-based expression system for eukaryotic protein production. We systematically evaluated translation efficiency using reporter constructs and identified critical parameters for maximizing protein yields. The platform was validated by producing a panel of kinases and transcription factors that were previously inaccessible through conventional expression systems. Our workflow provides a robust alternative for challenging protein targets.",
    "topic": "protein_prep",
    "doi": "10.8305/vqymb5m9",
    "keywords": [
      "protein purification",
      "membrane protein",
      "stability",
      "crystallization"
    ]
  },
  {
    "id": 47,
    "title": "Xenophagy: Autophagic Clearance of Intracellular Pathogens",
    "authors": [
      "Matthew Yoshida",
      "Akira Rodriguez",
      "Jennifer Rodriguez",
      "Daniel Garcia",
      "Anna Taylor",
      "Hans Smith",
      "Priya Wang"
    ],
    "journal": "eLife",
    "year": 2021,
    "abstract": "The autophagosome is a double-membrane vesicle that engulfs cytoplasmic material for delivery to the lysosome. In this work, we use correlative light and electron microscopy to visualize autophagosome biogenesis in real time. Our observations challenge the conventional model by revealing an alternative membrane source for autophagosome formation. Through genetic and pharmacological approaches, we demonstrate that this alternative pathway becomes dominant under specific cellular stress conditions. This study provides a revised framework for understanding the membrane dynamics of autophagy.",
    "topic": "autophagy",
    "doi": "10.7744/yj84urkm",
    "keywords": [
      "Beclin1",
      "autophagy",
      "PI3K",
      "LC3"
    ]
  },
  {
    "id": 48,
    "title": "Cryo-Electron Tomography of the Golgi Apparatus",
    "authors": [
      "Sarah Chen",
      "Andrew M\u00fcller",
      "Lisa Patel"
    ],
    "journal": "Frontiers in Molecular Biosciences",
    "year": 2019,
    "abstract": "In situ structural biology aims to determine protein structures within unperturbed cellular environments. Here we use cryo-electron tomography combined with subtomogram averaging to determine the structure of ribosomes actively engaged in translation on the endoplasmic reticulum membrane. Our analysis reveals the architecture of the translocon complex and its interaction with translating ribosomes. We observe distinct conformational states associated with different stages of protein translocation. These findings provide unprecedented insights into co-translational protein targeting and membrane insertion.",
    "topic": "cryo_et",
    "doi": "10.9510/yay49qec",
    "keywords": [
      "electron tomography",
      "organelle",
      "cryo-ET",
      "subtomogram averaging"
    ]
  },
  {
    "id": 49,
    "title": "Cryo-FIB Lift-Out Techniques for Site-Specific Sample Preparation",
    "authors": [
      "Klaus Rodriguez",
      "Robert Cohen",
      "Chen Novak",
      "Juan Lee",
      "Olga Zhang",
      "Sarah Lee"
    ],
    "journal": "Current Opinion in Structural Biology",
    "year": 2019,
    "abstract": "Lamella thickness is a critical parameter for high-resolution cryo-ET. We investigated the relationship between milling parameters, sample composition, and final lamella thickness. Our data reveal that milling rate and sample vitreous ice thickness are the primary determinants of lamella uniformity. We developed a predictive model that optimizes milling parameters for different sample types. Application of this model achieves target thickness within 10% across 95% of prepared lamellae.",
    "topic": "cryo_fib",
    "doi": "10.2758/7mrwt6es",
    "keywords": [
      "sample preparation",
      "FIB milling",
      "cryo-EM",
      "tomography"
    ]
  },
  {
    "id": 50,
    "title": "Cryo-ET Reveals Actin Filament Organization In Cells",
    "authors": [
      "Daniel Taylor",
      "Robert Yoshida",
      "Olga M\u00fcller",
      "Akira Dubois"
    ],
    "journal": "Cell",
    "year": 2024,
    "abstract": "The bacterial flagellar motor is a remarkable nanomachine that converts ion motive force into mechanical rotation. Using cryo-electron tomography of intact bacterial cells, we determined the in situ structure of the complete flagellar motor including stator complexes and the C-ring. Subtomogram averaging yielded a composite structure that reveals the organization of torque-generating units around the rotor. Our results support a model in which stator remodeling enables the motor to adapt to changing mechanical load. This study showcases the potential of cryo-ET for understanding dynamic molecular machines in action.",
    "topic": "cryo_et",
    "doi": "10.8317/agym3zbq",
    "keywords": [
      "subtomogram averaging",
      "macromolecular complex",
      "in situ",
      "native structure"
    ]
  },
  {
    "id": 51,
    "title": "Cryo-ET of Autophagosome Formation at the ER Membrane",
    "authors": [
      "James Zhang",
      "Andrew Anderson",
      "Laura Cohen"
    ],
    "journal": "Trends in Biochemical Sciences",
    "year": 2025,
    "abstract": "In situ structural biology aims to determine protein structures within unperturbed cellular environments. Here we use cryo-electron tomography combined with subtomogram averaging to determine the structure of ribosomes actively engaged in translation on the endoplasmic reticulum membrane. Our analysis reveals the architecture of the translocon complex and its interaction with translating ribosomes. We observe distinct conformational states associated with different stages of protein translocation. These findings provide unprecedented insights into co-translational protein targeting and membrane insertion.",
    "topic": "cryo_et",
    "doi": "10.3932/75u7zqkp",
    "keywords": [
      "3D reconstruction",
      "cellular",
      "macromolecular complex",
      "cryo-ET",
      "native structure"
    ]
  },
  {
    "id": 52,
    "title": "High-Density Transfection Methods for Protein Production",
    "authors": [
      "Sophie Cohen",
      "Jennifer Novak",
      "Anna Patel"
    ],
    "journal": "Journal of Molecular Biology",
    "year": 2019,
    "abstract": "The choice of detergent significantly impacts membrane protein stability and functionality. We conducted a comprehensive survey of forty different detergents and amphipols for their effects on a model G protein-coupled receptor. Our analysis reveals that short-chain detergents provide better solubilization while long-chain variants preserve native conformation. We introduce a scoring system that predicts optimal detergent selection based on protein structural class. This framework streamlines the detergent screening process and reduces optimization time.",
    "topic": "protein_prep",
    "doi": "10.7626/ypdam3w4",
    "keywords": [
      "membrane protein",
      "stability",
      "cell-free synthesis",
      "SEC"
    ]
  },
  {
    "id": 53,
    "title": "Lysosomal Positioning Regulates mTORC1 Activity and Autophagy",
    "authors": [
      "Juan Yoshida",
      "Pierre Evans",
      "James Schmidt",
      "Anna Silva",
      "Wei Kowalski"
    ],
    "journal": "Structure",
    "year": 2022,
    "abstract": "Autophagy is a fundamental cellular process responsible for the degradation and recycling of cytoplasmic components. Here we investigate the molecular mechanisms governing selective autophagy in mammalian cells under nutrient starvation conditions. Using a combination of live-cell imaging, CRISPR knockout screens, and biochemical assays, we identify novel regulators of autophagosome formation. Our findings reveal a previously unknown regulatory pathway that coordinates autophagy initiation with cellular energy status. These results provide new insights into the complex network controlling autophagy and have implications for understanding autophagy-related diseases.",
    "topic": "autophagy",
    "doi": "10.4752/43pc7uzg",
    "keywords": [
      "p62",
      "ULK1",
      "LC3",
      "autophagosome"
    ]
  },
  {
    "id": 54,
    "title": "Plasma-Focused Ion Beam Milling for Cryo-Electron Microscopy",
    "authors": [
      "David Schmidt",
      "Wei Kim",
      "Sarah Evans",
      "Juan Wang",
      "Matthew Yoshida",
      "Juan Petrov"
    ],
    "journal": "Cell Research",
    "year": 2022,
    "abstract": "Automated cryo-FIB workflows are essential for scaling in situ structural biology. We engineered a robotic system that performs grid clipping, target selection, and lamella milling without human intervention. The system uses machine learning algorithms to identify optimal milling sites and predict lamella quality. Throughput is increased tenfold compared to manual operation while maintaining consistent quality. We demonstrate the system by preparing over two hundred lamellae from mammalian cells in a single session.",
    "topic": "cryo_fib",
    "doi": "10.8822/x2jjb2xh",
    "keywords": [
      "cryo-FIB",
      "lamella",
      "ion beam",
      "cellular",
      "FIB milling"
    ]
  },
  {
    "id": 55,
    "title": "Baculovirus-Mediated Protein Expression in Insect Cells",
    "authors": [
      "James Yoshida",
      "Maria Thompson",
      "Emma Schmidt",
      "Wei Nakamura",
      "Wei Schmidt"
    ],
    "journal": "Methods in Enzymology",
    "year": 2023,
    "abstract": "Protein quality assessment is critical for successful structural biology projects. We developed a high-throughput thermal shift assay that enables rapid screening of buffer conditions and ligands for protein stabilization. The assay is compatible with multi-well plate formats and requires minimal protein quantities. We benchmarked the method against traditional techniques using a diverse set of protein targets. Our results demonstrate that this approach reliably identifies optimal conditions that improve both protein stability and crystallization success rates.",
    "topic": "protein_prep",
    "doi": "10.2591/7xkquzck",
    "keywords": [
      "stability",
      "crystallization",
      "expression",
      "membrane protein",
      "detergent"
    ]
  },
  {
    "id": 56,
    "title": "Autophagy-Dependent Cell Death: Molecular Mechanisms",
    "authors": [
      "Thomas Brown",
      "Jessica Brown",
      "Sarah M\u00fcller",
      "Pierre Yoshida",
      "Michael Brown",
      "Jennifer Petrov",
      "Michael Novak"
    ],
    "journal": "Nature",
    "year": 2021,
    "abstract": "The autophagosome is a double-membrane vesicle that engulfs cytoplasmic material for delivery to the lysosome. In this work, we use correlative light and electron microscopy to visualize autophagosome biogenesis in real time. Our observations challenge the conventional model by revealing an alternative membrane source for autophagosome formation. Through genetic and pharmacological approaches, we demonstrate that this alternative pathway becomes dominant under specific cellular stress conditions. This study provides a revised framework for understanding the membrane dynamics of autophagy.",
    "topic": "autophagy",
    "doi": "10.2160/sjstz6uh",
    "keywords": [
      "p62",
      "ATG proteins",
      "lysosome",
      "mTOR"
    ]
  },
  {
    "id": 57,
    "title": "Pexophagy: Selective Degradation of Peroxisomes by Autophagy",
    "authors": [
      "Lisa Schmidt",
      "Andrew Evans",
      "Robert Wilson",
      "Rachel Novak"
    ],
    "journal": "Autophagy",
    "year": 2025,
    "abstract": "Autophagy dysfunction has been implicated in numerous neurodegenerative disorders. Here we examined the role of mitophagy in Parkinson's disease using patient-derived induced pluripotent stem cells. Our results show that defective mitophagy leads to accumulation of dysfunctional mitochondria and increased oxidative stress. We identified a small molecule compound that restores mitophagy function in disease models. This compound shows promise as a potential therapeutic strategy for Parkinson's disease and related disorders.",
    "topic": "autophagy",
    "doi": "10.7932/872yzpxn",
    "keywords": [
      "LC3",
      "lysosome",
      "ATG proteins",
      "mTOR",
      "ULK1"
    ]
  },
  {
    "id": 58,
    "title": "ER-Phagy: Endoplasmic Reticulum Turnover by Autophagy",
    "authors": [
      "Akira Johnson",
      "Jennifer Cohen",
      "Wei Novak",
      "James Wang",
      "Matthew Rodriguez",
      "Andrew Chen",
      "Priya Martinez"
    ],
    "journal": "Biophysics Journal",
    "year": 2019,
    "abstract": "Autophagy is a fundamental cellular process responsible for the degradation and recycling of cytoplasmic components. Here we investigate the molecular mechanisms governing selective autophagy in mammalian cells under nutrient starvation conditions. Using a combination of live-cell imaging, CRISPR knockout screens, and biochemical assays, we identify novel regulators of autophagosome formation. Our findings reveal a previously unknown regulatory pathway that coordinates autophagy initiation with cellular energy status. These results provide new insights into the complex network controlling autophagy and have implications for understanding autophagy-related diseases.",
    "topic": "autophagy",
    "doi": "10.3697/n9j3rq89",
    "keywords": [
      "ULK1",
      "LC3",
      "autophagosome",
      "ATG proteins",
      "selective autophagy"
    ]
  },
  {
    "id": 59,
    "title": "MultiBac System for Multiprotein Complex Expression",
    "authors": [
      "Emma Nakamura",
      "Priya Schmidt",
      "Juan Thompson",
      "Priya Kim",
      "Anna M\u00fcller"
    ],
    "journal": "Structure",
    "year": 2024,
    "abstract": "Protein crystallization remains a major bottleneck in structural biology. We developed a microfluidic platform that enables nanoliter-scale crystallization screening using minimal protein material. The system integrates on-chip mixing, incubation, and optical detection for automated hit identification. We validated the platform by crystallizing fifteen proteins that had resisted crystallization using conventional methods. Our approach reduces protein consumption by two orders of magnitude while increasing crystallization success rates.",
    "topic": "protein_prep",
    "doi": "10.3317/7kxxdycu",
    "keywords": [
      "nanodisc",
      "crystallization",
      "membrane protein",
      "cell-free synthesis",
      "stability"
    ]
  },
  {
    "id": 60,
    "title": "In Situ Structures of AAA+ ATPases by Cryo-ET",
    "authors": [
      "Michael Schmidt",
      "Christopher Wilson",
      "Akira Wang",
      "Sarah Martinez",
      "Priya Liu",
      "Thomas Nakamura",
      "Thomas Brown"
    ],
    "journal": "Structure",
    "year": 2021,
    "abstract": "Cryo-electron tomography provides three-dimensional views of cellular structures in their native state. We applied cryo-ET to determine the in situ architecture of the nuclear pore complex within intact nuclear envelopes. Through subtomogram averaging of thousands of individual complexes, we achieved sufficient resolution to trace the path of transport substrates through the central channel. Our results reveal conformational differences between nuclear pore complexes in different functional states. This work demonstrates the power of in situ structural biology for understanding macromolecular machines within their cellular context.",
    "topic": "cryo_et",
    "doi": "10.8570/d3db3ggp",
    "keywords": [
      "electron tomography",
      "cellular",
      "macromolecular complex",
      "cryo-ET",
      "3D reconstruction"
    ]
  },
  {
    "id": 61,
    "title": "High-Throughput Protein Expression Screening in E. coli",
    "authors": [
      "Laura Taylor",
      "Yuki Dubois",
      "Olga Kowalski",
      "Andrew Novak",
      "Thomas Zhang",
      "Kevin M\u00fcller",
      "James Yoshida"
    ],
    "journal": "Trends in Biochemical Sciences",
    "year": 2021,
    "abstract": "Cell-free protein synthesis offers unique advantages for producing proteins that are toxic or difficult to express in living cells. This study establishes an optimized wheat germ-based expression system for eukaryotic protein production. We systematically evaluated translation efficiency using reporter constructs and identified critical parameters for maximizing protein yields. The platform was validated by producing a panel of kinases and transcription factors that were previously inaccessible through conventional expression systems. Our workflow provides a robust alternative for challenging protein targets.",
    "topic": "protein_prep",
    "doi": "10.4727/2qdw6qy7",
    "keywords": [
      "nanodisc",
      "protein purification",
      "detergent"
    ]
  },
  {
    "id": 62,
    "title": "Cryo-ET of Gap Junction Channels Between Cells",
    "authors": [
      "Rachel Martinez",
      "Yuki Cohen",
      "David Schmidt",
      "Sarah Brown",
      "Daniel Rodriguez",
      "Kevin Liu"
    ],
    "journal": "Nature Methods",
    "year": 2021,
    "abstract": "In situ structural biology aims to determine protein structures within unperturbed cellular environments. Here we use cryo-electron tomography combined with subtomogram averaging to determine the structure of ribosomes actively engaged in translation on the endoplasmic reticulum membrane. Our analysis reveals the architecture of the translocon complex and its interaction with translating ribosomes. We observe distinct conformational states associated with different stages of protein translocation. These findings provide unprecedented insights into co-translational protein targeting and membrane insertion.",
    "topic": "cryo_et",
    "doi": "10.8775/vmf62yjn",
    "keywords": [
      "in situ",
      "organelle",
      "3D reconstruction"
    ]
  },
  {
    "id": 63,
    "title": "Cryo-ET of COPII Vesicle Budding from the ER",
    "authors": [
      "Thomas Anderson",
      "Yuki Silva",
      "Pierre Petrov",
      "Sarah Taylor"
    ],
    "journal": "Nature",
    "year": 2022,
    "abstract": "Cryo-electron tomography provides three-dimensional views of cellular structures in their native state. We applied cryo-ET to determine the in situ architecture of the nuclear pore complex within intact nuclear envelopes. Through subtomogram averaging of thousands of individual complexes, we achieved sufficient resolution to trace the path of transport substrates through the central channel. Our results reveal conformational differences between nuclear pore complexes in different functional states. This work demonstrates the power of in situ structural biology for understanding macromolecular machines within their cellular context.",
    "topic": "cryo_et",
    "doi": "10.7164/5zdthsb9",
    "keywords": [
      "cellular",
      "electron tomography",
      "cryo-ET",
      "native structure",
      "organelle"
    ]
  },
  {
    "id": 64,
    "title": "High-Throughput Cryo-FIB for Drug Target Screening",
    "authors": [
      "Klaus Zhang",
      "Jessica Anderson",
      "Thomas Wilson",
      "Kevin Evans"
    ],
    "journal": "PNAS",
    "year": 2025,
    "abstract": "The integration of cryo-FIB with cryo-electron tomography has transformed our ability to study cellular architecture. Here we present a comprehensive study comparing different ion sources and milling parameters for optimal sample preservation. Our systematic analysis reveals that gallium ion beams cause less structural damage than previously reported when appropriate milling strategies are employed. We introduce a step-wise milling protocol that minimizes heat-induced artifacts while maintaining structural integrity. These findings establish best practices for cryo-FIB sample preparation.",
    "topic": "cryo_fib",
    "doi": "10.6302/9ku8s64e",
    "keywords": [
      "cryo-FIB",
      "in situ",
      "lamella",
      "cryo-EM"
    ]
  },
  {
    "id": 65,
    "title": "Lipidic Cubic Phase Crystallization of Membrane Proteins",
    "authors": [
      "Jennifer Silva",
      "Wei Evans",
      "Maria Patel",
      "Maria Silva"
    ],
    "journal": "Journal of Structural Biology",
    "year": 2025,
    "abstract": "Protein quality assessment is critical for successful structural biology projects. We developed a high-throughput thermal shift assay that enables rapid screening of buffer conditions and ligands for protein stabilization. The assay is compatible with multi-well plate formats and requires minimal protein quantities. We benchmarked the method against traditional techniques using a diverse set of protein targets. Our results demonstrate that this approach reliably identifies optimal conditions that improve both protein stability and crystallization success rates.",
    "topic": "protein_prep",
    "doi": "10.6383/33vj99t3",
    "keywords": [
      "protein purification",
      "crystallization",
      "cell-free synthesis"
    ]
  },
  {
    "id": 66,
    "title": "Fusion Tag Removal Strategies in Protein Purification",
    "authors": [
      "Hans Anderson",
      "Pierre M\u00fcller",
      "Thomas Evans",
      "Christopher Petrov",
      "Christopher Novak"
    ],
    "journal": "Methods in Enzymology",
    "year": 2019,
    "abstract": "Protein quality assessment is critical for successful structural biology projects. We developed a high-throughput thermal shift assay that enables rapid screening of buffer conditions and ligands for protein stabilization. The assay is compatible with multi-well plate formats and requires minimal protein quantities. We benchmarked the method against traditional techniques using a diverse set of protein targets. Our results demonstrate that this approach reliably identifies optimal conditions that improve both protein stability and crystallization success rates.",
    "topic": "protein_prep",
    "doi": "10.3852/3sdge3au",
    "keywords": [
      "SEC",
      "affinity chromatography",
      "crystallization",
      "detergent"
    ]
  },
  {
    "id": 67,
    "title": "Cryo-FIB Milling Strategies for Nuclear Pore Complex Visualization",
    "authors": [
      "James Garcia",
      "Christopher Wilson",
      "Michael Evans",
      "Jessica Petrov",
      "Chen Cohen",
      "Robert Yoshida",
      "Hans Garcia"
    ],
    "journal": "Scientific Reports",
    "year": 2020,
    "abstract": "Lamella thickness is a critical parameter for high-resolution cryo-ET. We investigated the relationship between milling parameters, sample composition, and final lamella thickness. Our data reveal that milling rate and sample vitreous ice thickness are the primary determinants of lamella uniformity. We developed a predictive model that optimizes milling parameters for different sample types. Application of this model achieves target thickness within 10% across 95% of prepared lamellae.",
    "topic": "cryo_fib",
    "doi": "10.9120/bmwntypk",
    "keywords": [
      "tomography",
      "cellular",
      "sample preparation"
    ]
  },
  {
    "id": 68,
    "title": "Transient Gene Expression in HEK293 Cells for Protein Production",
    "authors": [
      "Hans Schmidt",
      "Jennifer Davis",
      "Daniel M\u00fcller",
      "Rachel Evans"
    ],
    "journal": "Journal of Molecular Biology",
    "year": 2023,
    "abstract": "Protein crystallization remains a major bottleneck in structural biology. We developed a microfluidic platform that enables nanoliter-scale crystallization screening using minimal protein material. The system integrates on-chip mixing, incubation, and optical detection for automated hit identification. We validated the platform by crystallizing fifteen proteins that had resisted crystallization using conventional methods. Our approach reduces protein consumption by two orders of magnitude while increasing crystallization success rates.",
    "topic": "protein_prep",
    "doi": "10.9316/uprw9ha3",
    "keywords": [
      "expression",
      "membrane protein",
      "nanodisc",
      "affinity chromatography"
    ]
  },
  {
    "id": 69,
    "title": "Cryo-ET of the Bacterial Cell Division Machinery",
    "authors": [
      "Michael Johnson",
      "Lisa Patel",
      "Pierre Cohen",
      "Lisa Kowalski",
      "David Novak"
    ],
    "journal": "Trends in Biochemical Sciences",
    "year": 2025,
    "abstract": "The resolution revolution in cryo-EM has extended to electron tomography. We report methodological advances that push the resolution of subtomogram averaging beyond 3 angstroms for in situ protein structures. Key innovations include improved tilt-series acquisition schemes, advancedCTF correction algorithms, and novel classification methods. We applied these methods to determine the atomic structure of a metabolic enzyme complex within bacterial cells. This work establishes cryo-ET as a tool for atomic-resolution structural biology in the cellular context.",
    "topic": "cryo_et",
    "doi": "10.6978/8n8pdkee",
    "keywords": [
      "native structure",
      "3D reconstruction",
      "electron tomography",
      "organelle"
    ]
  },
  {
    "id": 70,
    "title": "Cryo-FIB Milling of Neuronal Tissue for In Situ Structural Biology",
    "authors": [
      "Pierre Smith",
      "Maria Johnson",
      "Sophie Taylor",
      "Matthew Kim",
      "Matthew Dubois",
      "Maria Garcia",
      "Rachel Kowalski"
    ],
    "journal": "Science",
    "year": 2020,
    "abstract": "Lamella thickness is a critical parameter for high-resolution cryo-ET. We investigated the relationship between milling parameters, sample composition, and final lamella thickness. Our data reveal that milling rate and sample vitreous ice thickness are the primary determinants of lamella uniformity. We developed a predictive model that optimizes milling parameters for different sample types. Application of this model achieves target thickness within 10% across 95% of prepared lamellae.",
    "topic": "cryo_fib",
    "doi": "10.8726/6zbegmxt",
    "keywords": [
      "lamella",
      "cellular",
      "cryo-EM",
      "in situ"
    ]
  },
  {
    "id": 71,
    "title": "Selective Autophagy Receptors: p62, NBR1, and Beyond",
    "authors": [
      "Thomas Liu",
      "Matthew Zhang",
      "Maria Silva",
      "Matthew Martinez",
      "Olga Kowalski"
    ],
    "journal": "Journal of Molecular Biology",
    "year": 2022,
    "abstract": "Autophagy dysfunction has been implicated in numerous neurodegenerative disorders. Here we examined the role of mitophagy in Parkinson's disease using patient-derived induced pluripotent stem cells. Our results show that defective mitophagy leads to accumulation of dysfunctional mitochondria and increased oxidative stress. We identified a small molecule compound that restores mitophagy function in disease models. This compound shows promise as a potential therapeutic strategy for Parkinson's disease and related disorders.",
    "topic": "autophagy",
    "doi": "10.1320/52nam258",
    "keywords": [
      "Beclin1",
      "PI3K",
      "mTOR",
      "ATG proteins"
    ]
  },
  {
    "id": 72,
    "title": "Nanodisc Technology for Membrane Protein Reconstitution",
    "authors": [
      "Yuki Garcia",
      "Pierre Wilson",
      "Sophie Novak",
      "Christopher Chen",
      "Laura Novak"
    ],
    "journal": "Journal of Structural Biology",
    "year": 2021,
    "abstract": "The choice of detergent significantly impacts membrane protein stability and functionality. We conducted a comprehensive survey of forty different detergents and amphipols for their effects on a model G protein-coupled receptor. Our analysis reveals that short-chain detergents provide better solubilization while long-chain variants preserve native conformation. We introduce a scoring system that predicts optimal detergent selection based on protein structural class. This framework streamlines the detergent screening process and reduces optimization time.",
    "topic": "protein_prep",
    "doi": "10.2747/huu9k9xj",
    "keywords": [
      "protein purification",
      "SEC",
      "detergent",
      "stability",
      "membrane protein"
    ]
  },
  {
    "id": 73,
    "title": "CRISPR-Based Tagging for Endogenous Protein Purification",
    "authors": [
      "David Smith",
      "James Petrov",
      "Thomas Kim",
      "Laura Liu",
      "Daniel Schmidt",
      "Chen Dubois"
    ],
    "journal": "Molecular Cell",
    "year": 2019,
    "abstract": "Protein crystallization remains a major bottleneck in structural biology. We developed a microfluidic platform that enables nanoliter-scale crystallization screening using minimal protein material. The system integrates on-chip mixing, incubation, and optical detection for automated hit identification. We validated the platform by crystallizing fifteen proteins that had resisted crystallization using conventional methods. Our approach reduces protein consumption by two orders of magnitude while increasing crystallization success rates.",
    "topic": "protein_prep",
    "doi": "10.7866/vz6x4w8j",
    "keywords": [
      "nanodisc",
      "expression",
      "SEC",
      "affinity chromatography",
      "membrane protein"
    ]
  },
  {
    "id": 74,
    "title": "Cryo-FIB Preparation of Lipid Droplets for Structural Analysis",
    "authors": [
      "Hans Martinez",
      "Jennifer Kowalski",
      "Kevin Lee",
      "Klaus Brown",
      "Pierre M\u00fcller",
      "Jennifer Wilson",
      "Lisa Martinez"
    ],
    "journal": "Scientific Reports",
    "year": 2020,
    "abstract": "The integration of cryo-FIB with cryo-electron tomography has transformed our ability to study cellular architecture. Here we present a comprehensive study comparing different ion sources and milling parameters for optimal sample preservation. Our systematic analysis reveals that gallium ion beams cause less structural damage than previously reported when appropriate milling strategies are employed. We introduce a step-wise milling protocol that minimizes heat-induced artifacts while maintaining structural integrity. These findings establish best practices for cryo-FIB sample preparation.",
    "topic": "cryo_fib",
    "doi": "10.7383/kdaknjef",
    "keywords": [
      "tomography",
      "focused ion beam",
      "ion beam",
      "cryo-FIB"
    ]
  },
  {
    "id": 75,
    "title": "Autophagy in Pancreatic Beta Cell Function and Diabetes",
    "authors": [
      "Hans Rossi",
      "Juan Chen",
      "Matthew Smith",
      "Thomas Brown",
      "Yuki Kim",
      "Juan Wilson",
      "Akira Kim"
    ],
    "journal": "Methods in Enzymology",
    "year": 2021,
    "abstract": "Autophagy is a fundamental cellular process responsible for the degradation and recycling of cytoplasmic components. Here we investigate the molecular mechanisms governing selective autophagy in mammalian cells under nutrient starvation conditions. Using a combination of live-cell imaging, CRISPR knockout screens, and biochemical assays, we identify novel regulators of autophagosome formation. Our findings reveal a previously unknown regulatory pathway that coordinates autophagy initiation with cellular energy status. These results provide new insights into the complex network controlling autophagy and have implications for understanding autophagy-related diseases.",
    "topic": "autophagy",
    "doi": "10.1977/fk2ujdyy",
    "keywords": [
      "Beclin1",
      "PI3K",
      "LC3",
      "mTOR"
    ]
  },
  {
    "id": 76,
    "title": "Crosslinking Mass Spectrometry for Protein Complex Topology",
    "authors": [
      "Andrew Davis",
      "Hans Lee",
      "Michael Brown",
      "Laura Thompson",
      "Michael Johnson",
      "Maria Lee",
      "Maria Kowalski"
    ],
    "journal": "Scientific Reports",
    "year": 2024,
    "abstract": "Protein quality assessment is critical for successful structural biology projects. We developed a high-throughput thermal shift assay that enables rapid screening of buffer conditions and ligands for protein stabilization. The assay is compatible with multi-well plate formats and requires minimal protein quantities. We benchmarked the method against traditional techniques using a diverse set of protein targets. Our results demonstrate that this approach reliably identifies optimal conditions that improve both protein stability and crystallization success rates.",
    "topic": "protein_prep",
    "doi": "10.5186/jdsqethu",
    "keywords": [
      "nanodisc",
      "membrane protein",
      "stability",
      "SEC",
      "cell-free synthesis"
    ]
  },
  {
    "id": 77,
    "title": "Protein Quality Assessment by Thermal Shift Assay",
    "authors": [
      "Juan Wilson",
      "Akira Wang",
      "Emma Cohen",
      "Akira Rodriguez",
      "Klaus Lee",
      "Chen Novak",
      "Anna Rossi"
    ],
    "journal": "Traffic",
    "year": 2021,
    "abstract": "Membrane proteins represent a significant fraction of the proteome and are important therapeutic targets. However, their purification remains challenging due to hydrophobicity and instability outside lipid bilayers. Here we present a systematic approach for optimizing membrane protein purification using a panel of novel detergents and lipid mimics. Our method achieves significantly higher yields and improved stability compared to conventional approaches. We validate this platform by successfully purifying twenty previously recalcitrant membrane proteins for structural studies.",
    "topic": "protein_prep",
    "doi": "10.8673/8e85z983",
    "keywords": [
      "membrane protein",
      "stability",
      "protein purification",
      "crystallization"
    ]
  },
  {
    "id": 78,
    "title": "Cryo-FIB Milling of Actin Cytoskeleton Networks",
    "authors": [
      "Matthew Smith",
      "Chen Silva",
      "Yuki Kowalski",
      "James Lee"
    ],
    "journal": "Autophagy",
    "year": 2022,
    "abstract": "Cryo-focused ion beam milling enables the preparation of thin cellular lamellae for in situ structural biology. We report an optimized cryo-FIB workflow that achieves consistent lamella thickness below 150 nanometers across diverse cell types. Key innovations include a novel grid coating strategy and real-time thickness monitoring using secondary electron imaging. We demonstrate the utility of this approach by visualizing previously inaccessible intracellular complexes at sub-nanometer resolution. This methodology represents a significant advance in sample preparation for cellular cryo-electron tomography.",
    "topic": "cryo_fib",
    "doi": "10.8368/j5c5d4gz",
    "keywords": [
      "cryo-EM",
      "ion beam",
      "lamella",
      "in situ",
      "FIB milling"
    ]
  },
  {
    "id": 79,
    "title": "Autophagy in Aging and Longevity Regulation",
    "authors": [
      "Robert Rossi",
      "Pierre Davis",
      "Sophie Zhang",
      "Thomas Brown"
    ],
    "journal": "Journal of Molecular Biology",
    "year": 2025,
    "abstract": "Autophagy is a fundamental cellular process responsible for the degradation and recycling of cytoplasmic components. Here we investigate the molecular mechanisms governing selective autophagy in mammalian cells under nutrient starvation conditions. Using a combination of live-cell imaging, CRISPR knockout screens, and biochemical assays, we identify novel regulators of autophagosome formation. Our findings reveal a previously unknown regulatory pathway that coordinates autophagy initiation with cellular energy status. These results provide new insights into the complex network controlling autophagy and have implications for understanding autophagy-related diseases.",
    "topic": "autophagy",
    "doi": "10.8478/ertuk2q4",
    "keywords": [
      "p62",
      "Beclin1",
      "LC3",
      "autophagosome",
      "mTOR"
    ]
  },
  {
    "id": 80,
    "title": "Autophagy in Cardiovascular Disease and Heart Failure",
    "authors": [
      "Priya M\u00fcller",
      "Wei Wilson",
      "Daniel Yoshida",
      "Rachel Martinez",
      "Hans Silva"
    ],
    "journal": "Cell Research",
    "year": 2022,
    "abstract": "Autophagy dysfunction has been implicated in numerous neurodegenerative disorders. Here we examined the role of mitophagy in Parkinson's disease using patient-derived induced pluripotent stem cells. Our results show that defective mitophagy leads to accumulation of dysfunctional mitochondria and increased oxidative stress. We identified a small molecule compound that restores mitophagy function in disease models. This compound shows promise as a potential therapeutic strategy for Parkinson's disease and related disorders.",
    "topic": "autophagy",
    "doi": "10.6425/8d9f8jdq",
    "keywords": [
      "mitophagy",
      "p62",
      "mTOR",
      "Beclin1",
      "lysosome"
    ]
  },
  {
    "id": 81,
    "title": "Integration of Cryo-FIB with In-Cell Cryo-EM Pipelines",
    "authors": [
      "Laura Patel",
      "David Anderson",
      "Daniel Novak",
      "Sophie Thompson",
      "Robert Silva",
      "Hans Dubois",
      "Klaus Lee"
    ],
    "journal": "Structure",
    "year": 2023,
    "abstract": "Lamella thickness is a critical parameter for high-resolution cryo-ET. We investigated the relationship between milling parameters, sample composition, and final lamella thickness. Our data reveal that milling rate and sample vitreous ice thickness are the primary determinants of lamella uniformity. We developed a predictive model that optimizes milling parameters for different sample types. Application of this model achieves target thickness within 10% across 95% of prepared lamellae.",
    "topic": "cryo_fib",
    "doi": "10.2388/xkhdnepv",
    "keywords": [
      "ion beam",
      "focused ion beam",
      "lamella",
      "sample preparation",
      "cryo-EM"
    ]
  },
  {
    "id": 82,
    "title": "Subtomogram Averaging of Ribosomes In Situ by Cryo-ET",
    "authors": [
      "Chen Liu",
      "Yuki Schmidt",
      "Pierre Anderson"
    ],
    "journal": "Nature",
    "year": 2023,
    "abstract": "Cryo-electron tomography provides three-dimensional views of cellular structures in their native state. We applied cryo-ET to determine the in situ architecture of the nuclear pore complex within intact nuclear envelopes. Through subtomogram averaging of thousands of individual complexes, we achieved sufficient resolution to trace the path of transport substrates through the central channel. Our results reveal conformational differences between nuclear pore complexes in different functional states. This work demonstrates the power of in situ structural biology for understanding macromolecular machines within their cellular context.",
    "topic": "cryo_et",
    "doi": "10.9756/p94smjte",
    "keywords": [
      "3D reconstruction",
      "cryo-ET",
      "native structure",
      "macromolecular complex"
    ]
  },
  {
    "id": 83,
    "title": "Dual-Beam Cryo-FIB Systems for Biological Specimens",
    "authors": [
      "Chen Thompson",
      "Daniel Garcia",
      "Pierre Evans",
      "Juan Rodriguez",
      "Wei Evans",
      "Klaus Schmidt"
    ],
    "journal": "Nature Communications",
    "year": 2022,
    "abstract": "The integration of cryo-FIB with cryo-electron tomography has transformed our ability to study cellular architecture. Here we present a comprehensive study comparing different ion sources and milling parameters for optimal sample preservation. Our systematic analysis reveals that gallium ion beams cause less structural damage than previously reported when appropriate milling strategies are employed. We introduce a step-wise milling protocol that minimizes heat-induced artifacts while maintaining structural integrity. These findings establish best practices for cryo-FIB sample preparation.",
    "topic": "cryo_fib",
    "doi": "10.5054/yv3ttn7d",
    "keywords": [
      "tomography",
      "sample preparation",
      "lamella",
      "FIB milling",
      "cellular"
    ]
  },
  {
    "id": 84,
    "title": "Cryo-FIB Milling Parameters for Different Cell Types",
    "authors": [
      "Thomas Patel",
      "Pierre Patel",
      "James Liu",
      "Daniel Martinez",
      "Sophie Kowalski",
      "Hans Patel",
      "Pierre Davis"
    ],
    "journal": "Traffic",
    "year": 2020,
    "abstract": "The integration of cryo-FIB with cryo-electron tomography has transformed our ability to study cellular architecture. Here we present a comprehensive study comparing different ion sources and milling parameters for optimal sample preservation. Our systematic analysis reveals that gallium ion beams cause less structural damage than previously reported when appropriate milling strategies are employed. We introduce a step-wise milling protocol that minimizes heat-induced artifacts while maintaining structural integrity. These findings establish best practices for cryo-FIB sample preparation.",
    "topic": "cryo_fib",
    "doi": "10.6651/9rk7c4zm",
    "keywords": [
      "cellular",
      "sample preparation",
      "focused ion beam",
      "lamella"
    ]
  },
  {
    "id": 85,
    "title": "Glycerol and Osmolyte Effects on Protein Conformational Stability",
    "authors": [
      "Wei Silva",
      "Kevin Thompson",
      "Hans Yoshida",
      "Thomas Johnson",
      "Kevin Cohen",
      "Hans Silva",
      "Pierre Wilson"
    ],
    "journal": "Trends in Biochemical Sciences",
    "year": 2022,
    "abstract": "Membrane proteins represent a significant fraction of the proteome and are important therapeutic targets. However, their purification remains challenging due to hydrophobicity and instability outside lipid bilayers. Here we present a systematic approach for optimizing membrane protein purification using a panel of novel detergents and lipid mimics. Our method achieves significantly higher yields and improved stability compared to conventional approaches. We validate this platform by successfully purifying twenty previously recalcitrant membrane proteins for structural studies.",
    "topic": "protein_prep",
    "doi": "10.3955/j27mfexc",
    "keywords": [
      "protein purification",
      "membrane protein",
      "expression",
      "SEC",
      "stability"
    ]
  },
  {
    "id": 86,
    "title": "Optimization of Membrane Protein Purification for Structural Studies",
    "authors": [
      "Laura Schmidt",
      "Klaus Silva",
      "Yuki Kim",
      "Andrew Zhang",
      "Lisa Davis",
      "Jessica Taylor"
    ],
    "journal": "Journal of Biological Chemistry",
    "year": 2024,
    "abstract": "Membrane proteins represent a significant fraction of the proteome and are important therapeutic targets. However, their purification remains challenging due to hydrophobicity and instability outside lipid bilayers. Here we present a systematic approach for optimizing membrane protein purification using a panel of novel detergents and lipid mimics. Our method achieves significantly higher yields and improved stability compared to conventional approaches. We validate this platform by successfully purifying twenty previously recalcitrant membrane proteins for structural studies.",
    "topic": "protein_prep",
    "doi": "10.8213/d7ae59c3",
    "keywords": [
      "nanodisc",
      "stability",
      "membrane protein",
      "affinity chromatography"
    ]
  },
  {
    "id": 87,
    "title": "Buffer Optimization for Long-Term Protein Storage",
    "authors": [
      "Daniel Schmidt",
      "Chen Schmidt",
      "Emma Patel",
      "Laura Silva",
      "Yuki Anderson",
      "David Schmidt"
    ],
    "journal": "Nature Structural & Molecular Biology",
    "year": 2023,
    "abstract": "Protein quality assessment is critical for successful structural biology projects. We developed a high-throughput thermal shift assay that enables rapid screening of buffer conditions and ligands for protein stabilization. The assay is compatible with multi-well plate formats and requires minimal protein quantities. We benchmarked the method against traditional techniques using a diverse set of protein targets. Our results demonstrate that this approach reliably identifies optimal conditions that improve both protein stability and crystallization success rates.",
    "topic": "protein_prep",
    "doi": "10.8724/a6u7gb47",
    "keywords": [
      "stability",
      "membrane protein",
      "crystallization",
      "protein purification"
    ]
  },
  {
    "id": 88,
    "title": "Advances in Cryo-FIB Technology for Cellular Cryo-ET",
    "authors": [
      "Sophie Thompson",
      "Hans Dubois",
      "Priya Zhang"
    ],
    "journal": "Ultramicroscopy",
    "year": 2019,
    "abstract": "The integration of cryo-FIB with cryo-electron tomography has transformed our ability to study cellular architecture. Here we present a comprehensive study comparing different ion sources and milling parameters for optimal sample preservation. Our systematic analysis reveals that gallium ion beams cause less structural damage than previously reported when appropriate milling strategies are employed. We introduce a step-wise milling protocol that minimizes heat-induced artifacts while maintaining structural integrity. These findings establish best practices for cryo-FIB sample preparation.",
    "topic": "cryo_fib",
    "doi": "10.1724/phg5bsj4",
    "keywords": [
      "focused ion beam",
      "cryo-EM",
      "tomography",
      "FIB milling",
      "lamella"
    ]
  },
  {
    "id": 89,
    "title": "Molecular Architecture of the Centriole by Cryo-ET",
    "authors": [
      "Yuki Thompson",
      "Jennifer Davis",
      "Olga Johnson",
      "Daniel Cohen",
      "Anna Kim",
      "Laura Novak"
    ],
    "journal": "Journal of Cell Biology",
    "year": 2019,
    "abstract": "The resolution revolution in cryo-EM has extended to electron tomography. We report methodological advances that push the resolution of subtomogram averaging beyond 3 angstroms for in situ protein structures. Key innovations include improved tilt-series acquisition schemes, advancedCTF correction algorithms, and novel classification methods. We applied these methods to determine the atomic structure of a metabolic enzyme complex within bacterial cells. This work establishes cryo-ET as a tool for atomic-resolution structural biology in the cellular context.",
    "topic": "cryo_et",
    "doi": "10.7895/ny282acj",
    "keywords": [
      "cryo-ET",
      "macromolecular complex",
      "cellular"
    ]
  },
  {
    "id": 90,
    "title": "The TFEB-TFE3 Axis in Lysosomal Biogenesis and Autophagy",
    "authors": [
      "Akira Yoshida",
      "Emma Kowalski",
      "Wei Davis",
      "Andrew Yoshida"
    ],
    "journal": "EMBO Journal",
    "year": 2022,
    "abstract": "Selective autophagy maintains cellular homeostasis by targeting specific cargoes for lysosomal degradation. This study characterizes the role of autophagy receptors in recognizing ubiquitinated protein aggregates. We employed cryo-electron microscopy to determine the structure of the receptor-cargo complex at near-atomic resolution. Our structural analysis combined with functional assays demonstrates that receptor oligomerization is essential for cargo clustering and efficient degradation. These findings advance our understanding of how cells maintain protein quality control through selective autophagy pathways.",
    "topic": "autophagy",
    "doi": "10.5499/qzhm6cen",
    "keywords": [
      "PI3K",
      "ATG proteins",
      "lysosome"
    ]
  },
  {
    "id": 91,
    "title": "In Situ Structure of the Mitochondrial Respiratory Chain",
    "authors": [
      "Emma Dubois",
      "Jessica Yoshida",
      "Jennifer Rodriguez"
    ],
    "journal": "Traffic",
    "year": 2021,
    "abstract": "Visualizing membrane protein complexes in their native environment is essential for understanding their biological function. We employed cryo-electron tomography to study the organization of ATP synthase dimers within mitochondrial cristae. Our subtomogram averaging analysis revealed how dimer rows shape membrane curvature and maintain cristae architecture. We observed disease-associated mutations that disrupt dimer organization and cristae morphology. These findings link molecular structure to organelle architecture and disease mechanism.",
    "topic": "cryo_et",
    "doi": "10.9368/nsunhduz",
    "keywords": [
      "organelle",
      "cryo-ET",
      "native structure"
    ]
  },
  {
    "id": 92,
    "title": "The LC3 Conjugation System in Autophagosome Formation",
    "authors": [
      "Daniel Kowalski",
      "Robert Evans",
      "Wei Cohen",
      "Rachel Cohen"
    ],
    "journal": "PNAS",
    "year": 2023,
    "abstract": "Autophagy is a fundamental cellular process responsible for the degradation and recycling of cytoplasmic components. Here we investigate the molecular mechanisms governing selective autophagy in mammalian cells under nutrient starvation conditions. Using a combination of live-cell imaging, CRISPR knockout screens, and biochemical assays, we identify novel regulators of autophagosome formation. Our findings reveal a previously unknown regulatory pathway that coordinates autophagy initiation with cellular energy status. These results provide new insights into the complex network controlling autophagy and have implications for understanding autophagy-related diseases.",
    "topic": "autophagy",
    "doi": "10.6310/sdn94hhu",
    "keywords": [
      "lysosome",
      "LC3",
      "PI3K"
    ]
  },
  {
    "id": 93,
    "title": "Automated Protein Purification Platforms for Structural Genomics",
    "authors": [
      "Robert Kowalski",
      "Yuki Rodriguez",
      "Sophie Kowalski"
    ],
    "journal": "Biophysics Journal",
    "year": 2025,
    "abstract": "Protein crystallization remains a major bottleneck in structural biology. We developed a microfluidic platform that enables nanoliter-scale crystallization screening using minimal protein material. The system integrates on-chip mixing, incubation, and optical detection for automated hit identification. We validated the platform by crystallizing fifteen proteins that had resisted crystallization using conventional methods. Our approach reduces protein consumption by two orders of magnitude while increasing crystallization success rates.",
    "topic": "protein_prep",
    "doi": "10.8354/y6w9m9kq",
    "keywords": [
      "SEC",
      "detergent",
      "affinity chromatography",
      "cell-free synthesis"
    ]
  },
  {
    "id": 94,
    "title": "Aggrephagy: Clearance of Protein Aggregates by Autophagy",
    "authors": [
      "Matthew Lee",
      "Jessica Thompson",
      "Michael Thompson",
      "Chen Smith",
      "Wei Chen",
      "Yuki Chen",
      "Emma Schmidt"
    ],
    "journal": "Molecular Cell",
    "year": 2022,
    "abstract": "Autophagy is a fundamental cellular process responsible for the degradation and recycling of cytoplasmic components. Here we investigate the molecular mechanisms governing selective autophagy in mammalian cells under nutrient starvation conditions. Using a combination of live-cell imaging, CRISPR knockout screens, and biochemical assays, we identify novel regulators of autophagosome formation. Our findings reveal a previously unknown regulatory pathway that coordinates autophagy initiation with cellular energy status. These results provide new insights into the complex network controlling autophagy and have implications for understanding autophagy-related diseases.",
    "topic": "autophagy",
    "doi": "10.3573/huepyrbj",
    "keywords": [
      "PI3K",
      "LC3",
      "lysosome",
      "ATG proteins"
    ]
  },
  {
    "id": 95,
    "title": "Autophagy in Kidney Disease and Renal Fibrosis",
    "authors": [
      "Rachel Anderson",
      "Kevin Kowalski",
      "Andrew Yoshida",
      "Sophie Kowalski"
    ],
    "journal": "Science",
    "year": 2022,
    "abstract": "Autophagy is a fundamental cellular process responsible for the degradation and recycling of cytoplasmic components. Here we investigate the molecular mechanisms governing selective autophagy in mammalian cells under nutrient starvation conditions. Using a combination of live-cell imaging, CRISPR knockout screens, and biochemical assays, we identify novel regulators of autophagosome formation. Our findings reveal a previously unknown regulatory pathway that coordinates autophagy initiation with cellular energy status. These results provide new insights into the complex network controlling autophagy and have implications for understanding autophagy-related diseases.",
    "topic": "autophagy",
    "doi": "10.4335/jej6saw3",
    "keywords": [
      "autophagosome",
      "selective autophagy",
      "Beclin1",
      "autophagy",
      "p62"
    ]
  },
  {
    "id": 96,
    "title": "Single-Molecule FRET for Protein Conformational Dynamics",
    "authors": [
      "Rachel M\u00fcller",
      "Laura Novak",
      "Christopher Nakamura",
      "Anna Brown",
      "Anna Kowalski",
      "Robert M\u00fcller"
    ],
    "journal": "Journal of Structural Biology",
    "year": 2022,
    "abstract": "Protein crystallization remains a major bottleneck in structural biology. We developed a microfluidic platform that enables nanoliter-scale crystallization screening using minimal protein material. The system integrates on-chip mixing, incubation, and optical detection for automated hit identification. We validated the platform by crystallizing fifteen proteins that had resisted crystallization using conventional methods. Our approach reduces protein consumption by two orders of magnitude while increasing crystallization success rates.",
    "topic": "protein_prep",
    "doi": "10.2868/tg3m8xed",
    "keywords": [
      "expression",
      "crystallization",
      "affinity chromatography",
      "stability"
    ]
  },
  {
    "id": 97,
    "title": "Membrane Curvature Sensing Proteins Visualized by Cryo-ET",
    "authors": [
      "Olga Evans",
      "Andrew Zhang",
      "Jennifer Wilson",
      "Laura Kim",
      "Matthew Chen",
      "Yuki Petrov"
    ],
    "journal": "Journal of Biological Chemistry",
    "year": 2021,
    "abstract": "The resolution revolution in cryo-EM has extended to electron tomography. We report methodological advances that push the resolution of subtomogram averaging beyond 3 angstroms for in situ protein structures. Key innovations include improved tilt-series acquisition schemes, advancedCTF correction algorithms, and novel classification methods. We applied these methods to determine the atomic structure of a metabolic enzyme complex within bacterial cells. This work establishes cryo-ET as a tool for atomic-resolution structural biology in the cellular context.",
    "topic": "cryo_et",
    "doi": "10.5082/w3393nts",
    "keywords": [
      "organelle",
      "3D reconstruction",
      "in situ",
      "subtomogram averaging",
      "electron tomography"
    ]
  },
  {
    "id": 98,
    "title": "Automated Cryo-FIB Lamella Preparation at High Throughput",
    "authors": [
      "Daniel Taylor",
      "Hans Smith",
      "Matthew Patel"
    ],
    "journal": "Journal of Biological Chemistry",
    "year": 2021,
    "abstract": "Site-specific targeting of cellular structures by cryo-FIB remains a major challenge. We developed a correlative microscopy approach combining fluorescence-guided targeting with cryo-FIB milling. The workflow enables precise lamella preparation at regions of interest identified by light microscopy. Using this method, we successfully targeted and visualized rare cellular events including virus assembly sites and autophagosome formation. Our approach bridges the resolution gap between light and electron microscopy for in situ structural studies.",
    "topic": "cryo_fib",
    "doi": "10.1436/vjx9uhbr",
    "keywords": [
      "focused ion beam",
      "ion beam",
      "lamella",
      "tomography",
      "cryo-EM"
    ]
  },
  {
    "id": 99,
    "title": "The Role of AMPK in Energy Stress-Induced Autophagy",
    "authors": [
      "Priya Rodriguez",
      "David Silva",
      "Jennifer Martinez",
      "Andrew M\u00fcller",
      "Jessica Yoshida"
    ],
    "journal": "Science",
    "year": 2020,
    "abstract": "Autophagy is a fundamental cellular process responsible for the degradation and recycling of cytoplasmic components. Here we investigate the molecular mechanisms governing selective autophagy in mammalian cells under nutrient starvation conditions. Using a combination of live-cell imaging, CRISPR knockout screens, and biochemical assays, we identify novel regulators of autophagosome formation. Our findings reveal a previously unknown regulatory pathway that coordinates autophagy initiation with cellular energy status. These results provide new insights into the complex network controlling autophagy and have implications for understanding autophagy-related diseases.",
    "topic": "autophagy",
    "doi": "10.3485/euk9d2v3",
    "keywords": [
      "Beclin1",
      "p62",
      "LC3"
    ]
  },
  {
    "id": 100,
    "title": "Cryo-ET of Bacterial Outer Membrane Protein Complexes",
    "authors": [
      "Daniel Kowalski",
      "Maria Wang",
      "Juan Cohen",
      "Klaus Martinez",
      "Sarah Brown",
      "James Nakamura"
    ],
    "journal": "Nature Reviews Molecular Cell Biology",
    "year": 2021,
    "abstract": "In situ structural biology aims to determine protein structures within unperturbed cellular environments. Here we use cryo-electron tomography combined with subtomogram averaging to determine the structure of ribosomes actively engaged in translation on the endoplasmic reticulum membrane. Our analysis reveals the architecture of the translocon complex and its interaction with translating ribosomes. We observe distinct conformational states associated with different stages of protein translocation. These findings provide unprecedented insights into co-translational protein targeting and membrane insertion.",
    "topic": "cryo_et",
    "doi": "10.4460/zvfnxb6h",
    "keywords": [
      "cryo-ET",
      "organelle",
      "3D reconstruction",
      "native structure",
      "macromolecular complex"
    ]
  },
  {
    "id": 101,
    "title": "In Situ Structural Biology Using Cryo-FIB Prepared Samples",
    "authors": [
      "Thomas Lee",
      "Sarah Davis",
      "Akira Dubois",
      "Hans Garcia",
      "Klaus Cohen"
    ],
    "journal": "Traffic",
    "year": 2019,
    "abstract": "The integration of cryo-FIB with cryo-electron tomography has transformed our ability to study cellular architecture. Here we present a comprehensive study comparing different ion sources and milling parameters for optimal sample preservation. Our systematic analysis reveals that gallium ion beams cause less structural damage than previously reported when appropriate milling strategies are employed. We introduce a step-wise milling protocol that minimizes heat-induced artifacts while maintaining structural integrity. These findings establish best practices for cryo-FIB sample preparation.",
    "topic": "cryo_fib",
    "doi": "10.2753/7thwhm3c",
    "keywords": [
      "cellular",
      "sample preparation",
      "tomography",
      "lamella"
    ]
  },
  {
    "id": 102,
    "title": "Mitochondrial Lamella Preparation by Cryo-FIB Milling",
    "authors": [
      "Michael Cohen",
      "Olga M\u00fcller",
      "Juan Rodriguez",
      "Michael Lee",
      "Matthew Wang",
      "Wei Kim",
      "Wei Yoshida"
    ],
    "journal": "Cell",
    "year": 2024,
    "abstract": "Automated cryo-FIB workflows are essential for scaling in situ structural biology. We engineered a robotic system that performs grid clipping, target selection, and lamella milling without human intervention. The system uses machine learning algorithms to identify optimal milling sites and predict lamella quality. Throughput is increased tenfold compared to manual operation while maintaining consistent quality. We demonstrate the system by preparing over two hundred lamellae from mammalian cells in a single session.",
    "topic": "cryo_fib",
    "doi": "10.7135/9n57nyxt",
    "keywords": [
      "cryo-EM",
      "FIB milling",
      "lamella",
      "in situ",
      "sample preparation"
    ]
  },
  {
    "id": 103,
    "title": "The PI3K-Beclin1 Complex in Autophagy Initiation",
    "authors": [
      "Matthew Garcia",
      "Sophie Novak",
      "Chen Zhang",
      "Hans Yoshida",
      "Yuki Smith"
    ],
    "journal": "Journal of Molecular Biology",
    "year": 2024,
    "abstract": "Autophagy is a fundamental cellular process responsible for the degradation and recycling of cytoplasmic components. Here we investigate the molecular mechanisms governing selective autophagy in mammalian cells under nutrient starvation conditions. Using a combination of live-cell imaging, CRISPR knockout screens, and biochemical assays, we identify novel regulators of autophagosome formation. Our findings reveal a previously unknown regulatory pathway that coordinates autophagy initiation with cellular energy status. These results provide new insights into the complex network controlling autophagy and have implications for understanding autophagy-related diseases.",
    "topic": "autophagy",
    "doi": "10.7596/z3dftefr",
    "keywords": [
      "LC3",
      "Beclin1",
      "lysosome"
    ]
  },
  {
    "id": 104,
    "title": "Analytical Ultracentrifugation for Protein Oligomeric State Analysis",
    "authors": [
      "Lisa Novak",
      "Emma Zhang",
      "Yuki Rodriguez",
      "Priya Anderson",
      "Thomas Cohen",
      "David Dubois",
      "Priya Davis"
    ],
    "journal": "PNAS",
    "year": 2025,
    "abstract": "Membrane proteins represent a significant fraction of the proteome and are important therapeutic targets. However, their purification remains challenging due to hydrophobicity and instability outside lipid bilayers. Here we present a systematic approach for optimizing membrane protein purification using a panel of novel detergents and lipid mimics. Our method achieves significantly higher yields and improved stability compared to conventional approaches. We validate this platform by successfully purifying twenty previously recalcitrant membrane proteins for structural studies.",
    "topic": "protein_prep",
    "doi": "10.5670/ceqs4c74",
    "keywords": [
      "protein purification",
      "stability",
      "cell-free synthesis",
      "expression"
    ]
  },
  {
    "id": 105,
    "title": "Workflow Automation in Cryo-FIB Lamella Production",
    "authors": [
      "Akira Brown",
      "Andrew Evans",
      "Yuki Schmidt",
      "Anna Wilson",
      "Wei Silva",
      "Andrew Nakamura",
      "Yuki Nakamura"
    ],
    "journal": "Structure",
    "year": 2020,
    "abstract": "Automated cryo-FIB workflows are essential for scaling in situ structural biology. We engineered a robotic system that performs grid clipping, target selection, and lamella milling without human intervention. The system uses machine learning algorithms to identify optimal milling sites and predict lamella quality. Throughput is increased tenfold compared to manual operation while maintaining consistent quality. We demonstrate the system by preparing over two hundred lamellae from mammalian cells in a single session.",
    "topic": "cryo_fib",
    "doi": "10.8550/f3fzs7tw",
    "keywords": [
      "tomography",
      "cryo-FIB",
      "FIB milling"
    ]
  },
  {
    "id": 106,
    "title": "Focus Ion Beam Tomography at Cryogenic Temperatures",
    "authors": [
      "Chen Dubois",
      "Sophie Taylor",
      "Jennifer Lee",
      "Michael Rossi",
      "Pierre Smith",
      "Sarah Novak"
    ],
    "journal": "Nature Structural & Molecular Biology",
    "year": 2022,
    "abstract": "Site-specific targeting of cellular structures by cryo-FIB remains a major challenge. We developed a correlative microscopy approach combining fluorescence-guided targeting with cryo-FIB milling. The workflow enables precise lamella preparation at regions of interest identified by light microscopy. Using this method, we successfully targeted and visualized rare cellular events including virus assembly sites and autophagosome formation. Our approach bridges the resolution gap between light and electron microscopy for in situ structural studies.",
    "topic": "cryo_fib",
    "doi": "10.2791/xf9hfeu8",
    "keywords": [
      "ion beam",
      "lamella",
      "tomography"
    ]
  },
  {
    "id": 107,
    "title": "Ribophagy: Selective Degradation of Ribosomes by Autophagy",
    "authors": [
      "Hans Nakamura",
      "Olga Wang",
      "Kevin Patel",
      "Christopher Martinez",
      "Thomas Silva",
      "Sarah Lee"
    ],
    "journal": "Journal of Molecular Biology",
    "year": 2020,
    "abstract": "The autophagosome is a double-membrane vesicle that engulfs cytoplasmic material for delivery to the lysosome. In this work, we use correlative light and electron microscopy to visualize autophagosome biogenesis in real time. Our observations challenge the conventional model by revealing an alternative membrane source for autophagosome formation. Through genetic and pharmacological approaches, we demonstrate that this alternative pathway becomes dominant under specific cellular stress conditions. This study provides a revised framework for understanding the membrane dynamics of autophagy.",
    "topic": "autophagy",
    "doi": "10.4443/quxrqgr6",
    "keywords": [
      "autophagosome",
      "ULK1",
      "lysosome",
      "selective autophagy",
      "mitophagy"
    ]
  },
  {
    "id": 108,
    "title": "Structural Analysis of HIV-1 Assembly Sites by Cryo-ET",
    "authors": [
      "Lisa Martinez",
      "Wei Silva",
      "Wei Novak",
      "Lisa Yoshida",
      "Hans Kim"
    ],
    "journal": "Nature Reviews Molecular Cell Biology",
    "year": 2021,
    "abstract": "Cryo-electron tomography provides three-dimensional views of cellular structures in their native state. We applied cryo-ET to determine the in situ architecture of the nuclear pore complex within intact nuclear envelopes. Through subtomogram averaging of thousands of individual complexes, we achieved sufficient resolution to trace the path of transport substrates through the central channel. Our results reveal conformational differences between nuclear pore complexes in different functional states. This work demonstrates the power of in situ structural biology for understanding macromolecular machines within their cellular context.",
    "topic": "cryo_et",
    "doi": "10.9691/uvfmg27w",
    "keywords": [
      "in situ",
      "electron tomography",
      "cryo-ET",
      "native structure"
    ]
  },
  {
    "id": 109,
    "title": "Resolution Advances in Cryo-Electron Tomography",
    "authors": [
      "Jessica Thompson",
      "Jennifer Rodriguez",
      "Olga Chen",
      "Rachel Smith",
      "Priya Schmidt",
      "Laura Davis",
      "Christopher Garcia"
    ],
    "journal": "Science",
    "year": 2022,
    "abstract": "Cryo-electron tomography provides three-dimensional views of cellular structures in their native state. We applied cryo-ET to determine the in situ architecture of the nuclear pore complex within intact nuclear envelopes. Through subtomogram averaging of thousands of individual complexes, we achieved sufficient resolution to trace the path of transport substrates through the central channel. Our results reveal conformational differences between nuclear pore complexes in different functional states. This work demonstrates the power of in situ structural biology for understanding macromolecular machines within their cellular context.",
    "topic": "cryo_et",
    "doi": "10.3470/egpu7rkz",
    "keywords": [
      "native structure",
      "3D reconstruction",
      "organelle"
    ]
  },
  {
    "id": 110,
    "title": "Multi-Domain Protein Expression: Challenges and Solutions",
    "authors": [
      "James Smith",
      "Sarah Nakamura",
      "Robert Rodriguez",
      "Rachel Martinez",
      "Juan Evans"
    ],
    "journal": "Biophysics Journal",
    "year": 2021,
    "abstract": "Membrane proteins represent a significant fraction of the proteome and are important therapeutic targets. However, their purification remains challenging due to hydrophobicity and instability outside lipid bilayers. Here we present a systematic approach for optimizing membrane protein purification using a panel of novel detergents and lipid mimics. Our method achieves significantly higher yields and improved stability compared to conventional approaches. We validate this platform by successfully purifying twenty previously recalcitrant membrane proteins for structural studies.",
    "topic": "protein_prep",
    "doi": "10.5288/3ygvy9ge",
    "keywords": [
      "SEC",
      "crystallization",
      "cell-free synthesis"
    ]
  },
  {
    "id": 111,
    "title": "Cryo-ET of Myofibril Organization in Muscle Cells",
    "authors": [
      "Sarah Liu",
      "Emma Chen",
      "Wei Kowalski"
    ],
    "journal": "Cell Research",
    "year": 2020,
    "abstract": "In situ structural biology aims to determine protein structures within unperturbed cellular environments. Here we use cryo-electron tomography combined with subtomogram averaging to determine the structure of ribosomes actively engaged in translation on the endoplasmic reticulum membrane. Our analysis reveals the architecture of the translocon complex and its interaction with translating ribosomes. We observe distinct conformational states associated with different stages of protein translocation. These findings provide unprecedented insights into co-translational protein targeting and membrane insertion.",
    "topic": "cryo_et",
    "doi": "10.3595/s2cwwp8n",
    "keywords": [
      "organelle",
      "in situ",
      "3D reconstruction"
    ]
  },
  {
    "id": 112,
    "title": "Autophagy in Cancer: Tumor Suppression and Promotion",
    "authors": [
      "Akira Wilson",
      "Michael Johnson",
      "Anna Kowalski",
      "Lisa Yoshida",
      "Emma Wang",
      "Chen Liu"
    ],
    "journal": "Biophysics Journal",
    "year": 2019,
    "abstract": "Autophagy dysfunction has been implicated in numerous neurodegenerative disorders. Here we examined the role of mitophagy in Parkinson's disease using patient-derived induced pluripotent stem cells. Our results show that defective mitophagy leads to accumulation of dysfunctional mitochondria and increased oxidative stress. We identified a small molecule compound that restores mitophagy function in disease models. This compound shows promise as a potential therapeutic strategy for Parkinson's disease and related disorders.",
    "topic": "autophagy",
    "doi": "10.8007/ud8yebnu",
    "keywords": [
      "autophagosome",
      "autophagy",
      "selective autophagy",
      "mitophagy"
    ]
  },
  {
    "id": 113,
    "title": "Nucleophagy: Nuclear Degradation by the Autophagic Machinery",
    "authors": [
      "Chen Evans",
      "Michael Nakamura",
      "Anna Zhang",
      "Michael Patel",
      "Andrew Davis",
      "Juan Novak",
      "Rachel Wang"
    ],
    "journal": "Science",
    "year": 2020,
    "abstract": "Autophagy is a fundamental cellular process responsible for the degradation and recycling of cytoplasmic components. Here we investigate the molecular mechanisms governing selective autophagy in mammalian cells under nutrient starvation conditions. Using a combination of live-cell imaging, CRISPR knockout screens, and biochemical assays, we identify novel regulators of autophagosome formation. Our findings reveal a previously unknown regulatory pathway that coordinates autophagy initiation with cellular energy status. These results provide new insights into the complex network controlling autophagy and have implications for understanding autophagy-related diseases.",
    "topic": "autophagy",
    "doi": "10.9320/cfvxhd6h",
    "keywords": [
      "autophagy",
      "mTOR",
      "lysosome",
      "p62",
      "mitophagy"
    ]
  },
  {
    "id": 114,
    "title": "Cryo-FIB Preparation of Bacterial Cells for Electron Tomography",
    "authors": [
      "Pierre M\u00fcller",
      "Daniel Cohen",
      "Sophie Yoshida",
      "Emma Nakamura",
      "Andrew Chen"
    ],
    "journal": "Science",
    "year": 2021,
    "abstract": "The integration of cryo-FIB with cryo-electron tomography has transformed our ability to study cellular architecture. Here we present a comprehensive study comparing different ion sources and milling parameters for optimal sample preservation. Our systematic analysis reveals that gallium ion beams cause less structural damage than previously reported when appropriate milling strategies are employed. We introduce a step-wise milling protocol that minimizes heat-induced artifacts while maintaining structural integrity. These findings establish best practices for cryo-FIB sample preparation.",
    "topic": "cryo_fib",
    "doi": "10.9824/jujdzhb7",
    "keywords": [
      "sample preparation",
      "cryo-FIB",
      "FIB milling"
    ]
  },
  {
    "id": 115,
    "title": "The Role of ATG Proteins in Autophagosome Biogenesis",
    "authors": [
      "Pierre Garcia",
      "Anna Wilson",
      "Lisa Chen",
      "Wei Taylor"
    ],
    "journal": "Methods in Enzymology",
    "year": 2025,
    "abstract": "Autophagy is a fundamental cellular process responsible for the degradation and recycling of cytoplasmic components. Here we investigate the molecular mechanisms governing selective autophagy in mammalian cells under nutrient starvation conditions. Using a combination of live-cell imaging, CRISPR knockout screens, and biochemical assays, we identify novel regulators of autophagosome formation. Our findings reveal a previously unknown regulatory pathway that coordinates autophagy initiation with cellular energy status. These results provide new insights into the complex network controlling autophagy and have implications for understanding autophagy-related diseases.",
    "topic": "autophagy",
    "doi": "10.2519/nnmjbrd7",
    "keywords": [
      "Beclin1",
      "selective autophagy",
      "mTOR"
    ]
  },
  {
    "id": 116,
    "title": "Mechanisms of Selective Autophagy in Mammalian Cells",
    "authors": [
      "Chen Wilson",
      "James Brown",
      "Lisa Nakamura"
    ],
    "journal": "Nature Structural & Molecular Biology",
    "year": 2024,
    "abstract": "Autophagy is a fundamental cellular process responsible for the degradation and recycling of cytoplasmic components. Here we investigate the molecular mechanisms governing selective autophagy in mammalian cells under nutrient starvation conditions. Using a combination of live-cell imaging, CRISPR knockout screens, and biochemical assays, we identify novel regulators of autophagosome formation. Our findings reveal a previously unknown regulatory pathway that coordinates autophagy initiation with cellular energy status. These results provide new insights into the complex network controlling autophagy and have implications for understanding autophagy-related diseases.",
    "topic": "autophagy",
    "doi": "10.9935/cqagsagx",
    "keywords": [
      "p62",
      "ATG proteins",
      "LC3",
      "selective autophagy",
      "autophagy"
    ]
  },
  {
    "id": 117,
    "title": "Automated Particle Picking for Subtomogram Averaging",
    "authors": [
      "Juan Patel",
      "Sarah Dubois",
      "Pierre Anderson",
      "Jessica Patel",
      "Lisa Patel"
    ],
    "journal": "Cell Research",
    "year": 2023,
    "abstract": "In situ structural biology aims to determine protein structures within unperturbed cellular environments. Here we use cryo-electron tomography combined with subtomogram averaging to determine the structure of ribosomes actively engaged in translation on the endoplasmic reticulum membrane. Our analysis reveals the architecture of the translocon complex and its interaction with translating ribosomes. We observe distinct conformational states associated with different stages of protein translocation. These findings provide unprecedented insights into co-translational protein targeting and membrane insertion.",
    "topic": "cryo_et",
    "doi": "10.9064/tfbbvarm",
    "keywords": [
      "in situ",
      "subtomogram averaging",
      "native structure",
      "3D reconstruction",
      "electron tomography"
    ]
  },
  {
    "id": 118,
    "title": "Detergent Selection Strategies for Membrane Protein Stability",
    "authors": [
      "Lisa Brown",
      "Rachel Garcia",
      "Jessica Schmidt",
      "Klaus Wang",
      "Robert Wang",
      "Jennifer Thompson"
    ],
    "journal": "Nature Methods",
    "year": 2021,
    "abstract": "The choice of detergent significantly impacts membrane protein stability and functionality. We conducted a comprehensive survey of forty different detergents and amphipols for their effects on a model G protein-coupled receptor. Our analysis reveals that short-chain detergents provide better solubilization while long-chain variants preserve native conformation. We introduce a scoring system that predicts optimal detergent selection based on protein structural class. This framework streamlines the detergent screening process and reduces optimization time.",
    "topic": "protein_prep",
    "doi": "10.4945/svhwrx6r",
    "keywords": [
      "affinity chromatography",
      "crystallization",
      "membrane protein",
      "expression"
    ]
  },
  {
    "id": 119,
    "title": "Protein Refolding Strategies from Inclusion Bodies",
    "authors": [
      "Pierre M\u00fcller",
      "Rachel Yoshida",
      "Robert Zhang",
      "James Dubois",
      "Sophie Liu"
    ],
    "journal": "Methods in Enzymology",
    "year": 2019,
    "abstract": "Protein crystallization remains a major bottleneck in structural biology. We developed a microfluidic platform that enables nanoliter-scale crystallization screening using minimal protein material. The system integrates on-chip mixing, incubation, and optical detection for automated hit identification. We validated the platform by crystallizing fifteen proteins that had resisted crystallization using conventional methods. Our approach reduces protein consumption by two orders of magnitude while increasing crystallization success rates.",
    "topic": "protein_prep",
    "doi": "10.9564/vn7p3ybw",
    "keywords": [
      "membrane protein",
      "nanodisc",
      "cell-free synthesis",
      "detergent"
    ]
  },
  {
    "id": 120,
    "title": "Cryo-FIB Milling of Endosomal Compartments",
    "authors": [
      "Lisa Dubois",
      "Anna Silva",
      "James Kowalski",
      "Akira Schmidt"
    ],
    "journal": "Nature Communications",
    "year": 2025,
    "abstract": "Automated cryo-FIB workflows are essential for scaling in situ structural biology. We engineered a robotic system that performs grid clipping, target selection, and lamella milling without human intervention. The system uses machine learning algorithms to identify optimal milling sites and predict lamella quality. Throughput is increased tenfold compared to manual operation while maintaining consistent quality. We demonstrate the system by preparing over two hundred lamellae from mammalian cells in a single session.",
    "topic": "cryo_fib",
    "doi": "10.9019/ewwnc32p",
    "keywords": [
      "in situ",
      "cryo-EM",
      "cellular",
      "sample preparation",
      "lamella"
    ]
  },
  {
    "id": 121,
    "title": "Correlation of Light and Electron Microscopy with Cryo-FIB",
    "authors": [
      "Pierre Wang",
      "Sarah Nakamura",
      "Anna Rossi",
      "Christopher Patel",
      "Hans Kowalski"
    ],
    "journal": "Biochemical Journal",
    "year": 2024,
    "abstract": "The integration of cryo-FIB with cryo-electron tomography has transformed our ability to study cellular architecture. Here we present a comprehensive study comparing different ion sources and milling parameters for optimal sample preservation. Our systematic analysis reveals that gallium ion beams cause less structural damage than previously reported when appropriate milling strategies are employed. We introduce a step-wise milling protocol that minimizes heat-induced artifacts while maintaining structural integrity. These findings establish best practices for cryo-FIB sample preparation.",
    "topic": "cryo_fib",
    "doi": "10.3875/vwpqmpc9",
    "keywords": [
      "cryo-EM",
      "sample preparation",
      "cryo-FIB",
      "lamella"
    ]
  },
  {
    "id": 122,
    "title": "Cryo-ET of ATP Synthase Dimers in Mitochondrial Cristae",
    "authors": [
      "Christopher Schmidt",
      "Rachel Silva",
      "Kevin Martinez",
      "Jessica Smith",
      "Sarah Davis",
      "Hans Silva"
    ],
    "journal": "PNAS",
    "year": 2021,
    "abstract": "The bacterial flagellar motor is a remarkable nanomachine that converts ion motive force into mechanical rotation. Using cryo-electron tomography of intact bacterial cells, we determined the in situ structure of the complete flagellar motor including stator complexes and the C-ring. Subtomogram averaging yielded a composite structure that reveals the organization of torque-generating units around the rotor. Our results support a model in which stator remodeling enables the motor to adapt to changing mechanical load. This study showcases the potential of cryo-ET for understanding dynamic molecular machines in action.",
    "topic": "cryo_et",
    "doi": "10.5631/kdb9w5jz",
    "keywords": [
      "cellular",
      "in situ",
      "electron tomography",
      "organelle",
      "macromolecular complex"
    ]
  },
  {
    "id": 123,
    "title": "Self-Wicking Grids for Improved Cryo-FIB Sample Handling",
    "authors": [
      "Klaus Kowalski",
      "James Lee",
      "Michael Wilson"
    ],
    "journal": "Journal of Structural Biology",
    "year": 2019,
    "abstract": "The integration of cryo-FIB with cryo-electron tomography has transformed our ability to study cellular architecture. Here we present a comprehensive study comparing different ion sources and milling parameters for optimal sample preservation. Our systematic analysis reveals that gallium ion beams cause less structural damage than previously reported when appropriate milling strategies are employed. We introduce a step-wise milling protocol that minimizes heat-induced artifacts while maintaining structural integrity. These findings establish best practices for cryo-FIB sample preparation.",
    "topic": "cryo_fib",
    "doi": "10.9808/j3u2ssuj",
    "keywords": [
      "cryo-EM",
      "tomography",
      "cryo-FIB",
      "ion beam",
      "focused ion beam"
    ]
  },
  {
    "id": 124,
    "title": "Differential Scanning Fluorimetry in Buffer Screening",
    "authors": [
      "Sarah Anderson",
      "Christopher Wang",
      "Maria Taylor",
      "Wei Rodriguez",
      "Maria Brown"
    ],
    "journal": "Traffic",
    "year": 2022,
    "abstract": "Protein quality assessment is critical for successful structural biology projects. We developed a high-throughput thermal shift assay that enables rapid screening of buffer conditions and ligands for protein stabilization. The assay is compatible with multi-well plate formats and requires minimal protein quantities. We benchmarked the method against traditional techniques using a diverse set of protein targets. Our results demonstrate that this approach reliably identifies optimal conditions that improve both protein stability and crystallization success rates.",
    "topic": "protein_prep",
    "doi": "10.3538/c5d246bm",
    "keywords": [
      "crystallization",
      "stability",
      "cell-free synthesis",
      "membrane protein",
      "affinity chromatography"
    ]
  },
  {
    "id": 125,
    "title": "Flash-Freezing Protocols for Cryo-EM Sample Preparation",
    "authors": [
      "Priya Yoshida",
      "Anna Wilson",
      "David Rossi"
    ],
    "journal": "Trends in Biochemical Sciences",
    "year": 2021,
    "abstract": "Cell-free protein synthesis offers unique advantages for producing proteins that are toxic or difficult to express in living cells. This study establishes an optimized wheat germ-based expression system for eukaryotic protein production. We systematically evaluated translation efficiency using reporter constructs and identified critical parameters for maximizing protein yields. The platform was validated by producing a panel of kinases and transcription factors that were previously inaccessible through conventional expression systems. Our workflow provides a robust alternative for challenging protein targets.",
    "topic": "protein_prep",
    "doi": "10.8159/626n9ss7",
    "keywords": [
      "detergent",
      "membrane protein",
      "stability",
      "protein purification",
      "expression"
    ]
  },
  {
    "id": 126,
    "title": "Autophagy in Neurodegenerative Diseases: Pathogenic Mechanisms",
    "authors": [
      "Emma Evans",
      "Priya Johnson",
      "Hans Nakamura",
      "David Schmidt",
      "Olga Evans",
      "Wei Wilson",
      "Wei Yoshida"
    ],
    "journal": "Biochemical Journal",
    "year": 2023,
    "abstract": "The autophagosome is a double-membrane vesicle that engulfs cytoplasmic material for delivery to the lysosome. In this work, we use correlative light and electron microscopy to visualize autophagosome biogenesis in real time. Our observations challenge the conventional model by revealing an alternative membrane source for autophagosome formation. Through genetic and pharmacological approaches, we demonstrate that this alternative pathway becomes dominant under specific cellular stress conditions. This study provides a revised framework for understanding the membrane dynamics of autophagy.",
    "topic": "autophagy",
    "doi": "10.2827/keazz92s",
    "keywords": [
      "ULK1",
      "selective autophagy",
      "Beclin1"
    ]
  },
  {
    "id": 127,
    "title": "Mitochondrial-Derived Vesicles and Their Role in Autophagy",
    "authors": [
      "Hans Lee",
      "James Rossi",
      "Maria Kim",
      "Sarah Zhang"
    ],
    "journal": "Current Opinion in Structural Biology",
    "year": 2019,
    "abstract": "Selective autophagy maintains cellular homeostasis by targeting specific cargoes for lysosomal degradation. This study characterizes the role of autophagy receptors in recognizing ubiquitinated protein aggregates. We employed cryo-electron microscopy to determine the structure of the receptor-cargo complex at near-atomic resolution. Our structural analysis combined with functional assays demonstrates that receptor oligomerization is essential for cargo clustering and efficient degradation. These findings advance our understanding of how cells maintain protein quality control through selective autophagy pathways.",
    "topic": "autophagy",
    "doi": "10.8784/v2r6uznp",
    "keywords": [
      "ULK1",
      "autophagy",
      "lysosome"
    ]
  },
  {
    "id": 128,
    "title": "Continuous Exchange Cell-Free Systems for Large Protein Production",
    "authors": [
      "Laura Dubois",
      "Chen Rodriguez",
      "Rachel Garcia",
      "Wei Garcia",
      "Akira Patel"
    ],
    "journal": "Cell",
    "year": 2019,
    "abstract": "Membrane proteins represent a significant fraction of the proteome and are important therapeutic targets. However, their purification remains challenging due to hydrophobicity and instability outside lipid bilayers. Here we present a systematic approach for optimizing membrane protein purification using a panel of novel detergents and lipid mimics. Our method achieves significantly higher yields and improved stability compared to conventional approaches. We validate this platform by successfully purifying twenty previously recalcitrant membrane proteins for structural studies.",
    "topic": "protein_prep",
    "doi": "10.3053/9wqym63w",
    "keywords": [
      "crystallization",
      "stability",
      "protein purification"
    ]
  },
  {
    "id": 129,
    "title": "Cryo-FIB Serial Sectioning for 3D Cellular Reconstruction",
    "authors": [
      "Rachel Nakamura",
      "Daniel Zhang",
      "David Garcia"
    ],
    "journal": "Nature Communications",
    "year": 2024,
    "abstract": "The integration of cryo-FIB with cryo-electron tomography has transformed our ability to study cellular architecture. Here we present a comprehensive study comparing different ion sources and milling parameters for optimal sample preservation. Our systematic analysis reveals that gallium ion beams cause less structural damage than previously reported when appropriate milling strategies are employed. We introduce a step-wise milling protocol that minimizes heat-induced artifacts while maintaining structural integrity. These findings establish best practices for cryo-FIB sample preparation.",
    "topic": "cryo_fib",
    "doi": "10.2245/m28p2aj9",
    "keywords": [
      "sample preparation",
      "cryo-EM",
      "ion beam",
      "focused ion beam"
    ]
  },
  {
    "id": 130,
    "title": "Cryo-FIB Sample Preparation for Single Particle Cryo-EM",
    "authors": [
      "David Schmidt",
      "Maria Dubois",
      "Jessica Rodriguez",
      "Jennifer Petrov",
      "Rachel Liu",
      "Klaus Zhang"
    ],
    "journal": "Traffic",
    "year": 2025,
    "abstract": "Automated cryo-FIB workflows are essential for scaling in situ structural biology. We engineered a robotic system that performs grid clipping, target selection, and lamella milling without human intervention. The system uses machine learning algorithms to identify optimal milling sites and predict lamella quality. Throughput is increased tenfold compared to manual operation while maintaining consistent quality. We demonstrate the system by preparing over two hundred lamellae from mammalian cells in a single session.",
    "topic": "cryo_fib",
    "doi": "10.3161/srbr4zp4",
    "keywords": [
      "sample preparation",
      "FIB milling",
      "cryo-FIB",
      "focused ion beam",
      "lamella"
    ]
  },
  {
    "id": 131,
    "title": "Structural Characterization of Cilia and Flagella by Cryo-ET",
    "authors": [
      "Sophie Nakamura",
      "Jennifer Patel",
      "David Davis",
      "Lisa Yoshida",
      "Akira Martinez"
    ],
    "journal": "Frontiers in Molecular Biosciences",
    "year": 2022,
    "abstract": "Cryo-electron tomography provides three-dimensional views of cellular structures in their native state. We applied cryo-ET to determine the in situ architecture of the nuclear pore complex within intact nuclear envelopes. Through subtomogram averaging of thousands of individual complexes, we achieved sufficient resolution to trace the path of transport substrates through the central channel. Our results reveal conformational differences between nuclear pore complexes in different functional states. This work demonstrates the power of in situ structural biology for understanding macromolecular machines within their cellular context.",
    "topic": "cryo_et",
    "doi": "10.2020/q8hjk3yz",
    "keywords": [
      "native structure",
      "cellular",
      "electron tomography",
      "cryo-ET"
    ]
  },
  {
    "id": 132,
    "title": "Protein Engineering for Enhanced Solubility and Stability",
    "authors": [
      "Chen Thompson",
      "Rachel Garcia",
      "David Kowalski",
      "Christopher Brown",
      "Christopher Smith",
      "Michael Brown",
      "Matthew Yoshida"
    ],
    "journal": "Nature Communications",
    "year": 2025,
    "abstract": "Protein crystallization remains a major bottleneck in structural biology. We developed a microfluidic platform that enables nanoliter-scale crystallization screening using minimal protein material. The system integrates on-chip mixing, incubation, and optical detection for automated hit identification. We validated the platform by crystallizing fifteen proteins that had resisted crystallization using conventional methods. Our approach reduces protein consumption by two orders of magnitude while increasing crystallization success rates.",
    "topic": "protein_prep",
    "doi": "10.8489/b4stwuzk",
    "keywords": [
      "cell-free synthesis",
      "nanodisc",
      "expression"
    ]
  },
  {
    "id": 133,
    "title": "Affinity Chromatography: Advances in Tag Selection",
    "authors": [
      "Matthew Schmidt",
      "David Rodriguez",
      "Pierre Cohen",
      "Sophie M\u00fcller",
      "Olga M\u00fcller",
      "Anna Thompson"
    ],
    "journal": "Journal of Biological Chemistry",
    "year": 2019,
    "abstract": "Protein quality assessment is critical for successful structural biology projects. We developed a high-throughput thermal shift assay that enables rapid screening of buffer conditions and ligands for protein stabilization. The assay is compatible with multi-well plate formats and requires minimal protein quantities. We benchmarked the method against traditional techniques using a diverse set of protein targets. Our results demonstrate that this approach reliably identifies optimal conditions that improve both protein stability and crystallization success rates.",
    "topic": "protein_prep",
    "doi": "10.2076/dwvznvks",
    "keywords": [
      "membrane protein",
      "cell-free synthesis",
      "expression",
      "SEC"
    ]
  },
  {
    "id": 134,
    "title": "Size Exclusion Chromatography for Protein Complex Separation",
    "authors": [
      "Jessica Taylor",
      "Sarah Wang",
      "Emma Zhang",
      "Lisa Nakamura"
    ],
    "journal": "Methods in Enzymology",
    "year": 2021,
    "abstract": "The choice of detergent significantly impacts membrane protein stability and functionality. We conducted a comprehensive survey of forty different detergents and amphipols for their effects on a model G protein-coupled receptor. Our analysis reveals that short-chain detergents provide better solubilization while long-chain variants preserve native conformation. We introduce a scoring system that predicts optimal detergent selection based on protein structural class. This framework streamlines the detergent screening process and reduces optimization time.",
    "topic": "protein_prep",
    "doi": "10.9619/dbqnvrgw",
    "keywords": [
      "affinity chromatography",
      "detergent",
      "SEC",
      "nanodisc",
      "protein purification"
    ]
  },
  {
    "id": 135,
    "title": "Visualizing Membrane Remodeling by ESCRT Machinery Using Cryo-ET",
    "authors": [
      "David Liu",
      "Kevin Thompson",
      "Michael Lee",
      "Hans Nakamura",
      "Hans Nakamura",
      "Robert Smith"
    ],
    "journal": "Annual Review of Biophysics",
    "year": 2019,
    "abstract": "Cryo-electron tomography provides three-dimensional views of cellular structures in their native state. We applied cryo-ET to determine the in situ architecture of the nuclear pore complex within intact nuclear envelopes. Through subtomogram averaging of thousands of individual complexes, we achieved sufficient resolution to trace the path of transport substrates through the central channel. Our results reveal conformational differences between nuclear pore complexes in different functional states. This work demonstrates the power of in situ structural biology for understanding macromolecular machines within their cellular context.",
    "topic": "cryo_et",
    "doi": "10.3248/yf8t3zfd",
    "keywords": [
      "electron tomography",
      "cryo-ET",
      "subtomogram averaging",
      "in situ"
    ]
  },
  {
    "id": 136,
    "title": "The VPS34 Complex in Autophagy and Endosomal Trafficking",
    "authors": [
      "David Dubois",
      "Wei Lee",
      "Priya Schmidt",
      "Kevin Rossi"
    ],
    "journal": "Frontiers in Molecular Biosciences",
    "year": 2023,
    "abstract": "Autophagy is a fundamental cellular process responsible for the degradation and recycling of cytoplasmic components. Here we investigate the molecular mechanisms governing selective autophagy in mammalian cells under nutrient starvation conditions. Using a combination of live-cell imaging, CRISPR knockout screens, and biochemical assays, we identify novel regulators of autophagosome formation. Our findings reveal a previously unknown regulatory pathway that coordinates autophagy initiation with cellular energy status. These results provide new insights into the complex network controlling autophagy and have implications for understanding autophagy-related diseases.",
    "topic": "autophagy",
    "doi": "10.1672/mqnsm54d",
    "keywords": [
      "ULK1",
      "LC3",
      "autophagosome",
      "p62"
    ]
  },
  {
    "id": 137,
    "title": "In Situ Visualization of Transcription Complexes by Cryo-ET",
    "authors": [
      "Wei Silva",
      "Rachel Chen",
      "Sarah Schmidt",
      "Sarah Yoshida",
      "Chen Brown"
    ],
    "journal": "Nature",
    "year": 2021,
    "abstract": "In situ structural biology aims to determine protein structures within unperturbed cellular environments. Here we use cryo-electron tomography combined with subtomogram averaging to determine the structure of ribosomes actively engaged in translation on the endoplasmic reticulum membrane. Our analysis reveals the architecture of the translocon complex and its interaction with translating ribosomes. We observe distinct conformational states associated with different stages of protein translocation. These findings provide unprecedented insights into co-translational protein targeting and membrane insertion.",
    "topic": "cryo_et",
    "doi": "10.6641/kdskcb8r",
    "keywords": [
      "organelle",
      "3D reconstruction",
      "in situ",
      "native structure",
      "electron tomography"
    ]
  },
  {
    "id": 138,
    "title": "Protein Sample Concentration and Buffer Exchange Methods",
    "authors": [
      "Sarah Kim",
      "Priya Thompson",
      "Hans Rossi",
      "Sophie Zhang"
    ],
    "journal": "Methods in Enzymology",
    "year": 2023,
    "abstract": "Protein quality assessment is critical for successful structural biology projects. We developed a high-throughput thermal shift assay that enables rapid screening of buffer conditions and ligands for protein stabilization. The assay is compatible with multi-well plate formats and requires minimal protein quantities. We benchmarked the method against traditional techniques using a diverse set of protein targets. Our results demonstrate that this approach reliably identifies optimal conditions that improve both protein stability and crystallization success rates.",
    "topic": "protein_prep",
    "doi": "10.2101/hxn8beqn",
    "keywords": [
      "membrane protein",
      "crystallization",
      "nanodisc",
      "expression"
    ]
  },
  {
    "id": 139,
    "title": "Piecemeal Microautophagy of the Nucleus in Yeast",
    "authors": [
      "Andrew Evans",
      "Rachel Anderson",
      "Matthew Nakamura",
      "Thomas Taylor",
      "Daniel Dubois"
    ],
    "journal": "Journal of Structural Biology",
    "year": 2024,
    "abstract": "Macroautophagy is essential for cellular survival during starvation and stress. We developed a novel fluorescent reporter system that enables real-time monitoring of autophagic flux in living cells. Using this tool, we discovered that autophagy rates oscillate in response to circadian rhythms. Genetic disruption of this oscillatory pattern leads to accelerated cellular aging and accumulation of damaged organelles. Our findings establish a connection between the circadian clock and autophagy regulation with important implications for metabolic diseases.",
    "topic": "autophagy",
    "doi": "10.5438/khzk28yf",
    "keywords": [
      "LC3",
      "selective autophagy",
      "mTOR",
      "Beclin1",
      "ULK1"
    ]
  },
  {
    "id": 140,
    "title": "Subtomogram Classification Methods for Heterogeneous Complexes",
    "authors": [
      "Hans Petrov",
      "Michael Wang",
      "James Rossi",
      "Rachel Zhang",
      "Laura M\u00fcller",
      "Olga Liu",
      "Priya Lee"
    ],
    "journal": "Nature Structural & Molecular Biology",
    "year": 2021,
    "abstract": "The bacterial flagellar motor is a remarkable nanomachine that converts ion motive force into mechanical rotation. Using cryo-electron tomography of intact bacterial cells, we determined the in situ structure of the complete flagellar motor including stator complexes and the C-ring. Subtomogram averaging yielded a composite structure that reveals the organization of torque-generating units around the rotor. Our results support a model in which stator remodeling enables the motor to adapt to changing mechanical load. This study showcases the potential of cryo-ET for understanding dynamic molecular machines in action.",
    "topic": "cryo_et",
    "doi": "10.6362/crnk3zhn",
    "keywords": [
      "in situ",
      "organelle",
      "electron tomography",
      "cryo-ET"
    ]
  },
  {
    "id": 141,
    "title": "Autophagy-Dependent Secretion and Unconventional Protein Export",
    "authors": [
      "Andrew Schmidt",
      "David Patel",
      "Maria Liu",
      "Pierre Wilson"
    ],
    "journal": "Journal of Cell Biology",
    "year": 2020,
    "abstract": "The autophagosome is a double-membrane vesicle that engulfs cytoplasmic material for delivery to the lysosome. In this work, we use correlative light and electron microscopy to visualize autophagosome biogenesis in real time. Our observations challenge the conventional model by revealing an alternative membrane source for autophagosome formation. Through genetic and pharmacological approaches, we demonstrate that this alternative pathway becomes dominant under specific cellular stress conditions. This study provides a revised framework for understanding the membrane dynamics of autophagy.",
    "topic": "autophagy",
    "doi": "10.3749/v8z3fku7",
    "keywords": [
      "ULK1",
      "p62",
      "PI3K",
      "ATG proteins",
      "lysosome"
    ]
  },
  {
    "id": 142,
    "title": "Molecular Mechanisms of Clathrin-Mediated Endocytosis by Cryo-ET",
    "authors": [
      "Rachel Patel",
      "Olga Davis",
      "Klaus Patel"
    ],
    "journal": "Nature Reviews Molecular Cell Biology",
    "year": 2022,
    "abstract": "The resolution revolution in cryo-EM has extended to electron tomography. We report methodological advances that push the resolution of subtomogram averaging beyond 3 angstroms for in situ protein structures. Key innovations include improved tilt-series acquisition schemes, advancedCTF correction algorithms, and novel classification methods. We applied these methods to determine the atomic structure of a metabolic enzyme complex within bacterial cells. This work establishes cryo-ET as a tool for atomic-resolution structural biology in the cellular context.",
    "topic": "cryo_et",
    "doi": "10.3415/d2f994dq",
    "keywords": [
      "macromolecular complex",
      "in situ",
      "organelle",
      "3D reconstruction",
      "electron tomography"
    ]
  },
  {
    "id": 143,
    "title": "The WIPI Proteins in Autophagosome Formation",
    "authors": [
      "Olga Garcia",
      "Chen Taylor",
      "Kevin Wilson"
    ],
    "journal": "Ultramicroscopy",
    "year": 2019,
    "abstract": "Autophagy is a fundamental cellular process responsible for the degradation and recycling of cytoplasmic components. Here we investigate the molecular mechanisms governing selective autophagy in mammalian cells under nutrient starvation conditions. Using a combination of live-cell imaging, CRISPR knockout screens, and biochemical assays, we identify novel regulators of autophagosome formation. Our findings reveal a previously unknown regulatory pathway that coordinates autophagy initiation with cellular energy status. These results provide new insights into the complex network controlling autophagy and have implications for understanding autophagy-related diseases.",
    "topic": "autophagy",
    "doi": "10.2496/hx5va24u",
    "keywords": [
      "LC3",
      "Beclin1",
      "PI3K"
    ]
  },
  {
    "id": 144,
    "title": "Isothermal Titration Calorimetry for Binding Thermodynamics",
    "authors": [
      "Anna Silva",
      "Yuki Wang",
      "Akira Kowalski",
      "Hans Liu",
      "Pierre Rodriguez",
      "Yuki Wang",
      "Klaus Kim"
    ],
    "journal": "Nature Methods",
    "year": 2019,
    "abstract": "Membrane proteins represent a significant fraction of the proteome and are important therapeutic targets. However, their purification remains challenging due to hydrophobicity and instability outside lipid bilayers. Here we present a systematic approach for optimizing membrane protein purification using a panel of novel detergents and lipid mimics. Our method achieves significantly higher yields and improved stability compared to conventional approaches. We validate this platform by successfully purifying twenty previously recalcitrant membrane proteins for structural studies.",
    "topic": "protein_prep",
    "doi": "10.8498/bg36kkp4",
    "keywords": [
      "detergent",
      "protein purification",
      "expression",
      "crystallization"
    ]
  },
  {
    "id": 145,
    "title": "Cryo-ET Visualization of Synaptic Vesicle Release Machinery",
    "authors": [
      "David Kim",
      "David Wang",
      "Sophie Liu",
      "Anna Garcia",
      "David Evans",
      "Daniel Kowalski",
      "Maria Liu"
    ],
    "journal": "Nature Communications",
    "year": 2020,
    "abstract": "The bacterial flagellar motor is a remarkable nanomachine that converts ion motive force into mechanical rotation. Using cryo-electron tomography of intact bacterial cells, we determined the in situ structure of the complete flagellar motor including stator complexes and the C-ring. Subtomogram averaging yielded a composite structure that reveals the organization of torque-generating units around the rotor. Our results support a model in which stator remodeling enables the motor to adapt to changing mechanical load. This study showcases the potential of cryo-ET for understanding dynamic molecular machines in action.",
    "topic": "cryo_et",
    "doi": "10.8591/jdey4yb4",
    "keywords": [
      "subtomogram averaging",
      "electron tomography",
      "3D reconstruction",
      "native structure"
    ]
  },
  {
    "id": 146,
    "title": "Golgiphagy: Autophagic Degradation of the Golgi Apparatus",
    "authors": [
      "Anna Taylor",
      "Wei Petrov",
      "Laura Wilson",
      "Wei Silva",
      "Matthew Wilson",
      "Akira M\u00fcller"
    ],
    "journal": "PNAS",
    "year": 2021,
    "abstract": "Macroautophagy is essential for cellular survival during starvation and stress. We developed a novel fluorescent reporter system that enables real-time monitoring of autophagic flux in living cells. Using this tool, we discovered that autophagy rates oscillate in response to circadian rhythms. Genetic disruption of this oscillatory pattern leads to accelerated cellular aging and accumulation of damaged organelles. Our findings establish a connection between the circadian clock and autophagy regulation with important implications for metabolic diseases.",
    "topic": "autophagy",
    "doi": "10.1317/2b8gc8ba",
    "keywords": [
      "ATG proteins",
      "autophagy",
      "mTOR"
    ]
  },
  {
    "id": 147,
    "title": "Cryo-FIB Milling of Flagellar Motor Complexes in Situ",
    "authors": [
      "Emma Garcia",
      "Christopher Rodriguez",
      "Klaus M\u00fcller",
      "Daniel Wilson",
      "James Nakamura",
      "Yuki Rodriguez"
    ],
    "journal": "eLife",
    "year": 2019,
    "abstract": "Lamella thickness is a critical parameter for high-resolution cryo-ET. We investigated the relationship between milling parameters, sample composition, and final lamella thickness. Our data reveal that milling rate and sample vitreous ice thickness are the primary determinants of lamella uniformity. We developed a predictive model that optimizes milling parameters for different sample types. Application of this model achieves target thickness within 10% across 95% of prepared lamellae.",
    "topic": "cryo_fib",
    "doi": "10.4203/reap5n5q",
    "keywords": [
      "focused ion beam",
      "lamella",
      "in situ",
      "tomography"
    ]
  },
  {
    "id": 148,
    "title": "Protein Aggregation Prevention During Purification",
    "authors": [
      "Jennifer Zhang",
      "Yuki Kowalski",
      "Jessica Wilson"
    ],
    "journal": "Trends in Biochemical Sciences",
    "year": 2025,
    "abstract": "Protein quality assessment is critical for successful structural biology projects. We developed a high-throughput thermal shift assay that enables rapid screening of buffer conditions and ligands for protein stabilization. The assay is compatible with multi-well plate formats and requires minimal protein quantities. We benchmarked the method against traditional techniques using a diverse set of protein targets. Our results demonstrate that this approach reliably identifies optimal conditions that improve both protein stability and crystallization success rates.",
    "topic": "protein_prep",
    "doi": "10.7825/wa6twkh4",
    "keywords": [
      "detergent",
      "SEC",
      "membrane protein",
      "nanodisc"
    ]
  },
  {
    "id": 149,
    "title": "Mitophagy: Quality Control of Mitochondria Through Selective Autophagy",
    "authors": [
      "Maria Dubois",
      "Jennifer Zhang",
      "Hans Brown",
      "Wei Lee",
      "Jennifer Novak",
      "James Novak",
      "David Martinez"
    ],
    "journal": "Nature Methods",
    "year": 2025,
    "abstract": "The autophagosome is a double-membrane vesicle that engulfs cytoplasmic material for delivery to the lysosome. In this work, we use correlative light and electron microscopy to visualize autophagosome biogenesis in real time. Our observations challenge the conventional model by revealing an alternative membrane source for autophagosome formation. Through genetic and pharmacological approaches, we demonstrate that this alternative pathway becomes dominant under specific cellular stress conditions. This study provides a revised framework for understanding the membrane dynamics of autophagy.",
    "topic": "autophagy",
    "doi": "10.8428/wnngj8xv",
    "keywords": [
      "Beclin1",
      "ATG proteins",
      "autophagosome"
    ]
  },
  {
    "id": 150,
    "title": "Mammalian Cell Expression Systems for Difficult Proteins",
    "authors": [
      "Matthew Taylor",
      "Akira Liu",
      "Laura Garcia",
      "Chen Smith"
    ],
    "journal": "Nature Reviews Molecular Cell Biology",
    "year": 2022,
    "abstract": "Cell-free protein synthesis offers unique advantages for producing proteins that are toxic or difficult to express in living cells. This study establishes an optimized wheat germ-based expression system for eukaryotic protein production. We systematically evaluated translation efficiency using reporter constructs and identified critical parameters for maximizing protein yields. The platform was validated by producing a panel of kinases and transcription factors that were previously inaccessible through conventional expression systems. Our workflow provides a robust alternative for challenging protein targets.",
    "topic": "protein_prep",
    "doi": "10.7992/kh8yrccq",
    "keywords": [
      "nanodisc",
      "crystallization",
      "protein purification",
      "detergent",
      "stability"
    ]
  },
  {
    "id": 151,
    "title": "The ATG8 Family: LC3s and GABARAPs in Autophagy",
    "authors": [
      "Akira Johnson",
      "Christopher Nakamura",
      "Christopher Silva",
      "Jessica Patel",
      "Hans Rodriguez"
    ],
    "journal": "Traffic",
    "year": 2025,
    "abstract": "Selective autophagy maintains cellular homeostasis by targeting specific cargoes for lysosomal degradation. This study characterizes the role of autophagy receptors in recognizing ubiquitinated protein aggregates. We employed cryo-electron microscopy to determine the structure of the receptor-cargo complex at near-atomic resolution. Our structural analysis combined with functional assays demonstrates that receptor oligomerization is essential for cargo clustering and efficient degradation. These findings advance our understanding of how cells maintain protein quality control through selective autophagy pathways.",
    "topic": "autophagy",
    "doi": "10.8316/tmutrkfy",
    "keywords": [
      "p62",
      "ATG proteins",
      "PI3K",
      "autophagy",
      "mitophagy"
    ]
  },
  {
    "id": 152,
    "title": "In Situ Visualization of Nuclear Pore Complexes by Cryo-ET",
    "authors": [
      "Sarah Smith",
      "Juan Novak",
      "Robert Liu",
      "Sophie Johnson",
      "Matthew Chen",
      "Pierre Cohen"
    ],
    "journal": "Methods in Enzymology",
    "year": 2024,
    "abstract": "In situ structural biology aims to determine protein structures within unperturbed cellular environments. Here we use cryo-electron tomography combined with subtomogram averaging to determine the structure of ribosomes actively engaged in translation on the endoplasmic reticulum membrane. Our analysis reveals the architecture of the translocon complex and its interaction with translating ribosomes. We observe distinct conformational states associated with different stages of protein translocation. These findings provide unprecedented insights into co-translational protein targeting and membrane insertion.",
    "topic": "cryo_et",
    "doi": "10.5945/e7jxhn7f",
    "keywords": [
      "cellular",
      "in situ",
      "native structure",
      "3D reconstruction"
    ]
  },
  {
    "id": 153,
    "title": "Hydrogen-Deuterium Exchange Mass Spectrometry for Protein Dynamics",
    "authors": [
      "Klaus Petrov",
      "Robert Nakamura",
      "Sophie Zhang",
      "Matthew Anderson",
      "Hans Nakamura",
      "James Liu",
      "Kevin Lee"
    ],
    "journal": "Frontiers in Molecular Biosciences",
    "year": 2025,
    "abstract": "The choice of detergent significantly impacts membrane protein stability and functionality. We conducted a comprehensive survey of forty different detergents and amphipols for their effects on a model G protein-coupled receptor. Our analysis reveals that short-chain detergents provide better solubilization while long-chain variants preserve native conformation. We introduce a scoring system that predicts optimal detergent selection based on protein structural class. This framework streamlines the detergent screening process and reduces optimization time.",
    "topic": "protein_prep",
    "doi": "10.4833/tk4r4n89",
    "keywords": [
      "detergent",
      "stability",
      "affinity chromatography",
      "membrane protein"
    ]
  },
  {
    "id": 154,
    "title": "In Situ Structure of the Nuclear Lamina by Cryo-ET",
    "authors": [
      "Klaus Anderson",
      "James Schmidt",
      "Jessica Silva",
      "Robert Martinez",
      "Christopher Nakamura",
      "Pierre Lee",
      "Lisa Wang"
    ],
    "journal": "Frontiers in Molecular Biosciences",
    "year": 2023,
    "abstract": "Cryo-electron tomography provides three-dimensional views of cellular structures in their native state. We applied cryo-ET to determine the in situ architecture of the nuclear pore complex within intact nuclear envelopes. Through subtomogram averaging of thousands of individual complexes, we achieved sufficient resolution to trace the path of transport substrates through the central channel. Our results reveal conformational differences between nuclear pore complexes in different functional states. This work demonstrates the power of in situ structural biology for understanding macromolecular machines within their cellular context.",
    "topic": "cryo_et",
    "doi": "10.7415/52ufk4vw",
    "keywords": [
      "native structure",
      "subtomogram averaging",
      "organelle"
    ]
  },
  {
    "id": 155,
    "title": "Autophagy in Skeletal Muscle Homeostasis and Atrophy",
    "authors": [
      "Christopher Brown",
      "Daniel Wang",
      "Christopher Johnson",
      "Pierre Evans"
    ],
    "journal": "Current Opinion in Structural Biology",
    "year": 2019,
    "abstract": "Selective autophagy maintains cellular homeostasis by targeting specific cargoes for lysosomal degradation. This study characterizes the role of autophagy receptors in recognizing ubiquitinated protein aggregates. We employed cryo-electron microscopy to determine the structure of the receptor-cargo complex at near-atomic resolution. Our structural analysis combined with functional assays demonstrates that receptor oligomerization is essential for cargo clustering and efficient degradation. These findings advance our understanding of how cells maintain protein quality control through selective autophagy pathways.",
    "topic": "autophagy",
    "doi": "10.5494/bbk8w2da",
    "keywords": [
      "LC3",
      "PI3K",
      "ULK1",
      "mitophagy"
    ]
  },
  {
    "id": 156,
    "title": "Cryo-FIB Milling of Yeast Cells for Organelle Imaging",
    "authors": [
      "Michael Novak",
      "Jennifer Chen",
      "Klaus Kowalski",
      "Jessica Nakamura",
      "Hans Evans",
      "Maria Rodriguez",
      "Maria Novak"
    ],
    "journal": "Ultramicroscopy",
    "year": 2024,
    "abstract": "Site-specific targeting of cellular structures by cryo-FIB remains a major challenge. We developed a correlative microscopy approach combining fluorescence-guided targeting with cryo-FIB milling. The workflow enables precise lamella preparation at regions of interest identified by light microscopy. Using this method, we successfully targeted and visualized rare cellular events including virus assembly sites and autophagosome formation. Our approach bridges the resolution gap between light and electron microscopy for in situ structural studies.",
    "topic": "cryo_fib",
    "doi": "10.5967/8a88d9rh",
    "keywords": [
      "sample preparation",
      "ion beam",
      "focused ion beam",
      "in situ",
      "lamella"
    ]
  },
  {
    "id": 157,
    "title": "Cryo-FIB Sample Thickness Optimization for Subtomogram Averaging",
    "authors": [
      "Laura Johnson",
      "Chen Thompson",
      "Olga Chen",
      "Sophie Patel",
      "Matthew Martinez",
      "Sarah Dubois"
    ],
    "journal": "Scientific Reports",
    "year": 2024,
    "abstract": "The integration of cryo-FIB with cryo-electron tomography has transformed our ability to study cellular architecture. Here we present a comprehensive study comparing different ion sources and milling parameters for optimal sample preservation. Our systematic analysis reveals that gallium ion beams cause less structural damage than previously reported when appropriate milling strategies are employed. We introduce a step-wise milling protocol that minimizes heat-induced artifacts while maintaining structural integrity. These findings establish best practices for cryo-FIB sample preparation.",
    "topic": "cryo_fib",
    "doi": "10.4371/jy3u3tng",
    "keywords": [
      "in situ",
      "cellular",
      "cryo-EM"
    ]
  },
  {
    "id": 158,
    "title": "Real-Time Monitoring of Cryo-FIB Milling Progress",
    "authors": [
      "Thomas M\u00fcller",
      "Kevin Thompson",
      "Klaus Taylor",
      "Priya Martinez",
      "Sarah Lee"
    ],
    "journal": "Cell",
    "year": 2019,
    "abstract": "Automated cryo-FIB workflows are essential for scaling in situ structural biology. We engineered a robotic system that performs grid clipping, target selection, and lamella milling without human intervention. The system uses machine learning algorithms to identify optimal milling sites and predict lamella quality. Throughput is increased tenfold compared to manual operation while maintaining consistent quality. We demonstrate the system by preparing over two hundred lamellae from mammalian cells in a single session.",
    "topic": "cryo_fib",
    "doi": "10.7353/3zu9htyf",
    "keywords": [
      "in situ",
      "focused ion beam",
      "cellular",
      "FIB milling"
    ]
  },
  {
    "id": 159,
    "title": "Molecular Mechanisms of Autophagosome-Lysosome Fusion",
    "authors": [
      "Emma Petrov",
      "Kevin Dubois",
      "Olga Wilson",
      "Thomas Johnson",
      "Rachel Chen"
    ],
    "journal": "EMBO Journal",
    "year": 2025,
    "abstract": "Autophagy is a fundamental cellular process responsible for the degradation and recycling of cytoplasmic components. Here we investigate the molecular mechanisms governing selective autophagy in mammalian cells under nutrient starvation conditions. Using a combination of live-cell imaging, CRISPR knockout screens, and biochemical assays, we identify novel regulators of autophagosome formation. Our findings reveal a previously unknown regulatory pathway that coordinates autophagy initiation with cellular energy status. These results provide new insights into the complex network controlling autophagy and have implications for understanding autophagy-related diseases.",
    "topic": "autophagy",
    "doi": "10.4954/zs2yxs3c",
    "keywords": [
      "p62",
      "ATG proteins",
      "selective autophagy"
    ]
  },
  {
    "id": 160,
    "title": "Autophagy and Innate Immunity: Cellular Defense Mechanisms",
    "authors": [
      "James Wilson",
      "Laura Kim",
      "Hans Yoshida",
      "Christopher Liu",
      "Anna Cohen"
    ],
    "journal": "PNAS",
    "year": 2021,
    "abstract": "Autophagy is a fundamental cellular process responsible for the degradation and recycling of cytoplasmic components. Here we investigate the molecular mechanisms governing selective autophagy in mammalian cells under nutrient starvation conditions. Using a combination of live-cell imaging, CRISPR knockout screens, and biochemical assays, we identify novel regulators of autophagosome formation. Our findings reveal a previously unknown regulatory pathway that coordinates autophagy initiation with cellular energy status. These results provide new insights into the complex network controlling autophagy and have implications for understanding autophagy-related diseases.",
    "topic": "autophagy",
    "doi": "10.1152/r99cgj76",
    "keywords": [
      "mitophagy",
      "selective autophagy",
      "autophagosome"
    ]
  }
];
