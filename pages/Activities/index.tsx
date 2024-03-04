import React from 'react';
import AppComponents from '@/app/components/AppComponents';
import { activities } from '@/parameters';
import { makeKey } from '@/app/services/helpers';
import WineSection from '../WineBar/WineSection';

export default function Activities(): JSX.Element {

  return (
    <>
      <AppComponents.Image src="./Blinding Wine.jpg" alt="Blinding Wine" />
      {activities.map(({ desc, image, title }, index) => {
        const key = makeKey(title)
        return (
          <WineSection key={key} section={title} image={image} makeImageLeft={Boolean(index % 2)}>
            {desc}
          </WineSection>
        )
      })}
    </>
  );
}