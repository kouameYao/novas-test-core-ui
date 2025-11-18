'use client';

import { useQuery } from '@tanstack/react-query';

import { Card } from '@/components/ui/card';
import { getStatement } from '@/features/operations/api/account-api';
import { Statement } from '@/features/operations/types/account';
import { cn } from '@/lib/utils';
import { formatDate } from '@/utils/format-date';
import { formatNumber } from '@/utils/format-number';

function StatementItem({ entry, index }: { entry: Statement; index: number }) {
  const isDeposit = entry.amount > 0;

  return (
    <tr
      className={cn(
        'hover:bg-muted/30 transition-colors',
        index % 2 === 0 && 'bg-[#F6F6F6]'
      )}
    >
      <td className="py-3 px-4 md:pl-6 rounded-l-xl">
        <div className="flex items-center gap-3">
          <div>
            <p className="text-base font-medium text-black">
              {isDeposit ? 'Dépôt' : 'Retrait'}
            </p>
            <p className="text-sm text-gray-100">{formatDate(entry.date)}</p>
          </div>
        </div>
      </td>

      <td className="py-4 px-4 md:pr-6 rounded-r-xl">
        <div className="flex items-center justify-end gap-2">
          <span
            className={cn(
              'text-sm font-medium text-foreground',
              isDeposit ? 'text-green-600' : 'text-red-600'
            )}
          >
            {isDeposit ? '+' : '-'}
            {formatNumber(Math.abs(entry.amount))} FCFA
          </span>
        </div>
      </td>
    </tr>
  );
}

export function TransactionsSection() {
  const { data: statement, isLoading } = useQuery({
    queryKey: ['account-statement'],
    queryFn: getStatement,
    retry: 1
  });

  const entries = statement || [];

  return (
    <Card className="p-4 px-10 pb-8 max-h-[50vh] overflow-y-auto">
      <h3 className="text-xl font-medium text-black mb-4">
        Transactions récentes
      </h3>
      {isLoading ? (
        <div className="flex items-center justify-center h-[calc(50vh-4rem)]">
          <p className="text-muted-foreground text-center">
            Chargement des transactions...
          </p>
        </div>
      ) : entries.length === 0 ? (
        <div className="flex items-center justify-center h-[calc(50vh-4rem)]">
          <p className="text-muted-foreground text-center">
            Aucune transaction pour le moment
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="mb-2">
              <tr className="bg-[#FBFBFB]">
                <th className="text-left rounded-l-xl py-1 px-4 text-sm font-medium text-muted-foreground">
                  Description
                </th>
                <th className="text-right rounded-r-xl py-1 pr-5 md:pr-7 text-sm font-medium text-muted-foreground">
                  Montant
                </th>
              </tr>
            </thead>
            <tbody className="pt-10">
              {entries.map((entry, index) => (
                <StatementItem key={index} entry={entry} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}
