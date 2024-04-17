import { navMenu } from '../libs/data';

export type SectionNameType = (typeof navMenu)[number]['title'];

export type UserDetailsType = {
  name: string;
  email: string;
  message: string;
};
