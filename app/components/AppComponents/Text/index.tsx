import React from 'react';
import styles from '../style.module.scss';

const BoxText = ({ children }: React.PropsWithChildren) => {
  return <span>{children}</span>;
}

const Section = ({ children }: React.PropsWithChildren) => {
  return <h1 className={styles.Text_Section}>{children}</h1>;
};

const Text = { Section, BoxText };

export default Text;