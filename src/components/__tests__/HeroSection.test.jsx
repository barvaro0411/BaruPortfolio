import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroSection from '../HeroSection';

describe('HeroSection Component', () => {
  it('renders main heading', () => {
    render(<HeroSection scrollTo={() => {}} />);
    expect(screen.getByText(/Hola, soy/i)).toBeInTheDocument();
    expect(screen.getByText(/Bárbara/i)).toBeInTheDocument();
  });

  it('renders key metrics buttons', () => {
    render(<HeroSection scrollTo={() => {}} />);
    expect(screen.getByText('TikTok', { exact: true })).toBeInTheDocument();
    expect(screen.getByText('Instagram', { exact: true })).toBeInTheDocument();
  });

  it('renders call to action button', () => {
    render(<HeroSection scrollTo={() => {}} />);
    expect(screen.getByText(/Ver mi trabajo/i)).toBeInTheDocument();
  });
});
