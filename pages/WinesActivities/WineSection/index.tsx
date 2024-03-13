import React from 'react';
import AppComponents from '@/app/components/AppComponents';
import { Row, Col, Grid, Image } from 'antd';

interface Props {
  section: string;
  image: string;
  makeImageLeft: boolean;
}

export default function WineSection(p: React.PropsWithChildren<Props>): JSX.Element {

  const { image, makeImageLeft, section, children } = p;
  const screens = Grid.useBreakpoint();
  const isMobile = !screens.md;

  const style: React.CSSProperties = {
    display: 'flex',
    textAlign: isMobile ? 'center' : (makeImageLeft ? 'right' : 'left'),
    justifyContent: isMobile ? 'center' : (makeImageLeft ? 'flex-end' : 'flex-start'),
  };

  const WineImage = (): JSX.Element => (
    <Col span={24} md={10}>
      <AppComponents.Box style={{ height: 205 }}>
        <Image
          height={165}
          width={'100%'}
          style={{ objectFit: 'cover' }}
          preview={false}
          src={image}
          alt={`${section} Image`}
        />
      </AppComponents.Box>
    </Col>
  );

  const WineDescription = (): JSX.Element => {
    return (
      <Col span={24} md={14}>
        <AppComponents.Box style={{ height: 205, width: '100%' }}>
          <AppComponents.Text.BoxText style={style}>
            {children}
          </AppComponents.Text.BoxText>
        </AppComponents.Box>
      </Col>
    );
  };

  const Main = (): JSX.Element => {
    if (isMobile || makeImageLeft) return <><WineImage /><WineDescription /></>;
    return <><WineDescription /><WineImage /></>;
  };

  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <AppComponents.Text.Section style={style}>{section}</AppComponents.Text.Section>
      </Col>
      <Main />
    </Row>
  );
}