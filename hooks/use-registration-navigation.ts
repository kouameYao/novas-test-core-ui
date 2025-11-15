'use client';

import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

export type RegistrationStep =
  | 'register'
  | 'kyc-docs'
  | 'new-password'
  | 'dashboard';

export const useRegistrationNavigation = () => {
  const router = useRouter();

  const navigateToNextStep = useCallback(
    (currentStep: RegistrationStep) => {
      switch (currentStep) {
        case 'register':
          router.push('/kyc-docs');
          break;
        case 'kyc-docs':
          router.push('/new-password');
          break;
        case 'new-password':
          router.push('/dashboard');
          break;
        case 'dashboard':
          // Déjà au dashboard, pas de navigation nécessaire
          break;
        default:
          console.warn(`Unknown step: ${currentStep}`);
      }
    },
    [router]
  );

  const navigateToStep = useCallback(
    (step: RegistrationStep) => {
      const routes: Record<RegistrationStep, string> = {
        register: '/register',
        'kyc-docs': '/kyc-docs',
        'new-password': '/new-password',
        dashboard: '/dashboard'
      };

      const route = routes[step];
      if (route) {
        router.push(route);
      }
    },
    [router]
  );

  return {
    navigateToNextStep,
    navigateToStep
  };
};
