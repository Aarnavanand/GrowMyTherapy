'use client';

import React from 'react';
import Image from 'next/image';
import specialties1 from '../../public/BurnoutRecovery.jpg'
import specialties2 from '../../public/TraumaTherapy.avif'
import specialties3 from '../../public/RelationshipDynamics.avif'
import FadeIn from '../ui/fade-in';

export default function Specialties() {
  const specialties = [
    {
      title: 'Burnout Recovery',
      description: "For high-achieving professionals dealing with chronic stress. We'll implement practical tools to restore your energy and sense of self.",
      image: specialties1,
    },
    {
      title: 'Trauma Therapy',
      description: "A powerful tool for processing past experiences. I provide a safe, paced environment to help you feel regulated and grounded.",
      image: specialties2,
    },
    {
      title: 'Relationship Dynamics',
      description: "Navigating complex connections is easier with guidance. We'll explore patterns to help you form healthier, more fulfilling bonds.",
      image: specialties3,
    },
  ];

  return (
    // bg-white creates a clean break from the cream Office section
    // py-24 reduces the massive vertical space you saw previously
    <section id="specialties" className="bg-white py-24 md:py-32 overflow-hidden border-t border-[#1A1A1A]/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

        {/* Section Heading */}
        <div className="mb-20 text-center">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-serif font-medium text-[#1A1A1A] tracking-tighter leading-none">
              Clinical <span className="italic font-normal text-[#4A5D4A]">Expertise</span>
            </h2>
          </FadeIn>
        </div>

        {/* Specialties Grid: Wider container (max-w-[1440px]) and reduced height (min-h-[500px]) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <FadeIn key={index} delay={index * 0.15}>
              <div
                className="bg-[#F9F7F2] p-10 md:p-12 flex flex-col items-center text-center justify-between min-h-[500px] group transition-all duration-500 hover:shadow-2xl border border-transparent hover:border-[#4A5D4A]/10"
              >
                {/* Text Content */}
                <div className="space-y-6">
                  <h3 className="text-2xl md:text-3xl font-serif font-medium text-[#1A1A1A] tracking-tight">
                    {specialty.title}
                  </h3>
                  <p className="text-[#1A1A1A]/60 leading-relaxed text-base md:text-lg font-sans max-w-[280px] mx-auto">
                    {specialty.description}
                  </p>
                </div>

                {/* Circular Image: Re-implemented as requested */}
                <div className="mt-10">
                  <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden group-hover:grayscale-0 transition-all duration-700 shadow-lg border-4 border-white">
                    <Image
                      src={specialty.image}
                      alt={specialty.title}
                      fill
                      className="object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}