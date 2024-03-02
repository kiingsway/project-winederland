import React from 'react';
import { wine_sections } from '@/parameters';
import AppComponents from '@/app/components/AppComponents';
import WineSection from './WineSection';

export default function WineBar(): JSX.Element {

  return (
    <>
      <AppComponents.Image src="./Wines.jpg" alt="Wines Image" imageHeightPosition={100} />
      {wine_sections.map(({ desc, image, key }, index) => (
        <WineSection key={key} section={key} image={image} makeImageLeft={Boolean(index % 2)}>
          {desc}
        </WineSection>
      ))}
    </>
  );
}