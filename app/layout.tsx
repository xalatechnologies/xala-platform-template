import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { I18nProvider } from '@xalatechnologies/platform/i18n/client';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Xala Platform App',
  description: 'Built with Xala Platform SDK',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nb" suppressHydrationWarning>
      <body className={inter.className}>
        <I18nProvider defaultLocale="nb" fallbackLocale="en">
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
