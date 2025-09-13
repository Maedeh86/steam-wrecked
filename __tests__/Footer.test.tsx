import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../src/components/Footer';
import { Pages } from '../src/features/arrays/types';
import '@testing-library/jest-dom';

jest.mock('../src/features/arrays/types', () => ({
  Pages: ['The Game', 'The Team', 'Contact'], 
}));

describe('Footer component', () => {
  test('renders Homepage link', () => {
    render(<Footer />);
    const homepageLink = screen.getByText(/homepage/i);
    expect(homepageLink).toBeInTheDocument();
  });

  test('renders all page links from Pages array', () => {
    render(<Footer />);
    const pageLinks = ['The Game', 'The Team', 'Contact'];
    pageLinks.forEach(page => {
      const linkText = page.includes('the') ? `about  ${page}` : page;
      expect(screen.getByText(linkText)).toBeInTheDocument();
    });
  });

  test('renders HeaderIcon component', () => {
    render(<Footer />);
    const headerLogo = screen.getByTestId('header-logo');
    expect(headerLogo).toBeInTheDocument();

  });
});