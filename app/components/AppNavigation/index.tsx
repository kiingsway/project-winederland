import React from 'react';
import styles from './AppNavigation.module.scss';
import Image from 'next/image'
import { useRouter } from 'next/router';
import Buttons from '../Buttons';
import { Drawer, Grid } from 'antd';
import { IoMenu } from "react-icons/io5";
import useBoolean from '@/app/hooks/useBoolean';
import { slogan } from '@/parameters';

const { useBreakpoint } = Grid;

export default function AppNavigation(): JSX.Element {

  const router = useRouter();
  const screens = useBreakpoint();
  const [openNavDrawer, { setTrue: openNav, setFalse: closeNav }] = useBoolean();
  const isPhone = !screens.md;

  React.useEffect(() => {

  }, [screens]);

  const goHome = () => router.push('/');

  interface IAppPage {
    key: string;
    onClick(): void;
  }

  const app_pages: IAppPage[] = [
    { key: 'Home', onClick: goHome },
    { key: 'Wine Bar', onClick: () => router.push('/WineBar') },
    { key: 'Activities', onClick: () => router.push('/Activities') },
    { key: 'Gallery', onClick: () => router.push('/Gallery') },
    { key: 'About us', onClick: () => router.push('/About') },
  ];

  const Navigation = (): JSX.Element | JSX.Element[] => {
    if (isPhone) return <Buttons.Icon size='large' type='text' onClick={openNav} icon={<IoMenu fontSize={24} />} />;
    else return app_pages.map(app_page => {
      return (
        <Buttons.Link
          key={app_page.key}
          onClick={app_page.onClick}>
          {app_page.key}
        </Buttons.Link>
      );
    });
  }

  return (
    <div className={styles.Main}>
      <div className={styles.Main_Logo}>
        <Image
          src="/Winederland White logo.png"
          width={175}
          height={45}
          alt="Winederland Logo"
          onClick={goHome}
          style={{ cursor: 'pointer' }}
        />
        <span className={styles.Main_Logo_Slogan}>{slogan}</span>
      </div>
      <div className={styles.Main_PagesLink}>
        <Navigation />
        <Drawer title="Pages" onClose={closeNav} open={openNavDrawer} width={180}>
          <div className={styles.Drawer}>
            {app_pages.map(app_page => {
              const onClick = () => { closeNav(); app_page.onClick(); };
              return (
                <Buttons.Link
                  key={app_page.key}
                  onClick={onClick}>
                  {app_page.key}
                </Buttons.Link>
              );
            })}
          </div>
        </Drawer>
      </div>
    </div>
  );
}