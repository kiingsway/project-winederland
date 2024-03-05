import React from 'react';
import AppComponents from '@/app/components/AppComponents';
import { Grid, Image } from 'antd';
import styles from './Gallery.module.scss';
import { appImages, images } from '@/parameters';

export default function Gallery(): JSX.Element {

  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;

  return (
    <>
      <AppComponents.Image {...appImages.Gallery} />
      <div className={styles.Grid}>
        <Image.PreviewGroup>
          {images.map(({ alt, src }) => (
            <figure key={alt}>
              <Image src={src} alt={alt} width={isMobile ? 180 : 380} />
            </figure>
          ))}
        </Image.PreviewGroup>
      </div>
    </>
  );
}