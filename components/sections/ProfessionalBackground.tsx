'use client';

import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import FadeIn from '../ui/fade-in';

export default function ProfessionalBackground() {
  const background = [
    {
      title: 'Education',
      content: 'Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.',
    },
    {
      title: 'Licensure',
      content: 'Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.',
    },
    {
      title: 'Certifications',
      content: 'Euphorbia dianthus alchemilla muscari lavandula anthurium artemesia false artemesia moluccella gladiolus cirsium trollius anthurium prunus delphinium achillea.',
    },
  ];

  return (
    /* Reduced section padding from py-32 to py-16/24 */
    <section className="bg-[#E4E0D7] py-16 md:py-24 px-8 md:px-16">
      <div className="max-w-3xl mx-auto">

        {/* Scaled down heading to 4xl/5xl to match visual weight */}
        <FadeIn fullWidth>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2D3B2D] text-center mb-10 tracking-tight">
            My Professional Background
          </h2>
        </FadeIn>

        {/* Accordion with standard border weight */}
        <FadeIn delay={0.2} fullWidth>
          <Accordion type="single" collapsible className="w-full border-t border-[#2D3B2D]">
            {background.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-[#2D3B2D]"
              >
                {/* Trigger font size reduced to lg/xl and padding tightened */}
                <AccordionTrigger className="text-left text-lg md:text-xl font-bold text-[#2D3B2D] hover:no-underline py-5 transition-all">
                  {item.title}
                </AccordionTrigger>

                {/* Content text scaled to 15px/lg */}
                <AccordionContent className="text-[15px] md:text-lg text-[#2D3B2D] leading-relaxed pb-6">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}