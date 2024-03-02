import { description_about } from '@/parameters';
import React from 'react';
import AppComponents from '@/app/components/AppComponents';

export default function About(): JSX.Element {


  return (
    <>
      <AppComponents.Image src="./ILAC Toronto Campus.jpg" alt="ILAC Toronto Campus" />
      <AppComponents.Box>
        <AppComponents.Text.BoxText>
          {description_about}
        </AppComponents.Text.BoxText>
      </AppComponents.Box>
    </>
  );
}