import React from 'react';
import { render, screen } from '@testing-library/react';
import ImageSlider from '../src/components/ImageSlider';
import '@testing-library/jest-dom';

jest.mock('react-simple-image-slider', () => (props: any) => {
  return (
    <div data-testid="mock-slider">
      <p>Mock Slider</p>
      <p>Width: {props.width}</p>
      <p>Height: {props.height}</p>
      <p>Images count: {props.images.length}</p>
    </div>
  );
});

describe('ImageSlider component', () => {
  test('renders image slider with correct props', () => {
    render(<ImageSlider />);

    const slider = screen.getByTestId('mock-slider');

    expect(slider).toBeInTheDocument();
    expect(slider).toHaveTextContent('Mock Slider');
   expect(slider).toHaveTextContent('Width: 900');
   expect(slider).toHaveTextContent('Height: 500');
   expect(slider).toHaveTextContent('Images count: 13');
  });
});
