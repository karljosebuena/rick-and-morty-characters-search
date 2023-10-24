import { render, screen } from '@testing-library/react';
import HomePage from '@/app/page';

describe('HomePage', () => {
  it('should have Welcome text', () => {
    render(HomePage());

    const text = screen.getByText(/Welcome to Rick and Morty Characters Search/i);
    expect(text).toBeInTheDocument();
  });

  it('should have Get Started button', () => {
    render(HomePage());

    const button = screen.getByRole('button', { name: /Get Started/i });

    expect(button).toBeInTheDocument();
  });
});
