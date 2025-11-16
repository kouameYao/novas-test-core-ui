import type { Metadata } from 'next';
import type React from 'react';

import { ProvidersWrapper } from '@/providers/providers-wrapper';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Novaspace - Système de paiement en ligne',
    template: '%s | Novaspace'
  },
  description: 'Novaspace est une solution de paiement en ligne'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <ProvidersWrapper>{children}</ProvidersWrapper>
      </body>
    </html>
  );
}
