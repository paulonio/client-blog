import React from 'react';
import { render } from '@testing-library/react';
import Special from '.';
import { PostType } from '@/types/types';
import '../__mocks__/intersectionObserverMock';

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

describe('Special', () => {
  it('should render special', () => {
    const { container } = render(<Special post={TEST_DATA} />);

    expect(container).toMatchSnapshot();
  });
});
