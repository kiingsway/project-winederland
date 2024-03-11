import React from 'react';
import type { AppProps } from 'next/app';
import '@/app/i18n';
import './_app.css';
import { IUseLanguage, useLanguage } from '@/app/hooks/useLanguage';
import { ConfigProvider, theme, Layout } from 'antd';
import Head from "next/head";
import AppNavigation from '@/app/components/AppNavigation';
import { useRouter } from 'next/router';
import type { Metadata } from "next";
import { getPathName, rawText } from '@/app/services/helpers';
import AppFooter from '@/app/components/AppFooter';
import { Analytics } from "@vercel/analytics/react";
import { appImages } from '@/parameters';
import useSWR, { SWRConfiguration } from 'swr';
import { getFollowers } from '@/app/services/requests';
import { TSocialMedia } from '@/interfaces';

const { Header, Content, Footer } = Layout;

export const metadata: Metadata = {
  title: "Winederland",
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
  socialmedia_followers?: Record<TSocialMedia, number | undefined>
}

export const AppContext = React.createContext<IAppContext | undefined>(undefined);

export default function App({ Component, pageProps }: AppProps): JSX.Element {

  const language = useLanguage();
  const { pathname } = useRouter();

  const refreshInterval = 60 * 10 * 1000;
  const refresher: SWRConfiguration = {
    refreshInterval,
    onErrorRetry(e, k, c, revalidate, { retryCount }) {
      setTimeout(() => revalidate({ retryCount }), refreshInterval);
    },
  };

  const { data: socialmedia_followers } = useSWR("followers", getFollowers, refresher);

  const appProviderValue: IAppContext = { language, socialmedia_followers: socialmedia_followers };

  const page_title = (() => {
    const { title } = metadata as { title: string };
    const path = getPathName(pathname, { splitCamelCase: true });
    return path ? `${path} ${rawText(path).includes('about') ? '' : '@'} ${title}` : title;
  })();

  const backgroundImage = `url('${appImages.AppBackground.src}')`;

  return (
    <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
      <Head><title>{page_title}</title></Head>
      <Analytics />
      <AppContext.Provider value={appProviderValue}>
        <Layout className='app' style={{ backgroundImage }}>
          <Header className='app-header'>
            <AppNavigation />
          </Header>
          <Content className='app-content'>
            <div className='app-content-main'>
              <Component {...pageProps} />
            </div>
          </Content>
          <Footer className="app-footer">
            <AppFooter />
          </Footer>
        </Layout>
      </AppContext.Provider>
    </ConfigProvider>
  );
}