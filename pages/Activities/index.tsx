import React from 'react';
import { Image } from 'antd';

export default function Activities(): JSX.Element {

  const [w, h] = [800, 200];

  return (
    <div>
        <Image
          preview={false}
          src="./Blinding Wine.jpg"
          alt="Blinding Wine"
          height={h}
          width={w}
          className="app-image"
        />
      </div>
  );
}