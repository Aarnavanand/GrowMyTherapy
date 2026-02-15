'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import bioImage from '../../public/drmaya.png';
import bioImage2 from '../../public/bio2.webp';
import FadeIn from '../ui/fade-in';

export default function Bio() {
  return (
    // Decreased padding to py-24/32 and updated to theme background
    <section id="bio" className="relative bg-[#F9F7F2] py-24 md:py-32 overflow-hidden border-t border-[#1A1A1A]/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">

          {/* Text Content Column: Editorial Focus */}
          <div className="lg:col-span-6 flex flex-col space-y-10 order-2 lg:order-1">
            <FadeIn direction="left">
              <div className="space-y-6">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#4A5D4A] font-bold">
                  Meet Your Therapist
                </span>
                <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-[#1A1A1A] tracking-tighter leading-[0.9]">
                  Hi, I&apos;m <span className="italic font-normal text-[#4A5D4A]">Maya.</span>
                </h2>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="space-y-8">
                <p className="text-xl md:text-2xl text-[#1A1A1A]/70 leading-relaxed font-sans max-w-xl">
                  I specialize in working with high-achieving professionals and creatives who appear functional on the outside but are quietly struggling with perfectionism and burnout.
                </p>
                <p className="text-lg text-[#1A1A1A]/50 font-sans leading-relaxed max-w-lg border-l-2 border-[#4A5D4A]/20 pl-8">
                  My goal is to help you navigate the complexities of your professional and personal life, ensuring you feel more regulated, grounded, and resilient.
                </p>

                <div className="pt-4">
                  <button className="group flex items-center gap-6 bg-[#1A1A1A] text-white px-10 py-5 text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#4A5D4A] transition-all duration-500 shadow-xl">
                    Let&apos;s Collaborate
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Overlapping Image Composition: Anti-Gravity Style */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <FadeIn direction="right" delay={0.3} className="relative w-full max-w-[550px] mx-auto lg:ml-auto">

              {/* Main Arched Image */}
              <div
                className="w-[88%] aspect-[4/5] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] relative z-10"
                style={{ borderRadius: '1000px 1000px 0 0' }}
              >
                <Image
                  src={bioImage}
                  alt="Dr. Maya Reynolds, PsyD"
                  fill
                  className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-[2s] ease-out"
                />
              </div>

              {/* Floating Circle Image: Refined "Cut-out" */}
              <div className="absolute -bottom-10 -right-4 md:-right-8 w-[50%] aspect-square rounded-full overflow-hidden border-[15px] border-[#F9F7F2] shadow-2xl z-20 hidden sm:block">
                <Image
                  src={bioImage2}
                  alt="Serene therapeutic environment detail"
                  fill
                  className="object-cover grayscale-[0.4] hover:grayscale-0 transition-all duration-[2s] ease-out"
                />
              </div>

              {/* Subtle Background Accent */}
              <div className="absolute top-20 -left-10 w-full h-full border border-[#4A5D4A]/10 rounded-[1000px_1000px_0_0] -z-10" />
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}