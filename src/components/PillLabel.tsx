'use client';

import React from 'react';

interface PillLabelProps {
  children: React.ReactNode;
  showDot?: boolean;
  className?: string;
  variant?: 'mint' | 'dark';
}

export default function PillLabel({
  children,
  showDot = true,
  className = '',
  variant = 'mint',
}: PillLabelProps) {
  if (variant === 'dark') {
    return (
      <div
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-primary-bright font-mono text-[10px] sm:text-[11px] font-medium tracking-[0.16em] uppercase ${className}`}
      >
        {showDot && (
          <span className="w-1.5 h-1.5 rounded-full bg-primary-bright animate-pulse" />
        )}
        <span>{children}</span>
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] text-[#065F43] font-mono text-[10px] sm:text-[11px] font-medium tracking-[0.16em] uppercase transition-colors ${className}`}
    >
      {showDot && <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />}
      <span>{children}</span>
    </div>
  );
}
