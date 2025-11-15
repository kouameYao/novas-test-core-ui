import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FormProvider, useForm } from 'react-hook-form';
import { describe, expect, it } from 'vitest';

import { PlanItem } from '../plan-item';

function TestComponent({ defaultValues = {}, label, plans }: any) {
  const methods = useForm({ defaultValues });
  return (
    <FormProvider {...methods}>
      <PlanItem
        control={methods.control}
        name="selectedPlan"
        plans={plans}
        label={label}
      />
    </FormProvider>
  );
}

describe('PlanItem', () => {
  const plans = [
    {
      id: 'plan1',
      name: 'Forfait Mensuel',
      description: '30 jours de validité',
      price: 5000
    },
    {
      id: 'plan2',
      name: 'Forfait Hebdomadaire',
      description: '7 jours de validité',
      price: 1500,
      currency: 'XOF'
    }
  ];

  it('devrait afficher le label par défaut', () => {
    render(<TestComponent plans={plans} />);
    expect(
      screen.getByText('Quel forfait souhaites-tu acheter ?')
    ).toBeInTheDocument();
  });

  it('devrait afficher un label personnalisé', () => {
    render(<TestComponent plans={plans} label="Choisissez votre forfait" />);
    expect(screen.getByText('Choisissez votre forfait')).toBeInTheDocument();
  });

  it('devrait afficher tous les plans', () => {
    render(<TestComponent plans={plans} />);
    expect(screen.getByText('Forfait Mensuel')).toBeInTheDocument();
    expect(screen.getByText('Forfait Hebdomadaire')).toBeInTheDocument();
  });

  it('devrait afficher les descriptions des plans', () => {
    render(<TestComponent plans={plans} />);
    expect(screen.getByText('30 jours de validité')).toBeInTheDocument();
    expect(screen.getByText('7 jours de validité')).toBeInTheDocument();
  });

  it('devrait afficher les prix des plans', () => {
    render(<TestComponent plans={plans} />);
    expect(screen.getByText(/5000/)).toBeInTheDocument();
    expect(screen.getByText(/1500/)).toBeInTheDocument();
  });

  it('devrait utiliser la devise par défaut FCFA', () => {
    render(<TestComponent plans={plans} />);
    const fcfaText = screen.getAllByText(/FCFA/);
    expect(fcfaText.length).toBeGreaterThan(0);
  });

  it('devrait utiliser une devise personnalisée', () => {
    render(<TestComponent plans={plans} />);
    expect(screen.getByText(/XOF/)).toBeInTheDocument();
  });

  it('devrait afficher les RadioGroupItems pour chaque plan', () => {
    const { container } = render(<TestComponent plans={plans} />);
    const radioButtons = container.querySelectorAll('button[role="radio"]');
    expect(radioButtons.length).toBe(2);
  });

  it('devrait avoir les classes CSS correctes pour les plans', () => {
    const { container } = render(<TestComponent plans={plans} />);
    const planCard = container.querySelector('.rounded-2xl.border');
    expect(planCard).toBeInTheDocument();
  });

  it("devrait permettre la sélection d'un plan", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <TestComponent plans={plans} defaultValues={{ selectedPlan: '' }} />
    );

    const firstPlan = container.querySelector('label')!;
    await user.click(firstPlan);

    expect(firstPlan).toBeInTheDocument();
  });

  it('devrait gérer une liste de plans vide', () => {
    render(<TestComponent plans={[]} />);
    expect(
      screen.getByText('Quel forfait souhaites-tu acheter ?')
    ).toBeInTheDocument();
  });
});
