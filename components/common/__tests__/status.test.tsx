import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { getStatusColor, getStatusLabel, Status } from '../status';

describe('Status Utils', () => {
  describe('getStatusColor', () => {
    it('devrait retourner la bonne couleur pour Approved', () => {
      const color = getStatusColor('Approved');
      expect(color).toContain('bg-[#DBFFE9]');
      expect(color).toContain('text-[#3EA444]');
    });

    it('devrait retourner la bonne couleur pour Pending', () => {
      const color = getStatusColor('Pending');
      expect(color).toContain('bg-yellow-100');
      expect(color).toContain('text-yellow-700');
    });

    it('devrait retourner la bonne couleur pour Failed', () => {
      const color = getStatusColor('Failed');
      expect(color).toContain('bg-red-100');
      expect(color).toContain('text-red-700');
    });

    it('devrait retourner la bonne couleur pour Cancelled', () => {
      const color = getStatusColor('Cancelled');
      expect(color).toContain('bg-red-100');
      expect(color).toContain('text-red-700');
    });

    it('devrait retourner la couleur par défaut pour un statut inconnu', () => {
      const color = getStatusColor('Unknown' as any);
      expect(color).toContain('bg-gray-100');
      expect(color).toContain('text-gray-700');
    });
  });

  describe('getStatusLabel', () => {
    it('devrait retourner le bon label pour Approved', () => {
      expect(getStatusLabel('Approved')).toBe('Succès');
    });

    it('devrait retourner le bon label pour Pending', () => {
      expect(getStatusLabel('Pending')).toBe('En attente');
    });

    it('devrait retourner le bon label pour Failed', () => {
      expect(getStatusLabel('Failed')).toBe('Échoué');
    });

    it('devrait retourner le bon label pour Cancelled', () => {
      expect(getStatusLabel('Cancelled')).toBe('Annulé');
    });

    it('devrait retourner "Inconnu" pour un statut inconnu', () => {
      expect(getStatusLabel('Unknown' as any)).toBe('Inconnu');
    });
  });
});

describe('Status Component', () => {
  it('devrait afficher le badge avec le statut Approved', () => {
    render(<Status status="Approved" />);
    expect(screen.getByText('Succès')).toBeInTheDocument();
  });

  it('devrait afficher le badge avec le statut Pending', () => {
    render(<Status status="Pending" />);
    expect(screen.getByText('En attente')).toBeInTheDocument();
  });

  it('devrait afficher le badge avec le statut Failed', () => {
    render(<Status status="Failed" />);
    expect(screen.getByText('Échoué')).toBeInTheDocument();
  });

  it('devrait afficher le badge avec le statut Cancelled', () => {
    render(<Status status="Cancelled" />);
    expect(screen.getByText('Annulé')).toBeInTheDocument();
  });

  it('devrait avoir les classes CSS correctes', () => {
    const { container } = render(<Status status="Approved" />);
    const badge = container.querySelector(
      '.rounded-full.font-normal.cursor-pointer'
    );
    expect(badge).toBeInTheDocument();
  });

  it('devrait appliquer les bonnes couleurs au badge', () => {
    const { container } = render(<Status status="Approved" />);
    const badge = container.querySelector('.bg-\\[\\#DBFFE9\\]');
    expect(badge).toBeInTheDocument();
  });

  it('devrait gérer un statut inconnu', () => {
    render(<Status status={'Unknown' as any} />);
    expect(screen.getByText('Inconnu')).toBeInTheDocument();
  });
});
