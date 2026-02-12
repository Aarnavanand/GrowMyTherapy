'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import splitHighlight from '../../public/splitHighlight.webp';
import FadeIn from '../ui/fade-in';

export default function SplitHighlight() {
  const symptoms = [
    'Persistent feelings of sadness or hopelessness',
    'Trouble focusing or making decisions',
    'Difficulty maintaining relationships',
    'Feeling constantly exhausted or unmotivated',
    'A pervasive sense of being overwhelmed',
  ];

  return (
    /* w-screen ensures it ignores parent padding and fills the viewport width */
    <section className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-[700px] overflow-hidden">

      {/* Left Image Column - Optimized with Next.js Image */}
      <FadeIn direction="left" fullWidth className="h-full">
        <div className="relative h-[500px] lg:h-full w-full">
          <Image
            src={splitHighlight}
            alt="Woman sitting peacefully with eyes closed"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </FadeIn>

      {/* Right Content Column */}
      <FadeIn direction="right" delay={0.2} fullWidth className="h-full">
        <div className="bg-[#B9B4C3] flex flex-col justify-between h-full">

          {/* Main Text Content Area */}
          <div className="flex-grow flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[#2D3B2D] leading-tight mb-10 tracking-tight">
              You don't have to do this all <em className="italic">alone</em>.
            </h2>

            <div className="space-y-8 text-[#2D3B2D] max-w-lg">
              <p className="text-lg md:text-xl font-medium">
                If you are facing any of these, there's hope:
              </p>

              <ul className="space-y-3">
                {symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start gap-4 text-[15px] md:text-lg">
                    <span className="text-[#2D3B2D] text-xl leading-none">•</span>
                    <span>{symptom}</span>
                  </li>
                ))}
              </ul>

              <p className="text-[15px] md:text-lg leading-relaxed pt-4">
                With empathy and guidance, we'll work together to navigate the challenges life throws your way.
              </p>
            </div>
          </div>

          {/* Bottom Call to Action Footer */}
          <div className="border-t border-[#2D3B2D] py-10 w-full flex justify-center items-center bg-[#B9B4C3]">
            <button className="flex items-center gap-2 text-[#2D3B2D] text-xs font-bold tracking-[0.2em] uppercase hover:opacity-60 transition-opacity group">
              Work with me
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}