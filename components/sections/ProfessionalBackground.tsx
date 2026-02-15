'use client';

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Award, GraduationCap, ShieldCheck } from 'lucide-react';
import FadeIn from '../ui/fade-in';

export default function ProfessionalBackground() {
  const background = [
    {
      title: 'Education',
      icon: <GraduationCap className="w-5 h-5 md:w-6 h-6 text-[#4A5D4A]" />,
      content: 'Doctor of Psychology (Psy.D.) in Clinical Psychology; Master of Arts (M.A.) in Psychology.',
    },
    {
      title: 'Licensure',
      icon: <ShieldCheck className="w-5 h-5 md:w-6 h-6 text-[#4A5D4A]" />,
      content: 'Licensed Clinical Psychologist, California Board of Psychology. Based in Santa Monica, CA.',
    },
    {
      title: 'Specialized Training',
      icon: <Award className="w-5 h-5 md:w-6 h-6 text-[#4A5D4A]" />,
      content: 'Advanced certification in EMDR (Eye Movement Desensitization and Reprocessing) and Cognitive Behavioral Therapy (CBT).',
    },
  ];

  return (
    // Updated background to Soft Cream (#F9F7F2) and reduced vertical padding
    <section className="bg-[#F9F7F2] py-20 md:py-32 px-6 md:px-12 lg:px-20 overflow-hidden border-t border-[#1A1A1A]/5">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">

        {/* Left Side: Editorial Typography */}
        <div className="lg:col-span-5">
          <FadeIn direction="left">
            <div className="space-y-8">
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#4A5D4A] font-bold">
                The Foundation
              </span>
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-[#1A1A1A] tracking-tighter leading-none">
                Clinical <br />
                <span className="italic font-normal text-[#4A5D4A] block mt-2">Credentials.</span>
              </h2>
              <p className="text-[#1A1A1A]/60 text-lg font-sans max-w-sm leading-relaxed border-l-2 border-[#4A5D4A]/20 pl-6">
                A foundation built on rigorous clinical training and a commitment to evidence-based practice.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Right Side: Refined Light Accordion */}
        <div className="lg:col-span-7 w-full pt-4 md:pt-12 lg:pt-0">
          <FadeIn delay={0.2}>
            <Accordion type="single" collapsible className="w-full border-t border-[#1A1A1A]/10">
              {background.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-[#1A1A1A]/10"
                >
                  <AccordionTrigger className="flex items-center gap-6 py-10 md:py-12 hover:no-underline group text-left">
                    <div className="flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                      {item.icon}
                    </div>
                    <span className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-[#1A1A1A] tracking-tight group-hover:text-[#4A5D4A] transition-colors">
                      {item.title}
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="text-lg md:text-xl text-[#1A1A1A]/50 font-sans leading-relaxed pb-12 pl-[44px] md:pl-[48px] max-w-2xl">
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}