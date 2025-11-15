import type { Metadata } from 'next';
import type React from 'react';

import AuthProvider from '@/providers/auth-provider';
import { Header } from '@/shared/header';

export const metadata: Metadata = {
  title: 'Test - Nascent',
  description:
    'Test - Nascent est une plateforme de paiement en ligne qui permet aux entreprises de traiter les transactions de manière fiable.'
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
        <AuthProvider>
          <main className="py-5 mx-auto w-full lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl">
            <div className="flex-1 flex flex-col">
              <Header />
              <div className="flex-1 p-4 xl:p-4">{children}</div>
            </div>
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
