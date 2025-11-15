import { parseAsString, useQueryState, useQueryStates } from 'nuqs';

import { TransactionFilters } from '../types';

// Hook pour gérer les filtres de transaction avec nuqs
export function useTransactionFilters() {
  const [filters, setFilters] = useQueryStates({
    search: parseAsString.withDefault(''),
    transactionType: parseAsString.withDefault('all'),
    account: parseAsString.withDefault('all'),
    period: parseAsString.withDefault('all'),
    status: parseAsString.withDefault('all')
  });

  const updateFilter = (key: keyof TransactionFilters, value: string) => {
    setFilters({
      ...filters,
      [key]: value
    });
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      transactionType: 'all',
      account: 'all',
      period: 'all',
      status: 'all'
    });
  };

  return {
    filters,
    setFilters,
    updateFilter,
    clearFilters
  };
}

// Hook pour gérer la pagination des transactions
export function useTransactionPagination() {
  const [page, setPage] = useQueryState('page', parseAsString.withDefault('1'));
  const [pageSize, setPageSize] = useQueryState(
    'pageSize',
    parseAsString.withDefault('20')
  );

  const currentPage = parseInt(page, 10);
  const itemsPerPage = parseInt(pageSize, 10);

  const updatePage = (newPage: number) => {
    setPage(newPage.toString());
  };

  const updatePageSize = (newPageSize: number) => {
    setPageSize(newPageSize.toString());
    setPage('1'); // Reset to first page when page size changes
  };

  return {
    currentPage,
    itemsPerPage,
    updatePage,
    updatePageSize
  };
}
