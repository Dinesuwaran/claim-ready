'use client';

import React from 'react';
import { ShieldCheck, ArrowDownToLine } from 'lucide-react';

export default function Navbar() {
  const navLinks = [
    { label: 'WHO THIS IS FOR', href: '#who-this-is-for' },
    { label: 'BEFORE ANYTHING GOES WRONG', href: '#before-anything-goes-wrong' },
    { label: 'WHEN THE FAULT APPEARS', href: '#when-the-fault-appears' },
    { label: 'WHEN A TECHNICIAN VISITS', href: '#when-a-technician-visits' },
    { label: 'IF THE CLAIM IS REFUSED', href: '#if-the-claim-is-refused' },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  return (
    <header className="sticky top-0 z-40 w-full h-[72px] bg-white/92 backdrop-blur-md border-b border-[#E7EAEF] transition-all">
      <div className="max-w-[1180px] h-full mx-auto px-4 sm:px-8 md:px-10 flex items-center justify-between">
        {/* Brand logo & wordmark */}
        <a
          href="#"
          className="flex items-center gap-2.5 sm:gap-3 text-[#0D1117] group focus:outline-none focus:ring-2 focus:ring-[#087A58] focus:ring-offset-2 rounded-full flex-shrink-0"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center text-[#087A58] group-hover:bg-[#087A58] group-hover:text-white transition-colors duration-200">
            <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className="font-extrabold text-[17px] sm:text-[19px] tracking-[-0.03em] font-sans text-[#0D1117]">
            CLAIM READY
          </span>
        </a>

        {/* Desktop Nav Links: Hidden on small screens */}
        <nav className="hidden xl:flex items-center gap-6 text-[11px] font-mono tracking-wider text-[#5B6472]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="hover:text-[#0D1117] transition-colors focus:outline-none focus:text-[#087A58]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Download Button: Always visible, fits alongside logo on small screens */}
        <div className="flex items-center flex-shrink-0">
          <button
            onClick={handleDownload}
            className="inline-flex items-center gap-1.5 sm:gap-2 bg-[#0D1117] hover:bg-[#087A58] text-white text-[12px] sm:text-[13px] font-semibold px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#087A58] focus:ring-offset-2"
          >
            <ArrowDownToLine className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="hidden sm:inline">Download the checklist</span>
            <span className="sm:hidden">Download</span>
          </button>
        </div>
      </div>
    </header>
  );
}
