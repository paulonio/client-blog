import { isLinkActive, parseString } from '@/utils/utils';

jest.mock('../../utils/utils', () => ({
  isLinkActive: jest.fn(),
  parseString: jest.fn(),
}));

(isLinkActive as jest.Mock).mockReturnValue(true);
(parseString as jest.Mock).mockReturnValue('');
