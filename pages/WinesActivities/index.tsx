import AppComponents from '@/app/components/AppComponents';
import { activities, appImages, products } from '@/parameters';
import { Col, Modal, Row, Image, Button } from 'antd';
import React from 'react';
import WineContainer from './WineContainer';
import WineSection from '../WineBar/WineSection';
import { makeKey } from '@/app/services/helpers';
import styles from './WinesActivities.module.scss';
import { FaWineBottle } from "react-icons/fa";
import { MdLocalDrink } from 'react-icons/md';
import { LuGrape } from "react-icons/lu";
import { IProduct } from '@/interfaces';

export default function WinesActivities(): JSX.Element {

  const [selectedProduct, selectProduct] = React.useState<IProduct>();
  const openProductModal = (newProduct: IProduct) => selectProduct(newProduct);
  const closeProductModal = (): void => selectProduct(undefined);

  return (
    <>
      <AppComponents.Image  {...appImages.Activities} />

      <AppComponents.Text.Section>Bar</AppComponents.Text.Section>

      <Row gutter={[16, 16]} style={{ width: '100%' }}>
        {products.map(product => (
          <Col key={product.title} span={24} sm={12}>
            <AppComponents.Box style={{ height: '100%' }}>
              <WineContainer product={product} onClick={() => openProductModal(product)} />
            </AppComponents.Box>
          </Col>
        ))}
      </Row>

      <AppComponents.Text.Section>Activities</AppComponents.Text.Section>

      {activities.map(({ desc, image, title }, index) => {
        const key = makeKey(title);
        return (
          <WineSection key={key} section={title} image={image} makeImageLeft={Boolean(index % 2)}>
            {desc}
          </WineSection>
        );
      })}

      <Modal
        closable
        width={800}
        open={Boolean(selectedProduct)}
        onCancel={closeProductModal}
        onOk={closeProductModal}
        footer={[]}
      >
        <ProductDetails product={selectedProduct} />
      </Modal>

    </>
  );
}

interface ProductDetailsProps {
  product?: IProduct;
}

const ProductDetails = ({ product }: ProductDetailsProps): JSX.Element => {
  if (!product) return <></>;

  const { alcohol, category, company, description, src, store, title, country } = product;

  const ProductCountry = (): JSX.Element => {
    if (!country) return <></>;
    else return (
      <div className={styles.ProductModal_Details_Country}>
        <div>{country.icon}</div>
        <span>{country.title}</span>
      </div>
    );
  };

  return (
    <div className={styles.ProductModal_Content}>
      <div className={styles.ProductModal}>
        <Image alt={title} src={src} width={150} rootClassName={styles.ProductModal_Image} />
        <div className={styles.ProductModal_Details}>
          <h2>{title}</h2>
          <ProductCountry />
          <ProductLabel label="Blend" value={category} icon={<FaWineBottle />} />
          <ProductLabel label="Alcohol/Vol" value={alcohol ? alcohol + '%' : "Non-alcoholic"} icon={<MdLocalDrink />} />
          {!company ? <></> : <ProductLabel label="Company" value={company} icon={<LuGrape />} />}
          <small>{description}</small>
        </div>
      </div>
      <div className={styles.ProductModal_Actions}>
        <Button href={store.url} target='_blank' rel="noopener noreferrer" type='primary'>See in {store.title}</Button>
      </div>
    </div>
  );
};

interface ProductLabelProps {
  label: string;
  value: string;
  icon: JSX.Element;
}

const ProductLabel = ({ value, label, icon }: ProductLabelProps): JSX.Element => (
  <div className={styles.ProductModal_Details_Label}>
    {icon}
    <div className={styles.ProductModal_Details_Country}>
      <h4>{label}:</h4>
      <span>{value}</span>
    </div>
  </div>
);