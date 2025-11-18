import { useAuthStore } from '@/store/auth-store';

export function getAuthToken(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }

  return useAuthStore.getState().token;
}
