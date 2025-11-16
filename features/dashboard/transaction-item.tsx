'use client';

import { cn } from '@/lib/utils';
import { Transaction } from '@/types/transaction';
import { formatDate } from '@/utils/format-date';

interface TransactionItemProps {
  transaction: Transaction;
  className?: string;
  index: number;
  showReceipt?: boolean;
}

export function TransactionItem({
  transaction,
  className,
  index,
  showReceipt = false
}: TransactionItemProps) {
  return (
    <tr
      className={cn(
        'hover:bg-muted/30 cursor-pointer transition-colors',
        className,
        index % 2 === 0 && 'bg-[#F6F6F6]'
      )}
    >
      <td className="py-3 px-4 md:pl-6 rounded-l-xl">
        <div className="flex items-center gap-3">
          <div>
            <p className="text-base font-medium text-black">
              {transaction.transaction_type.name === 'PAYOUT'
                ? 'Dépôt'
                : 'Retrait'}
            </p>
            <p className="text-sm text-gray-100">
              {formatDate(transaction.dateOperation)}
            </p>
          </div>
        </div>
      </td>

      <td className="py-4 px-4 md:pr-6 rounded-r-xl">
        <div className="flex items-center justify-end gap-2">
          <span
            className={cn(
              'text-sm font-medium text-foreground',
              transaction.transaction_type.name === 'PAYOUT'
                ? 'text-green-600'
                : 'text-red-600'
            )}
          >
            {transaction.transaction_type.name === 'PAYOUT'
              ? `${transaction.amount.toLocaleString()} FCFA`
              : `- ${transaction.amount.toLocaleString()} FCFA`}
          </span>
        </div>
      </td>
    </tr>
  );
}
