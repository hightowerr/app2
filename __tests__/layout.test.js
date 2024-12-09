import { render, screen } from '@testing-library/react';
import RootLayout from '../app/layout';
import '@testing-library/jest-dom';

// Mock dependencies
jest.mock('next/font/local', () => ({
  __esModule: true,
  default: () => ({
    variable: '--font-test-sans',
    className: 'test-font',
  }),
}));

jest.mock('next/navigation', () => ({
  usePathname: () => '/',
}));

describe('RootLayout Component', () => {
  // Basic rendering test
  it('renders without crashing', () => {
    const { container } = render(
      <RootLayout>
        <div>Test Child Content</div>
      </RootLayout>
    );
    expect(container).toBeInTheDocument();
  });

  // Navigation tests
  describe('Navigation', () => {
    beforeEach(() => {
      render(<RootLayout>Test Content</RootLayout>);
    });

    it('renders navigation links', () => {
      const homeLink = screen.getByText(/Home/i);
      const historyLink = screen.getByText(/Pokémon History/i);

      expect(homeLink).toBeInTheDocument();
      expect(historyLink).toBeInTheDocument();
    });

    it('has correct link attributes', () => {
      const homeLink = screen.getByText(/Home/i);
      const historyLink = screen.getByText(/Pokémon History/i);

      expect(homeLink).toHaveAttribute('href', '/');
      expect(historyLink).toHaveAttribute('href', '/pokemon-history');
      expect(homeLink).toHaveAttribute('id', 'homeNavLink');
      expect(historyLink).toHaveAttribute('id', 'historyNavLink');
    });
  });

  // Accessibility tests
  describe('Accessibility', () => {
    it('has responsive navbar toggle', () => {
      render(<RootLayout>Test Content</RootLayout>);
      
      const toggleButton = screen.getByLabelText(/Toggle navigation/i);
      expect(toggleButton).toHaveClass('navbar-toggler');
      expect(toggleButton).toHaveAttribute('data-bs-toggle', 'collapse');
    });
  });

  // Font and styling tests
  describe('Styling', () => {
    it('applies font classes', () => {
      const { container } = render(
        <RootLayout>
          <div>Test Content</div>
        </RootLayout>
      );
      
      const body = container.querySelector('body');
      expect(body).toHaveClass('antialiased');
      expect(body).toHaveClass('--font-geist-sans');
      expect(body).toHaveClass('--font-geist-mono');
    });
  });
});
