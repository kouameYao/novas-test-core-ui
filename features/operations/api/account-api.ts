import { ApiResponse } from '@/types/api-response';

import type {
  AccountBalance,
  DepositRequest,
  DepositResponse,
  StatementResponse,
  WithdrawRequest,
  WithdrawResponse
} from '../types/account';

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://admin.api-stg.paynah.com/api/v1';

/**
 * Récupère le solde actuel du compte
 */
export async function getBalance(): Promise<AccountBalance> {
  const response = await fetch(`${API_BASE_URL}/statement`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
      // TODO: Ajouter le token d'authentification
      // Authorization: `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error('Erreur lors de la récupération du solde');
  }

  const data: ApiResponse<AccountBalance> = await response.json();
  return data.data;
}

/**
 * Effectue un dépôt
 */
export async function deposit(
  request: DepositRequest
): Promise<DepositResponse> {
  const response = await fetch(`${API_BASE_URL}/deposit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // TODO: Ajouter le token d'authentification
    },
    body: JSON.stringify(request)
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Erreur lors du dépôt');
  }

  const data: ApiResponse<DepositResponse> = await response.json();
  return data.data;
}

/**
 * Effectue un retrait
 */
export async function withdraw(
  request: WithdrawRequest
): Promise<WithdrawResponse> {
  const response = await fetch(`${API_BASE_URL}/withdraw`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // TODO: Ajouter le token d'authentification
    },
    body: JSON.stringify(request)
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Erreur lors du retrait');
  }

  const data: ApiResponse<WithdrawResponse> = await response.json();
  return data.data;
}

/**
 * Récupère le relevé bancaire
 */
export async function getStatement(): Promise<StatementResponse> {
  const response = await fetch(`${API_BASE_URL}/statement`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
      // TODO: Ajouter le token d'authentification
    }
  });

  if (!response.ok) {
    throw new Error('Erreur lors de la récupération du relevé');
  }

  const data: ApiResponse<StatementResponse> = await response.json();
  return data.data;
}

