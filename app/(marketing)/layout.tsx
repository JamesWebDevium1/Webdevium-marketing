import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Analytics } from '@/components/Analytics';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
       <main className="min-h-screen" id="main-container">{children}</main>
      <Footer />
      <Analytics />
    </>
  );
}

