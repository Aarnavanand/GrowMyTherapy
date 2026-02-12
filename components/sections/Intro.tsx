'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import intro from '../../public/intro.webp'
import FadeIn from '../ui/fade-in';

export default function Intro() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[600px] overflow-hidden">
      {/* Left Content Column */}
      <FadeIn direction="left" fullWidth className="h-full">
        <div className="bg-[#E4E0D7] flex flex-col justify-between border-r border-[#2D3B2D]/10 h-full">

          {/* Main Text Area */}
          <div className="flex-grow flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#2D3B2D] leading-tight mb-10">
              Live a fulfilling life.
            </h2>

            <div className="space-y-6 text-[#2D3B2D] text-lg md:text-xl max-w-md leading-relaxed">
              <p>
                Life can be challenging—especially when you're trying to balance
                your personal and professional life.
              </p>
              <p>
                It's easy to feel like you're alone in facing these challenges,
                but I want you to know that I'm here to help.
              </p>
            </div>
          </div>

          {/* Bottom Call to Action */}
          <div className="border-t border-[#2D3B2D] py-8 w-full flex justify-center items-center">
            <button className="flex items-center gap-2 text-[#2D3B2D] text-xs font-bold tracking-[0.2em] uppercase hover:opacity-60 transition-opacity">
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </FadeIn>

      {/* Right Image Column */}
      <FadeIn direction="right" delay={0.2} fullWidth className="h-full">
        <div className="h-[400px] lg:h-full lg:max-h-[700px] overflow-hidden relative">
          <Image
            src={intro}
            alt="Coffee, lilacs, and a notebook on a bed"
            fill
            className="object-cover"
          />
        </div>
      </FadeIn>
    </section>
  );
}
