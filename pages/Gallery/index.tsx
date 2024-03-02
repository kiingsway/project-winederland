import React from 'react';
import AppComponents from '@/app/components/AppComponents';
import { Image } from 'antd';
import styles from './Gallery.module.scss';
import { images } from '@/parameters';

export default function Gallery(): JSX.Element {
  
  return (
    <>
      <AppComponents.Image src="./Wine Photoshoot.jpeg" alt="Wine Photoshoot" />
      <div className={styles.Grid}>
        <Image.PreviewGroup>
          {images.map(({ alt, src }) => (
            <figure key={alt}>
              <Image src={src} alt={alt} />
            </figure>
          ))}
        </Image.PreviewGroup>
      </div>
    </>
  );
}