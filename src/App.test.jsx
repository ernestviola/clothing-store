import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('App Component', () => {
  it('Renders without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
  });
});
