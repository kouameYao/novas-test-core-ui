'use client';

import { ReactNode } from 'react';

import NuqsProvider from '@/providers/nuqs-provider';
import ReactQueryProvider from '@/providers/react-query-provider';
import { StepsProvider } from '@/providers/steps-provider';

// Steps par défaut pour l'application
const defaultAppSteps = [
  { label: 'Informations', completed: false },
  { label: 'Vérification', completed: false },
  { label: 'Documents', completed: false },
  { label: 'Finalisation', completed: false }
];

interface ProvidersWrapperProps {
  children: ReactNode;
}

export function ProvidersWrapper({ children }: ProvidersWrapperProps) {
  return (
    <ReactQueryProvider>
      <NuqsProvider>
        <StepsProvider steps={defaultAppSteps} initialCurrentStep={1}>
          {children}
        </StepsProvider>
      </NuqsProvider>
    </ReactQueryProvider>
  );
}
