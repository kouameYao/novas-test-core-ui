import { Transaction } from '@/types/transaction';

import { TransactionFilters } from '../types';

export function filterTransactions(
  transactions: Transaction[],
  filters: TransactionFilters
): Transaction[] {
  return transactions.filter((transaction) => {
    // Filtre par recherche
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      const matchesSearch =
        transaction.customer_firstname.toLowerCase().includes(searchTerm) ||
        transaction.customer_lastname?.toLowerCase().includes(searchTerm) ||
        transaction.merchantName.toLowerCase().includes(searchTerm) ||
        transaction.amount.toString().includes(searchTerm) ||
        transaction.customer_phone_number.includes(searchTerm);

      if (!matchesSearch) return false;
    }

    // Filtre par type de transaction
    if (filters.transactionType && filters.transactionType !== 'all') {
      if (transaction.transaction_type.name !== filters.transactionType) {
        return false;
      }
    }

    // Filtre par statut
    if (filters.status && filters.status !== 'all') {
      if (transaction.status !== filters.status) {
        return false;
      }
    }

    // Filtre par période
    if (filters.period && filters.period !== 'all') {
      const transactionDate = new Date(transaction.dateOperation);
      const now = new Date();

      switch (filters.period) {
        case 'today':
          if (transactionDate.toDateString() !== now.toDateString()) {
            return false;
          }
          break;
        case 'week':
          const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
          if (transactionDate < weekAgo) {
            return false;
          }
          break;
        case 'month':
          const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
          if (transactionDate < monthAgo) {
            return false;
          }
          break;
        case 'year':
          const yearAgo = new Date(now.getTime() - 365 * 24 * 60 * 60 * 1000);
          if (transactionDate < yearAgo) {
            return false;
          }
          break;
      }
    }

    return true;
  });
}

export function paginateTransactions(
  transactions: Transaction[],
  page: number,
  itemsPerPage: number
): Transaction[] {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return transactions.slice(startIndex, endIndex);
}

export function getTransactionSource(transaction: Transaction): string {
  // Logique pour déterminer la source de la transaction
  // Basée sur le type de transaction et les données disponibles
  if (transaction.transaction_type.name === 'PAYOUT') {
    return 'Compte courant';
  }

  // Pour les autres types, on peut utiliser l'opérateur ou d'autres champs
  return transaction.operator || 'Carte';
}

/**
 * Retourne le chemin du logo de l'opérateur en fonction de la valeur de l'operator
 * @param operator - La valeur de l'opérateur (ex: 'CI_WAVE', 'CI_ORANGE', etc.)
 * @returns Le chemin du logo ou undefined si l'opérateur n'est pas reconnu
 */
export function getOperatorLogo(operator: string): string | undefined {
  const operatorUpper = operator.toUpperCase();

  // Mapping des opérateurs vers leurs logos
  const operatorLogoMap: Record<string, string> = {
    CI_WAVE: '/icons/wave.png',
    WAVE: '/icons/wave.png',
    CI_ORANGE: '/icons/orange-money.png',
    ORANGE: '/icons/orange-money.png',
    ORANGE_MONEY: '/icons/orange-money.png',
    CI_MTN: '/icons/mtn-money.png',
    MTN: '/icons/mtn-money.png',
    MTN_MONEY: '/icons/mtn-money.png',
    CI_MOOV: '/icons/moov-money.png',
    MOOV: '/icons/moov-money.png',
    MOOV_MONEY: '/icons/moov-money.png'
  };

  return operatorLogoMap[operatorUpper];
}

/**
 * Retourne le nom d'affichage de l'opérateur
 * @param operator - La valeur de l'opérateur
 * @returns Le nom d'affichage de l'opérateur
 */
export function getOperatorName(operator: string): string {
  const operatorUpper = operator.toUpperCase();

  const operatorNameMap: Record<string, string> = {
    CI_WAVE: 'Wave',
    WAVE: 'Wave',
    CI_ORANGE: 'Orange Money',
    ORANGE: 'Orange Money',
    ORANGE_MONEY: 'Orange Money',
    CI_MTN: 'MTN Money',
    MTN: 'MTN Money',
    MTN_MONEY: 'MTN Money',
    CI_MOOV: 'Moov Money',
    MOOV: 'Moov Money',
    MOOV_MONEY: 'Moov Money'
  };

  return operatorNameMap[operatorUpper] || operator;
}
