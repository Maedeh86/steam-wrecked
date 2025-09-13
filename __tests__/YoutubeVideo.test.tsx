import React from 'react';
import { render, screen } from '@testing-library/react';
import YoutubeVideo from '../src/components/YoutubeVideo';
import '@testing-library/jest-dom';

describe('YoutubeVideo component', () => {
  test('renders tutorial heading and iframe', () => {
    render(<YoutubeVideo />);

    const heading = screen.getByText(/watch tutorial/i);
    expect(heading).toBeInTheDocument();

    const iframe = screen.getByTitle(/steamwrecked tutorial/i);
    expect(iframe).toBeInTheDocument();

    expect(iframe).toHaveAttribute(
      'src',
      'https://www.youtube.com/embed/iSs5963gCWk'
    );
  });
});
