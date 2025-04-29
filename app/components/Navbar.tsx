"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scrolling effect for glass navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled
        ? "backdrop-blur-lg bg-white/70 dark:bg-gray-900/80 shadow-sm"
        : "bg-transparent"
      }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-9 h-9 mr-2">
                <img src="/logo.svg" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-mono font-bold text-xl">Fundu</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#features"
              className="text-gray-700 dark:text-gray-200 hover:text-accent transition-colors py-2 px-1 border-b-2 border-transparent hover:border-accent"
            >
              Features
            </Link>
            <Link
              href="#screenshots"
              className="text-gray-700 dark:text-gray-200 hover:text-accent transition-colors py-2 px-1 border-b-2 border-transparent hover:border-accent"
            >
              Screenshots
            </Link>
            <Link
              href="#pricing"
              className="text-gray-700 dark:text-gray-200 hover:text-accent transition-colors py-2 px-1 border-b-2 border-transparent hover:border-accent"
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-gray-700 dark:text-gray-200 hover:text-accent transition-colors py-2 px-1 border-b-2 border-transparent hover:border-accent"
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="https://t.me/fundu_expenses_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-200 hover:text-accent focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - glass effect */}
      {isOpen && (
        <div className="md:hidden glass-card border-0 rounded-none border-t border-gray-200/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {["Features", "Screenshots", "Pricing", "FAQ"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 dark:text-gray-200 hover:bg-accent/10 hover:text-accent transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
            <div className="px-4 pt-4">
              <a
                href="https://t.me/fundu_expenses_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full button flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
