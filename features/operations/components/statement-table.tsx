'use client';

import { formatDate } from '@/utils/format-date';
import { formatNumber } from '@/utils/format-number';

import { StatementEntry } from '../types/account';

interface StatementTableProps {
  entries: StatementEntry[];
  statementLoading?: boolean;
}

export function StatementTable({
  entries,
  statementLoading = false
}: StatementTableProps) {
  if (statementLoading) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        Chargement...
      </div>
    );
  }

  // Trier par date décroissante (plus récent en premier)
  const sortedEntries = [...entries].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  if (sortedEntries.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        Aucune transaction pour le moment
      </div>
    );
  }

  return (
    <div className="rounded-lg border">
      <table className="w-full">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="px-4 py-3 text-left text-sm font-medium">Date</th>
            <th className="px-4 py-3 text-left text-sm font-medium">Type</th>
            <th className="px-4 py-3 text-right text-sm font-medium">
              Montant
            </th>
            <th className="px-4 py-3 text-right text-sm font-medium">
              Solde après opération
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedEntries.map((entry) => {
            const isDeposit = entry.type === 'deposit';
            return (
              <tr key={entry.id} className="border-b hover:bg-muted/30">
                <td className="px-4 py-3 text-sm">{formatDate(entry.date)}</td>
                <td className="px-4 py-3 text-sm">
                  <span
                    className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      isDeposit
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {isDeposit ? 'Dépôt' : 'Retrait'}
                  </span>
                </td>
                <td
                  className={`px-4 py-3 text-sm text-right font-medium ${
                    isDeposit ? 'text-green-600' : 'text-red-600'
                  }`}
                >
                  {isDeposit ? '+' : '-'}
                  {formatNumber(Math.abs(entry.amount))} FCFA
                </td>
                <td className="px-4 py-3 text-sm text-right">
                  {formatNumber(entry.balance)} FCFA
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
