'use client';

import React, { useState } from 'react';
import PillLabel from './PillLabel';
import { CHECKLIST_SECTIONS } from '@/data/checklist';
import { Check } from 'lucide-react';

export default function ChecklistSection() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStep = (stepNumber: number) => {
    setCompletedSteps((prev) =>
      prev.includes(stepNumber)
        ? prev.filter((n) => n !== stepNumber)
        : [...prev, stepNumber]
    );
  };

  return (
    <div className="w-full bg-white">
      {CHECKLIST_SECTIONS.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          className={`w-full py-16 md:py-24 border-t border-[#E7EAEF] ${
            idx % 2 === 1 ? 'bg-[#F7F8FA]' : 'bg-white'
          }`}
        >
          <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-10">
            {/* Section Header Stack */}
            <div className="flex flex-col items-start mb-12">
              <PillLabel className="mb-4">{section.title}</PillLabel>
              <h2 className="headline-lg text-[#0D1117]">
                {section.title}
              </h2>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {section.steps.map((step) => {
                const isChecked = completedSteps.includes(step.number);
                return (
                  <div
                    key={step.number}
                    onClick={() => toggleStep(step.number)}
                    className={`cursor-pointer rounded-[18px] border transition-all duration-200 p-7 sm:p-8 flex flex-col justify-between ${
                      isChecked
                        ? 'bg-[#EEFAF5] border-[#B9E6D6] shadow-sm'
                        : 'bg-white border-[#E7EAEF] hover:border-[#D6DBE3] hover:-translate-y-0.5 shadow-card hover:shadow-raised'
                    }`}
                  >
                    <div>
                      {/* Step Number & Checkbox */}
                      <div className="flex items-center justify-between mb-4">
                        <span
                          className={`font-mono text-sm font-bold px-3 py-1 rounded-full ${
                            isChecked
                              ? 'bg-[#087A58] text-white'
                              : 'bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6]'
                          }`}
                        >
                          {step.number}
                        </span>

                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center transition-all ${
                            isChecked
                              ? 'bg-[#087A58] text-white ring-2 ring-[#087A58] ring-offset-2'
                              : 'bg-[#F2F4F7] text-transparent border border-[#D6DBE3]'
                          }`}
                        >
                          <Check className="w-4 h-4" />
                        </div>
                      </div>

                      {/* Step Title from content.txt */}
                      <h3
                        className={`font-sans font-extrabold text-[19px] sm:text-[21px] mb-3 leading-snug tracking-tight ${
                          isChecked ? 'text-[#065F43]' : 'text-[#0D1117]'
                        }`}
                      >
                        {step.title}
                      </h3>

                      {/* Step Detail from content.txt */}
                      <p className="text-[15px] sm:text-[16px] leading-[1.72] text-[#363C47]">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
