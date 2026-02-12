'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import bioImage from '../../public/bio.webp';
import bioImage2 from '../../public/bio2.webp';
import FadeIn from '../ui/fade-in';

export default function Bio() {
  return (
    /* Increased padding to py-32/48/60 and added a min-height for more impact */
    <section className="bg-[#E4E0D7] py-20 md:py-32 lg:py-40 px-8 md:px-16 lg:px-24 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">

        {/* Text Content */}
        <FadeIn direction="left" fullWidth className="h-full">
          <div className="flex flex-col items-start space-y-12">
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-medium text-[#2D3B2D] tracking-tight leading-[1.1]">
              Hi, I'm Lilac.
            </h2>

            <p className="text-[#2D3B2D] text-lg md:text-xl lg:text-2xl leading-relaxed max-w-lg">
              I'm committed to providing a safe and supportive environment
              where we can explore your thoughts, feelings, and behaviors. With
              empathy and guidance, we'll work together to navigate the
              challenges life throws your way.
            </p>

            {/* Alignment fixed to start (left) to match the text flow */}
            <button className="border border-[#2D3B2D] px-10 py-4 flex items-center gap-3 text-[#2D3B2D] text-xs font-bold tracking-[0.25em] uppercase hover:bg-[#2D3B2D] hover:text-white transition-all duration-300 group">
              LET'S CHAT
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </FadeIn>

        {/* Overlapping Image Composition */}
        <FadeIn direction="right" delay={0.2} fullWidth className="h-full">
          <div className="relative w-full max-w-[550px] mx-auto lg:ml-auto">

            {/* Main Arched Image */}
            <div
              className="w-[85%] aspect-[4/5] overflow-hidden shadow-sm relative"
              style={{ borderRadius: '500px 500px 0 0' }}
            >
              <Image
                src={bioImage}
                alt="Person holding a bouquet of lilacs"
                fill
                className="object-cover"
              />
            </div>

            {/* Floating Circle Image - Thick border creates the "cut-out" effect */}
            <div className="absolute -bottom-12 -right-6 w-[55%] aspect-square rounded-full overflow-hidden border-[15px] border-[#E4E0D7] shadow-lg">
              <Image
                src={bioImage2}
                alt="Close up of white lilac flowers"
                fill
                className="object-cover scale-110"
              />
            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}