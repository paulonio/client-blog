import React from 'react';
import { render } from '@testing-library/react';
import Navigation from '.';
import type { LinkType } from '@/components/Navigation';

const TEST_LINKS: LinkType[] = [{ href: '/test', text: 'test' }];

describe('Navigation', () => {
  it('should render navigation', () => {
    const { container } = render(<Navigation links={TEST_LINKS} onClick={() => {}} />);

    expect(container).toMatchSnapshot();
  });

  it('should render with empty array', () => {
    const { container } = render(<Navigation links={[]} onClick={() => {}} />);

    expect(container).toMatchSnapshot();
  });
});
