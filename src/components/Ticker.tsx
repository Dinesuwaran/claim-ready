'use client';

import React from 'react';

const TICKER_ITEMS = [
  'CLAIM READY',
  'A free checklist for anyone about to file a warranty claim.',
  'A warranty claim is decided on records. Keep yours, and ask for theirs in writing.',
  '15 steps in the checklist.',
  '4 records to keep before anything goes wrong.',
  '1 rule: if it is not in writing, it did not happen.',
];

export default function Ticker() {
  return (
    <aside
      className="w-full bg-[#EEFAF5] border-b border-[#B9E6D6] text-[#065F43] py-2.5 overflow-hidden select-none"
    >
      <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
        {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center space-x-6 mx-5 whitespace-nowrap"
          >
            <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
              {item}
            </span>
            <span
              className="text-[#087A58] opacity-60 text-xs font-mono"
              aria-hidden="true"
            >
              /
            </span>
          </div>
        ))}
      </div>
    </aside>
  );
}
