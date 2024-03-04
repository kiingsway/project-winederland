import { useRouter } from 'next/router';

interface IAppPageData {
  key: string;
  title: string;
  onClick(): void;
}

const appPagesData: Omit<IAppPageData, 'onClick'>[] = [
  { key: 'Home', title: 'Home' },
  { key: 'WineBar', title: 'Wine Bar' },
  { key: 'Activities', title: 'Activities' },
  { key: 'Gallery', title: 'Gallery' },
  { key: 'About', title: 'About us' },
];

type TAppPages = (push: (path: string) => void) => IAppPageData[];
const appPages: TAppPages = push => appPagesData.map(ap => ({ ...ap, onClick: () => push(ap.key === 'Home' ? '/' : `/${ap.key}`) }));

export default appPages;