import React from 'react';
import { render } from '@testing-library/react';
import CategoryBlock from '.';
import '../__mocks__/intersectionObserverMock';

describe('CategoryBlock', () => {
  it('should render category block', () => {
    const { container } = render(<CategoryBlock />);

    expect(container).toMatchSnapshot();
  });
});
