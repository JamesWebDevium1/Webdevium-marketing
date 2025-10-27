'use client';

import Link from 'next/link';
import { TrackingButton } from '@/components/TrackingButton';
import { Twitter, Linkedin, Github, Instagram, ArrowRight } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="p-10">
      <footer className="bg-[#0E5181] text-white py-16 relative overflow-visible rounded-3xl">

      {/* Top centered scroll-to-top button with glow */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-b from-emerald-300 to-emerald-500 shadow-[0_0_40px_10px_rgba(16,185,129,0.45)] flex items-center justify-center border-2 border-white/40"
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6 text-blue-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
        </svg>
      </button>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Side social icons */}
          <div className="hidden md:flex items-center gap-12 absolute left-4 md:left-8 top-28">
            <a href="#" aria-label="X / Twitter" className="opacity-90 hover:opacity-100 transition-opacity">
              <Twitter className="w-7 h-7 text-white" />
            </a>
            <a href="#" aria-label="LinkedIn" className="opacity-90 hover:opacity-100 transition-opacity">
              <Linkedin className="w-7 h-7 text-white" />
            </a>
          </div>
          <div className="hidden md:flex items-center gap-12 absolute right-4 md:right-8 top-28">
            <a href="#" aria-label="GitHub" className="opacity-90 hover:opacity-100 transition-opacity">
              <Github className="w-7 h-7 text-white" />
            </a>
            <a href="#" aria-label="Instagram" className="opacity-90 hover:opacity-100 transition-opacity">
              <Instagram className="w-7 h-7 text-white" />
            </a>
          </div>
          {/* Radial glow behind heading */}
          <div className="pointer-events-none select-none absolute left-1/2 -translate-x-1/2 top-20 h-64 w-64 md:h-80 md:w-80 rounded-full opacity-40 bg-[radial-gradient(circle_at_center,rgba(159,236,188,0.55),rgba(14,81,129,0)_60%)]" />

          {/* Main CTA */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              THE LAST DEV TEAM YOU'LL EVER NEED.
            </h3>
            <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Get consistent, senior-level engineering throughput without the headaches of hiring.
            </p>
            <TrackingButton
              href="https://calendly.com/webdevium"
              className="bg-gradient-to-r from-emerald-400 to-blue-600 text-white px-10 py-5 text-xl font-semibold rounded-full shadow-xl hover:bg-blue-800 transition-all duration-300"
              eventName="cta_click"
              size="lg"
              eventParams={{
                label: "Book a Call",
                position: "footer",
                location: "main_cta",
              }}
            >
              Book a Call
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/90 text-emerald-600 ml-5">
                <ArrowRight className="w-4 h-4" />
              </span>
            </TrackingButton>
          </div>

          {/* Decorative thin lines left/right */}
          <div className="hidden md:block absolute left-3 top-[250px] h-px w-[26%] bg-gradient-to-r from-white/20 to-white/5" />
          <div className="hidden md:block absolute right-3 top-[250px] h-px w-[26%] bg-gradient-to-l from-white/20 to-white/5" />

          {/* Navigation Links */}
          <div className="flex justify-center gap-6 md:gap-10 mb-8">
            <Link href="/#home" className="text-white hover:text-green-400 transition-colors">Home</Link>
            <Link href="/#client-spotlight" className="text-white hover:text-green-400 transition-colors">Client Spotlight</Link>
            <Link href="/#how-it-works" className="text-white hover:text-green-400 transition-colors">How It Works</Link>
            <Link href="/pricing" className="text-white hover:text-green-400 transition-colors">Pricing</Link>
            <Link href="/#faqs" className="text-white hover:text-green-400 transition-colors">FAQ's</Link>
            <Link href="/contact" className="text-white hover:text-green-400 transition-colors">Contact</Link>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-2">
            <img
              src="/assets/images/logo-white.png"
              alt="Webdevium Logo"
              width={120}
              height={120}
              className="object-contain"
            />
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8">
            <Link href="/privacy" className="text-white hover:text-green-400 transition-colors text-sm mb-2 md:mb-0">
              Privacy Policy
            </Link>
            <p className="text-md text-white/80 mb-2 md:mb-0 font-semibold">
              © {currentYear} Webdevium LLC. All Rights Reserved.
            </p>
            <Link href="/terms" className="text-white hover:text-green-400 transition-colors text-sm">
              Terms Of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
    </section>
  
  );
}