import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import PortfolioSection from '../PortfolioSection';

describe('PortfolioSection Component', () => {
  it('renders section title', () => {
    render(<PortfolioSection />);
    expect(screen.getByText(/Mi Portafolio/i)).toBeInTheDocument();
  });

  it('renders portfolio cards based on data', () => {
    render(<PortfolioSection />);
    expect(screen.getAllByText('Secret Desodorantes').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Ekos Fusión').length).toBeGreaterThan(0);
  });
});
