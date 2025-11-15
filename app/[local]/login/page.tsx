import type { Metadata } from 'next';

import { LoginForm } from '@/features/auth/components/login-form';

export const metadata: Metadata = {
  title: 'Connexion'
};

export default async function LoginPage() {
  return <LoginForm />;
}
