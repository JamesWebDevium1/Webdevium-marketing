import Link from 'next/link';
import { TrackingButton } from '@/components/TrackingButton';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-8 h-8">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-800 rounded-sm transform rotate-45"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-600 rounded-sm transform -rotate-45"></div>
            </div>
            <span className="text-2xl font-bold text-blue-900">
              Webdevium
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/client-spotlight"
              className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
            >
              Client Spotlight
            </Link>
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/faq"
              className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-blue-900 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <TrackingButton
            href="https://calendly.com/webdevium"
            className="bg-gradient-to-r from-green-400 to-blue-600 text-white px-6 py-2 text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            eventName="cta_click"
            eventParams={{
              label: "Book a Call",
              position: "header",
              location: "navigation",
            }}
          >
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Book a Call
            </span>
          </TrackingButton>
        </div>
      </nav>
    </header>
  );
}

