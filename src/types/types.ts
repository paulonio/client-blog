import { FC, SVGProps } from 'react';

export interface PostType {
  id: string;
  urlToAvatar: string;
  username: string;
  date: string;
  category: string;
  tags: string[];
  title: string;
  body: string;
  urlToImage: string;
}

export interface AboutType {
  title: string;
  body: string;
}

export interface InfoType {
  amount: string;
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
  bio: string;
}

export interface User {
  fullName: string;
  city: string;
  country: string;
  urlToAvatar: string;
}

export interface Testimonial {
  profile: User;
  message: string;
}

export interface AboutContentType {
  title: string;
  subtitle: string;
  body: string;
  urlToImage: string;
}

export interface PrivacyType {
  lastUpdated: string;
  content: string;
}
