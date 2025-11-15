'use client';

import {
  Controller,
  type FieldValues,
  type Path,
  type Control
} from 'react-hook-form';

import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

interface Plan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency?: string;
}

interface PlanItemProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  plans: Plan[];
  label?: string;
}

export function PlanItem<T extends FieldValues>({
  control,
  name,
  plans,
  label = 'Quel forfait souhaites-tu acheter ?'
}: PlanItemProps<T>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <div className="w-full space-y-4">
          {label && (
            <h2 className="text-2xl font-bold text-foreground">{label}</h2>
          )}

          <RadioGroup value={field.value} onValueChange={field.onChange}>
            <div className="space-y-3">
              {plans.map((plan) => (
                <label
                  key={plan.id}
                  className="flex items-center gap-4 p-4 bg-muted rounded-2xl border border-border cursor-pointer hover:bg-muted/80 transition-colors"
                >
                  <RadioGroupItem value={plan.id} id={plan.id} />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground">{plan.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <p className="font-bold text-foreground">
                      {plan.price} {plan.currency || 'FCFA'}
                    </p>
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
