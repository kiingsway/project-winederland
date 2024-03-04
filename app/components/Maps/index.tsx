import React from 'react';
import styles from './Maps.module.scss';

interface Props {
  maps_url: string;
}

export default function Maps({ maps_url }: Props): JSX.Element {
  
  return (
    <div className={styles.Maps}>
      <iframe
        width="100%"
        height="300"
        scrolling="no"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        src={maps_url} />
    </div>
  );
}