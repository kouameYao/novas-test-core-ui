'use client';

import { useState } from 'react';

import { TransactionDetails } from '@/components/common/transaction/transaction-details';
import { TransactionItem } from '@/components/common/transaction/transaction-item';
import { Card } from '@/components/ui/card';
import { transactions } from '@/types/transaction';

export function TransactionsSection() {
  const [selectedTransaction, setSelectedTransaction] = useState<string | null>(
    null
  );
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleTransactionClick = (transactionId: string) => {
    setSelectedTransaction(transactionId);
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setSelectedTransaction(null);
  };

  return (
    <>
      <Card className="p-4 px-10 pb-8">
        <h3 className="text-xl font-medium text-black mb-4">
          Transactions récentes
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="mb-2">
              <tr className="bg-[#FBFBFB]">
                <th className="text-left rounded-l-xl py-1 px-4 text-sm font-medium text-muted-foreground">
                  Description
                </th>
                <th className="text-left py-1 px-4 text-sm font-medium text-muted-foreground">
                  Montant
                </th>
                <th className="text-left py-1 px-4 text-sm font-medium text-muted-foreground">
                  Statut
                </th>
                <th className="text-right rounded-r-xl py-1 pr-5 md:pr-10 text-sm font-medium text-muted-foreground">
                  Actions
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
                  onDetailsClick={() => handleTransactionClick(transaction.id)}
                  onReceiptClick={() => handleTransactionClick(transaction.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* SlidePanel pour les détails de transaction */}
      <TransactionDetails
        isOpen={isDetailsOpen}
        onClose={handleCloseDetails}
        transaction={
          selectedTransaction
            ? transactions.find((t) => t.id === selectedTransaction)
            : undefined
        }
      />
    </>
  );
}
