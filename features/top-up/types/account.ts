export interface AccountBalance {
  balance: number;
  currency: string;
}

export interface DepositRequest {
  amount: number;
}

export interface DepositResponse {
  success: boolean;
  newBalance: number;
  transactionId: string;
  message?: string;
}

export interface WithdrawRequest {
  amount: number;
}

export interface WithdrawResponse {
  success: boolean;
  newBalance: number;
  transactionId: string;
  message?: string;
}

export interface StatementEntry {
  id: string;
  date: string;
  amount: number;
  balance: number;
  type: 'deposit' | 'withdraw';
  description?: string;
}

export interface StatementResponse {
  entries: StatementEntry[];
  totalEntries: number;
}
