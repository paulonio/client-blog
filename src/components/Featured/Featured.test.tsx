import React from 'react';
import { render } from '@testing-library/react';
import Featured from '.';
import AllPosts from './AllPosts';
import { PostType } from '@/types/types';
import '../__mocks__/intersectionObserverMock';

const TEST_POSTS: PostType[] = [
  {
    id: 'test',
    body: 'test',
    category: 'test',
    date: 'test',
    tags: ['test'],
    title: 'test',
    urlToAvatar: 'test',
    urlToImage: 'test',
    username: 'test',
  },
];

describe('Featured', () => {
  it('should render featured component', () => {
    const { container } = render(<Featured />);

    expect(container).toMatchSnapshot();
  });

  it('should render all posts component', () => {
    const { container } = render(<AllPosts posts={TEST_POSTS} />);

    expect(container).toMatchSnapshot();
  });
});
