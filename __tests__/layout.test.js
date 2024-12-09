import { render, screen } from '@testing-library/react';
import RootLayout from '../app/layout';

// Mock next/font/local
jest.mock('next/font/local', () => ({
  __esModule: true,
  default: () => ({
    variable: '--font-test-sans',
    className: 'test-font',
  }),
}));

describe('RootLayout', () => {
  it('renders navigation links', () => {
    render(<RootLayout children={<div>Test</div>} />);
    
    // Check for Home link
    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');

    // Check for Pokémon History link
    const historyLink = screen.getByText(/Pokémon History/i);
    expect(historyLink).toBeInTheDocument();
    expect(historyLink).toHaveAttribute('href', '/pokemon-history');
  });

  it('has responsive navigation', () => {
    render(<RootLayout children={<div>Test</div>} />);
    
    // Check navbar collapse button
    const toggleButton = screen.getByLabelText(/Toggle navigation/i);
    expect(toggleButton).toHaveClass('d-lg-none');
  });

  it('has navigation links with correct IDs', () => {
    render(<RootLayout children={<div>Test</div>} />);
    
    const homeLink = screen.getByText(/Home/i);
    const historyLink = screen.getByText(/Pokémon History/i);

    expect(homeLink).toHaveAttribute('id', 'homeNavLink');
    expect(historyLink).toHaveAttribute('id', 'historyNavLink');
  });
});
