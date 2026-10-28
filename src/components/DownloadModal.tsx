'use client';

import React, { useState } from 'react';
import {
  X,
  Download,
  FileText,
  Printer,
  Copy,
  Check,
  ShieldCheck,
} from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const getFullChecklistText = () => {
    return `CLAIM READY
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

KEY NUMBERS FOR THE PAGE
15 steps in the checklist.
4 records to keep before anything goes wrong.
1 rule: if it is not in writing, it did not happen.

CALL TO ACTION
Download the checklist and keep it with your invoices.
Share it with a friend who just bought something expensive.

FOOTER NOTE
Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules.`;
  };

  const handleDownload = (format: 'txt' | 'md') => {
    const text = getFullChecklistText();
    const blob = new Blob([text], {
      type: format === 'txt' ? 'text/plain;charset=utf-8' : 'text/markdown;charset=utf-8',
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `claim-ready-checklist.${format}`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getFullChecklistText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Ignore
    }
  };

  const handlePrint = () => {
    onClose();
    setTimeout(() => {
      window.print();
    }, 300);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0D1117]/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white rounded-[26px] p-6 sm:p-8 shadow-float border border-[#E7EAEF] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-6 right-6 p-2 rounded-full text-[#5B6472] hover:text-[#0D1117] hover:bg-[#F7F8FA] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-full bg-[#EEFAF5] border border-[#B9E6D6] flex items-center justify-center text-[#087A58]">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-wider text-[#065F43] block">
              OFFLINE EXPORT
            </span>
            <h3 className="font-sans font-extrabold text-xl text-[#0D1117]">
              Get Claim Ready Checklist
            </h3>
          </div>
        </div>

        <p className="text-[14px] leading-relaxed text-[#5B6472] mb-6">
          Download the complete 15-step checklist and keep it stored with your device invoices and receipts.
        </p>

        {/* Options */}
        <div className="space-y-3 mb-8">
          <button
            onClick={() => handleDownload('txt')}
            className="w-full flex items-center justify-between p-4 rounded-[14px] border border-[#E7EAEF] hover:border-[#087A58] hover:bg-[#FBFCFD] transition-all group text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#EEFAF5] text-[#087A58] flex items-center justify-center">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm text-[#0D1117] group-hover:text-[#087A58] transition-colors">
                  Plain Text File (.txt)
                </h4>
                <p className="text-xs text-[#5B6472]">
                  Compatible with any computer, phone, or note app
                </p>
              </div>
            </div>
            <Download className="w-4 h-4 text-[#5B6472] group-hover:text-[#087A58]" />
          </button>

          <button
            onClick={() => handleDownload('md')}
            className="w-full flex items-center justify-between p-4 rounded-[14px] border border-[#E7EAEF] hover:border-[#087A58] hover:bg-[#FBFCFD] transition-all group text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#EEFAF5] text-[#087A58] flex items-center justify-center">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm text-[#0D1117] group-hover:text-[#087A58] transition-colors">
                  Markdown Document (.md)
                </h4>
                <p className="text-xs text-[#5B6472]">
                  Ideal for Obsidian, Notion, GitHub or personal wikis
                </p>
              </div>
            </div>
            <Download className="w-4 h-4 text-[#5B6472] group-hover:text-[#087A58]" />
          </button>

          <button
            onClick={handlePrint}
            className="w-full flex items-center justify-between p-4 rounded-[14px] border border-[#E7EAEF] hover:border-[#087A58] hover:bg-[#FBFCFD] transition-all group text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#EEFAF5] text-[#087A58] flex items-center justify-center">
                <Printer className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-sans font-bold text-sm text-[#0D1117] group-hover:text-[#087A58] transition-colors">
                  Print or Save as PDF
                </h4>
                <p className="text-xs text-[#5B6472]">
                  Clean, ink-friendly printable layout
                </p>
              </div>
            </div>
            <Printer className="w-4 h-4 text-[#5B6472] group-hover:text-[#087A58]" />
          </button>
        </div>

        {/* Copy All Button */}
        <button
          onClick={handleCopy}
          className="w-full py-3 px-4 rounded-full bg-[#F2F4F7] hover:bg-[#E7EAEF] text-[#0D1117] text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-[#087A58]" />
              <span className="text-[#087A58]">Full Checklist Text Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-4 h-4 text-[#5B6472]" />
              <span>Copy Full Checklist to Clipboard</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
