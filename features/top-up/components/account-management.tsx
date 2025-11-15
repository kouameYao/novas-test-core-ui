'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

import { getBalance, getStatement } from '../api/account-api';

import { BalanceDisplay } from './balance-display';
import { DepositModal } from './deposit-modal';
import { StatementTable } from './statement-table';
import { WithdrawModal } from './withdraw-modal';

export function AccountManagement() {
  const [depositOpen, setDepositOpen] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const queryClient = useQueryClient();

  // Récupération du solde
  const {
    data: balance,
    isLoading: balanceLoading,
    error: balanceError
  } = useQuery({
    queryKey: ['account-balance'],
    queryFn: getBalance
  });

  // Récupération du relevé
  const {
    data: statement,
    isLoading: statementLoading,
    error: statementError
  } = useQuery({
    queryKey: ['account-statement'],
    queryFn: getStatement
  });

  // Mutation pour rafraîchir les données après une opération
  const refreshData = useMutation({
    mutationFn: async () => {
      await Promise.all([
        queryClient.invalidateQueries({ queryKey: ['account-balance'] }),
        queryClient.invalidateQueries({ queryKey: ['account-statement'] })
      ]);
    }
  });

  const handleDepositSuccess = async () => {
    try {
      await refreshData.mutateAsync();
      toast.success('Dépôt effectué avec succès', {
        description: 'Votre solde a été mis à jour'
      });
    } catch (error) {
      toast.error('Erreur lors du dépôt', {
        description:
          error instanceof Error ? error.message : 'Une erreur est survenue'
      });
    }
  };

  const handleWithdrawSuccess = async () => {
    try {
      await refreshData.mutateAsync();
      toast.success('Retrait effectué avec succès', {
        description: 'Votre solde a été mis à jour'
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Une erreur est survenue';

      if (errorMessage.includes('solde insuffisant')) {
        toast.error('Solde insuffisant', {
          description:
            'Vous ne disposez pas de fonds suffisants pour effectuer ce retrait'
        });
      } else if (errorMessage.includes('montant négatif')) {
        toast.error('Montant invalide', {
          description: 'Le montant ne peut pas être négatif'
        });
      } else {
        toast.error('Erreur lors du retrait', {
          description: errorMessage
        });
      }
    }
  };

  if (balanceLoading || statementLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-muted-foreground">Chargement...</div>
      </div>
    );
  }

  if (balanceError || statementError) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-red-600">
          Erreur lors du chargement des données
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Affichage du solde */}
      <Card className="p-6">
        <BalanceDisplay balance={balance?.balance || 0} />
      </Card>

      {/* Boutons d'action */}
      <div className="flex gap-4 justify-center">
        <Button
          size="lg"
          onClick={() => setDepositOpen(true)}
          className="bg-green-600 hover:bg-green-700"
        >
          Déposer
        </Button>
        <Button
          size="lg"
          variant="destructive"
          onClick={() => setWithdrawOpen(true)}
        >
          Retirer
        </Button>
      </div>

      {/* Relevé bancaire */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold mb-4">Relevé bancaire</h2>
        <StatementTable entries={statement?.entries || []} />
      </Card>

      {/* Modals */}
      <DepositModal
        open={depositOpen}
        onOpenChange={setDepositOpen}
        onSuccess={handleDepositSuccess}
      />
      <WithdrawModal
        open={withdrawOpen}
        onOpenChange={setWithdrawOpen}
        onSuccess={handleWithdrawSuccess}
        currentBalance={balance?.balance}
      />
    </div>
  );
}
