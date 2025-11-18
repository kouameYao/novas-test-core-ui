'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { useAuthStore } from '@/store/auth-store';

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
  redirectTo?: string;
}

export function AuthGuard({
  children,
  requireAuth = true,
  redirectTo = '/login'
}: AuthGuardProps) {
  const router = useRouter();
  const { isAuthenticated, token } = useAuthStore();

  useEffect(() => {
    if (requireAuth && !isAuthenticated && !token) {
      router.push(redirectTo);
    }
  }, [isAuthenticated, token, requireAuth, redirectTo, router]);

  if (requireAuth && !isAuthenticated && !token) {
    return null;
  }

  return <>{children}</>;
}
