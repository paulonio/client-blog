import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import About from '@/components/About';
import { ABOUT_INFO } from '@/constants/about-us';
import type { InfoType } from '@/types/types';

const FAKE_DATA: InfoType[] = [{ amount: '100', description: 'test-items' }];

describe('About page', () => {
  it('should render about page', () => {
    const { container } = render(<About info={ABOUT_INFO} />);

    expect(container).toMatchSnapshot();
  });

  it('should render correctly with fake data', () => {
    render(<About info={FAKE_DATA} />);

    const fakeItem = screen.getByText('test-items');

    expect(fakeItem).toBeInTheDocument();
  });

  it('should render with empty array', () => {
    const { container } = render(<About info={[]} />);

    expect(container).toMatchSnapshot();
  });
});
