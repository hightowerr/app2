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

// Mock Bootstrap's collapse functionality
jest.mock('bootstrap/js/dist/collapse', () => {
  return jest.fn().mockImplementation(() => ({
    toggle: jest.fn(),
  }));
});

describe('RootLayout', () => {
  it('renders navigation links', () => {
    render(<RootLayout>Test Content</RootLayout>);
    
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
    render(<RootLayout>Test Content</RootLayout>);
    
    // Check navbar collapse button
    const toggleButton = screen.getByLabelText(/Toggle navigation/i);
    expect(toggleButton).toHaveClass('d-lg-none');
  });

  it('has navigation links with correct IDs', () => {
    render(<RootLayout>Test Content</RootLayout>);
    
    const homeLink = screen.getByText(/Home/i);
    const historyLink = screen.getByText(/Pokémon History/i);

    expect(homeLink).toHaveAttribute('id', 'homeNavLink');
    expect(historyLink).toHaveAttribute('id', 'historyNavLink');
  });
});
