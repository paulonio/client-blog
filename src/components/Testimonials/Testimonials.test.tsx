import React from 'react';
import { render } from '@testing-library/react';
import Testimonials from '.';
import { Testimonial } from '@/types/types';
import '../__mocks__/intersectionObserverMock';

const TESTIMONIALS_TEST: Testimonial[] = [
  {
    profile: { urlToAvatar: 'test', fullName: 'test', city: 'test', country: 'test' },
    message: 'test',
  },
];

describe('Special', () => {
  it('should render special', () => {
    const { container } = render(<Testimonials testimonials={TESTIMONIALS_TEST} />);

    expect(container).toMatchSnapshot();
  });
});
