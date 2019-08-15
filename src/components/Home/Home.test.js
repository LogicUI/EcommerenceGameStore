import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from './Home';
import mockAxios from 'axios';

const homeDetails = {
  image:
    'https://res.cloudinary.com/doxltthed/image/upload/v1562032774/games/keanuReaves_t7mysc.jpg',
  video: 'https://www.youtube.com/embed/1kFGvNHMK8Y',
  release: '16 April 2020',
  price: '69.00',
  title: 'CYBERPUNK2077'
};

describe('Home Component', () => {
  it('should be able to render the title correctly', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: homeDetails })
    );

    const { getByText } = render(<Home />);
    expect(mockAxios.get).toBeCalled();
    await waitForElement(() => getByText(/CYBERPUNK2077/i));
  });

  it('should be able to render the release date correctly', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: homeDetails })
    );
    const { getByText } = render(<Home />);
    expect(mockAxios.get).toBeCalled();
    await waitForElement(() => getByText(/16 April 2020/i));
  });

  it('should be able to render the price correctly', async () => {
    mockAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: homeDetails })
    );
    const { getByText } = render(<Home />);
    expect(mockAxios.get).toBeCalled();
    await waitForElement(() => getByText(/69.00/i));
  });
});
