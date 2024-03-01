import React from 'react';
import { Col, Image, Row } from 'antd';
import styles from './Home.module.scss';
import classNames from 'classnames';
import '@/app/styles/AppScroll.css';
import AppHighlightImage from '@/app/components/AppHighlightImage';
import AppComponents from '@/app/components/AppComponents';
import DetailsList, { IDetailsListItem } from '@/app/components/AppComponents/DetailsList';

export default function Home(): JSX.Element {

  const [w, h] = [800, 200];

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
      <AppHighlightImage src="./winefield.jpg" alt="Winery Image" imageHeightPosition={69} />
      <AppComponents.Text.Section>Join us at March 15th</AppComponents.Text.Section>
      <AppComponents.Box>
        <AppComponents.Text.BoxText>
          Winederland will be an event for wine enthusiasts. Come and experience the finest selections of wine available. Indulge in a journey through the world of wines, exploring unique flavors and discovering new favorites. Join us for a memorable evening filled with exquisite wines and delightful company. Cheers to a night of Winederland!
        </AppComponents.Text.BoxText>
      </AppComponents.Box>
      <AppComponents.Text.Section>How to get there</AppComponents.Text.Section>
      <Row gutter={[16, 16]}>

        <Col span={24} md={24 - 8}>
          <AppComponents.Box>
            <DetailsList items={detailsListItems} colon />
          </AppComponents.Box>
        </Col>

        <Col span={24} md={8}>
          <AppComponents.Box>
            <div className={styles.Maps}>
              <iframe
                width="100%"
                height="300"
                scrolling="no"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                src="https://maps.google.com/maps?width=100%25&height=300&hl=en&q=43.6721418,-79.37624821570263+(My%20Business%20Name)&t=&z=15&ie=UTF8&iwloc=B&output=embed" />
            </div>
          </AppComponents.Box>
        </Col>

      </Row>
    </>
  );

  return (
    <div className={styles.App}>
      <div style={{ width: w, height: h }}>
        <Image
          preview={false}
          src="./winefield.jpg"
          alt='Winery Image'
          height={h}
          width={w}
          style={{ objectPosition: '100% 69%' }}
          className="app-image"
        />
      </div>
      <span className={styles.Font}>Join us at March 15th</span>

      <div className={classNames([styles.Box])}>
        Winederland will be an event for wine enthusiasts. Come and experience the finest selections of wine available. Indulge in a journey through the world of wines, exploring unique flavors and discovering new favorites. Join us for a memorable evening filled with exquisite wines and delightful company. Cheers to a night of Winederland!
      </div>

      <span className={styles.Font}>How to get there</span>

      <div style={{ width: w, height: h }}>
        <Image
          preview={false}
          src="./ILAC LOVE.png"
          alt='ILAC Love Sign'
          height={h}
          width={w}
          className="app-image"
        />
      </div>

      <div className={styles.MapBox}>

        <div className={classNames([styles.Box, styles.Find, 'AppScroll'])}>

          <div style={{ display: 'flex', flexDirection: 'column', rowGap: 3, textAlign: 'left' }}>
            <span>Date:</span>
            <ul><li>March 15th, 2024</li></ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', rowGap: 3, textAlign: 'left' }}>
            <span>Address:</span>
            <ul>
              <li>425 Bloor St E, Toronto, ON M4X 1L7</li>
              <li>4th floor</li>
            </ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', rowGap: 3, textAlign: 'left' }}>
            <span>Nearest Station:</span>
            <ul><li>Sherbourne</li></ul>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', rowGap: 3, textAlign: 'left' }}>
            <span>ILAC 920 Yonge Street Routes:</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', rowGap: 3, textAlign: 'left' }}>
            <span>– via Church Street 1.2km, 17min</span>
            <ul><li>Head south on Yonge St and turn left on Church St. Continue on Church St and turn left on Bloor Street East.</li></ul>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', rowGap: 3, textAlign: 'left' }}>
            <span>– via Bloor Street 1.3km, 19min</span>
            <ul><li>Head south on Yonge St and turn left on Bloor Street East.</li></ul>
          </div>

        </div>

        <div className={styles.Box}>
          <div className={styles.Maps}>
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              src="https://maps.google.com/maps?width=100%25&height=300&hl=en&q=43.6721418,-79.37624821570263+(My%20Business%20Name)&t=&z=15&ie=UTF8&iwloc=B&output=embed" />
          </div>
        </div>

      </div>
    </div>
  );
}