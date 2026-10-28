'use client';

import React from 'react';

export default function KeyNumbersSection() {
  const stats = [
    {
      number: '15',
      label: 'steps in the checklist.',
      isHot: true,
    },
    {
      number: '4',
      label: 'records to keep before anything goes wrong.',
      isHot: false,
    },
    {
      number: '1',
      label: 'rule: if it is not in writing, it did not happen.',
      isHot: false,
    },
  ];

  return (
    <section
      id="key-numbers"
      className="w-full bg-[#0D1117] text-white py-20 md:py-28 relative overflow-hidden"
    >
      <div className="relative z-10 max-w-[1180px] mx-auto px-5 sm:px-8 md:px-10">
        {/* Stat Grid with 1px hairline border gaps */}
        <div className="rounded-[26px] overflow-hidden border border-white/10 bg-white/10 grid grid-cols-1 md:grid-cols-3 gap-px shadow-raised">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#0D1117] p-8 sm:p-12 flex flex-col justify-center group hover:bg-[#131923] transition-colors duration-200"
            >
              <div className="mb-6">
                <span
                  className={`stat-number ${
                    stat.isHot ? 'text-[#34D399]' : 'text-white'
                  }`}
                >
                  {stat.number}
                </span>
              </div>

              {/* Exact wording from content.txt */}
              <h3 className="font-sans font-bold text-xl sm:text-[22px] leading-snug text-white">
                {stat.label}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
