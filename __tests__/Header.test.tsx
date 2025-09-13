import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header';
import '@testing-library/jest-dom';

jest.mock('../src/components/HeaderIcon', () => () => <div data-testid="header-icon" />);
jest.mock('../src/components/HeaderLinks', () => () => <nav data-testid="header-links" />);
jest.mock('../src/components/HamburgerMobile', () => () => <div data-testid="hamburger-mobile" />);

describe('Header component', () => {
  test('renders Header and its subcomponents', () => {
    render(<Header />);

    expect(screen.getByTestId('header-icon')).toBeInTheDocument();
    expect(screen.getByTestId('header-links')).toBeInTheDocument();
    expect(screen.getByTestId('hamburger-mobile')).toBeInTheDocument();
  });
});
