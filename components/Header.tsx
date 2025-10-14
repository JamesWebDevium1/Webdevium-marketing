import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Webdevium
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/how-it-works"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Blog
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button asChild variant="ghost">
            <Link href="https://app.webdevium.com/login">Sign In</Link>
          </Button>
          <Button asChild>
            <Link href="https://app.webdevium.com/signup">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}

