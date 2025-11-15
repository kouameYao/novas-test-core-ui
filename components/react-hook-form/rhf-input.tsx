import React from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';

import { FormLabel } from '../ui/form';
import { Input } from '../ui/input';

interface RHFTextFieldProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  showError?: boolean;
}

export function RHFTextField<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  type = 'text',
  disabled = false,
  required = false,
  className = '',
  showError = false
}: RHFTextFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          <div className="space-y-1 flex flex-col">
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Input
                type={type}
                className={`placeholder:tex-[10px] h-[3rem] bg-white text-sm font-light placeholder:text-[#BABABA] ${
                  (error || showError) && '!border-[#e95d5d]'
                } ${className}`}
                placeholder={placeholder}
                disabled={disabled}
                {...field}
              />
            </FormControl>
            {error && (
              <FormMessage className="error-msg">{error.message}</FormMessage>
            )}
          </div>
        </FormItem>
      )}
    />
  );
}
