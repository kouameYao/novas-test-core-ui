import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import {
  MoovIcon,
  MTMIcon,
  OrangeMoneyIcon,
  WaveIcon
} from '../operator-icons';

describe('OperatorIcons', () => {
  describe('WaveIcon', () => {
    it("devrait afficher l'icône Wave", () => {
      const { container } = render(<WaveIcon />);
      const image = container.querySelector('img');
      expect(image).toHaveAttribute('src', '/icons/operators/wave.svg');
      expect(image).toHaveAttribute('alt', 'Wave');
    });

    it('devrait avoir les bonnes dimensions', () => {
      const { container } = render(<WaveIcon />);
      const image = container.querySelector('img');
      expect(image).toHaveAttribute('width', '24');
      expect(image).toHaveAttribute('height', '24');
    });
  });

  describe('OrangeMoneyIcon', () => {
    it("devrait afficher l'icône Orange Money", () => {
      const { container } = render(<OrangeMoneyIcon />);
      const image = container.querySelector('img');
      expect(image).toHaveAttribute('src', '/icons/operators/orange.svg');
      expect(image).toHaveAttribute('alt', 'Orange');
    });

    it('devrait avoir les bonnes dimensions', () => {
      const { container } = render(<OrangeMoneyIcon />);
      const image = container.querySelector('img');
      expect(image).toHaveAttribute('width', '24');
      expect(image).toHaveAttribute('height', '24');
    });
  });

  describe('MTMIcon', () => {
    it("devrait afficher l'icône MTN", () => {
      const { container } = render(<MTMIcon />);
      const image = container.querySelector('img');
      expect(image).toHaveAttribute('src', '/icons/operators/mtn.svg');
      expect(image).toHaveAttribute('alt', 'MTN');
    });

    it('devrait avoir les bonnes dimensions', () => {
      const { container } = render(<MTMIcon />);
      const image = container.querySelector('img');
      expect(image).toHaveAttribute('width', '24');
      expect(image).toHaveAttribute('height', '24');
    });
  });

  describe('MoovIcon', () => {
    it("devrait afficher l'icône Moov", () => {
      const { container } = render(<MoovIcon />);
      const image = container.querySelector('img');
      expect(image).toHaveAttribute('src', '/icons/operators/moov.svg');
      expect(image).toHaveAttribute('alt', 'Moov');
    });

    it('devrait avoir les bonnes dimensions', () => {
      const { container } = render(<MoovIcon />);
      const image = container.querySelector('img');
      expect(image).toHaveAttribute('width', '24');
      expect(image).toHaveAttribute('height', '24');
    });
  });
});
