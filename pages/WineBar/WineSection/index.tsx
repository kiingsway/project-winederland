import React from 'react';
import styles from '../WineBar.module.scss';
import AppComponents from '@/app/components/AppComponents';
import { Row, Col, Grid, Image } from 'antd';

const { useBreakpoint } = Grid;

interface Props {
  section: string;
  image: string;
  makeImageLeft: boolean;
}

export default function WineSection(p: React.PropsWithChildren<Props>): JSX.Element {

  const { image, makeImageLeft, section, children } = p;
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const style: React.CSSProperties = {
    display: 'flex',
    textAlign: isMobile ? 'center' : (makeImageLeft ? 'right' : 'left'),
    justifyContent: isMobile ? 'center' : (makeImageLeft ? 'flex-end' : 'flex-start'),
  };

  const WineImage = (): JSX.Element => (
    <Col span={24} md={10}>
      <Image
        preview={false}
        src={image}
        alt={`${section} Image`}
      />
    </Col>
  );

  const WineDescription = (): JSX.Element => {
    return (
      <Col span={24} md={14}>
        <AppComponents.Text.BoxText style={style}>
          {children}
        </AppComponents.Text.BoxText>
      </Col>
    );
  }

  return (
    <Row gutter={[16, 16]} className={styles.WineSection}>

      <Col span={24}>
        <AppComponents.Text.Section style={style}>{section}</AppComponents.Text.Section>
      </Col>

      {isMobile || makeImageLeft ?
        <><WineImage /><WineDescription /></> :
        <><WineDescription /><WineImage /></>}

    </Row>
  );
}