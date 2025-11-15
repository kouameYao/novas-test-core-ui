'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

import {
  TRANSACTION_TYPES,
  PERIOD_OPTIONS,
  STATUS_OPTIONS
} from '../constants';
import { TransactionFilters as Filters } from '../types';

interface TransactionFiltersProps {
  filters: Filters;
  onFiltersChange: (key: keyof Filters, value: string) => void;
}

export function TransactionFilters({
  filters,
  onFiltersChange
}: TransactionFiltersProps) {
  return (
    <div className="flex py-5 gap-2">
      <Select
        value={filters.transactionType || 'all'}
        onValueChange={(value) => onFiltersChange('transactionType', value)}
      >
        <SelectTrigger className="w-[170px] text-[#BABABA] bg-[#EEEEEF]">
          <SelectValue placeholder="Type de transaction" />
        </SelectTrigger>
        <SelectContent>
          {TRANSACTION_TYPES.map((type) => (
            <SelectItem key={type.value} value={type.value}>
              {type.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Période */}
      <Select
        value={filters.period || 'all'}
        onValueChange={(value) => onFiltersChange('period', value)}
      >
        <SelectTrigger className="w-[100px] text-[#BABABA] bg-[#EEEEEF]">
          <SelectValue placeholder="Période" />
        </SelectTrigger>
        <SelectContent>
          {PERIOD_OPTIONS.map((period) => (
            <SelectItem key={period.value} value={period.value}>
              {period.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Statut */}
      <Select
        value={filters.status || 'all'}
        onValueChange={(value) => onFiltersChange('status', value)}
      >
        <SelectTrigger className="w-[100px] text-[#BABABA] bg-[#EEEEEF]">
          <SelectValue placeholder="Statut" />
        </SelectTrigger>
        <SelectContent>
          {STATUS_OPTIONS.map((status) => (
            <SelectItem key={status.value} value={status.value}>
              {status.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
