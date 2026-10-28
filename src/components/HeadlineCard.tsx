'use client';

import React from 'react';

export default function HeadlineCard() {
  return (
    <section className="w-full max-w-[1180px] mx-auto px-5 sm:px-8 md:px-10 my-10 sm:my-14">
      <div className="relative rounded-[26px] bg-[#0D1117] text-white p-8 sm:p-12 md:p-14 overflow-hidden shadow-raised border border-white/10 scanline-pattern">
        <div className="relative z-10 flex flex-col items-start max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 mb-6 text-[#34D399] font-mono text-[10px] sm:text-[11px] font-medium tracking-[0.16em] uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
            <span>THE IDEA IN ONE LINE</span>
          </div>

          {/* Large sentence in mono/display type with Bright Emerald accent */}
          <blockquote className="font-sans md:font-mono text-2xl sm:text-3xl md:text-[34px] font-bold leading-[1.25] tracking-tight text-white">
            &ldquo;A warranty claim is decided on records.{' '}
            <span className="text-[#34D399] underline decoration-[#34D399]/40 underline-offset-8">
              Keep yours, and ask for theirs in writing.
            </span>
            &rdquo;
          </blockquote>
        </div>
      </div>
    </section>
  );
}
