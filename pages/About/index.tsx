import { description_about } from '@/parameters';
import React from 'react';
import { Image } from 'antd';
import styles from './About.module.scss';
import AppComponents from '@/app/components/AppComponents';

export default function About(): JSX.Element {

  const [w, h] = [800, 200];

  return (
    <>
      <div style={{ width: w, height: h }}>
        <Image
          preview={false}
          src="./ILAC Toronto Campus.jpg"
          alt='ILAC Toronto Campus'
          height={h}
          width={w}
          className="app-image"
        />
      </div>
      <AppComponents.Box>
        <span className={styles.Description}>
          {description_about}
        </span>
      </AppComponents.Box>
    </>
  );
}