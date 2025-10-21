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
       <main className="min-h-screen image-container" id="main-container">
        {children}
        <Footer />
       </main>
    
      <Analytics />
    </>
  );
}

