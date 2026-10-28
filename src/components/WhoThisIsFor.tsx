'use client';

import React from 'react';
import PillLabel from './PillLabel';

export default function WhoThisIsFor() {
  return (
    <section
      id="who-this-is-for"
      className="w-full bg-[#F7F8FA] border-y border-[#E7EAEF] py-20 md:py-28"
    >
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-10">
        {/* Section Header Stack */}
        <div className="flex flex-col items-start mb-10">
          <PillLabel className="mb-4">WHO THIS IS FOR</PillLabel>
          <h2 className="headline-lg text-[#0D1117] mb-6">
            WHO THIS IS FOR
          </h2>
        </div>

        {/* Card Component */}
        <div className="rounded-[18px] bg-white border border-[#E7EAEF] p-8 sm:p-12 shadow-card">
          <p className="lead-text text-[#363C47] text-xl sm:text-2xl leading-relaxed font-normal">
            Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.
          </p>
        </div>
      </div>
    </section>
  );
}
