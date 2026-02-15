'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top Section - Light Cream Background */}
      <div className="bg-background pt-40 pb-32 px-8 md:px-16 lg:px-24 border-t border-border/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand & Address Column */}
          <div className="md:col-span-6 lg:col-span-7 space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-foreground tracking-tight">
              Dr. Maya Reynolds, PsyD
            </h2>
            <div className="text-lg md:text-xl text-foreground/60 space-y-2 font-sans">
              <p>123th Street 45 W</p>
              <p>Santa Monica, CA 90401</p>
            </div>
            <div className="text-lg space-y-2 pt-4 font-sans">
              <p>
                <Link href="mailto:email@example.com" className="text-foreground underline decoration-accent/20 underline-offset-8 hover:decoration-accent transition-all">
                  email@example.com
                </Link>
              </p>
              <p>
                <Link href="tel:5555555555" className="text-foreground underline decoration-accent/20 underline-offset-8 hover:decoration-accent transition-all">
                  (555) 555-5555
                </Link>
              </p>
            </div>
          </div>

          {/* Hours Column */}
          <div className="md:col-span-3 lg:col-span-3 space-y-6">
            <h3 className="text-2xl font-serif font-medium text-foreground tracking-tight">
              Hours
            </h3>
            <div className="text-lg text-foreground/60 space-y-2 font-sans">
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </div>

          {/* Find/Nav Column */}
          <div className="md:col-span-3 lg:col-span-2 space-y-6 md:text-right lg:text-left">
            <h3 className="text-2xl font-serif font-medium text-foreground tracking-tight">
              Find
            </h3>
            <nav className="flex flex-col space-y-3 font-sans">
              <Link href="/" className="text-lg text-foreground underline decoration-accent/20 underline-offset-8 hover:decoration-accent transition-all">
                Home
              </Link>
              <Link href="/contact" className="text-lg text-foreground underline decoration-accent/20 underline-offset-8 hover:decoration-accent transition-all">
                Contact
              </Link>
              <Link href="/blog" className="text-lg text-foreground underline decoration-accent/20 underline-offset-8 hover:decoration-accent transition-all">
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#EAE8E0] py-16 px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-10">

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[13px] font-sans font-medium text-foreground/60 uppercase tracking-widest">
            <Link href="#" className="underline decoration-accent/20 underline-offset-4 hover:decoration-accent transition-all">Privacy & Cookies Policy</Link>
            <Link href="#" className="underline decoration-accent/20 underline-offset-4 hover:decoration-accent transition-all">Good Faith Estimate</Link>
            <Link href="#" className="underline decoration-accent/20 underline-offset-4 hover:decoration-accent transition-all">Website Terms & Conditions</Link>
            <Link href="#" className="underline decoration-accent/20 underline-offset-4 hover:decoration-accent transition-all">Disclaimer</Link>
          </div>

          {/* Copyright */}
          <p className="text-[13px] md:text-sm text-foreground/40 font-medium opacity-90 font-sans uppercase tracking-[0.2em]">
            All Rights Reserved © 2024 Dr. Maya Reynolds, PsyD.
          </p>
        </div>
      </div>
    </footer>
  );
}