import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BackArrow from '../src/components/BackArrow';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('BackArrow component', () => {
  test('renders back arrow icon and triggers router.push on click', async () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    render(<BackArrow />);

    const icon = screen.getByTestId('back-arrow-icon');
    expect(icon).toBeInTheDocument();

    await userEvent.click(icon);

    expect(pushMock).toHaveBeenCalledWith('/');
    expect(pushMock).toHaveBeenCalledTimes(1);
  });
});
