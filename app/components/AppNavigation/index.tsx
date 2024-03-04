import React from 'react';
import styles from './AppNavigation.module.scss';
import Image from 'next/image'
import { useRouter } from 'next/router';
import Buttons from '../Buttons';
import { Drawer, Grid } from 'antd';
import { IoMenu } from "react-icons/io5";
import useBoolean from '@/app/hooks/useBoolean';
import { slogan } from '@/parameters';
import appPages from './appPagesData';
import { getPathName } from '@/app/services/helpers';

const { useBreakpoint } = Grid;

export default function AppNavigation(): JSX.Element {

  const { push: routerPush, pathname } = useRouter();
  const screens = useBreakpoint();
  const [openNavDrawer, { setTrue: openNav, setFalse: closeNav }] = useBoolean();
  const isPhone = !screens.md;

  const goHome = () => routerPush('/');

  const tabs = appPages(routerPush);

  const Tabs = (): JSX.Element => {
    const closeDrawer = (): void => openNavDrawer ? closeNav() : undefined;
    return (
      <>{tabs.map(({ key, title, onClick }) => {

        const onPress = () => { closeDrawer(); onClick() };
        const path = getPathName(pathname);
        const selected = path === key || (!path && key === 'Home');

        return (
          <Buttons.Link key={key} onClick={onPress} selected={selected}>
            {title}
          </Buttons.Link>
        );
      })}</>
    );
  };

  const Navigation = (): JSX.Element | JSX.Element[] => {
    if (isPhone) return <Buttons.Icon size='large' type='text' onClick={openNav} icon={<IoMenu fontSize={24} />} />;
    else return <Tabs />;
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
            <Tabs />
          </div>
        </Drawer>
      </div>
    </div>
  );
}