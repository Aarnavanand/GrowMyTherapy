'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';
import faqImage from '../../public/faq.webp';
import FadeIn from '../ui/fade-in';

export default function FAQs() {
  const faqs = [
    {
      question: 'Do you take insurance?',
      answer: 'Answer goes here.',
    },
    {
      question: 'What are your rates?',
      answer: 'Answer goes here.',
    },
    {
      question: 'Do you have any openings?',
      answer: 'Answer goes here.',
    },
  ];

  return (
    <section className="bg-[#FAF7F2] py-24 md:py-32 px-8 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left Side: Arched Image */}
        <div className="flex justify-center lg:justify-start">
          <FadeIn direction="left" fullWidth>
            <div
              className="relative w-full max-w-[450px] aspect-[4/5] overflow-hidden"
              style={{ borderRadius: '500px 500px 0 0' }}
            >
              <Image
                src={faqImage}
                alt="Dried flowers in a vase"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>

        {/* Right Side: FAQs */}
        <div className="flex flex-col">
          <FadeIn direction="right" delay={0.2} fullWidth>
            <h2 className="text-5xl md:text-6xl font-medium text-[#2D3B2D] mb-12 tracking-tight">
              FAQs
            </h2>

            <div className="border-t border-[#2D3B2D]/20">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-[#2D3B2D]/20"
                  >
                    <AccordionTrigger
                      hideChevron
                      className="flex items-center gap-6 py-8 hover:no-underline group text-left"
                    >
                      <div className="flex-shrink-0">
                        <Plus className="h-6 w-6 text-[#2D3B2D]/60 group-data-[state=open]:hidden" />
                        <Minus className="h-6 w-6 text-[#2D3B2D]/60 hidden group-data-[state=open]:block" />
                      </div>
                      <span className="text-2xl md:text-3xl lg:text-4xl font-normal text-[#2D3B2D] tracking-tight">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-lg md:text-xl text-[#2D3B2D]/80 leading-relaxed pb-8 pl-[64px]">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
