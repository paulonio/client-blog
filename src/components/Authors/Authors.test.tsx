import React from 'react';
import { render } from '@testing-library/react';
import Authors from '.';
import { AUTHORS } from '@/constants/authors';
import '../__mocks__/intersectionObserverMock';

describe('Authors', () => {
  it('should render authors component', () => {
    const { container } = render(<Authors authors={AUTHORS} />);

    expect(container).toMatchSnapshot();
  });

  it('should render with empty array', () => {
    const { container } = render(<Authors authors={[]} />);

    expect(container).toMatchSnapshot();
  });
});
