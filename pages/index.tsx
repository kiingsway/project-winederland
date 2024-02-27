import React from 'react';
import Image from 'next/image';

export default function Home(): JSX.Element {
  return (
    <div>
      <Image
        src="https://picsum.photos/760/200"
        // src="/Wine1.jpg"
        width={760}
        height={200}
        alt='Winery Image'
      />
    </div>
  );
}