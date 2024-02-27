import React from 'react';
import type { AppProps } from 'next/app';
import '@/app/i18n';
import './_app.css';
import { IUseLanguage, useLanguage } from '@/app/hooks/useLanguage';
import { ConfigProvider, notification, theme } from 'antd';
import useDarkMode from '@/app/hooks/useDarkMode';

export interface IAppContext {
}

export const AppContext = React.createContext<IAppContext | undefined>(undefined);

export default function App({ Component, pageProps }: AppProps): JSX.Element {

  const language = useLanguage();
  const isDarkMode = useDarkMode();
  const [api, contextHolder] = notification.useNotification();

  const appProviderValue: IAppContext = {};

  return (
    <ConfigProvider theme={{ algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm }}>
      <AppContext.Provider value={appProviderValue}>
        <div className='app-main-content'>
          {contextHolder}
          <Component {...pageProps} />
        </div>
      </AppContext.Provider>
    </ConfigProvider >
  );
}