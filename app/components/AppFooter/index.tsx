import React from 'react';
import styles from './AppFooter.module.scss';
import { DateTime } from 'luxon';
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { Col, Row, Tooltip } from 'antd';
import Buttons from '../Buttons';
import { instagram_url, tiktok_url } from '@/parameters';
import { Image } from 'antd';

export default function AppFooter(): JSX.Element {

  const year = DateTime.now().toFormat('yyyy');

  return (
    <div className={styles.Main}>
      <div className={styles.Main_Left}>
        <span>© {year} Winederland.</span>
        <span>All Rights Reserved</span>
      </div>
      <Image
        preview={false}
        src={`./ILACIC_horiz_on-black.png`}
        alt='ILAC Logo'
        width={100}
      />
      <div className={styles.Main_Right}>
        <span>Follow us</span>
        <div className={styles.Main_Right_Social}>
          <Tooltip title="Instagram">
            <Buttons.Link size='large' icon={<FaInstagram />} href={instagram_url} target='_blank' />
          </Tooltip>
          <Tooltip title="Tiktok">
            <Buttons.Link size='large' icon={<FaTiktok />} href={tiktok_url} target='_blank' />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}