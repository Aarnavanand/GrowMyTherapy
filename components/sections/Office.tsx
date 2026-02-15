'use client';

import React from 'react';
import Image from 'next/image';
import FadeIn from '../ui/fade-in';
import office1 from '../../public/office1.jpeg';
import office2 from '../../public/office2.jpeg';

export default function Office() {
    return (
        <section id="office" className="relative z-20 bg-[#F9F7F2] py-20 md:py-32 lg:py-40 overflow-hidden border-t border-[#1A1A1A]/5">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20">

                {/* 1. Header Row */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-32 md:mb-48 lg:mb-56 gap-12">
                    <FadeIn>
                        <h2 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium text-[#1A1A1A] tracking-tighter leading-[0.95]">
                            A Space for <br />
                            <span className="italic font-normal text-[#4A5D4A] md:pl-20 block">Healing.</span>
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <div className="max-w-md space-y-4">
                            <p className="text-xl text-[#1A1A1A]/70 font-sans leading-relaxed">
                                My Santa Monica office is a quiet, private space designed to feel calm and grounding.
                            </p>
                            <p className="text-lg text-[#1A1A1A]/40 font-sans italic border-l-2 border-[#4A5D4A]/20 pl-6">
                                Featuring natural light and an uncluttered environment.
                            </p>
                        </div>
                    </FadeIn>
                </div>

                {/* 2. Image Row: Asymmetric Composition */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

                    {/* Main Wide Image */}
                    <div className="md:col-span-8 overflow-hidden group rounded-sm shadow-sm bg-white/50">
                        <FadeIn direction="up" fullWidth>
                            <div className="relative aspect-[4/3] md:aspect-[16/10] w-full">
                                <Image
                                    src={office1}
                                    alt="Main Consultation Area in Santa Monica"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                        </FadeIn>
                    </div>

                    {/* Detail Image */}
                    <div className="md:col-span-4 relative md:-mt-32 z-30 overflow-hidden shadow-2xl bg-white border-[12px] border-white group rounded-sm">
                        <FadeIn direction="right" delay={0.4} fullWidth>
                            <div className="relative aspect-square w-full">
                                <Image
                                    src={office2}
                                    alt="Office comfort details"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
}
