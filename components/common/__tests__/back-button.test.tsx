import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import { describe, expect, it, vi } from 'vitest';

import { BackButton } from '../back-button';

vi.mock('next/navigation', () => ({
  useRouter: vi.fn()
}));

describe('BackButton', () => {
  const mockBack = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useRouter as any).mockReturnValue({
      back: mockBack
    });
  });

  it('devrait afficher le bouton retour', () => {
    render(<BackButton />);
    const button = screen.getByRole('button', { name: /retour/i });
    expect(button).toBeInTheDocument();
  });

  it('devrait appeler router.back lors du clic', async () => {
    const user = userEvent.setup();
    render(<BackButton />);

    const button = screen.getByRole('button', { name: /retour/i });
    await user.click(button);

    expect(mockBack).toHaveBeenCalledTimes(1);
  });

  it('devrait afficher une icône de flèche', () => {
    const { container } = render(<BackButton />);
    const svg = container.querySelector('svg');
    expect(svg).toBeInTheDocument();
  });

  it('devrait appliquer les classes CSS par défaut', () => {
    const { container } = render(<BackButton />);
    const button = container.querySelector('.bg-white.rounded-full');
    expect(button).toBeInTheDocument();
  });

  it('devrait appliquer une classe personnalisée', () => {
    const { container } = render(<BackButton className="custom-class" />);
    const button = container.querySelector('.custom-class');
    expect(button).toBeInTheDocument();
  });

  it('devrait avoir les bonnes dimensions', () => {
    const { container } = render(<BackButton />);
    const button = container.querySelector('.w-10.h-10');
    expect(button).toBeInTheDocument();
  });

  it('devrait avoir les classes de transition', () => {
    const { container } = render(<BackButton />);
    const button = container.querySelector('.transition-colors');
    expect(button).toBeInTheDocument();
  });
});
