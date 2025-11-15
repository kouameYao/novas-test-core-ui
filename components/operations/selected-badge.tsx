'use client';
import Image from 'next/image';
import {
  Controller,
  type FieldValues,
  type Path,
  type Control
} from 'react-hook-form';

import { FormLabel } from '@/components/ui/form';

import { ChangeButton } from './change-button';

interface Badge {
  id: string;
  name: string;
  number: string;
  balance: number;
}

interface SelectedBadgeProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  badge?: Badge;
  onChangeBadge: () => void;
  label?: string;
}

export function SelectedBadge<T extends FieldValues>({
  control,
  name,
  badge,
  onChangeBadge,
  label = 'Badge à recharger'
}: SelectedBadgeProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col space-y-1">
          <FormLabel className="mb-2">{label}</FormLabel>
          {badge && (
            <div
              className="flex items-start justify-between p-6 rounded-3xl"
              style={{ boxShadow: '0px 0px 25px 0px #A7A7A73B' }}
            >
              <div className="flex items-start gap-4 flex-1">
                <Image
                  src="/icons/hub/bip-pass.svg"
                  alt={badge.name}
                  className="h-10 w-10 rounded-full"
                  width={10}
                  height={10}
                />

                <div className="flex flex-col gap-1">
                  <p className="font-bold text-foreground text-lg">
                    {badge.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    N° du badge: {badge.number}
                  </p>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-muted-foreground">
                      Solde actuel du badge:{' '}
                      {badge.balance.toLocaleString('fr-FR')} FCFA
                    </p>
                    <div className="flex-1 border-b border-dotted border-muted-foreground" />
                  </div>
                </div>
              </div>
              <div className="flex mt-2">
                <ChangeButton onClick={onChangeBadge} />
              </div>
            </div>
          )}
        </div>
      )}
    />
  );
}
