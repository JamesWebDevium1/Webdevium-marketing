'use client';

import Link from 'next/link';
import { TrackingButton } from '@/components/TrackingButton';

export function Header() {
  return (
    <header className="header-container sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-none">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 border-2 border-white-500 bg-white rounded-full">
        <div className="flex items-center gap-64">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="/assets/images/logo.png"
                alt="Webdevium Logo"
                id="logo-image"
                width={80}
                height={80}
                className="object-contain"
              />
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-semibold text-gray-700 hover:text-blue-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/client-spotlight"
              className="text-sm font-semibold text-gray-700 hover:text-blue-900 transition-colors"
            >
              Client Spotlight
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-semibold text-gray-700 hover:text-blue-900 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-semibold text-gray-700 hover:text-blue-900 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="text-sm font-semibold text-gray-700 hover:text-blue-900 transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-gray-700 hover:text-blue-900 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 mr-12">
          <TrackingButton
            href="https://calendly.com/webdevium"
            className="bg-gradient-to-r from-emerald-400 to-blue-600 text-white px-6 py-2 text-sm font-semibold rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            eventName="cta_click"
            eventParams={{
              label: "Book a Call",
              position: "header",
              location: "navigation",
            }}
          >
            <span className="flex items-center gap-2">
              Book a Call
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
          </TrackingButton>
        </div>
      </nav>
    </header>
  );
}

