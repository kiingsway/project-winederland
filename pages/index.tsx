import React from 'react';
import { Col, Row } from 'antd';
import styles from './Home.module.scss';
import '@/app/styles/AppScroll.css';
import AppComponents from '@/app/components/AppComponents';
import DetailsList, { IDetailsListItem } from '@/app/components/AppComponents/DetailsList';

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
      <AppComponents.Image src="./winefield.jpg" alt="Winery Image" imageHeightPosition={69} />
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
                src="https://maps.google.com/maps?width=100%25&height=300&hl=en&q=43.6721418,-79.37624821570263+(ILAC+Dreaming+Building)&t=&z=15&ie=UTF8&iwloc=B&output=embed" />
            </div>
          </AppComponents.Box>
        </Col>

      </Row>
    </>
  );
}