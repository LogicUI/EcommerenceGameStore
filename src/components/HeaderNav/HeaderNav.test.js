import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderNav from './HeaderNav';

describe('Navbar', () => {
  it('should be able to render the nav title', () => {
    const { getByText } = render(<HeaderNav />);
    expect(getByText('GameArms')).toBeInTheDocument();
  });
  it('should be able to render the nav subtitle', () => {
    const { getByText } = render(<HeaderNav />);
    expect(getByText('All Your Gaming Needs')).toBeInTheDocument();
  });

  it('should be able to render the nav subtitle', () => {
    const { getByPlaceholderText } = render(<HeaderNav />);
    expect(
      getByPlaceholderText('Enter your search query here...')
    ).toBeInTheDocument();
  });
});
