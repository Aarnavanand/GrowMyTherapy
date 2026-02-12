'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  const forestGreen = "#2D3B2D";

  return (
    <footer className="w-full">
      {/* Top Section - Light Cream Background */}
      <div className="bg-[#FAF7F2] pt-20 pb-16 px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

          {/* Brand & Address Column */}
          <div className="md:col-span-6 lg:col-span-7 space-y-8">
            <h2 className={`text-4xl md:text-5xl font-bold text-[${forestGreen}] tracking-tight`}>
              Lilac Template
            </h2>
            <div className={`text-lg text-[${forestGreen}] space-y-1`}>
              <p>123 Example Road</p>
              <p>Minneapolis, MN</p>
            </div>
            <div className={`text-lg space-y-1 pt-2`}>
              <p>
                <Link href="mailto:email@example.com" className={`text-[${forestGreen}] underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity`}>
                  email@example.com
                </Link>
              </p>
              <p>
                <Link href="tel:5555555555" className={`text-[${forestGreen}] underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity`}>
                  (555) 555-5555
                </Link>
              </p>
            </div>
          </div>

          {/* Hours Column */}
          <div className="md:col-span-3 lg:col-span-3 space-y-6">
            <h3 className={`text-2xl font-bold text-[${forestGreen}] tracking-tight`}>
              Hours
            </h3>
            <div className={`text-lg text-[${forestGreen}] space-y-1`}>
              <p>Monday – Friday</p>
              <p>10am – 6pm</p>
            </div>
          </div>

          {/* Find/Nav Column */}
          <div className="md:col-span-3 lg:col-span-2 space-y-6 md:text-right lg:text-left">
            <h3 className={`text-2xl font-bold text-[${forestGreen}] tracking-tight`}>
              Find
            </h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className={`text-lg text-[${forestGreen}] underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity`}>
                Home
              </Link>
              <Link href="/contact" className={`text-lg text-[${forestGreen}] underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity`}>
                Contact
              </Link>
              <Link href="/blog" className={`text-lg text-[${forestGreen}] underline decoration-1 underline-offset-4 hover:opacity-70 transition-opacity`}>
                Blog
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Section - Darker Sand Background */}
      <div className="bg-[#E4E0D7] py-12 px-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center space-y-8">

          {/* Legal Links */}
          <div className={`flex flex-wrap justify-center gap-x-6 gap-y-2 text-[13px] md:text-sm font-medium text-[${forestGreen}] uppercase tracking-wider`}>
            <Link href="#" className="underline decoration-1 underline-offset-4 hover:opacity-70">Privacy & Cookies Policy</Link>
            <Link href="#" className="underline decoration-1 underline-offset-4 hover:opacity-70">Good Faith Estimate</Link>
            <Link href="#" className="underline decoration-1 underline-offset-4 hover:opacity-70">Website Terms & Conditions</Link>
            <Link href="#" className="underline decoration-1 underline-offset-4 hover:opacity-70">Disclaimer</Link>
          </div>

          {/* Credits */}
          <p className={`text-[13px] md:text-sm text-[${forestGreen}] font-medium`}>
            Website Template Credits: {' '}
            <Link href="https://gobloomcreative.com" className="underline decoration-1 underline-offset-4 hover:opacity-70">
              Go Bloom Creative
            </Link>
          </p>

          {/* Copyright */}
          <p className={`text-[13px] md:text-sm text-[${forestGreen}] font-medium opacity-90`}>
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}