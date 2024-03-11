import { TFunction } from 'i18next';

export type TNextTranslation = TFunction<"translation", undefined>;

export type TImages = "AppBackground" | "Home" | "About" | "Activities" | "WineBar" | "Gallery" | "WinederlandLogo" | "ILACLogo";
export interface TImage {
  src: string;
  alt: string;
}

export interface IAppPageData {
  key: string;
  title: string;
  onClick(): void;
}

// eslint-disable-next-line no-unused-vars
export type TAppPages = (push: (path: string) => void) => IAppPageData[];

export type TSocialMedia = 'instagram' | 'tiktok';

export interface IImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface IActivity {
  image: string;
  title: string;
  desc: string;
}

interface IProductData {
  title: string;
  src: string;
  description: string;
  company?: string;
}

interface IWine extends IProductData {
  country?: {
    icon: JSX.Element;
    title: string;
  };
  type: "Wine";
  category: string;
  alcohol: number;
  store: {
    title: string;
    url: string;
  }
}

export type IProduct = IWine;