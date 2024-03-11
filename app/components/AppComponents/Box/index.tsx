import React from 'react';
import styles from '../style.module.scss';
import classNames from 'classnames';

interface Props {
  style?: React.CSSProperties;
  className?: string;
}

export default function Box({ children, style, className }: React.PropsWithChildren<Props>): JSX.Element {

  const classes = classNames([
    'app-scroll',
    styles.Box,
    className
  ]);

  return (
    <div style={style} className={classes}>
      {children}
    </div>
  );
}