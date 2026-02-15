'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Image from 'next/image';
import { Plus, Minus } from 'lucide-react';
import faqImage from '../../public/FAQ.jpg';
import FadeIn from '../ui/fade-in';

export default function FAQs() {
  const faqs = [
    {
      question: 'What is your therapeutic approach?',
      answer: "I believe in a warm, collaborative, and grounded approach to healing. I integrate evidence-based methods such as Cognitive Behavioral Therapy (CBT) and EMDR with mindfulness and body-oriented techniques to help you understand both the emotional and physiological sides of your experience.",
    },
    {
      question: 'How can EMDR help with my past experiences?',
      answer: "EMDR is a powerful tool for trauma work, whether you've experienced a single-incident trauma or long-standing patterns from your past. This approach is paced carefully, with a focus on safety and stabilization, to help you feel more regulated in your daily life.",
    },
    {
      question: 'Do you offer in-person sessions in Santa Monica?',
      answer: "Yes. While I offer secure telehealth sessions for clients throughout California, I also provide in-person therapy at my Santa Monica office. The space is designed to be quiet, private, and uncluttered, providing a calm environment where you can feel at ease.",
    },
    {
      question: 'Who is your ideal client?',
      answer: "I frequently work with high-achieving professionals, entrepreneurs, and creatives who may look 'functional' on the outside but are quietly struggling with burnout, anxiety, or perfectionism. If you combine practical tools with depth-oriented work, we may be a good fit.",
    },
  ];

  return (
    // bg-[#F9F7F2] applies the Cream theme
    // py-24 md:py-32 reduces the excessive space found in previous sections
    <section id="faqs" className="bg-[#F9F7F2] py-24 md:py-32 overflow-hidden border-t border-[#1A1A1A]/5">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">

        {/* Left Side: Arched Image - Now with a decorative frame for "Anti-Gravity" feel */}
        <div className="lg:col-span-5 flex justify-center lg:justify-start">
          <FadeIn direction="left" fullWidth className="relative w-full max-w-[500px]">
            {/* Decorative Offset Border */}
            <div className="absolute inset-0 border border-[#4A5D4A]/10 rounded-[1000px_1000px_0_0] translate-x-4 translate-y-4 -z-10" />

            <div
              className="relative w-full aspect-[4/5] overflow-hidden shadow-2xl z-10"
              style={{ borderRadius: '1000px 1000px 0 0' }}
            >
              <Image
                src={faqImage}
                alt="A peaceful therapeutic setting in Santa Monica"
                fill
                className="object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-1000 ease-out"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </FadeIn>
        </div>

        {/* Right Side: FAQs - Refined Typography */}
        <div className="lg:col-span-7 flex flex-col pt-4 md:pt-12">
          <FadeIn direction="right" delay={0.2}>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-[#1A1A1A] mb-16 tracking-tighter leading-none">
              Questions & <br />
              <span className="italic font-normal text-[#4A5D4A]">Clarity.</span>
            </h2>

            <div className="border-t border-[#1A1A1A]/10">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border-b border-[#1A1A1A]/10"
                  >
                    <AccordionTrigger
                      hideChevron
                      className="flex items-center gap-6 py-8 md:py-10 hover:no-underline group text-left"
                    >
                      <div className="flex-shrink-0">
                        {/* Muted Sage Accent applied to Icons */}
                        <Plus className="h-5 w-5 text-[#4A5D4A] group-data-[state=open]:hidden" />
                        <Minus className="h-5 w-5 text-[#4A5D4A] hidden group-data-[state=open]:block" />
                      </div>
                      <span className="text-xl md:text-2xl font-serif font-medium text-[#1A1A1A] tracking-tight group-hover:text-[#4A5D4A] transition-colors">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-base md:text-lg text-[#1A1A1A]/60 leading-relaxed pb-10 pl-[44px] font-sans max-w-xl">
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