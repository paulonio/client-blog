import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogFeatured from '.';

describe('Blog featured', () => {
  it('should render blog featured component', () => {
    const { container } = render(<BlogFeatured />);

    expect(container).toMatchSnapshot();
  });

  it('should render blog featured component', () => {
    render(<BlogFeatured />);

    const title = screen.getByTestId('blog-featured-title');

    expect(title).toBeInTheDocument();
  });
});
