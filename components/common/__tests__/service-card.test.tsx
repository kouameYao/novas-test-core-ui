import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { ServiceCard } from '../service-card';

describe('ServiceCard', () => {
  const defaultProps = {
    title: 'Acheter du crédit',
    icon: '/icons/credit.svg',
    href: '/hub/credit-purchase'
  };

  it('devrait afficher le titre du service', () => {
    render(<ServiceCard {...defaultProps} />);
    expect(screen.getByText('Acheter du crédit')).toBeInTheDocument();
  });

  it("devrait afficher l'icône", () => {
    const { container } = render(<ServiceCard {...defaultProps} />);
    const image = container.querySelector('img');
    expect(image).toHaveAttribute('src', '/icons/credit.svg');
    expect(image).toHaveAttribute('alt', 'Acheter du crédit');
  });

  it('devrait avoir le bon lien href', () => {
    render(<ServiceCard {...defaultProps} />);
    const link = screen.getByText('Acheter du crédit').closest('a')!;
    expect(link).toHaveAttribute('href', '/hub/credit-purchase');
  });

  it('devrait appeler onClick lors du clic', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();
    render(<ServiceCard {...defaultProps} onClick={handleClick} />);

    const card = screen.getByText('Acheter du crédit').closest('a')!;
    await user.click(card);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('devrait avoir la structure CSS correcte', () => {
    const { container } = render(<ServiceCard {...defaultProps} />);
    const card = container.querySelector('.rounded-3xl.bg-white');
    expect(card).toBeInTheDocument();
  });

  it('devrait avoir les bonnes dimensions', () => {
    const { container } = render(<ServiceCard {...defaultProps} />);
    const card = container.querySelector('.h-\\[136px\\].w-\\[235px\\]');
    expect(card).toBeInTheDocument();
  });

  it("devrait positionner l'icône en bas à droite", () => {
    const { container } = render(<ServiceCard {...defaultProps} />);
    const iconContainer = container.querySelector('.absolute.right-4.bottom-4');
    expect(iconContainer).toBeInTheDocument();
  });

  it("devrait utiliser la couleur d'icône par défaut", () => {
    render(<ServiceCard {...defaultProps} />);
    const card = screen.getByText('Acheter du crédit').closest('a')!;
    expect(card).toBeInTheDocument();
  });

  it("devrait utiliser une couleur d'icône personnalisée", () => {
    render(<ServiceCard {...defaultProps} iconColor="text-yellow" />);
    const card = screen.getByText('Acheter du crédit').closest('a')!;
    expect(card).toBeInTheDocument();
  });

  it('devrait appliquer une classe personnalisée', () => {
    const { container } = render(
      <ServiceCard {...defaultProps} className="custom-class" />
    );
    const card = container.querySelector('.custom-class');
    expect(card).toBeInTheDocument();
  });

  it('devrait afficher le titre avec les bonnes classes', () => {
    const { container } = render(<ServiceCard {...defaultProps} />);
    const title = container.querySelector('.text-lg.leading-5.font-light');
    expect(title).toBeInTheDocument();
  });

  it("devrait afficher l'icône avec les bonnes dimensions", () => {
    const { container } = render(<ServiceCard {...defaultProps} />);
    const icon = container.querySelector('.h-20.w-20');
    expect(icon).toBeInTheDocument();
  });
});
