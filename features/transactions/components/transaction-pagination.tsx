'use client';

import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

import { ITEMS_PER_PAGE_OPTIONS } from '../constants';
import { TransactionPaginationProps } from '../types';

export function TransactionPagination({
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange
}: TransactionPaginationProps) {
  return (
    <div className="flex items-center justify-between mt-6">
      <div className="flex items-center gap-2">
        <span className="text-sm text-black font-medium">Ligne par page</span>
        <DropdownMenu>
          <DropdownMenuTrigger asChild className="bg-[#EEEEEF] border-none">
            <Button variant="outline" size="sm" className="rounded-full">
              {itemsPerPage}
              <ChevronDown className="ml-1 h-3 w-3" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {ITEMS_PER_PAGE_OPTIONS.map((option) => (
              <DropdownMenuItem
                key={option.value}
                onClick={() => onItemsPerPageChange(option.value)}
              >
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          className="rounded-full w-8 h-8 p-0"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <span className="text-sm text-black font-medium px-2">
          Page {currentPage} sur {totalPages}
        </span>

        <Button
          variant="outline"
          size="sm"
          className="rounded-full w-8 h-8 p-0"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
