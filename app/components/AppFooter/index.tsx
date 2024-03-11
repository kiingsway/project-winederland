import React from 'react';
import styles from './AppFooter.module.scss';
import { DateTime } from 'luxon';
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { Tooltip } from 'antd';
import Buttons from '../Buttons';
import { socialmedia_urls, socialmedia_usernames } from '@/parameters';
import { AppContext, IAppContext } from '@/pages/_app';
import { useTranslation } from 'react-i18next';

export default function AppFooter(): JSX.Element {

  const { t } = useTranslation();
  const app = React.useContext(AppContext) as IAppContext;

  const { instagram: insta_url, tiktok: tiktok_url } = socialmedia_urls;
  const year = DateTime.now().toFormat('yyyy');

  return (
    <div className={styles.Main}>

      <Left>
        <span>© {year} Winederland</span>
        <span>All Rights Reserved</span>
      </Left>

      <Center>
        <span>Follow us</span>
        <div className={styles.Main_Right_Social}>
          <Tooltip title={`Instagram: @${socialmedia_usernames.instagram}`}>
            <Buttons.Link className={styles.Main_Right_Social_Button} size="large" icon={<FaInstagram />} href={insta_url} />
          </Tooltip>
          <Tooltip title={`Tiktok: @${socialmedia_usernames.tiktok}`}>
            <Buttons.Link className={styles.Main_Right_Social_Button} size="large" icon={<FaTiktok />} href={tiktok_url} />
          </Tooltip>
        </div>
      </Center>

      {/* <Right>
        <Buttons.Languages language={app.language.selected} t={t} />
      </Right> */}

    </div>
  );
}

const Left = ({ children }: React.PropsWithChildren): JSX.Element => (
  <div className={styles.Main_Left}>
    {children}
  </div>
);

const Center = ({ children }: React.PropsWithChildren): JSX.Element => (
  <div className={styles.Main_Center}>
    {children}
  </div>
);

const Right = ({ children }: React.PropsWithChildren): JSX.Element => (
  <div className={styles.Main_Right}>
    {children}
  </div>
);