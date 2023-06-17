import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

(useRouter as jest.Mock).mockReturnValue({ query: {} });
