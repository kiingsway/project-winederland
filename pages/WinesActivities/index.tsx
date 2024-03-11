import AppComponents from '@/app/components/AppComponents';
import { activities, appImages } from '@/parameters';
import { Col, Modal, Row, Image, Button } from 'antd';
import React from 'react';
import WineContainer from './WineContainer';
import WineSection from '../WineBar/WineSection';
import { makeKey } from '@/app/services/helpers';
import styles from './WinesActivities.module.scss';
import { FaWineBottle } from "react-icons/fa";
import { MdLocalDrink } from 'react-icons/md';
import { LuGrape } from "react-icons/lu";
import { PT, CA, US, DE, CL, ES } from "country-flag-icons/react/3x2";

interface IProductData {
  title: string;
  src: string;
  description: string;
  company?: string;
}

interface IWine extends IProductData {
  country?: {
    icon: JSX.Element;
    title: string;
  };
  type: "Wine";
  category: string;
  alcohol: number;
  store: {
    title: string;
    url: string;
  }
}

export type IProduct = IWine;

export default function WinesActivities(): JSX.Element {

  const [selectedProduct, selectProduct] = React.useState<IProduct>();
  const openProductModal = (newProduct: IProduct) => selectProduct(newProduct);
  const closeProductModal = (): void => selectProduct(undefined);

  const products: IProduct[] = [
    {
      country: { title: "Portugal", icon: <PT width={16} style={{ flex: '1 0 auto' }} /> },
      title: "Lab Red Lisboa VR",
      src: "./wines/Lab Red Lisboa VR.png",
      type: "Wine",
      category: "Red Blend",
      alcohol: 13,
      company: "Lab",
      description: "From the region near Portugal's capital of Lisbon, LAB Red shows well, offering generous lifted smoky character and figgy fruit with fine-textured tannins. Spicy notes on the finish are contributed by four months ageing in oak. A stylish blend of syrah, cabernet and touriga nacional grape varieties.",
      store: {
        title: "LCBO",
        url: "https://www.lcbo.com/en/lab-red-lisboa-vr-534586"
      }
    },
    {
      country: { title: "Canada", icon: <CA width={16} style={{ flex: '1 0 auto' }} /> },
      title: "Colio Cellar Door Series Sauvignon Blanc",
      src: "./wines/Colio Cellar Door Series Sauvignon Blanc.png",
      type: "Wine",
      category: "Sauvignon Blanc",
      alcohol: 12.5,
      company: "Colio",
      description: "The Cellar Door Series is crafted in an approachable style. This lively sauvignon blanc is packed with citrus, tropical fruit and passion fruit notes. It is aromatic and flavourful with a refreshingly crisp finish. Serve with baked salmon over rice and grilled asparagus or grilled chicken and scalloped potatoes.",
      store: {
        title: "LCBO",
        url: "https://www.lcbo.com/en/colio-cellar-door-series-sauvignon-blanc-17537"
      }
    },
    {
      country: { title: "California, United States", icon: <US width={16} style={{ flex: '1 0 auto' }} /> },
      title: "Chloe Rosé",
      src: "./wines/Chloe Rosé.png",
      type: "Wine",
      category: "Rosé",
      alcohol: 13,
      company: "Chloe",
      description: "The Chloe Central Coast Rosé has a pink hue with delicate fresh strawberries, raspberries and watermelon notes. Elegant red fruit unfolds on the palate into a well-balanced, crisp, refreshing finish. Great for sipping or will make a great accompaniment to salmon and shrimp dishes; serve chilled.",
      store: {
        title: "LCBO",
        url: "https://www.lcbo.com/en/chloe-rose-31656"
      }
    },
    {
      country: { title: "Ontario, Canada", icon: <CA width={16} style={{ flex: '1 0 auto' }} /> },
      title: "Vieni Sparkling Riesling",
      src: "./wines/Vieni Sparkling Riesling.png",
      type: "Wine",
      category: "Sparkling Riesling",
      alcohol: 9,
      company: "Vintages Front Line Release",
      description: "Made in the tank method also used for Prosecco, this bright, citrusy wine has notes of candied lime, green apple and honeysuckle entwined with racy acidity, a soft mousse, and a kiss of sweetness. Pair with many different meals, from eggs Benedict to bacon-wrapped pork chops.[The New York World Wine & Spirits Competition did not include a tasting note.] Score - Best in Show Sparkling. (New York World Wine & Spirits Competition, 2022)",
      store: {
        title: "LCBO",
        url: "https://www.lcbo.com/en/vieni-sparkling-riesling-520411"
      }
    },
    {
      country: { title: "German", icon: <DE width={16} style={{ flex: '1 0 auto' }} /> },
      title: "CARL JUNG CUVÉE",
      src: "./wines/Carl Jung Cuvée.png",
      type: "Wine",
      category: "Red",
      alcohol: 0.2,
      company: "Carl Jung Alcohol Free",
      description: "Introducing the captivating Carl Jung Cuvée Red Wine, a non-alcoholic red wine that promises to enchant your senses and transport you to a world of lavish indulgence. This exquisite offering from the prestigious Carl Jung winery is expertly crafted with passion and precision, allowing you to experience the art of fine winemaking without the alcohol.",
      store: {
        title: "Dry Drinker",
        url: "https://drydrinker.com/products/cuvee-red-wine-0-2-abv-low-alcohol-wine-70cl-3-or-6-case-size"
      }
    },
    {
      country: { title: "Maipo Valley, Chile", icon: <CL width={16} style={{ flex: '1 0 auto' }} /> },
      title: "Tarapacá De-Alcoholized Sauvignon Blanc",
      src: "./wines/Tarapacá Sauvignon Blanc.png",
      type: "Wine",
      category: "Sauvignon Blanc",
      alcohol: 0.5,
      description: "Pale yellow in colour with greenish hues this 'better for you' de-alcoholized Sauvignon Blanc has plenty of citrus fruit, pineapple and peach aromas. Fresh and flavourful with a good balance of acidity and sweetness. All the flavours of Sauvignon Blanc with only 0.5% alcohol.",
      store: {
        title: "LCBO",
        url: "https://www.lcbo.com/en/tarapaca-de-alcoholized-sauvignon-blanc-28557"
      }
    },
    {
      country: { title: "Canada", icon: <CA width={16} style={{ flex: '1 0 auto' }} /> },
      title: "Unwined Smooth Rosé",
      src: "./wines/Unwined Smooth Rosé.png",
      type: "Wine",
      category: "Rosé",
      alcohol: 12.5,
      company: "Unwined",
      description: "A fresh and elegant rose made from a proprietary blend of Canadian grapes. Expect appealing aromas and flavours of toast, red fruit, nuts and fresh mushrooms. The palate is dry, refreshingly soft and balanced with a light fruity finish. Enjoy chilled on its own or with simple picnic fare, sandwiches and cold cuts. 750 mL bottle",
      store: {
        title: "Bramalea City Centre",
        url: "https://bramaleacitycentre.ca/theshoplist/product/unwined-smooth-rose-lcbo-d1033e"
      }
    },
    {
      country: { title: "Utiel-Requena, Spain", icon: <ES width={16} style={{ flex: '1 0 auto' }} /> },
      title: "Luna De Murviedro",
      src: "./wines/Luna De Murviedro.png",
      type: "Wine",
      category: "Sparkling Rose",
      alcohol: 0.01,
      description: "Light pink with fine bubbles, this de-alcoholized sparkling rosé is produced using a method that allows the wine to retain aromas and structure while removing the alcohol. Fresh and fruity with strawberry fruit aromas, the palate has a slightly sweet note and creamy bubbles. Enjoy as an aperitif or pair with seafood.",
      store: {
        title: "LCBO",
        url: "https://www.lcbo.com/en/luna-de-murviedro-sparkling-rose-28153"
      }
    },
  ];


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