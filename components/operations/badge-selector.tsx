'use client';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import {
  Controller,
  type FieldValues,
  type Path,
  type Control
} from 'react-hook-form';

interface Badge {
  id: string;
  name: string;
  logo?: string;
}

interface BadgeSelectorProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  badges: Badge[];
  label?: string;
}

export function BadgeSelector<T extends FieldValues>({
  control,
  name,
  badges,
  label = 'Par quel moyen souhaite-tu recharger ton compte ?'
}: BadgeSelectorProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="w-full space-y-4">
          {label && (
            <h2 className="text-2xl font-bold text-foreground">{label}</h2>
          )}

          <div className="space-y-3">
            {badges.map((badge) => (
              <button
                key={badge.id}
                type="button"
                onClick={() => field.onChange(badge.id)}
                className="w-full flex items-center justify-between p-4 bg-muted rounded-2xl border border-border hover:bg-muted/80 transition-colors"
              >
                <div className="flex items-center gap-3">
                  {badge.logo && (
                    <Image
                      src={badge.logo || '/placeholder.svg'}
                      alt={badge.name}
                      className="w-10 h-10 rounded-full object-cover"
                      width={40}
                      height={40}
                    />
                  )}
                  <span className="font-semibold text-foreground">
                    {badge.name}
                  </span>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground" />
              </button>
            ))}
          </div>
        </div>
      )}
    />
  );
}
