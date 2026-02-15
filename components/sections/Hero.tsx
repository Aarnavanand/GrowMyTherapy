'use client';

import React from 'react';
import Image from 'next/image';
import hero from '../../public/drmaya.png';
import FadeIn from '../ui/fade-in';

export default function Hero() {
  return (
    // Removed min-h-screen to prevent excessive empty space at the bottom
    <section className="relative w-full pt-40 lg:pt-52 pb-24 bg-[#F9F7F2] overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/50 -z-10" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          <div className="lg:col-span-7 flex flex-col space-y-10 order-2 lg:order-1 relative z-10">
            <FadeIn>
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-[0.4em] text-[#4A5D4A] font-bold block mb-4">
                  Licensed Clinical Psychologist
                </span>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-[#1A1A1A] leading-[0.9] tracking-tighter">
                  Reclaim Your <br />
                  <span className="italic font-normal text-[#4A5D4A]">Resilience.</span>
                </h1>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-12">
                <p className="text-xl md:text-2xl text-[#1A1A1A]/70 leading-relaxed font-sans max-w-xl">
                  Specialized therapy for high-achieving professionals in Santa Monica.
                  Moving you from burnout to sustainable balance.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                  <button className="bg-[#1A1A1A] text-white px-10 py-5 text-xs uppercase tracking-widest font-bold hover:bg-[#4A5D4A] transition-all shadow-lg">
                    Schedule a Consultation
                  </button>
                  <span className="text-[#1A1A1A]/40 text-[10px] uppercase tracking-[0.3em] font-bold">
                    In-Person & Telehealth
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <FadeIn direction="right" delay={0.4} className="relative w-full max-w-[500px]">
              <div
                className="w-full aspect-[4/5] overflow-hidden relative shadow-2xl"
                style={{ borderRadius: '1000px 1000px 0 0' }}
              >
                <Image
                  src={hero}
                  alt="Dr. Maya Reynolds"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}