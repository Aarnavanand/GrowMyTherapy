'use client';

import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import Image from 'next/image';
import splitHighlight from '../../public/splitHighlight.webp';
import FadeIn from '../ui/fade-in';

export default function SplitHighlight() {
  const symptoms = [
    'Persistent feelings of burnout or chronic stress',
    'Difficulty balancing professional demands with personal life',
    'Feeling constantly "on edge" or overwhelmed',
    'Trouble focusing or making critical decisions',
    'A pervasive sense of perfectionism holding you back',
  ];

  return (
    // Changed to Charcoal background to create a premium "break" on the page
    <section className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[600px] overflow-hidden bg-[#1A1A1A]">

      {/* Left Image Column: Editorial Focus */}
      <FadeIn direction="left" fullWidth className="h-full">
        <div className="relative h-[400px] md:h-[500px] lg:h-full w-full group">
          <Image
            src={splitHighlight}
            alt="Woman sitting peacefully representing mental clarity"
            fill
            className="object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-1000"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          {/* Subtle overlay to blend image with charcoal theme */}
          <div className="absolute inset-0 bg-[#1A1A1A]/20 mix-blend-multiply" />
        </div>
      </FadeIn>

      {/* Right Content Column: Refined Spacing & Typography */}
      <FadeIn direction="right" delay={0.2} fullWidth className="h-full">
        <div className="flex flex-col justify-center h-full text-[#F9F7F2]">

          {/* Reduced py-24 for a tighter, more intentional layout */}
          <div className="px-8 md:px-16 lg:px-24 py-20 md:py-24">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] mb-10 tracking-tighter">
              You don&apos;t have to navigate this <span className="italic font-normal text-[#4A5D4A]">alone.</span>
            </h2>

            <div className="space-y-12 max-w-lg">
              <p className="text-xl md:text-2xl font-sans text-[#F9F7F2]/80 leading-relaxed border-l border-[#4A5D4A] pl-6">
                If you are facing the pressures of a high-stakes career, there is a path toward resilience.
              </p>

              {/* Refined List: Replaced bullets with Muted Sage icons */}
              <ul className="space-y-6">
                {symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-[#4A5D4A] mt-1 shrink-0" />
                    <span className="text-base md:text-lg text-[#F9F7F2]/70 font-sans leading-snug">
                      {symptom}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Integrated CTA */}
              <div className="pt-6">
                <button className="group flex items-center gap-4 text-[#F9F7F2] text-xs font-bold tracking-[0.3em] uppercase transition-all">
                  <span className="border-b border-[#F9F7F2]/30 pb-1 group-hover:border-[#4A5D4A] transition-colors">
                    Reach Out Today
                  </span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2 text-[#4A5D4A]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}