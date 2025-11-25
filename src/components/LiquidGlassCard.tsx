'use client';

import React from 'react';

type Variant = 'default' | 'subtle' | 'intense';
type Size = 'sm' | 'md' | 'lg';

export interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
  hover?: boolean;
  morphing?: boolean;
  delay?: number;
}

function cn(...classes: Array<string | undefined | false>): string {
  return classes.filter(Boolean).join(' ');
}

const variantClassMap: Record<Variant, string> = {
  default:
    'bg-white/10 text-white shadow-2xl shadow-purple-900/20 border-white/20',
  subtle:
    'bg-white/5 text-white shadow-xl shadow-purple-900/10 border-white/10',
  intense:
    'bg-gradient-to-br from-purple-500/40 via-blue-500/30 to-indigo-500/40 text-white border-white/30 shadow-[0_20px_60px_rgba(99,102,241,0.35)]',
};

const sizeClassMap: Record<Size, string> = {
  sm: 'p-4 rounded-2xl',
  md: 'p-6 rounded-3xl',
  lg: 'p-8 rounded-[32px]',
};

export default function LiquidGlassCard({
  children,
  className,
  variant = 'default',
  size = 'md',
  hover = false,
  morphing = false,
  delay = 0,
}: LiquidGlassCardProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden border backdrop-blur-2xl transition-transform duration-500',
        'before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/10 before:to-white/5 before:opacity-0 before:transition-opacity before:duration-500',
        hover && 'hover:-translate-y-2 hover:before:opacity-100',
        morphing && 'animate-liquid-card',
        variantClassMap[variant],
        sizeClassMap[size],
        className,
      )}
      style={morphing ? ({ animationDelay: `${delay}s` } as React.CSSProperties) : undefined}
    >
      <div className="relative z-10">{children}</div>
    </div>
  );
}
