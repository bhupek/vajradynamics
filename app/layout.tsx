import './globals.css';
import type { Metadata } from 'next';
import { Rajdhani, Open_Sans } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { cn } from '@/lib/utils';

const rajdhani = Rajdhani({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700'], variable: '--font-rajdhani' });
const openSans = Open_Sans({ subsets: ['latin'], variable: '--font-open-sans' });

export const metadata: Metadata = {
  title: 'Vajra Dynamics - Forging Indestructible Defense Solutions',
  description: 'Vajra Dynamics is an innovative Indian defense startup specializing in cutting-edge unmanned technologies for UAVs, USVs, UUVs, and Loitering Munitions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        rajdhani.variable,
        openSans.variable,
        'font-sans'
      )}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}