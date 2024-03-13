import React from 'react';
import styles from '../WinesActivities.module.scss';
import { Image, Tooltip } from 'antd';
import { FaWineBottle } from "react-icons/fa";
import { MdLocalDrink } from 'react-icons/md';
import { IProduct } from '@/interfaces';

interface Props {
  product: IProduct;
  onClick(): void;
}

export default function WineContainer({ product, onClick }: Props): JSX.Element {

  if (!product) return <></>;

  const alcohol = product.alcohol ? `${product.alcohol}%` : 'Non-alcoholic';

  if (product.type === 'Wine') return (
    <div className={styles.WineContainer} onClick={onClick}>
      <div className={styles.WineContainer_Image}>
        <Image alt={product.title} src={product.src} width={100} preview={false} />
      </div>
      <div className={styles.WineContainer_Details}>
        <ProductLabel icon={product.country?.icon}><h2>{product.title}</h2></ProductLabel>
        <ProductLabel icon={<FaWineBottle />} title='Blend'>{product.category}</ProductLabel>
        <ProductLabel icon={<MdLocalDrink />} title='Alcohol/Vol.'>{alcohol}</ProductLabel>
      </div>
    </div>
  );

  return (
    <div className={styles.WineContainer}>
      <Image alt={product.title} src={product.src} width={100} preview={false} />
      <h2>{product.title}</h2>
    </div>
  );
}

interface ProductLabelProps {
  title?: string;
  icon?: JSX.Element;
}

const ProductLabel = ({ icon, children, title }: React.PropsWithChildren<ProductLabelProps>): JSX.Element => {

  const Main = (): JSX.Element => (
    <div className={styles.ProductLabel}>
      {icon}
      {children}
    </div>
  );

  if (title) return <Tooltip title={title}><Main /></Tooltip>;
  else return <Main />;
};