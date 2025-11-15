'use client';

import Image from 'next/image';
import type React from 'react';
import {
  Controller,
  type FieldValues,
  type Path,
  type Control
} from 'react-hook-form';

import { ChangeButton } from '@/components/operations';
import { Avatar } from '@/components/ui/avatar';
import { FormLabel } from '@/components/ui/form';

interface Account {
  id: string;
  type: string;
  number: string;
  balance: number;
  icon: React.ReactNode;
}

interface SelectedAccountProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  account?: Account;
  onChangeAccount: () => void;
  label?: string;
  currency?: string;
}

export function SelectedAccount<T extends FieldValues>({
  control,
  name,
  account,
  onChangeAccount,
  label = 'Compte à débiter',
  currency = 'FCFA'
}: SelectedAccountProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="w-full space-y-1">
          {label && <FormLabel>{label}</FormLabel>}
          {account && (
            <div className="flex items-center justify-between p-4 rounded-3xl border border-border">
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10 center">
                  <Image
                    src="/icons/shared/mastercard.svg"
                    alt="Mastercard"
                    width={30}
                    height={30}
                    className="rounded-full"
                  />
                </Avatar>

                <div>
                  <p className="font-semibold text-foreground">
                    {account.type} {account.number}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Solde:{' '}
                    {account.balance ? account.balance.toLocaleString() : '0'}{' '}
                    {currency}
                  </p>
                </div>
              </div>
              <ChangeButton onClick={onChangeAccount} />
            </div>
          )}
        </div>
      )}
    />
  );
}
