import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  ...props
}: ButtonProps) {
  // Temel stiller
  const base =
    'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-95';

  // Renk Varyantları
  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-gradient-to-br from-[#818cf8] to-[#c084fc] text-white hover:shadow-[0_0_20px_rgba(129,140,248,0.4)] focus:ring-[#818cf8]',
    secondary:
      'bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-white/20 focus:ring-gray-500',
    danger:
      'bg-gradient-to-br from-[#fb7185] to-[#f43f5e] text-white hover:shadow-[0_0_20px_rgba(251,113,133,0.4)] focus:ring-[#fb7185]',
    ghost: 'bg-transparent text-gray-400 hover:text-white hover:bg-white/5 focus:ring-gray-400',
  };

  // Boyut Varyantları
  const sizes: Record<ButtonSize, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
}