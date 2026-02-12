'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-[#F9F7F2] py-6 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl md:text-3xl font-normal text-[#2D3B2D]">
          Lilac Template
        </Link>
        <nav className="flex gap-8 text-[#2D3B2D]">
          <Link href="#blog" className="hover:opacity-70 transition-opacity">
            Blog
          </Link>
          <Link href="#contact" className="hover:opacity-70 transition-opacity">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
