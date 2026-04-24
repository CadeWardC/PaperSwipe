import type { LucideIcon } from 'lucide-react';

interface EmptyStateProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  action?: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
  };
}

export function EmptyState({ icon: Icon, title, subtitle, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center px-8 text-center">
      <Icon className="w-12 h-12 text-midgrey mb-4" style={{ opacity: 0.3 }} />
      <h3 className="text-lg font-semibold text-charcoal tracking-tight mb-1">{title}</h3>
      <p className="text-[15px] text-midgrey leading-relaxed mb-6">{subtitle}</p>
      {action && (
        <button
          onClick={action.onClick}
          className="flex items-center justify-center gap-2 w-full max-w-xs h-11 border border-charcoal rounded-xl text-charcoal text-sm font-medium hover:bg-charcoal hover:text-white transition-colors"
        >
          <action.icon className="w-5 h-5" />
          {action.label}
        </button>
      )}
    </div>
  );
}
