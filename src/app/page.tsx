'use client';

import React from 'react';
import Ticker from '@/components/Ticker';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import HeadlineCard from '@/components/HeadlineCard';
import WhoThisIsFor from '@/components/WhoThisIsFor';
import ChecklistSection from '@/components/ChecklistSection';
import KeyNumbersSection from '@/components/KeyNumbersSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Ticker strip */}
      <Ticker />

      {/* Sticky Navbar */}
      <Navbar />

      <main className="flex-grow">
        {/* CLAIM READY */}
        <Hero />

        {/* THE IDEA IN ONE LINE */}
        <HeadlineCard />

        {/* WHO THIS IS FOR */}
        <WhoThisIsFor />

        {/* 
          BEFORE ANYTHING GOES WRONG (Steps 1-4)
          WHEN THE FAULT APPEARS (Steps 5-7)
          WHEN A TECHNICIAN VISITS (Steps 8-10)
          IF THE CLAIM IS REFUSED (Steps 11-15)
        */}
        <ChecklistSection />

        {/* KEY NUMBERS FOR THE PAGE */}
        <KeyNumbersSection />

        {/* CALL TO ACTION */}
        <CallToAction />
      </main>

      {/* FOOTER NOTE */}
      <Footer />
    </div>
  );
}
