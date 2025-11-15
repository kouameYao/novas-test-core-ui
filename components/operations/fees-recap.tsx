'use client';

import { FormLabel } from '@/components/ui/form';
import { cn } from '@/lib/utils';

import { ChangeButton } from './change-button';

interface FeesRecapProps {
  label: string;
  amount: number;
  fees: number;
  totalDebit: number;
  estimatedBalance: number;
  currency?: string;
  onChangeAmount?: () => void;
}

interface RecapLineProps {
  label: string;
  value: number;
  currency: string;
  variant?: 'default' | 'highlighted';
}

function RecapLine({
  label,
  value,
  currency,
  variant = 'default'
}: RecapLineProps) {
  const isHighlighted = variant === 'highlighted';

  return (
    <div
      className={cn(
        'flex items-center justify-between text-muted-foreground',
        isHighlighted && 'text-foreground font-semibold'
      )}
    >
      <span>{label}</span>
      <span className={cn('text-black font-medium')}>
        {value.toLocaleString()} {currency}
      </span>
    </div>
  );
}

export function FeesRecap({
  label,
  amount = 0,
  fees = 0,
  totalDebit = 0,
  estimatedBalance = 0,
  currency = 'FCFA',
  onChangeAmount
}: FeesRecapProps) {
  return (
    <div className="flex flex-col w-full space-y-1">
      <FormLabel className="">{label}</FormLabel>

      <div className="p-6 rounded-3xl border border-border space-y-4">
        <div className="flex items-center justify-between pb-4 border-b border-border">
          <span className="text-3xl font-bold text-foreground">
            {amount.toLocaleString()} {currency}
          </span>
          <ChangeButton onClick={onChangeAmount || (() => {})} />
        </div>

        <div className="space-y-2 text-sm">
          <RecapLine
            label="Frais d'envoi 1%"
            value={fees}
            currency={currency}
          />

          <RecapLine
            label="Yorick Amon recevra"
            value={totalDebit}
            currency={currency}
          />

          <RecapLine
            label="Montant total débité"
            value={totalDebit}
            currency={currency}
          />

          <RecapLine
            label="Solde estimé après cet envoi"
            value={estimatedBalance}
            currency={currency}
          />
        </div>
      </div>
    </div>
  );
}
