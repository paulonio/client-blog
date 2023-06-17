import React from 'react';
import { render } from '@testing-library/react';
import AboutUs from '.';
import '../__mocks__/intersectionObserverMock';

describe('About us', () => {
  it('should render about us page', () => {
    const { container } = render(<AboutUs />);

    expect(container).toMatchSnapshot();
  });
});
