import React from 'react';
import { render } from '@testing-library/react';
import PostHeader from '.';
import type { PostType } from '@/types/types';

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

describe('Post header', () => {
  it('should render post header', () => {
    const { container } = render(<PostHeader post={TEST_DATA} />);

    expect(container).toMatchSnapshot();
  });
});
