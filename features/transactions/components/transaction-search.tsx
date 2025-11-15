'use client';

import { Search } from 'lucide-react';

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput
} from '@/components/ui/input-group';

import { TransactionSearchProps } from '../types';

export function TransactionSearch({
  searchValue,
  onSearchChange
}: TransactionSearchProps) {
  return (
    <InputGroup className="bg-[#EEEEEF] rounded-full">
      <InputGroupInput
        placeholder="Rechercher transactions, montant, nom"
        value={searchValue}
        onChange={(e) => onSearchChange(e.target.value)}
        className="text-gray-100 placeholder:text-[#BABABA]"
      />
      <InputGroupAddon>
        <Search color="#BABABA" />
      </InputGroupAddon>
    </InputGroup>
  );
}
