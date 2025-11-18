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

export interface Statement {
  date: string;
  amount: number;
  balance: number;
}
