import React from 'react';
import { Image } from 'antd';

export default function Gallery(): JSX.Element {

  const [w, h] = [800, 200];

  return (
    <>
      <Image
        preview={false}
        src="./Wine Photoshoot.jpeg"
        alt="Wine Photoshoot"
        height={h}
        width={w}
        className="app-image"
      />
    </>
  );
}