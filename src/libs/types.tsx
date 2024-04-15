import { navMenu } from '../libs/data';

export type SectionNameType = (typeof navMenu)[number]['title'];

export type Theme = 'light' | 'dark';
