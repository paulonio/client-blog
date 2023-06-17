import React from 'react';
import { render } from '@testing-library/react';
import Hero from '.';
import { PostType } from '@/types/types';

const TEST_POST: PostType = {
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

describe('Hero', () => {
  it('should render hero', () => {
    const { container } = render(<Hero post={TEST_POST} />);

    expect(container).toMatchSnapshot();
  });
});
