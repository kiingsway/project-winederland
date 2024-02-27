import React from 'react';
import type { AppProps } from 'next/app';
import '@/app/i18n';
import './_app.css';
import { IUseLanguage, useLanguage } from '@/app/hooks/useLanguage';
import { ConfigProvider, notification, theme, Breadcrumb, Layout, Menu } from 'antd';
import useDarkMode from '@/app/hooks/useDarkMode';
import AppNavigation from '@/app/components/AppNavigation';
import Head from "next/head";
import { useRouter } from 'next/router';
import type { Metadata } from "next";

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

const { Header, Content, Footer } = Layout;

export interface IAppContext {
}

export const AppContext = React.createContext<IAppContext | undefined>(undefined);

export default function App({ Component, pageProps }: AppProps): JSX.Element {

  const { pathname } = useRouter();

  const language = useLanguage();
  const isDarkMode = useDarkMode();
  const [api, contextHolder] = notification.useNotification();

  const splitCamelCase = (str: string) => str.replace(/([a-z])([A-Z])/g, '$1 $2');

  const path = !pathname || pathname === '/' ? '' : `${splitCamelCase(pathname.replace('/', ''))} | `;

  const appProviderValue: IAppContext = {};

  const page_title = `${path}${metadata.title as string}`;

  return (
    <ConfigProvider theme={{ algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
      <Head><title>{page_title}</title></Head>
      <AppContext.Provider value={appProviderValue}>
        <div className='app-main'>
          <div className='app-main-content'>
            <AppNavigation />
            {contextHolder}
            <Component {...pageProps} />
          </div>
        </div>
      </AppContext.Provider>
    </ConfigProvider >
  );
}