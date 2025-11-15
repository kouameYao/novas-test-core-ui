'use client';

import React from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface PhoneInputFieldProps<T extends FieldValues> {
  control: Control<T>;
  countryCodeName: FieldPath<T>;
  phoneNumberName: FieldPath<T>;
  countryCodeLabel?: string;
  phoneNumberLabel?: string;
  phoneNumberPlaceholder?: string;
  disabled?: boolean;
  className?: string;
  countryCodeClassName?: string;
  phoneNumberClassName?: string;
}

export function PhoneInputField<T extends FieldValues>({
  control,
  countryCodeName,
  phoneNumberName,
  countryCodeLabel = 'Indicatif',
  phoneNumberLabel = 'Numéro de téléphone',
  phoneNumberPlaceholder = '12345678',
  disabled = false,
  className = '',
  countryCodeClassName = '',
  phoneNumberClassName = ''
}: PhoneInputFieldProps<T>) {
  return (
    <div className={`flex gap-3 ${className}`}>
      <FormField
        control={control}
        name={countryCodeName}
        render={({ field }) => (
          <FormItem className="flex flex-col space-y-1">
            <FormLabel>{countryCodeLabel}</FormLabel>
            <FormControl>
              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M12.0003 24C13.4682 24 14.8743 23.736 16.1742 23.2536L16.696 12L16.1743 0.746391C14.8743 0.264047 13.4682 0 12.0003 0C10.5325 0 9.12639 0.264047 7.82645 0.746391L7.30469 12L7.82641 23.2536C9.12639 23.736 10.5325 24 12.0003 24Z"
                        fill="#F0F0F0"
                      />
                      <path
                        d="M0 11.9999C0 17.1595 3.2565 21.558 7.82611 23.2536V0.746338C3.2565 2.44185 0 6.84037 0 11.9999Z"
                        fill="#FF9811"
                      />
                      <path
                        d="M16.1738 0.746338V23.2536C20.7434 21.558 23.9999 17.1595 23.9999 11.9999C23.9999 6.84037 20.7434 2.44185 16.1738 0.746338Z"
                        fill="#6DA544"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3477_18622">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <Input
                  {...field}
                  className={cn(
                    'pl-10 w-[90px] border-none rounded-2xl h-12',
                    countryCodeClassName
                  )}
                  readOnly
                  disabled={disabled}
                />
              </div>
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={phoneNumberName}
        render={({ field }) => (
          <FormItem className="flex-1 flex flex-col space-y-1">
            <FormLabel>{phoneNumberLabel}</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder={phoneNumberPlaceholder}
                className={cn('border-none h-12', phoneNumberClassName)}
                type="tel"
                disabled={disabled}
              />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
}
