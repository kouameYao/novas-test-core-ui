'use client';

import { formatNumber } from '@/utils/format-number';

interface BalanceDisplayProps {
  balance: number;
  currency?: string;
}

export function BalanceDisplay({ balance, currency = 'FCFA' }: BalanceDisplayProps) {
  const isPositive = balance >= 0;
  const formattedBalance = formatNumber(balance);

  return (
    <div className="text-center mb-8">
      <p className="text-sm text-muted-foreground mb-2">Solde actuel</p>
      <h1
        className={`text-5xl font-bold ${
          isPositive ? 'text-green-600' : 'text-red-600'
        }`}
      >
        {formattedBalance} {currency}
      </h1>
    </div>
  );
}

