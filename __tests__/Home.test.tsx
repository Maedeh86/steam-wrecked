import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';
import '@testing-library/jest-dom';

jest.mock('../src/components/Download/HpDownloadDiv', () => () => (
  <div data-testid="hp-download">Mock Download</div>
));

jest.mock('../src/components/ImageLink', () => () => (
  <div data-testid="image-link">Mock ImageLink</div>
));

describe('Home Page', () => {
  test('renders homepage with main components', () => {
    render(<Home />);

    expect(screen.getByTestId('hp-download')).toBeInTheDocument();
    expect(screen.getByTestId('image-link')).toBeInTheDocument();
  });
});
