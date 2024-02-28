import React from 'react';
import styles from './WineBar.module.scss';
import { Col, Image, Row } from 'antd';

export default function WineBar(): JSX.Element {

  const [w, h] = [800, 200];

  return (
    <div className={styles.Main}>
      <div style={{ width: w, height: h }}>
        <Image
          preview={false}
          src={`https://picsum.photos/${w}/${h}`}
          alt='Winery Image'
        />
      </div>

      <WineSection section='red wine' image="./red-wine.webp">
        Red wine is a type of wine made from dark-colored grape varieties. The color of red wine can range from intense violet to brick red, and it gets its color from the grape skins that are included during fermentation. Red wine is typically richer and more complex in flavor compared to white wine, with flavors that can vary depending on the grape variety and region. Common flavors in red wine include fruits like cherry, plum, and raspberry, as well as earthy, spicy, and floral notes. Red wine is often aged in oak barrels, which can impart additional flavors and aromas. It is enjoyed around the world and is often paired with a variety of foods.
      </WineSection>

      <WineSection section='white wine' image="./white-wine.webp" makeImageLeft>
        White wine is a type of wine made from green or yellowish grapes. Unlike red wine, white wine is fermented without the grape skins, which gives it its lighter color. White wines can range from pale yellow to golden amber in color, and they are known for their crisp and refreshing taste. Flavors in white wine can vary widely depending on the grape variety and region, but common flavors include citrus, apple, pear, and tropical fruits. White wine is often aged in stainless steel tanks or oak barrels, which can affect its flavor and aroma. It is typically served chilled and pairs well with a variety of foods, including seafood, poultry, and light pasta dishes.
      </WineSection>

      <WineSection section='sparkling wine' image="./sparkling-wine.webp">
        Sparkling wine is a carbonated wine known for its effervescence, created through secondary fermentation. It's typically made using the traditional method (like Champagne) or the Charmat method. Sparkling wines vary in sweetness from extra brut (very dry) to doux (very sweet). They can be white or rosé, with flavors ranging from crisp and citrusy to creamy and nutty. Common types include Champagne, Prosecco, Cava, and sparkling rosé. Sparkling wines are often associated with celebrations and are enjoyed on their own or paired with a variety of foods, from appetizers to desserts.
      </WineSection>

      <WineSection section='rose wine' image="./rose-wine.webp" makeImageLeft>
        Rosé wine is a refreshing and versatile wine that derives its pink color from brief contact with grape skins. It can range in color from pale salmon to deep pink, with flavors spanning from dry and fruity to sweet and floral. Rosé is made from a variety of red grapes and is produced worldwide. It's known for its light body, crisp acidity, and bright fruit flavors, making it a perfect summer sipper. Rosé pairs well with a wide range of foods, from light salads and seafood to grilled meats and spicy dishes. Its popularity has surged in recent years due to its approachable nature and ability to please a variety of palates.
      </WineSection>

      <WineSection section='grape juice' image="./grape-juice.webp">
        Apple juice is a popular beverage made by pressing and extracting the liquid from apples. It's a refreshing and nutritious drink, often enjoyed for its sweet and tangy flavor. Apple juice can be made from various apple varieties, each contributing to its unique taste profile.
      </WineSection>
    </div>
  );
}

interface WineSectionProps {
  section: string;
  image: string;
  makeImageLeft?: boolean;
}

function WineSection({ section, image, children, makeImageLeft }: React.PropsWithChildren<WineSectionProps>): JSX.Element {

  const WineImage = (): JSX.Element => (
    <Col span={10}>
      <Image
        preview={false}
        src={image}
        alt={`${section} Image`}
      />
    </Col>
  );

  const style: React.CSSProperties = {
    display: 'flex',
    textAlign: makeImageLeft ? 'right' : 'left',
    justifyContent: makeImageLeft ? 'flex-end' : 'flex-start',
  };

  const WineDescription = (): JSX.Element => {
    return (
      <Col span={24 - 10}>
        <span
          style={style}
          className={styles.WineSection_Description}>
          {children}
        </span>
      </Col>
    );
  };

  return (
    <Row gutter={[16, 16]} className={styles.WineSection}>
      <Col span={24}>
        <span
          style={style}
          className={styles.Font}>
          {section}
        </span>
      </Col>
      {makeImageLeft ? <><WineImage /><WineDescription /></> : <><WineDescription /><WineImage /></>}
    </Row>
  );
}