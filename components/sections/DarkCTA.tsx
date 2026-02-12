'use client';

import React from 'react';
import FadeIn from '../ui/fade-in';

export default function DarkCTA() {
  return (
    <section className="bg-[#7E7A4A] py-24 md:py-32 px-8">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

        <FadeIn fullWidth>
          {/* Title - Bold and Tracking-tight */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-10 tracking-tight">
            Get started today.
          </h2>
        </FadeIn>

        <FadeIn delay={0.2} fullWidth>
          {/* Paragraph - Clean white with max-width for line breaks */}
          <div className="space-y-1 text-white text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
            <p>Ready to take the first step towards a happier, healthier you?</p>
            <p>
              Contact me to book your first session. I look forward to starting this
              therapeutic journey with you.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.4} fullWidth>
          {/* Outlined White Button */}
          <button className="border border-white px-10 py-4 text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#7E7A4A] transition-all duration-300">
            GET IN TOUCH →
          </button>
        </FadeIn>

      </div>
    </section>
  );
}