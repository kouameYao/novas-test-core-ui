'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
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

import { withdraw } from '../api/account-api';

const withdrawSchema = z.object({
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

type WithdrawFormData = z.infer<typeof withdrawSchema>;

interface WithdrawModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: () => void | Promise<void>;
  currentBalance?: number;
}

export function WithdrawModal({
  open,
  onOpenChange,
  onSuccess,
  currentBalance
}: WithdrawModalProps) {
  const queryClient = useQueryClient();

  const form = useForm<WithdrawFormData>({
    resolver: zodResolver(withdrawSchema),
    defaultValues: {
      amount: ''
    }
  });

  const withdrawMutation = useMutation({
    mutationFn: async (amount: number) => {
      return await withdraw({ amount });
    },
    onSuccess: async () => {
      // Invalider les queries pour rafraîchir les données
      await queryClient.invalidateQueries({ queryKey: ['account-balance'] });
      await queryClient.invalidateQueries({ queryKey: ['account-statement'] });
      form.reset();
      await onSuccess();
      onOpenChange(false);
    },
    onError: (error) => {
      console.error('Erreur lors du retrait:', error);
      const errorMessage =
        error instanceof Error ? error.message : 'Erreur lors du retrait';

      // Gestion des erreurs spécifiques du backend
      if (errorMessage.includes('solde insuffisant')) {
        form.setError('amount', {
          type: 'manual',
          message: 'Solde insuffisant'
        });
      } else if (errorMessage.includes('montant négatif')) {
        form.setError('amount', {
          type: 'manual',
          message: 'Le montant ne peut pas être négatif'
        });
      } else {
        form.setError('root', {
          type: 'manual',
          message: errorMessage
        });
      }
      // L'erreur sera également gérée par le composant parent avec un toast
    }
  });

  const onSubmit = async (data: WithdrawFormData) => {
    const amount = parseAmount(data.amount);

    // Vérification côté client du solde insuffisant
    if (currentBalance !== undefined && amount > currentBalance) {
      form.setError('amount', {
        type: 'manual',
        message: 'Solde insuffisant'
      });
      return;
    }

    withdrawMutation.mutate(amount);
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="bottom"
        className="rounded-t-[3rem] max-w-3xl mx-auto p-8 md:p-10 min-h-[50vh]"
      >
        <SheetHeader className="space-y-0">
          <SheetTitle className="text-[1.6875rem] font-medium">
            Retirer de l'argent
          </SheetTitle>
          <SheetDescription className="text-xl text-muted-foreground">
            Entrez le montant que vous souhaitez retirer de votre compte
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
            {form.formState.errors.root && (
              <p className="text-sm text-red-600">
                {form.formState.errors.root.message}
              </p>
            )}
            {form.formState.errors.amount && (
              <p className="text-sm text-red-600">
                {form.formState.errors.amount.message}
              </p>
            )}
            <div className="flex justify-end gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  form.reset();
                  onOpenChange(false);
                }}
                disabled={withdrawMutation.isPending}
              >
                Annuler
              </Button>
              <Button
                type="submit"
                disabled={withdrawMutation.isPending}
                size="lg"
              >
                {withdrawMutation.isPending ? 'En cours...' : 'Valider'}
              </Button>
            </div>
          </form>
        </Form>
      </SheetContent>
    </Sheet>
  );
}
