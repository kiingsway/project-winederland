import React from 'react';
import styles from './AppNavigation.module.scss';
import { useRouter } from 'next/router';
import Buttons from '../Buttons';
import { Drawer, Grid, Image } from 'antd';
import { IoMenu } from "react-icons/io5";
import useBoolean from '@/app/hooks/useBoolean';
import { appImages, slogan } from '@/parameters';
import appPages from './appPagesData';
import { getPathName } from '@/app/services/helpers';

const { useBreakpoint } = Grid;

export default function AppNavigation(): JSX.Element {

  const { push: routerPush, pathname } = useRouter();
  const [openNavDrawer, { setTrue: openNav, setFalse: closeNav }] = useBoolean();
  const screens = useBreakpoint();
  const isPhone = !screens.md;

  const goHome = () => routerPush('/');

  const tabs = appPages(routerPush);

  const Tabs = (): JSX.Element => {
    const closeDrawer = (): void => openNavDrawer ? closeNav() : undefined;
    return (
      <>
        {tabs.map(({ key, title, onClick }) => {

          const onPress = () => { closeDrawer(); onClick(); };
          const path = getPathName(pathname);
          const selected = path === key || (!path && key === 'Home');

          return <Buttons.Link key={key} onClick={onPress} selected={selected}>{title}</Buttons.Link>;

        })}
      </>
    );
  };

  const Navigation = (): JSX.Element | JSX.Element[] => {
    if (isPhone) return <Buttons.Icon size='large' type='text' onClick={openNav} icon={<IoMenu fontSize={24} />} />;
    else return <Tabs />;
  };

  return (
    <div className={styles.Main}>
      <div className={styles.Main_Logo}>
        <div className={styles.Main_Logo_Left}>
          <WinederlandLogo onClick={goHome} />
          <Slogan />
        </div>
        <ILACLogo />
      </div>
      <div className={styles.Main_PagesLink}>
        <Navigation />
        <Drawer
          title={<h4 className={styles.Drawer_Title}>Pages</h4>}
          styles={{ mask: { backdropFilter: 'blur(4px)' } }}
          onClose={closeNav}
          open={openNavDrawer}
          width={200}
          style={{ backgroundColor: '#222222' }}>
          <div className={styles.Drawer}>
            <Tabs />
          </div>
        </Drawer>
      </div>
    </div>
  );
}

const WinederlandLogo = ({ onClick }: { onClick: () => void; }) => (
  <Image
    src={appImages.WinederlandLogo.src}
    alt={appImages.WinederlandLogo.alt}
    preview={false}
    width={175}
    height={45}
    onClick={onClick}
    style={{ cursor: 'pointer' }}
  />
);

const Slogan = () => <span className={styles.Slogan}>{slogan}</span>;

const ILACLogo = () => (
  <Image
    src={appImages.ILACLogo.src}
    alt={appImages.ILACLogo.alt}
    preview={false}
    width={132}
    wrapperStyle={{ height: 50 }}
  />
);