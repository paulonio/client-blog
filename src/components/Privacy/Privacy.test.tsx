import React from 'react';
import { render, screen } from '@testing-library/react';
import PostHeader from '.';

describe('Privacy', () => {
  it('should render prviacy', () => {
    const { container } = render(<PostHeader />);

    expect(container).toMatchSnapshot();
  });

  it('should correctly render page components', () => {
    render(<PostHeader />);

    const title = screen.getByTestId('privacy-title');
    const body = screen.getByTestId('privacy-title');
    expect(title).toBeInTheDocument();
    expect(body).toBeInTheDocument();
  });
});
