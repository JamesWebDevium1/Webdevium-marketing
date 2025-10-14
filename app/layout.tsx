import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Webdevium - Modern Web Development Platform',
    template: '%s | Webdevium',
  },
  description: 'Build and deploy modern web applications with ease.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://webdevium.com'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

