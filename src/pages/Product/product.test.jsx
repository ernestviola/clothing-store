import { render, screen } from '@testing-library/react';
import CartContext from '../../context/CartContext';

import Product from './Product';

import { describe, it, expect, vi } from 'vitest';
import userEvent from '@testing-library/user-event';

window.fetch = vi.fn();

describe('Product page', () => {
  it('calls addToCart when button is clicked', async () => {
    const mockAddToCart = vi.fn();
    const mockProductData = {
      id: 1,
      title: 'Test Product',
      images: ['test.jpg'],
      description: 'Test Description',
      price: 99.99,
    };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockProductData,
    });
    const mockContext = {
      cart: {},
      addToCart: mockAddToCart,
    };
    render(
      <CartContext.Provider value={mockContext}>
        <Product />
      </CartContext.Provider>,
    );
    const user = userEvent.setup();
    const button = await screen.findByRole('button', { name: 'Add to bag' });
    await user.click(button);

    expect(mockAddToCart).toHaveBeenCalled();
    expect(mockAddToCart).toHaveBeenCalledWith(mockProductData);
  });
});
