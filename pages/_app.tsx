import React from 'react';
import type { AppProps } from 'next/app';
import '@/app/i18n';
import './_app.css';
import { IUseLanguage, useLanguage } from '@/app/hooks/useLanguage';
import { ConfigProvider, theme, Layout } from 'antd';
import useDarkMode from '@/app/hooks/useDarkMode';
import AppNavigation from '@/app/components/AppNavigation';
import Head from "next/head";
import { useRouter } from 'next/router';
import type { Metadata } from "next";
import { splitCamelCase } from '@/app/services/helpers';
import AppFooter from '@/app/components/AppFooter';

export const metadata: Metadata = {
  title: "Project Winederland",
  description: "Uncork the Magic! A project for Event Planning class",
  keywords: 'wine, winederland, project, event, event planning, class',
  robots: 'noindex, nofollow',
  authors: [{
    name: 'Marcos Oranmiyan',
    url: 'https://github.com/kiingsway'
  }]
};

export interface IAppContext {
  language: IUseLanguage;
}

export const AppContext = React.createContext<IAppContext | undefined>(undefined);

export default function App({ Component, pageProps }: AppProps): JSX.Element {

  const { pathname } = useRouter();

  const language = useLanguage();
  const isDarkMode = useDarkMode();
  const appProviderValue: IAppContext = { language };

  const page_title = (() => {
    const { title } = metadata as { title: string };
    const path = splitCamelCase(pathname.replace('/', ''));
    return path ? `${path} | ${title}` : title;
  })();

  return (
    <ConfigProvider theme={{ algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
      <Head><title>{page_title}</title></Head>
      <AppContext.Provider value={appProviderValue}>
        <div className='app-main'>
          <div className='app-main-content'>
            <AppNavigation />
            <Component {...pageProps} />
            <AppFooter />
          </div>
        </div>
      </AppContext.Provider>
    </ConfigProvider >
  );
}