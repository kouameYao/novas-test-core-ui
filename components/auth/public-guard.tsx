'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useAuthStore } from '@/store/auth-store';

interface PublicGuardProps {
  children: React.ReactNode;
  redirectTo?: string;
}

export function PublicGuard({
  children,
  redirectTo = '/dashboard'
}: PublicGuardProps) {
  const router = useRouter();
  const { isAuthenticated, token } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated && token) {
      router.push(redirectTo);
    }
  }, [isAuthenticated, token, redirectTo, router]);

  if (isAuthenticated && token) {
    return null;
  }

  return <>{children}</>;
}
