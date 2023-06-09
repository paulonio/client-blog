import { FC, SVGProps } from 'react';

export interface Post {
  username: string;
  date: string;
  title: string;
  body: string;
  urlToImage: string;
}

export interface About {
  title: string;
  description: string;
}

export interface Category {
  title: string;
  description: string;
  Icon: FC<SVGProps<SVGSVGElement>>;
}

export interface Author {
  fullName: string;
  occupation: string;
  company: string;
  urlToAvatar: string;
}

export interface Testimonial {
  fullName: string;
  city: string;
  country: string;
  urlToAvatar: string;
  message: string;
}
