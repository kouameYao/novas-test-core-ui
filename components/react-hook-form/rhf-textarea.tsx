import React from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';

import { FormLabel } from '../ui/form';

interface RHFTextareaProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  placeholder?: string;
  rows?: number;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  showError?: boolean;
}

export function RHFTextarea<T extends FieldValues>({
  control,
  name,
  label,
  placeholder,
  rows = 4,
  disabled = false,
  required = false,
  className = '',
  showError = false
}: RHFTextareaProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <FormItem>
          <div className="space-y-1 flex flex-col">
            <FormLabel>{label}</FormLabel>
            <FormControl>
              <Textarea
                rows={rows}
                className={`bg-white text-sm font-light placeholder:text-[#BABABA] resize-none ${
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
