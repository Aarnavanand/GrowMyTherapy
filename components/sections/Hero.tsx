'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import hero from '../../public/hero.webp'
import FadeIn from '../ui/fade-in';

export default function Hero() {
  return (
    <div className="bg-[#FAF7F2] font-sans">

      {/* Hero Section */}
      <section className="w-full pt-24 lg:pt-20 pb-0 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Image Container with Custom Arch Mask */}
          <div className="relative flex justify-center lg:justify-start w-full">
            <FadeIn direction="right" delay={0.2} fullWidth>
              <div
                className="w-full max-w-[550px] aspect-[4/5] overflow-hidden relative"
                style={{
                  borderRadius: '500px 500px 0 0', // Creates the arch
                }}
              >
                <Image
                  src={hero}
                  alt="Person holding a bouquet of lilacs"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* Text Content */}
          <div className="text-center flex flex-col items-center space-y-8">
            <FadeIn delay={0.4}>
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-medium text-[#2D4024] leading-[1.1] tracking-tight">
                Live your life <br /> in full bloom
              </h1>
            </FadeIn>

            <FadeIn delay={0.6}>
              <p className="text-lg md:text-xl text-[#2D4024]">
                Therapy for Adults in Minneapolis, MN.
              </p>
            </FadeIn>

            <FadeIn delay={0.8}>
              <button className="mt-4 border border-[#2D3B2D] px-8 py-3.5 flex items-center gap-3 text-[#2D3B2D] hover:bg-[#2D3B2D] hover:text-white transition-all duration-300 group tracking-widest text-xs font-bold">
                CONNECT WITH ME
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </FadeIn>
          </div>

        </div>
      </section>
    </div>
  );
}