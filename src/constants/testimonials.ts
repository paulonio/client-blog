import type { Testimonial } from '@/types/types';

export const TESTIMONIALS: Testimonial[] = [
  {
    profile: {
      fullName: 'Jonathan Vallem',
      city: 'New york',
      country: 'USA',
      urlToAvatar: '/assets/images/Jonathan.jpg',
    },
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    profile: {
      fullName: 'Floyd Miles',
      city: 'Los angeles',
      country: 'USA',
      urlToAvatar: '/assets/images/Floyd.jpg',
    },
    message:
      'Donec hendrerit felis eget tortor sollicitudin, eu suscipit nibh convallis. Mauris vel sapien non dui lacinia rhoncus nec ac enim.',
  },
  {
    profile: {
      fullName: 'Jenny Wilson',
      city: 'Atlanta',
      country: 'USA',
      urlToAvatar: '/assets/images/Jenny.jpg',
    },
    message:
      'Nunc quis venenatis libero. Curabitur id nunc ornare, tempus nisi sed, gravida purus.',
  },
  {
    profile: {
      fullName: 'Robert Fox',
      city: 'London',
      country: 'UK',
      urlToAvatar: '/assets/images/Robert.jpg',
    },
    message:
      'Fusce ultrices arcu at nibh tempor, quis pellentesque sapien tempor. Aliquam malesuada elementum elit sit amet finibus.',
  },
];
