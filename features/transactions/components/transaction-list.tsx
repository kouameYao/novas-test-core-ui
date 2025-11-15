'use client';

import Image from 'next/image';
import { useState } from 'react';

import { CustomCard } from '@/components/common/custom-card';
import { TransactionDetails } from '@/components/common/transaction/transaction-details';
import { TransactionItem } from '@/components/common/transaction/transaction-item';
import { Button } from '@/components/ui/button';
import { TableHeadCell } from '@/components/ui/table-head-cell';
import { transactions } from '@/types/transaction';

import {
  useTransactionFilters,
  useTransactionPagination
} from '../hooks/use-transaction-filters';
import { filterTransactions, paginateTransactions } from '../utils';

import { TransactionFilters } from './transaction-filters';
import { TransactionPagination } from './transaction-pagination';
import { TransactionSearch } from './transaction-search';

interface TableHeader {
  label: string;
  align: 'left' | 'center' | 'right';
  rounded: 'first' | 'last' | 'both' | 'none';
}

const TABLE_HEADERS: TableHeader[] = [
  { label: 'Description', align: 'left', rounded: 'first' },
  { label: 'Montant', align: 'left', rounded: 'none' },
  { label: 'Statut', align: 'left', rounded: 'none' },
  { label: 'Actions', align: 'right', rounded: 'last' }
];

export function TransactionList() {
  const [selectedTransaction, setSelectedTransaction] = useState<string | null>(
    null
  );
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const { filters, updateFilter } = useTransactionFilters();
  const { currentPage, itemsPerPage, updatePage, updatePageSize } =
    useTransactionPagination();

  const filteredTransactions = filterTransactions(transactions, filters);
  const paginatedTransactions = paginateTransactions(
    filteredTransactions,
    currentPage,
    itemsPerPage
  );

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  const handleTransactionClick = (transactionId: string) => {
    setSelectedTransaction(transactionId);
    setIsDetailsOpen(true);
  };

  const handleCloseDetails = () => {
    setIsDetailsOpen(false);
    setSelectedTransaction(null);
  };

  const handleSearchChange = (value: string) => {
    updateFilter('search', value);
  };

  const handleFiltersChange = (key: keyof typeof filters, value: string) => {
    updateFilter(key, value);
  };

  return (
    <div className="space-y-6">
      <CustomCard className="rounded-4xl p-5 md:p-6 md:px-8">
        <div className="flex items-center gap-4 pb-5">
          <TransactionSearch
            searchValue={filters.search || ''}
            onSearchChange={handleSearchChange}
          />

          <TransactionFilters
            filters={filters}
            onFiltersChange={handleFiltersChange}
          />

          <div className="flex items-center gap-2">
            <Button>
              <Image
                src="/icons/transaction/report.svg"
                alt="Report"
                width={20}
                height={20}
              />
              Relevé
            </Button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#FBFBFB] mb-4">
                {TABLE_HEADERS.map((header, index) => (
                  <TableHeadCell
                    key={index}
                    align={header.align}
                    rounded={header.rounded}
                    className={
                      index === TABLE_HEADERS.length - 1
                        ? 'sm:pr-10 pr-5'
                        : undefined
                    }
                  >
                    {header.label}
                  </TableHeadCell>
                ))}
              </tr>
            </thead>
            <tbody>
              {paginatedTransactions.map((transaction, index) => (
                <TransactionItem
                  key={transaction.id}
                  transaction={transaction}
                  index={index}
                  onDetailsClick={() => handleTransactionClick(transaction.id)}
                  onReceiptClick={() => handleTransactionClick(transaction.id)}
                />
              ))}
            </tbody>
          </table>
        </div>
      </CustomCard>

      <TransactionPagination
        currentPage={currentPage}
        totalPages={totalPages}
        itemsPerPage={itemsPerPage}
        onPageChange={updatePage}
        onItemsPerPageChange={updatePageSize}
      />

      {selectedTransaction && (
        <TransactionDetails
          isOpen={isDetailsOpen}
          onClose={handleCloseDetails}
          transaction={transactions.find((t) => t.id === selectedTransaction)}
        />
      )}
    </div>
  );
}
