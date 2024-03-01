import React from 'react';
import styles from './WineBar.module.scss';
import { Col, Grid, Image, Row } from 'antd';
import { wine_sections } from '@/parameters';

const { useBreakpoint } = Grid;

export default function WineBar(): JSX.Element {

  const [w, h] = [800, 200];
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  return (
    <>
      <div style={{ width: w, height: h }}>
        <Image
          preview={false}
          src="./Wines.jpg"
          alt='Wines Image'
          height={h}
          width={w}
          style={{ objectPosition: '100% 100%' }}
          className="app-image"
        />
      </div>

      {wine_sections.map(({ desc, image, key }, index) => (
        <WineSection key={key} section={key} image={image} makeImageLeft={Boolean(index % 2)} isMobile={isMobile}>
          {desc}
        </WineSection>
      ))}
    </>
  );
}

interface WineSectionProps {
  section: string;
  image: string;
  makeImageLeft?: boolean;
  isMobile: boolean;
}

function WineSection({ section, image, children, makeImageLeft, isMobile }: React.PropsWithChildren<WineSectionProps>): JSX.Element {

  const WineImage = (): JSX.Element => (
    <Col span={24} md={10}>
      <Image
        preview={false}
        src={image}
        alt={`${section} Image`}
      />
    </Col>
  );

  const style: React.CSSProperties = {
    display: 'flex',
    textAlign: isMobile ? 'center' : (makeImageLeft ? 'right' : 'left'),
    justifyContent: isMobile ? 'center' : (makeImageLeft ? 'flex-end' : 'flex-start'),
  };

  const WineDescription = (): JSX.Element => {
    return (
      <Col span={24} md={14}>
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
      {isMobile ? <><WineImage /><WineDescription /></> : (
        makeImageLeft ?
          <><WineImage /><WineDescription /></> :
          <><WineDescription /><WineImage /></>
      )}
    </Row>
  );
}