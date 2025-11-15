import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { InfoMessage } from '../info-message';

describe('InfoMessage', () => {
  it('devrait afficher le message', () => {
    render(<InfoMessage message="Ceci est un message d'information" />);
    expect(
      screen.getByText("Ceci est un message d'information")
    ).toBeInTheDocument();
  });

  it('devrait appliquer les classes CSS par défaut', () => {
    const { container } = render(<InfoMessage message="Test message" />);
    const wrapper = container.querySelector(
      '.flex.items-center.justify-center'
    );
    expect(wrapper).toBeInTheDocument();
  });

  it('devrait appliquer une classe personnalisée', () => {
    const { container } = render(
      <InfoMessage message="Test" className="custom-class" />
    );
    const wrapper = container.querySelector('.custom-class');
    expect(wrapper).toBeInTheDocument();
  });

  it('devrait afficher le texte avec les bonnes classes', () => {
    const { container } = render(<InfoMessage message="Test" />);
    const text = container.querySelector('.text-sm.text-black');
    expect(text).toBeInTheDocument();
  });

  it('devrait gérer les messages vides', () => {
    render(<InfoMessage message="" />);
    const text = screen.queryByText(/.+/);
    expect(text).not.toBeInTheDocument();
  });

  it('devrait gérer les messages longs', () => {
    const longMessage =
      'Ceci est un message très long qui devrait être affiché correctement dans le composant InfoMessage sans problème de formatage.';
    render(<InfoMessage message={longMessage} />);
    expect(screen.getByText(longMessage)).toBeInTheDocument();
  });
});
