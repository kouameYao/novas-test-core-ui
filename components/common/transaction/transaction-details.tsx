'use client';

import { Download } from 'lucide-react';
import React from 'react';

import { CustomCard } from '@/components/common';
import { SlidePanel, SlidePanelContent } from '@/components/common/slide-panel';
import { Button } from '@/components/ui/button';
import { Transaction } from '@/types/transaction';
import { formatDate } from '@/utils/format-date';

import { Status } from '../status';

import { ListTile } from './detail-card-item';

interface TransactionDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  transaction?: Transaction;
}

export function TransactionDetails({
  isOpen,
  onClose,
  transaction
}: TransactionDetailsProps) {
  if (!transaction) {
    return null;
  }

  return (
    <SlidePanel
      open={isOpen}
      onOpenChange={onClose}
      side="right"
      className="w-full max-w-md"
    >
      <SlidePanelContent className="p-0">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-black">
              {transaction.amount.toLocaleString()} FCFA
            </h1>
            <div>
              <p className="text-black font-medium">
                {transaction.transaction_type.name === 'PAYOUT'
                  ? `à ${transaction.customer_firstname} ${transaction.customer_lastname || ''}`.trim()
                  : `de ${transaction.merchantName}`}
              </p>
              <p className="text-black font-medium">
                {transaction.customer_phone_number}
              </p>
            </div>
            <p className="text-sm text-gray-100">
              {formatDate(transaction.dateOperation)}
            </p>
          </div>

          {/* Boutons d'action */}
          <div className="flex gap-3">
            <Button variant="outline" className="flex text-xs rounded-full">
              <Download className="w-4 h-4 mr-1" />
              Reçu de transaction
            </Button>
          </div>

          <div className="space-y-4">
            <CustomCard className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Statut</span>
                <Status status={transaction.status || 'Pending'} />
              </div>
              <ListTile
                label="Montant envoyé"
                value={`${transaction.amount.toLocaleString()} FCFA`}
              />
              <ListTile label="Frais" value={`${transaction.feeAmount} FCFA`} />
              <ListTile
                label="Montant total débité"
                value={`${(transaction.amount + parseInt(transaction.feeAmount || '0')).toLocaleString()} FCFA`}
              />
            </CustomCard>

            <CustomCard>
              <div className="space-y-3">
                <ListTile label="Carte débitée" value={`****3203`} />
                <ListTile
                  label="Solde après opération"
                  value={`-50 530 FCFA`}
                />
              </div>
            </CustomCard>

            {/* Section Mode d'envoi */}
            <CustomCard>
              <div className="space-y-3">
                <ListTile
                  label="Mode d'envoi"
                  value={`${transaction.operator}`}
                />
                <ListTile
                  label="Bénéficiaire"
                  value={`${transaction.customer_firstname} ${transaction.customer_lastname || ''}`}
                />
              </div>
            </CustomCard>
          </div>
        </div>
      </SlidePanelContent>
    </SlidePanel>
  );
}
