import React from 'react';
import styles from '../style.module.scss';

export default function Box({ children }: React.PropsWithChildren): JSX.Element {
  return (
    <div className={styles.Box}>
      {children}
    </div>
  );
}