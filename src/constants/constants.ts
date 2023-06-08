import BusinessIcon from '@/icons/BusinessIcon';
import CyborgIcon from '@/icons/CyborgIcon';
import EconomyIcon from '@/icons/EconomyIcon';
import ShuttleIcon from '@/icons/ShuttleIcon';

import { About, Category } from '@/types/types';

export const ABOUT_US: About = {
  title: 'We are a community of content writers who share their learnings',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export const OUR_MISSION: About = {
  title: 'Creating valuable content for creatives all around the world',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

export const CATEGORY_ITEMS: Category[] = [
  {
    title: 'Business',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    Icon: BusinessIcon,
  },
  {
    title: 'Startup',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    Icon: ShuttleIcon,
  },
  {
    title: 'Economy',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    Icon: EconomyIcon,
  },
  {
    title: 'Technology',
    description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    Icon: CyborgIcon,
  },
];
