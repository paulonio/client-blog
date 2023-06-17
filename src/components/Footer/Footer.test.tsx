import React from 'react';
import { render } from '@testing-library/react';

import '../__mocks__/routerMock';
import '../__mocks__/utilsMock';

import Footer from '.';

describe('Footer', () => {
  it('should render footer', () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});
