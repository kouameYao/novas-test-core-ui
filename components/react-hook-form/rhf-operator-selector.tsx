'use client';
import Image from 'next/image';
import {
  Controller,
  type FieldValues,
  type Path,
  type Control
} from 'react-hook-form';

import { RadioGroup } from '@/components/ui/radio-group';

import { FormLabel } from '../ui/form';

interface Operator {
  id: string;
  name: string;
  logo?: string;
}

interface OperatorSelectorProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  operators: Operator[];
  label?: string;
}

export function RHFOperatorSelector<T extends FieldValues>({
  control,
  name,
  operators,
  label = 'Sélectionne un opérateur'
}: OperatorSelectorProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="w-full flex flex-col space-y-2">
          <FormLabel className="">{label}</FormLabel>
          <RadioGroup value={field.value} onValueChange={field.onChange}>
            <div className="flex gap-4 md:gap-5">
              {operators.map((operator) => (
                <label
                  key={operator.id}
                  className={`flex items-center gap-4 p-2.5 rounded-2xl cursor-pointer transition-all duration-200 ${
                    field.value === operator.id
                      ? 'ring-black ring-2 bg-white'
                      : 'bg-[#E6E6E6]'
                  }`}
                  onClick={() => field.onChange(operator.id)}
                >
                  <div className="flex items-center gap-1 md:gap-1.5">
                    {operator.logo && (
                      <Image
                        src={operator.logo || '/placeholder.svg'}
                        alt={operator.name}
                        className="w-6 h-6 rounded-full object-cover"
                        width={32}
                        height={32}
                      />
                    )}
                    <span
                      className={`font-medium text-xs transition-colors ${
                        field.value === operator.id
                          ? 'text-black'
                          : 'text-gray-100'
                      }`}
                    >
                      {operator.name}
                    </span>
                  </div>
                </label>
              ))}
            </div>
          </RadioGroup>
        </div>
      )}
    />
  );
}
