import React from 'react';

import type { Transaction } from '@/types/transaction';

import { Badge } from '../ui/badge';

export function getStatusColor(status: Transaction['status']): string {
  switch (status) {
    case 'Approved':
      return 'bg-[#DBFFE9] text-[#3EA444] hover:bg-[#DBFFE9]';
    case 'Pending':
      return 'bg-yellow-100 text-yellow-700 hover:bg-yellow-100';
    case 'Failed':
    case 'Cancelled':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700 hover:bg-gray-100';
  }
}

export function getStatusLabel(status: Transaction['status']): string {
  switch (status) {
    case 'Approved':
      return 'Succès';
    case 'Pending':
      return 'En attente';
    case 'Failed':
      return 'Échoué';
    case 'Cancelled':
      return 'Annulé';
    default:
      return 'Inconnu';
  }
}

export const Status = ({ status }: { status: Transaction['status'] }) => {
  return (
    <Badge
      variant="secondary"
      className={`rounded-full font-normal cursor-pointer ${getStatusColor(status)}`}
    >
      {getStatusLabel(status)}
    </Badge>
  );
};
