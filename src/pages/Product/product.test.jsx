import { render, screen } from '@testing-library/react';
import CartContext from '../../context/CartContext';

import Product from './Product';

import { describe, it, expect } from 'vitest';

describe('Product page', () => {
  it('tests the add button', () => {
    render(Product);
  });
});
