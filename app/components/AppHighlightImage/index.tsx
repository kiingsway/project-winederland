import React from 'react';
import { Image, ImageProps } from 'antd';

interface Props {
  src: string;
  alt: string;
  imageHeightPosition?: number;
}

export default function AppHighlightImage(p: Props & ImageProps): JSX.Element {

  const [w, h] = [800, 200];
  const { imageHeightPosition, ...props } = p;
  const ihp = imageHeightPosition === 0 ? imageHeightPosition : imageHeightPosition || 50;

  return (
    <div style={{ width: w, height: h }}>
      <Image
        preview={false}
        {...props}
        className="app-image"
        height={h}
        width={w}
        style={{ objectPosition: `100% ${ihp || 50}%` }}
      />
    </div>
  );
}