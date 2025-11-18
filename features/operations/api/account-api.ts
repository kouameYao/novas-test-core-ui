'use client';

import { getAuthToken } from '@/lib/get-auth-token';

import type {
  AccountBalance,
  DepositRequest,
  DepositResponse,
  Statement,
  WithdrawRequest,
  WithdrawResponse
} from '../types/account';

export async function getBalance(): Promise<AccountBalance> {
  const token = getAuthToken();
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch('/api/bank-accounts/balance', {
    method: 'GET',
    headers
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || 'Erreur lors de la récupération du solde');
  }

  const data = await response.json();

  console.log('data', data);

  if (data) {
    return data as AccountBalance;
  }

  if (data && typeof data === 'object' && 'balance' in data) {
    return data as AccountBalance;
  }

  // Valeur par défaut si la structure n'est pas reconnue
  throw new Error("Format de réponse inattendu de l'API");
}

/**
 * Effectue un dépôt
 */
export async function deposit(
  request: DepositRequest
): Promise<DepositResponse> {
  const token = getAuthToken();
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch('/api/bank-accounts/deposit', {
    method: 'POST',
    headers,
    body: JSON.stringify(request)
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || 'Erreur lors du dépôt');
  }

  const data = await response.json();

  // Vérifier si la réponse est encapsulée dans ApiResponse
  if (data.data && typeof data.data === 'object') {
    return data.data as DepositResponse;
  }

  // Sinon, retourner directement la réponse
  return data as DepositResponse;
}

/**
 * Effectue un retrait
 */
export async function withdraw(
  request: WithdrawRequest
): Promise<WithdrawResponse> {
  const token = getAuthToken();
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch('/api/bank-accounts/withdraw', {
    method: 'POST',
    headers,
    body: JSON.stringify(request)
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || 'Erreur lors du retrait');
  }

  const data = await response.json();

  // Vérifier si la réponse est encapsulée dans ApiResponse
  if (data.data && typeof data.data === 'object') {
    return data.data as WithdrawResponse;
  }

  // Sinon, retourner directement la réponse
  return data as WithdrawResponse;
}

/**
 * Récupère le relevé bancaire
 */
export async function getStatement(): Promise<Statement[]> {
  const token = getAuthToken();
  const headers: HeadersInit = {
    'Content-Type': 'application/json'
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch('/api/bank-accounts/statement', {
    method: 'GET',
    headers
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || 'Erreur lors de la récupération du relevé');
  }

  const data = await response.json();

  console.log('statement data', data);

  return data as Statement[];
}
