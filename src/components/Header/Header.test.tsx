import React from 'react';
import { render } from '@testing-library/react';

import '../__mocks__/routerMock';

import Header from '.';

describe('Header', () => {
  it('should render header', () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
