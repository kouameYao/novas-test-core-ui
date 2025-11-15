'use client';

import { Card } from '@/components/ui/card';
import { transactions } from '@/types/transaction';

import { TransactionItem } from './transaction-item';

export function TransactionsSection() {
  return (
    <Card className="p-4 px-10 pb-8 min-h-[50vh]">
      <h3 className="text-xl font-medium text-black mb-4">
        Transactions récentes
      </h3>
      {transactions.length <= 0 ? (
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
              {transactions.map((transaction, index) => (
                <TransactionItem
                  showReceipt
                  index={index}
                  key={transaction.id}
                  transaction={transaction}
                />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}
