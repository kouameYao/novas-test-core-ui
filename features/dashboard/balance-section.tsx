'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog';
import { getBalance, getStatement } from '@/features/top-up/api/account-api';
import { DepositModal } from '@/features/top-up/components/deposit-modal';
import { StatementTable } from '@/features/top-up/components/statement-table';
import { WithdrawModal } from '@/features/top-up/components/withdraw-modal';
import { formatNumber } from '@/utils/format-number';

export function BalanceSection() {
  const [showBalance, setShowBalance] = useState(true);
  const [depositOpen, setDepositOpen] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [statementOpen, setStatementOpen] = useState(false);
  const queryClient = useQueryClient();

  // Récupération du solde
  const { data: balance, isLoading: balanceLoading } = useQuery({
    queryKey: ['account-balance'],
    queryFn: getBalance
  });

  // Récupération du relevé
  const { data: statement, isLoading: statementLoading } = useQuery({
    queryKey: ['account-statement'],
    queryFn: getStatement,
    enabled: statementOpen // Charger seulement quand le modal est ouvert
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

  const currentBalance = balance?.balance || 0;
  const formattedBalance = formatNumber(currentBalance);

  return (
    <>
      {/* Updated padding to p-6 for generous spacing */}
      <Card className="flex flex-row justify-between gap-4 p-8 px-10 md:px-12">
        <Card className="2xl:space-y-12 md:space-y-10 space-y-8 flex flex-col">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="gap-2 bg-[#F4F4F7] font-light rounded-full border border-[#000000]"
            >
              <Image
                src="/icons/bank.svg"
                alt="account"
                width={15}
                height={15}
              />
              Solde
            </Button>
          </div>

          <div>
            <p className="text-sm text-muted-foreground mb-2">Mon argent</p>
            <div className="flex items-center gap-3">
              <h2 className="text-4xl font-bold">
                {showBalance
                  ? balanceLoading
                    ? '••• •••'
                    : `${formattedBalance} FCFA`
                  : '••• •••'}
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowBalance(!showBalance)}
                className="text-muted-foreground bg-[#ECEAEB] rounded-full"
              >
                {showBalance ? (
                  <Eye className="w-5 h-5" />
                ) : (
                  <EyeOff className="w-5 h-5" />
                )}
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button
              variant="outline"
              size="lg"
              className="gap-2 px-2 pr-3 bg-primary hover:bg-primary/90 rounded-full"
              style={{
                background:
                  'linear-gradient(86deg, #22C629 -17.37%, #CEFE21 146.69%)'
              }}
              onClick={() => setDepositOpen(true)}
            >
              <Image
                src="https://novasend.app/_next/static/media/arrow_downward.0abf9168.svg"
                alt="déposer"
                width={16}
                height={16}
                className="flex size-6 p-1 items-center justify-center rounded-full bg-[#CEFE21] hover:bg-[#CEFE21]/80"
              />
              Déposer de l'argent
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="gap-2 px-2 pr-3 bg-red-600 hover:bg-red-700 text-white hover:text-white rounded-full"
              onClick={() => setWithdrawOpen(true)}
            >
              <Image
                src="https://novasend.app/_next/static/media/arrow_downward.0abf9168.svg"
                alt="retirer"
                width={16}
                height={16}
                className="flex size-6 p-1 items-center justify-center rounded-full bg-[#ffffff] rotate-180"
              />
              Retirer de l'argent
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="gap-2 px-2 pr-3 bg-[#EBEBEB] rounded-full"
              onClick={() => setStatementOpen(true)}
            >
              <Image
                src="/icons/hub.svg"
                alt="relevé de compte"
                width={18}
                height={18}
                className="flex size-6 p-1 items-center justify-center rounded-full bg-[#ffffff]"
              />
              Relevé de compte
            </Button>
          </div>
        </Card>

        <div className="flex items-center justify-center">
          <Image
            src="https://novasend.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fqrcode.cfb9d9d3.png&w=256&q=75"
            alt="relevé de compte"
            width={220}
            height={220}
            className="flex p-1 items-center justify-center"
          />
        </div>
      </Card>

      <DepositModal
        open={depositOpen}
        onOpenChange={setDepositOpen}
        onSuccess={handleDepositSuccess}
      />

      <WithdrawModal
        open={withdrawOpen}
        onOpenChange={setWithdrawOpen}
        onSuccess={handleWithdrawSuccess}
        currentBalance={currentBalance}
      />

      <Dialog open={statementOpen} onOpenChange={setStatementOpen}>
        <DialogContent className="max-w-4xl min-h-[50vh] overflow-y-auto  sm:rounded-[2rem]">
          <DialogHeader>
            <DialogTitle className="text-[1.6875rem] font-medium">
              Relevé de compte
            </DialogTitle>
            <DialogDescription className="text-xl text-muted-foreground">
              Historique de toutes vos transactions
            </DialogDescription>
          </DialogHeader>
          <StatementTable
            entries={statement?.entries || []}
            statementLoading={statementLoading}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
