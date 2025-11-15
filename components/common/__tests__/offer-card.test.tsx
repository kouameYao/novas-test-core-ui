import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { OfferCard } from '../offer-card';

describe('OfferCard', () => {
  it('devrait afficher le composant', () => {
    const { container } = render(<OfferCard />);
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
  });

  it('devrait appeler onClick lors du clic', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    const { container } = render(<OfferCard onClick={handleClick} />);

    const button = container.querySelector('button')!;
    await user.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('devrait avoir la structure CSS correcte', () => {
    const { container } = render(<OfferCard />);
    const button = container.querySelector('.rounded-3xl.bg-white');
    expect(button).toBeInTheDocument();
  });

  it('devrait avoir les dimensions minimales', () => {
    const { container } = render(<OfferCard />);
    const button = container.querySelector(
      '.min-h-\\[200px\\].min-w-\\[200px\\]'
    );
    expect(button).toBeInTheDocument();
  });

  it('devrait appliquer une classe personnalisée', () => {
    const { container } = render(<OfferCard className="custom-class" />);
    const button = container.querySelector('.custom-class');
    expect(button).toBeInTheDocument();
  });

  it('devrait avoir les classes de transition', () => {
    const { container } = render(<OfferCard />);
    const button = container.querySelector('.transition-all');
    expect(button).toBeInTheDocument();
  });

  it('devrait être un bouton', () => {
    const { container } = render(<OfferCard />);
    const button = container.querySelector('button');
    expect(button?.tagName).toBe('BUTTON');
  });

  it('devrait fonctionner sans onClick', () => {
    const { container } = render(<OfferCard />);
    const button = container.querySelector('button');
    expect(button).toBeInTheDocument();
  });
});
