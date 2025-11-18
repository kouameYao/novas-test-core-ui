'use client';

import type { LoginCredentials, LoginResponse } from '../types/auth';

export async function login(
  credentials: LoginCredentials
): Promise<LoginResponse> {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || 'Erreur lors de la connexion');
  }

  const data = await response.json();

  if (data.data && !data.access_token) {
    return data.data as LoginResponse;
  }

  return data as LoginResponse;
}
