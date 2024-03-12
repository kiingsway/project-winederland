import { appImages, description_about, images } from '@/parameters';
import React from 'react';
import AppComponents from '@/app/components/AppComponents';
import { Grid, Image } from 'antd';
import styles from './About.module.scss';

export default function About(): JSX.Element {

  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;

  return (
    <>
      <AppComponents.Image {...appImages.About} />
      <AppComponents.Box>
        <AppComponents.Text.BoxText>
          {description_about}
        </AppComponents.Text.BoxText>
      </AppComponents.Box>

      <AppComponents.Text.Section>Gallery</AppComponents.Text.Section>

      <div className={styles.Gallery}>
        <Image.PreviewGroup>
          {images.map(({ alt, src }) => (
            <figure key={alt}>
              <Image src={src} alt={alt} width={isMobile ? 180 : 380} />
            </figure>
          ))}
        </Image.PreviewGroup>
      </div>

      <div style={{ height: 180 }} />
    </>
  );
}