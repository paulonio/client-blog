import { AboutContentType, InfoType } from '@/types/types';

export const ABOUT_INFO: InfoType[] = [
  { amount: '12+', description: 'Blogs Published' },
  { amount: '18K+', description: 'Views on Finsweet' },
  { amount: '30K+', description: 'Total active Users' },
];

export const ABOUT_PROJECT: AboutContentType = {
  title: 'Why we started this Blog',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
  urlToImage: '/assets/images/about-project.jpg',
};

export const ABOUT_TEAM: AboutContentType = {
  title: 'Our team of creatives',
  subtitle:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. ',
  body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.',
  urlToImage: '/assets/images/about-team.jpg',
};
