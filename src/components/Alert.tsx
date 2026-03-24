import type { ReactNode } from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'error';

interface AlertProps {
  children: ReactNode;
  variant?: AlertVariant;
  title?: string;
  dismissible?: boolean;
  onDismiss?: () => void;
}

export default function Alert({
  children,
  variant = 'info',
  title,
  dismissible = false,
  onDismiss,
}: AlertProps) {
  const variants: Record<AlertVariant, string> = {
    info: 'bg-blue-500/10 border-blue-500/50 text-blue-200',
    success: 'bg-emerald-500/10 border-emerald-500/50 text-emerald-200',
    warning: 'bg-amber-500/10 border-amber-500/50 text-amber-200',
    error: 'bg-rose-500/10 border-rose-500/50 text-rose-200',
  };

  return (
    <div role="alert" className={`border-l-4 rounded-r-lg p-4 ${variants[variant]}`}>
      <div className="flex justify-between items-start">
        <div>
          {title && <p className="font-semibold mb-1">{title}</p>}
          <p className="text-sm">{children}</p>
        </div>
        {dismissible && (
          <button
            onClick={onDismiss}
            className="ml-4 opacity-60 hover:opacity-100"
            aria-label="Kapat"
          >
            &#10005;
          </button>
        )}
      </div>
    </div>
  );
}