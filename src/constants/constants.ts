import BusinessIcon from '@/icons/BusinessIcon';
import CyborgIcon from '@/icons/CyborgIcon';
import EconomyIcon from '@/icons/EconomyIcon';
import ShuttleIcon from '@/icons/ShuttleIcon';

import { AboutType, Category } from '@/types/types';

export interface MissionType extends AboutType {
  rubric: string;
}

export const ABOUT_US: AboutType = {
  title: 'We are a community of content writers who share their learnings',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
};

export const OUR_MISSION: MissionType = {
  rubric: 'OUR MISSION',
  title: 'Creating valuable content for creatives all around the world',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
};

export const OUR_VISION: MissionType = {
  rubric: 'OUR VISION',
  title: 'A platform that empowers individuals to improve',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.',
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

export const CATEGORIES: string[] = ['Business', 'Economy', 'Startup', 'Technology'];

export const CATEGORY_TAGS: string[] = [
  'Business',
  'Experience',
  'Screen',
  'Technology',
  'Marketing',
  'Life',
];

export const SPECIAL_POST: AboutType = {
  title: 'It started out as a simple idea and evolved into our passion',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.',
};
