import React from 'react';
import { render } from '@testing-library/react';
import Special from '.';
import '../__mocks__/intersectionObserverMock';

describe('Special', () => {
  it('should render special', () => {
    const { container } = render(<Special />);

    expect(container).toMatchSnapshot();
  });
});
