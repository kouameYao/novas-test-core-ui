export interface TransactionFilters {
  search?: string;
  transactionType?: string;
  account?: string;
  period?: string;
  status?: string;
}

export interface TransactionListProps {
  filters?: TransactionFilters;
  onFiltersChange?: (filters: TransactionFilters) => void;
}

export interface TransactionSearchProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
}

export interface TransactionPaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (items: number) => void;
}
