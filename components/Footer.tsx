import Link from 'next/link';
import { TrackingButton } from '@/components/TrackingButton';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white py-16 relative">
      {/* Rounded top corners */}
      <div className="absolute top-0 left-0 w-full h-8 bg-white rounded-t-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Scroll to top button */}
          <div className="text-center mb-8">
            <button className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mx-auto hover:bg-green-600 transition-colors">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>

          {/* Main CTA */}
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              THE LAST DEV TEAM YOU'LL EVER NEED.
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get consistent, senior-level engineering throughput without the headaches of hiring.
            </p>
            <TrackingButton
              href="https://calendly.com/webdevium"
              className="bg-green-500 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300"
              eventName="cta_click"
              eventParams={{
                label: "Book a Call",
                position: "footer",
                location: "main_cta",
              }}
            >
              <span className="flex items-center gap-3">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Book a Call
              </span>
            </TrackingButton>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
              </svg>
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex justify-center gap-8 mb-8">
            <Link href="/" className="text-white hover:text-green-400 transition-colors">Home</Link>
            <Link href="/client-spotlight" className="text-white hover:text-green-400 transition-colors">Client Spotlight</Link>
            <Link href="/how-it-works" className="text-white hover:text-green-400 transition-colors">How It Works</Link>
            <Link href="/pricing" className="text-white hover:text-green-400 transition-colors">Pricing</Link>
            <Link href="/faq" className="text-white hover:text-green-400 transition-colors">FAQs</Link>
            <Link href="/contact" className="text-white hover:text-green-400 transition-colors">Contact</Link>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-800 rounded-sm transform rotate-45"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-600 rounded-sm transform -rotate-45"></div>
              </div>
              <span className="text-2xl font-bold text-white">Webdevium</span>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-blue-800">
            <Link href="/privacy" className="text-white hover:text-green-400 transition-colors text-sm mb-2 md:mb-0">
              Privacy Policy
            </Link>
            <p className="text-sm text-gray-300 mb-2 md:mb-0">
              © {currentYear} Webdevium LLC. All Rights Reserved.
            </p>
            <Link href="/terms" className="text-white hover:text-green-400 transition-colors text-sm">
              Terms Of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}