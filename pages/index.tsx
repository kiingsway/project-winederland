import React from 'react';
import { Col, Row } from 'antd';
import '@/app/styles/AppScroll.css';
import AppComponents from '@/app/components/AppComponents';
import DetailsList from '@/app/components/AppComponents/DetailsList';
import Maps from '@/app/components/Maps';
import { appImages, detailsListItems, maps_url } from '@/parameters';
import styles from './Home.module.scss';
import SocialPosts from '@/app/components/SocialPosts';

export default function Home(): JSX.Element {

  return (
    <>
      <AppComponents.Image {...appImages.Home} imageHeightPosition={69} />
      <AppComponents.Text.Section>Join us on March 15</AppComponents.Text.Section>
      <AppComponents.Box>
        <AppComponents.Text.BoxText>
          Winederland will be an event for wine enthusiasts. Come and experience the finest selections of wine available. Indulge in a journey through the world of wines, exploring unique flavors and discovering new favorites. Join us for a memorable evening filled with exquisite wines and delightful company. Cheers to a night of Winederland!
        </AppComponents.Text.BoxText>
      </AppComponents.Box>

      <AppComponents.Text.Section>Follow us</AppComponents.Text.Section>

      <Row gutter={[16, 16]}>

        <Col span={24} md={12}>
          <AppComponents.Box className={styles.SocialMediaBox}>
            <SocialPosts socialMedia='Instagram' />
          </AppComponents.Box>
        </Col>

        <Col span={24} md={12}>
          <AppComponents.Box className={styles.SocialMediaBox}>
            <SocialPosts socialMedia='TikTok' />
          </AppComponents.Box>
        </Col>

      </Row>

      <AppComponents.Text.Section>How to get there</AppComponents.Text.Section>
      <Row gutter={[16, 16]}>

        <Col span={24} md={24 - 8}>
          <AppComponents.Box>
            <DetailsList items={detailsListItems} colon />
          </AppComponents.Box>
        </Col>

        <Col span={24} md={8}>
          <AppComponents.Box>
            <Maps maps_url={maps_url} />
          </AppComponents.Box>
        </Col>

      </Row>
    </>
  );
}