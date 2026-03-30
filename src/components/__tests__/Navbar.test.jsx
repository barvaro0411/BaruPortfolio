import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import Navbar from '../Navbar';

describe('Navbar Component', () => {
  it('renders correctly and displays logo', () => {
    render(<Navbar scrollTo={() => {}} />);
    expect(screen.getByText('BARÜ.')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Navbar scrollTo={() => {}} />);
    expect(screen.getByText('Presentación')).toBeInTheDocument();
    expect(screen.getByText('Trabajo')).toBeInTheDocument();
  });

  it('calls scrollTo when link is clicked', () => {
    const scrollToMock = vi.fn();
    render(<Navbar scrollTo={scrollToMock} />);
    
    const navLink = screen.getByText('Presentación');
    fireEvent.click(navLink);
    
    expect(scrollToMock).toHaveBeenCalledWith('presentacion');
  });
});
