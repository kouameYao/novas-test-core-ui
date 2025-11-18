'use client';

import { ReactNode } from 'react';

import NuqsProvider from '@/providers/nuqs-provider';
import ReactQueryProvider from '@/providers/react-query-provider';

interface ProvidersWrapperProps {
  children: ReactNode;
}

export function ProvidersWrapper({ children }: ProvidersWrapperProps) {
  return (
    <ReactQueryProvider>
      <NuqsProvider>{children}</NuqsProvider>
    </ReactQueryProvider>
  );
}
