import React from 'react';
import { render } from '@testing-library/react';
import { useRouter } from 'next/router';

import Navigation from '.';
import type { LinkType } from '@/components/Navigation';

const TEST_LINKS: LinkType[] = [{ href: '/test', text: 'test' }];

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

(useRouter as jest.Mock).mockReturnValue({ query: {} });

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
