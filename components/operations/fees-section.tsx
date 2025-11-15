'use client';
import {
  Controller,
  type FieldValues,
  type Path,
  type Control
} from 'react-hook-form';

import { Switch } from '@/components/ui/switch';

interface FeesSectionProps<T extends FieldValues> {
  control: Control<T>;
  payFeesName: Path<T>;
  amount?: number;
  currency?: string;
}

export function FeesSection<T extends FieldValues>({
  control,
  payFeesName,
  amount = 0,
  currency = 'FCFA'
}: FeesSectionProps<T>) {
  const feePercentage = 0.01;
  const fees = Math.round(amount * feePercentage);
  const total = amount + fees;

  return (
    <div className="w-full space-y-4 mb-5 md:mb-10">
      <div className="flex items-center justify-between">
        <label className="text-sm text-[#696A6A]">
          Payer les frais d'achat de credit
        </label>
        <Controller
          control={control}
          name={payFeesName}
          render={({ field }) => (
            <Switch checked={field.value} onCheckedChange={field.onChange} />
          )}
        />
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex items-center justify-between text-[#696A6A]">
          <span>Frais d'achat de credit 1%</span>
          <span className="font-medium text-black">
            {fees} {currency}
          </span>
        </div>
        <div className="flex items-center justify-between text-[#696A6A]">
          <span>Montant total débité</span>
          <span className="font-medium text-black">
            {total} {currency}
          </span>
        </div>
      </div>
    </div>
  );
}
