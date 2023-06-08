import { FC, ReactNode, SVGProps } from 'react';

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
