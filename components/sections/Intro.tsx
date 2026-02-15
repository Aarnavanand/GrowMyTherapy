'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import intro from '../../public/intro.webp';
import FadeIn from '../ui/fade-in';

export default function Intro() {
  return (
    // Reduced pt-12 and pb-24 for a tighter, high-end flow
    <section className="relative w-full bg-white pt-12 pb-24 md:pb-32 lg:pb-40 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-16 lg:gap-16 items-start">

          <div className="lg:col-span-6 relative z-10 pt-8 md:pt-16">
            <FadeIn direction="left">
              <div className="space-y-10">
                <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-[#1A1A1A] leading-[1.0] tracking-tighter">
                  Warm. <br />
                  Collaborative. <br />
                  <span className="italic font-normal text-[#4A5D4A]">Grounded.</span>
                </h2>

                <div className="space-y-8 text-[#1A1A1A]/70 text-lg md:text-xl lg:text-2xl max-w-lg leading-relaxed font-sans border-l-2 border-[#4A5D4A]/20 pl-8">
                  <p>
                    You appear functional and high-achieving on the outside, yet internally you feel &ldquo;on edge&rdquo;.
                  </p>
                  <p className="text-base text-[#1A1A1A]/50">
                    Integrating **CBT** and **EMDR** to address both the emotional and physiological layers of your healing.
                  </p>
                </div>

                <div className="pt-2">
                  <button className="group flex items-center gap-6 text-[#1A1A1A] text-xs font-bold tracking-[0.3em] uppercase transition-all">
                    <span className="border-b border-[#1A1A1A] pb-1 group-hover:border-[#4A5D4A]">
                      My Approach
                    </span>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>

          <div className="lg:col-span-6 relative mt-10 lg:mt-0">
            <FadeIn direction="right" delay={0.3}>
              <div className="relative aspect-[4/5] w-full max-w-[500px] mx-auto lg:ml-auto overflow-hidden shadow-lg rounded-sm">
                <Image
                  src={intro}
                  alt="Clinical environment representation"
                  fill
                  className="object-cover grayscale-[0.1] hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 w-1/2 h-1/2 bg-[#F9F7F2] -z-10 rounded-sm" />
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}