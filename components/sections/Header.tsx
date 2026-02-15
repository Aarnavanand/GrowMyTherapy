'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Specialties', href: '#specialties' },
    { name: 'About', href: '#bio' },
    { name: 'Office', href: '#office' },
    { name: 'FAQs', href: '#faqs' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-[#F9F7F2]/80 backdrop-blur-lg py-4 border-b border-[#1A1A1A]/5 shadow-sm'
        : 'bg-transparent py-8 border-b border-transparent'
        }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl md:text-3xl font-serif font-medium text-[#1A1A1A] tracking-tighter"
        >
          Dr. Maya <span className="italic font-normal text-[#4A5D4A]">Reynolds</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#1A1A1A]/60 hover:text-[#4A5D4A] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-[#1A1A1A] text-white px-8 py-3 text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-[#4A5D4A] transition-all">
            Book Now
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-[#1A1A1A]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 right-0 bg-[#F9F7F2] border-b border-[#1A1A1A]/5 shadow-2xl lg:hidden h-screen flex flex-col p-12 space-y-8"
          >
            {navLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-serif font-medium text-[#1A1A1A] tracking-tighter hover:text-[#4A5D4A] transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="pt-12"
            >
              <button className="w-full bg-[#1A1A1A] text-white py-6 text-xs uppercase tracking-[0.3em] font-bold">
                Book a Consultation
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
