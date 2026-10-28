'use client';

import React from 'react';
import PillLabel from './PillLabel';
import { ArrowDownToLine, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden bg-white">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Copy Left (about 55% -> 7 columns) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <PillLabel className="mb-6">
              CLAIM READY
            </PillLabel>

            {/* Headline Display from content.txt */}
            <h1 className="headline-display text-[#0D1117] mb-6">
              CLAIM READY
            </h1>

            {/* Lead paragraph from content.txt */}
            <p className="lead-text text-[#5B6472] mb-10">
              A free checklist for anyone about to file a warranty claim.
            </p>

            {/* Actions using exact wording from content.txt */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full">
              <a
                href="#action"
                className="inline-flex items-center justify-center gap-2.5 bg-[#087A58] hover:bg-[#066748] text-white font-semibold text-[15px] px-7 py-3.5 rounded-full shadow-raised hover:-translate-y-0.5 transition-all duration-200 text-center"
              >
                <ArrowDownToLine className="w-4 h-4 flex-shrink-0" />
                <span>Download the checklist and keep it with your invoices.</span>
              </a>
            </div>
          </div>

          {/* Visual Right (about 45% -> 5 columns) */}
          <div className="lg:col-span-5 w-full">
            <div className="rounded-[26px] bg-[#FBFCFD] border border-[#E7EAEF] p-7 sm:p-8 shadow-card flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-9 h-9 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center text-[#087A58]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#065F43] font-semibold">
                    THE IDEA IN ONE LINE
                  </span>
                </div>

                <blockquote className="font-sans font-bold text-xl sm:text-2xl text-[#0D1117] leading-snug mb-6">
                  &ldquo;A warranty claim is decided on records. Keep yours, and ask for theirs in writing.&rdquo;
                </blockquote>
              </div>

              <div className="bg-[#EEFAF5] border border-[#B9E6D6] rounded-[18px] p-5">
                <p className="font-sans font-bold text-base text-[#065F43]">
                  1 rule: if it is not in writing, it did not happen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
