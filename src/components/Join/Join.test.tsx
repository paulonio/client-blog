import React from 'react';
import { render } from '@testing-library/react';
import Join from '.';
import '../__mocks__/intersectionObserverMock';

describe('Join', () => {
  it('should render join', () => {
    const { container } = render(<Join />);

    expect(container).toMatchSnapshot();
  });
});
