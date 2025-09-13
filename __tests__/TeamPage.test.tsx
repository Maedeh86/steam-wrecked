import React from 'react';
import { render, screen } from '@testing-library/react';
import TeamPage from '../src/app/team/page';
import '@testing-library/jest-dom';

jest.mock('../src/components/BackArrow', () => () => (
  <div data-testid="back-arrow">Mock BackArrow</div>
));

jest.mock('../src/features/components/AT-people-Cards/People-card', () => () => (
  <div data-testid="people-cards">Mock PeopleCards</div>
));

describe('Team Page', () => {
  test('renders the team page with heading and subcomponents', () => {
    render(<TeamPage />);

    expect(
      screen.getByRole('heading', {
        name: /the team of steam wrecked/i,
      })
    ).toBeInTheDocument();

    expect(screen.getByTestId('back-arrow')).toBeInTheDocument();
    expect(screen.getByTestId('people-cards')).toBeInTheDocument();
  });
});
