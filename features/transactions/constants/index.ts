export const TRANSACTION_TYPES = [
  { value: 'all', label: 'Types de transaction' },
  { value: 'PAYOUT', label: "Envoi d'argent" },
  { value: 'PAYIN', label: "Réception d'argent" }
] as const;

export const PERIOD_OPTIONS = [
  { value: 'all', label: 'Périodes' },
  { value: 'today', label: "Aujourd'hui" },
  { value: 'week', label: 'Cette semaine' },
  { value: 'month', label: 'Ce mois' },
  { value: 'year', label: 'Cette année' }
] as const;

export const STATUS_OPTIONS = [
  { value: 'all', label: 'Statuts' },
  { value: 'Approved', label: 'Succès' },
  { value: 'Pending', label: 'En attente' },
  { value: 'Failed', label: 'Échec' },
  { value: 'Cancelled', label: 'Annulé' }
] as const;

export const ITEMS_PER_PAGE_OPTIONS = [
  { value: 10, label: '10' },
  { value: 20, label: '20' },
  { value: 50, label: '50' },
  { value: 100, label: '100' }
] as const;
