'use client';
import { ArrowLeftRight } from 'lucide-react';
import {
  Controller,
  type FieldValues,
  type Path,
  type Control
} from 'react-hook-form';

import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { FormLabel } from '@/components/ui/form';

import { ChangeButton } from './change-button';

interface Beneficiary {
  id: string;
  name: string;
  phone: string;
  initials: string;
  color: string;
}

interface SelectedBeneficiaryProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  beneficiary?: Beneficiary;
  onChangeBeneficiary: () => void;
  label?: string;
}

export function SelectedBeneficiary<T extends FieldValues>({
  control,
  name,
  beneficiary,
  onChangeBeneficiary,
  label = "Bénéficiaire de l'achat de credit"
}: SelectedBeneficiaryProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="flex flex-col space-y-1">
          <FormLabel className="mb-2">{label}</FormLabel>
          {beneficiary && (
            <div
              className="flex items-center justify-between p-4 rounded-3xl"
              style={{ boxShadow: '0px 0px 25px 0px #A7A7A73B' }}
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback
                      className={`${beneficiary.color} text-white font-light text-xs`}
                    >
                      {beneficiary.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-orange-500 rounded-full flex items-center justify-center border-2 border-background">
                    <ArrowLeftRight className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="flex flex-col leading-5">
                  <p className="font-medium text-foreground text-base">
                    {beneficiary.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {beneficiary.phone}
                  </p>
                </div>
              </div>
              <ChangeButton onClick={onChangeBeneficiary} />
            </div>
          )}
        </div>
      )}
    />
  );
}
