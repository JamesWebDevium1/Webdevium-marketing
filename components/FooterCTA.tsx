import { TrackingButton } from '@/components/TrackingButton';

export function FooterCTA() {
  return (
    <section className="py-24 bg-blue-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-400 to-blue-600 opacity-10 rounded-full -translate-y-48 -translate-x-48"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            THE LAST DEV TEAM YOU'LL EVER NEED.
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Get consistent, senior-level engineering throughput — without the headaches of hiring.
          </p>

          <div className="mb-16">
            <TrackingButton
              href="https://calendly.com/webdevium"
              size="xl"
              className="bg-gradient-to-r from-green-400 to-blue-600 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              eventName="cta_click"
              eventParams={{
                label: "Book a Call",
                position: "primary",
                location: "footer_cta",
              }}
            >
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Book a Call
              </span>
            </TrackingButton>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center justify-center gap-8">
            <a href="https://twitter.com/webdevium" className="text-white hover:text-green-400 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            
            <a href="https://linkedin.com/company/webdevium" className="text-white hover:text-green-400 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a href="https://instagram.com/webdevium" className="text-white hover:text-green-400 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.83-9.281c-.49 0-.875-.385-.875-.875s.385-.875.875-.875.875.385.875.875-.385.875-.875.875z"/>
              </svg>
            </a>
            
            <a href="https://pinterest.com/webdevium" className="text-white hover:text-green-400 transition-colors">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zm-.007 2.819c-4.97 0-8.994 4.024-8.994 8.994 0 3.645 2.188 6.774 5.329 8.184-.073-.665-.139-1.687.029-2.411.157-.651 1.008-4.277 1.008-4.277s-.257-.514-.257-1.273c0-1.192.691-2.083 1.552-2.083.731 0 1.084.549 1.084 1.208 0 .735-.468 1.833-.709 2.851-.201.851.427 1.544 1.266 1.544 1.52 0 2.688-1.603 2.688-3.916 0-2.047-1.47-3.478-3.569-3.478-2.432 0-3.858 1.824-3.858 3.709 0 .735.283 1.524.637 1.953.07.085.08.16.059.247-.065.27-.21.849-.238.968-.038.154-.123.187-.283.113-1.053-.49-1.712-2.034-1.712-3.274 0-2.677 1.944-5.133 5.608-5.133 2.944 0 5.23 2.1 5.23 4.905 0 2.924-1.844 5.275-4.404 5.275-.86 0-1.67-.447-1.948-1.02l-.531 2.022c-.192.741-.709 1.668-1.057 2.235.795.245 1.632.378 2.497.378 4.97 0 8.994-4.024 8.994-8.994S16.974 2.819 12.01 2.819z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
