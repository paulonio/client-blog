import React from 'react';
import { render } from '@testing-library/react';
import Post from '.';
import { PostType } from '@/types/types';

const TEST_DATA: PostType = {
  id: 'test',
  body: 'test',
  category: 'test',
  date: 'test',
  tags: ['test'],
  title: 'test',
  urlToAvatar: 'test',
  urlToImage: 'test',
  username: 'test',
};

describe('Post', () => {
  it('should render Post', () => {
    const { container } = render(<Post post={TEST_DATA} />);

    expect(container).toMatchSnapshot();
  });
});
