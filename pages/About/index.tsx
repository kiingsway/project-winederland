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
          src={`https://picsum.photos/${w}/${h}`}
          alt='Winery Image'
        />
      </div>
      <span className={styles.Description}>
        {description_about}
      </span>
    </div>
  );
}