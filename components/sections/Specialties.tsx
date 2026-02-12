'use client';

import React from 'react';
import Image from 'next/image';
import specialties1 from '../../public/specialties1.webp'
import specialties2 from '../../public/specialties2.webp'
import specialties3 from '../../public/specialties3.webp'
import FadeIn from '../ui/fade-in';

export default function Specialties() {
  const specialties = [
    {
      title: 'Self-Esteem',
      description: "Building a strong sense of self-worth is key to living a fulfilled life. Let's work together to bolster your self-esteem.",
      image: specialties1,
    },
    {
      title: 'Relationships',
      description: "Navigating relationships can be complex. I'm here to guide you through these complexities to help you form healthier connections.",
      image: specialties2,
    },
    {
      title: 'Burnout',
      description: "Feeling overwhelmed by your career is more common than you think. Together, we'll identify strategies to manage and prevent burnout.",
      image: specialties3,
    },
  ];

  return (
    <section className="bg-[#FAF7F2] py-20 px-8 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <FadeIn fullWidth>
          <h2 className="text-5xl md:text-6xl font-medium text-[#2D3B2D] text-center mb-20 tracking-tight">
            My Specialties
          </h2>
        </FadeIn>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {specialties.map((specialty, index) => (
            <FadeIn key={index} delay={index * 0.2} fullWidth className="h-full">
              <div
                className="bg-[#E4E0D7] border border-[#2D3B2D]/10 p-10 md:p-12 flex flex-col min-h-[600px] transition-all hover:shadow-sm h-full"
              >
                {/* Text Content */}
                <div className="flex-grow space-y-8">
                  <h3 className="text-xl font-bold text-[#2D3B2D] tracking-tight">
                    {specialty.title}
                  </h3>
                  <p className="text-[#2D3B2D] leading-relaxed text-[15px]">
                    {specialty.description}
                  </p>
                </div>

                {/* Large Circular Image at Bottom */}
                <div className="mt-12 flex justify-center">
                  <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden">
                    <Image
                      src={specialty.image}
                      alt={specialty.title}
                      fill
                      className="object-cover grayscale-[20%] contrast-[1.1]"
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