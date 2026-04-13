import { describe, expect, it, vi } from 'vitest';
import Button from './Button';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Component Button', () => {
  it('Can click button', async () => {
    const mockHandleClick = vi.fn();
    render(<Button handleClick={mockHandleClick} />);

    const user = userEvent.setup();
    const button = await screen.findByRole('button');

    await user.click(button);

    expect(mockHandleClick).toHaveBeenCalled();
  });
});
