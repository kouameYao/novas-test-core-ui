import type { Metadata } from 'next';
import type React from 'react';

import { ProvidersWrapper } from '@/providers/providers-wrapper';

import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Paynah B2C - Système de paiement en ligne',
    template: '%s | Paynah B2C'
  },
  description:
    'Paynah B2C est une solution de paiement en ligne sécurisée qui permet aux entreprises de traiter les transactions de manière fiable et efficace. Intégrez facilement nos services de paiement dans votre plateforme et offrez à vos clients une expérience de paiement fluide et sécurisée.'
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
