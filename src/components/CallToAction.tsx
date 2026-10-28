'use client';

import React from 'react';
import { ArrowDownToLine, Share2 } from 'lucide-react';

export default function CallToAction() {
  const handleDownload = () => {
    const text = `CLAIM READY
A free checklist for anyone about to file a warranty claim.

WHO THIS IS FOR
Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty,
and who wants the claim to be decided on facts, in writing.

THE IDEA IN ONE LINE
A warranty claim is decided on records. Keep yours, and ask for theirs in writing.

BEFORE ANYTHING GOES WRONG
1. Keep the invoice. Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date.
2. Register the product. Many brands ask you to register on their website or app; some add extra warranty when you do.
3. Read the warranty card once. Note how long it lasts, what it covers, and what it excludes.
4. Record the condition. Take a few dated photos of the product once it is installed or unboxed.

WHEN THE FAULT APPEARS
5. Record the fault. Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can.
6. Raise the complaint in writing. Use email, the brand's website or its app, not only a phone call, so there is a record.
7. Note every reference number. Write down the complaint or ticket number, the date and the name of anyone you speak to.

WHEN A TECHNICIAN VISITS
8. Ask for the job sheet. Ask the technician for a copy of the visit report or job sheet before they leave.
9. Ask what was tested. Ask which test or instrument was used to reach the diagnosis.
10. Take your own photos. Photograph the product and anything the technician points to, during the visit.

IF THE CLAIM IS REFUSED
11. Ask for the reason in writing. Request a written explanation that names the exact cause and the evidence for it.
12. Ask for the technical report. If the refusal rests on an inspection, ask for that inspection report.
13. Escalate inside the company. Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number.
14. Keep it factual. Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at.
15. Know your consumer helpline. Most countries run a free consumer helpline or online complaint portal that can guide you on the next step.

15 steps in the checklist.
4 records to keep before anything goes wrong.
1 rule: if it is not in writing, it did not happen.

Download the checklist and keep it with your invoices.
Share it with a friend who just bought something expensive.

Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.`;

    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'claim-ready.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'CLAIM READY',
          text: 'A free checklist for anyone about to file a warranty claim.',
          url: window.location.href,
        });
        return;
      } catch {
        // Fall back
      }
    }
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <section id="action" className="w-full bg-[#F7F8FA] border-t border-[#E7EAEF] py-20 md:py-28">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 md:px-10">
        {/* The Two Main Action Cards from content.txt */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-[18px] bg-white border border-[#E7EAEF] p-8 sm:p-10 shadow-card flex flex-col justify-between hover:shadow-raised transition-shadow">
            <h3 className="font-sans font-extrabold text-[22px] sm:text-[24px] text-[#0D1117] mb-8 leading-snug">
              Download the checklist and keep it with your invoices.
            </h3>
            <button
              onClick={handleDownload}
              className="inline-flex items-center justify-center gap-2.5 bg-[#087A58] hover:bg-[#066748] text-white font-semibold text-[15px] px-7 py-4 rounded-full shadow-raised hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto text-center"
            >
              <ArrowDownToLine className="w-4 h-4 flex-shrink-0" />
              <span>Download the checklist and keep it with your invoices.</span>
            </button>
          </div>

          <div className="rounded-[18px] bg-white border border-[#E7EAEF] p-8 sm:p-10 shadow-card flex flex-col justify-between hover:shadow-raised transition-shadow">
            <h3 className="font-sans font-extrabold text-[22px] sm:text-[24px] text-[#0D1117] mb-8 leading-snug">
              Share it with a friend who just bought something expensive.
            </h3>
            <button
              onClick={handleShare}
              className="inline-flex items-center justify-center gap-2.5 bg-[#0D1117] hover:bg-[#087A58] text-white font-semibold text-[15px] px-7 py-4 rounded-full shadow-raised hover:-translate-y-0.5 transition-all duration-200 w-full sm:w-auto text-center"
            >
              <Share2 className="w-4 h-4 flex-shrink-0" />
              <span>Share it with a friend who just bought something expensive.</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
