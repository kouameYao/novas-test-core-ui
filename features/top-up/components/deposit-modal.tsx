'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { RHFAmountInput } from '@/components/react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle
} from '@/components/ui/sheet';
import { parseAmount } from '@/utils/parse-amount';

import { deposit } from '../api/account-api';

const depositSchema = z.object({
  amount: z
    .string()
    .min(1, 'Le montant est requis')
    .refine(
      (val) => {
        const num = parseAmount(val);
        return num > 0;
      },
      { message: 'Le montant doit être supérieur à 0' }
    )
});

type DepositFormData = z.infer<typeof depositSchema>;

interface DepositModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void | Promise<void>;
}

export function DepositModal({
  open,
  onOpenChange,
  onSuccess
}: DepositModalProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<DepositFormData>({
    resolver: zodResolver(depositSchema),
    defaultValues: {
      amount: ''
    }
  });

  const onSubmit = async (data: DepositFormData) => {
    setIsLoading(true);
    try {
      const amount = parseAmount(data.amount);
      await deposit({ amount });
      form.reset();
      await onSuccess();
      onOpenChange(false);
    } catch (error) {
      console.error('Erreur lors du dépôt:', error);
      // L'erreur sera gérée par le composant parent avec un toast
      setIsLoading(false);
      // Ne pas fermer le modal en cas d'erreur
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="rounded-t-[3rem] max-w-3xl mx-auto p-8 md:p-10 min-h-[50vh]"
      >
        <SheetHeader className="space-y-0">
          <SheetTitle className="text-[1.6875rem] font-medium">
            Déposer de l'argent
          </SheetTitle>
          <SheetDescription className="text-xl text-muted-foreground">
            Entrez le montant que vous souhaitez déposer sur votre compte
          </SheetDescription>
        </SheetHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 mt-6"
          >
            <RHFAmountInput
              control={form.control}
              name="amount"
              placeholder="0"
              currency="FCFA"
            />
            <div className="flex justify-end gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={isLoading}
              >
                Annuler
              </Button>
              <Button type="submit" disabled={isLoading} size="lg">
                {isLoading ? 'En cours...' : 'Valider'}
              </Button>
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
