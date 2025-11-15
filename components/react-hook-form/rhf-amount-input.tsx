'use client';

import {
  Controller,
  type FieldValues,
  type Path,
  type Control
} from 'react-hook-form';

import { Input } from '@/components/ui/input';

interface AmountInputProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  currency?: string;
  placeholder?: string;
}

export function RHFAmountInput<T extends FieldValues>({
  control,
  name,
  currency = 'FCFA',
  placeholder = '10 000'
}: AmountInputProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => {
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const inputValue = e.target.value.replace(/\s/g, '');

          if (!/^\d*$/.test(inputValue)) return;

          const formatted = inputValue.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

          field.onChange(formatted);
        };

        return (
          <div className="relative bg-[#F7F7F7] p-6 rounded-3xl flex items-center">
            <Input
              {...field}
              type="text"
              placeholder={placeholder}
              onChange={handleChange}
              className="text-3xl md:text-4xl bg-[#F7F7F7] rounded-none py-6 font-bold text-black placeholder:text-gray-400 border-0 outline-none flex-1 p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <div className="text-gray-500 font-bold text-3xl ml-6 whitespace-nowrap">
              {currency}
            </div>
          </div>
        );
      }}
    />
  );
}
