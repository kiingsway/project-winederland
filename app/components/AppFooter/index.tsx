import React from 'react';
import styles from './AppFooter.module.scss';
import { DateTime } from 'luxon';
import { Tooltip } from 'antd';
import Buttons from '../Buttons';
import { social_info } from '@/parameters';
import { TSocialMedia } from '@/interfaces';

export default function AppFooter(): JSX.Element {

  return (
    <div className={styles.Main}>

      <div className={styles.Main_Left}>
        <span>© {DateTime.now().toFormat('yyyy')} Winederland</span>
        <span>All Rights Reserved</span>
      </div>

      <div className={styles.Main_Center}>
        <span>Follow us</span>
        <div className={styles.Main_Right_Social}>
          <SocialLinks />
        </div>
      </div>

    </div>
  );
}

const SocialLinks = (): JSX.Element => (
  <>
    {Object.keys(social_info).map(sm => {

      const { app, url, user, icon } = { ...social_info[sm as TSocialMedia], app: sm as TSocialMedia };

      const title = sm + (user ? `: @${user}` : '');

      return (
        <Tooltip title={title} key={app}>
          <Buttons.Link
            className={styles.Main_Right_Social_Button}
            size="large"
            icon={icon}
            href={url} />
        </Tooltip>
      );
    })}
  </>
);