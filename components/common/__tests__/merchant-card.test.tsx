import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { MerchantCard } from '../merchant-card';

describe('MerchantCard', () => {
  it('devrait afficher le nom du marchand', () => {
    render(<MerchantCard name="MTN" />);
    expect(screen.getByText('MTN')).toBeInTheDocument();
  });

  it("devrait afficher le logo s'il est fourni", () => {
    const { container } = render(
      <MerchantCard name="MTN" logoUrl="/icons/operators/mtn.svg" />
    );
    const image = container.querySelector('img');
    expect(image).toHaveAttribute('src', '/icons/operators/mtn.svg');
    expect(image).toHaveAttribute('alt', 'MTN');
  });

  it("devrait afficher un placeholder si le logo n'est pas fourni", () => {
    const { container } = render(<MerchantCard name="Test Merchant" />);
    const placeholder = container.querySelector('.bg-\\[\\#E0E0E0\\]');
    expect(placeholder).toBeInTheDocument();
  });

  it('devrait utiliser la couleur de logo par défaut', () => {
    const { container } = render(<MerchantCard name="Test" />);
    const logoContainer = container.querySelector('.rounded-full');
    expect(logoContainer).toBeInTheDocument();
  });

  it('devrait utiliser une couleur de logo personnalisée', () => {
    const { container } = render(
      <MerchantCard name="Test" logoColor="bg-yellow" />
    );
    const logoContainer = container.querySelector('.bg-yellow');
    expect(logoContainer).toBeInTheDocument();
  });

  it('devrait appeler onClick lors du clic', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<MerchantCard name="MTN" onClick={handleClick} />);

    const card = screen.getByText('MTN').closest('a')!;
    await user.click(card);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('devrait avoir le lien vers la page de paiement marchand', () => {
    render(<MerchantCard name="MTN" />);
    const link = screen.getByText('MTN').closest('a')!;
    expect(link).toHaveAttribute('href', '/hub/merchant-payment');
  });

  it('devrait avoir la structure CSS correcte', () => {
    const { container } = render(<MerchantCard name="Test" />);
    const card = container.querySelector('.rounded-3xl.p-4');
    expect(card).toBeInTheDocument();
  });

  it('devrait avoir les classes de transition', () => {
    const { container } = render(<MerchantCard name="Test" />);
    const card = container.querySelector('.transition-all');
    expect(card).toBeInTheDocument();
  });

  it('devrait appliquer une classe personnalisée', () => {
    const { container } = render(
      <MerchantCard name="Test" className="custom-class" />
    );
    const card = container.querySelector('.custom-class');
    expect(card).toBeInTheDocument();
  });

  it('devrait afficher le logo avec les bonnes dimensions', () => {
    const { container } = render(
      <MerchantCard name="MTN" logoUrl="/icons/operators/mtn.svg" />
    );
    const logo = container.querySelector('.h-20.w-20');
    expect(logo).toBeInTheDocument();
  });
});
