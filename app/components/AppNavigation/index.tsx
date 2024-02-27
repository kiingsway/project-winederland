import React from 'react';
import styles from './AppNavigation.module.scss';
import Image from 'next/image'
import { Button } from 'antd';
import { useRouter } from 'next/router';

export default function AppNavigation(): JSX.Element {

  const router = useRouter();

  const goHome = () => router.push('/');

  const app_pages = [
    { key: 'Home', onClick: goHome },
    { key: 'Wine Bar', onClick: () => router.push('/WineBar') },
    { key: 'About us', onClick: () => router.push('/About') },
  ];

  return (
    <div className={styles.Main}>
      <Image
        src="/Winederland White logo.png"
        width={175}
        height={45}
        alt="Winederland Logo"
        onClick={goHome}
        style={{ cursor: 'pointer' }}
      />
      <div className={styles.Main_PagesLink}>
        {app_pages.map(app_page => {
          return (
            <Button
              key={app_page.key}
              type='link'
              onClick={app_page.onClick}>{app_page.key}</Button>
          );
        })}
      </div>
    </div>
  );
}