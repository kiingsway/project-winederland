import React from 'react';
import styles from '../style.module.scss';

interface Props {
  style?: React.CSSProperties;
}

const BoxText = ({ children, style }: React.PropsWithChildren<Props>) => {
  return <span className={styles.Text_Normal} style={style}>{children}</span>;
};

const Section = ({ children, style }: React.PropsWithChildren<Props>) => {
  return <h1 className={styles.Text_Section} style={style}>{children}</h1>;
};

const Text = { Section, BoxText };

export default Text;