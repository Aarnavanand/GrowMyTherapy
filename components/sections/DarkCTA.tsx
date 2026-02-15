'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import FadeIn from '../ui/fade-in';

export default function DarkCTA() {
  return (
    // bg-[#1A1A1A] for the dark theme
    // py-24 md:py-32 for consistent section spacing
    <section id="contact" className="relative bg-[#1A1A1A] py-24 md:py-32 lg:py-48 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-white/5">

      {/* Decorative Blur Element for Anti-Gravity depth */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#4A5D4A]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Content Column: Shifted to a 10-column span for editorial feel */}
          <div className="lg:col-span-10 flex flex-col items-start text-left space-y-12">

            <FadeIn direction="left">
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-[0.5em] text-[#4A5D4A] font-bold">
                  Final Step
                </span>
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-[#F9F7F2] tracking-tighter leading-[0.9]">
                  Begin Your <br />
                  <span className="italic font-normal text-[#4A5D4A]">Renewal.</span>
                </h2>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="space-y-8 max-w-2xl">
                <p className="text-xl md:text-2xl lg:text-3xl text-[#F9F7F2]/80 font-sans leading-relaxed">
                  Ready to move from burnout to sustainable balance?
                </p>
                <div className="h-[1px] w-24 bg-white/10" />
                <p className="text-base md:text-lg text-[#F9F7F2]/40 font-sans max-w-lg leading-relaxed">
                  Contact me today to schedule your initial consultation in Santa Monica. I look forward to supporting your therapeutic journey.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.4}>
              <button className="group relative bg-[#F9F7F2] text-[#1A1A1A] px-12 py-6 text-xs font-bold tracking-[0.3em] uppercase hover:bg-[#4A5D4A] hover:text-white transition-all duration-500 shadow-2xl flex items-center gap-4">
                Schedule a Consultation
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </button>
            </FadeIn>

          </div>
        </div>
      </div>
    </section>
  );
}