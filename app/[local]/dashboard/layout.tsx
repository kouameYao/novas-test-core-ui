import type { Metadata } from 'next';
import type React from 'react';

import ReactQueryProvider from '@/providers/react-query-provider';
import { Header } from '@/shared/header';

export const metadata: Metadata = {
  title: 'Novaspace - Système de paiement en ligne',
  description: 'Novaspace est une solution de paiement en ligne'
};

export default function DashboardLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { lang: string };
}>) {
  return (
    <html lang={params.lang}>
      <body className="bg-[#F7F7F7]">
        <ReactQueryProvider>
          <main className="py-5 mx-auto w-full lg:max-w-2xl xl:max-w-3xl 2xl:max-w-4xl">
            <div className="flex-1 flex flex-col">
              <Header />
              <div className="flex-1 p-4 xl:p-4">{children}</div>
            </div>
          </main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
