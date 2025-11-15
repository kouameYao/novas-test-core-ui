'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import {
  getOperatorLogo,
  getOperatorName
} from '@/features/transactions/utils';
import { cn } from '@/lib/utils';
import { Transaction } from '@/types/transaction';
import { formatDate } from '@/utils/format-date';

import { Status } from '../status';

interface TransactionItemProps {
  transaction: Transaction;
  onDetailsClick?: (id: string) => void;
  onReceiptClick?: (id: string) => void;
  className?: string;
  index: number;
  showReceipt?: boolean;
}

export function TransactionItem({
  transaction,
  onDetailsClick,
  onReceiptClick,
  className,
  index,
  showReceipt = false
}: TransactionItemProps) {
  const operatorLogo = getOperatorLogo(transaction.operator);
  const operatorName = getOperatorName(transaction.operator);

  return (
    <tr
      className={cn(
        'hover:bg-muted/30 cursor-pointer transition-colors',
        className,
        index % 2 === 0 && 'bg-[#F6F6F6]'
      )}
    >
      <td className="py-3 px-4 md:pl-6 rounded-l-3xl">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar className={`w-12 h-12 text-white`}>
              {operatorLogo && (
                <AvatarImage
                  src={operatorLogo}
                  alt={operatorName}
                  className="object-cover"
                />
              )}
              <AvatarFallback className={`text-white font-medium`}>
                {transaction.customer_firstname.charAt(0).toUpperCase()}
                {transaction.customer_lastname?.charAt(0).toUpperCase() || ''}
              </AvatarFallback>
            </Avatar>
          </div>
          <div>
            <p className="text-sm font-medium text-black">
              {transaction.transaction_type.name === 'PAYOUT'
                ? `À ${transaction.customer_firstname} ${transaction.customer_lastname || ''}`.trim()
                : `De ${transaction.merchantName}`}
            </p>
            <p className="text-xs text-gray-100">
              {formatDate(transaction.dateOperation)}
            </p>
          </div>
        </div>
      </td>
      <td className="py-4 px-4">
        <span className="text-sm font-medium text-foreground">
          {transaction.amount.toLocaleString()} FCFA
        </span>
      </td>

      <td className="py-4 px-4">
        <Status status={transaction.status} />
      </td>
      <td className="py-4 px-4 md:pr-6 rounded-r-3xl">
        <div className="flex items-center justify-end gap-2">
          <Badge
            variant="secondary"
            className="py-1 px-5 bg-[#DEDCDC] cursor-pointer hover:bg-[#DEDCDC]/90"
            onClick={() => onDetailsClick?.(transaction.id)}
          >
            Détails
          </Badge>
        </div>
      </td>
    </tr>
  );
}
