import { description_about } from '@/parameters';
import React from 'react';
import { Image } from 'antd';
import styles from './About.module.scss';

export default function About(): JSX.Element {

  const [w, h] = [800, 200];

  return (
    <div className={styles.Main}>
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
      <span className={styles.Description}>
        {description_about}
      </span>
    </div>
  );
}