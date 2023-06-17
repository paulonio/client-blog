import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import BlogPosts from '.';

describe('Blog posts', () => {
  it('should render blog posts component', () => {
    const { container } = render(<BlogPosts />);

    expect(container).toMatchSnapshot();
  });

  it('should handle buttons click', () => {
    const { container } = render(<BlogPosts />);

    const prev = screen.getByTestId('blog-posts-prev');
    const next = screen.getByTestId('blog-posts-next');
    expect(prev).toBeDisabled();
    fireEvent.click(next);
    expect(prev).not.toBeDisabled();

    expect(container).toMatchSnapshot();
  });
});
