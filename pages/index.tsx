import React from 'react';
import { Col, Row } from 'antd';
import '@/app/styles/AppScroll.css';
import AppComponents from '@/app/components/AppComponents';
import DetailsList, { IDetailsListItem } from '@/app/components/AppComponents/DetailsList';
import Maps from '@/app/components/Maps';
import { appImages, maps_url } from '@/parameters';
import { InstagramEmbed, TikTokEmbed } from 'react-social-media-embed';
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import styles from './Home.module.scss';
import Buttons from '@/app/components/Buttons';
import SocialPosts from '@/app/components/SocialPosts';

export default function Home(): JSX.Element {

  const detailsListItems: IDetailsListItem[] = [
    {
      label: 'Date',
      description: "March 15th, 2024"
    },
    {
      label: 'Address',
      description: "425 Bloor St E, Toronto, ON M4X 1L7\n4th Floor"
    },
    {
      label: 'Nearest Station',
      description: "Sherbourne"
    },
    {
      label: "From 920 Yonge St. to Dreaming Building"
    },
    {
      label: 'via Church Street 1.2km, 17min',
      description: "Head south on Yonge St and turn left on Church St. Continue on Church St and turn left on Bloor Street East."
    },
    {
      label: 'via Bloor Street 1.3km, 19min',
      description: "Head south on Yonge St and turn left on Bloor Street East."
    },
  ];

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
            <SocialPosts socialMedia='instagram' />
          </AppComponents.Box>
        </Col>

        <Col span={24} md={12}>
          <AppComponents.Box className={styles.SocialMediaBox}>
            <SocialPosts socialMedia='tiktok' />
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