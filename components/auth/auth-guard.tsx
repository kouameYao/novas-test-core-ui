'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

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
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const timer = setTimeout(() => {
        setIsChecking(false);
      }, 100);

      return () => clearTimeout(timer);
    } else {
      setIsChecking(false);
    }
  }, []);

  useEffect(() => {
    if (!isChecking && requireAuth && !isAuthenticated && !token) {
      router.replace(redirectTo);
    }
  }, [isChecking, isAuthenticated, token, requireAuth, redirectTo, router]);

  if (isChecking || (requireAuth && !isAuthenticated && !token)) {
    return null;
  }

  return <>{children}</>;
}
