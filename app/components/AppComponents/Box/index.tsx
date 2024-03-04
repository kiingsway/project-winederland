import React from 'react';
import styles from '../style.module.scss';

interface Props {
  style?: React.CSSProperties;
}

export default function Box({ children, style }: React.PropsWithChildren<Props>): JSX.Element {

  return (
    <div style={style} className={'app-scroll ' + styles.Box} >
      {children}
    </div >
  );
}