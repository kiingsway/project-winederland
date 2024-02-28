import React from 'react';
import { Image } from 'antd';
import styles from './Home.module.scss';
import classNames from 'classnames';
import '@/app/styles/AppScroll.css';

export default function Home(): JSX.Element {

  const [w, h] = [800, 200];

  return (
    <div className={styles.App}>
      <div style={{ width: w, height: h }}>
        <Image
          preview={false}
          src={`https://picsum.photos/${w}/${h}`}
          alt='Winery Image'
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
          src={`https://picsum.photos/${w}/${h}`}
          alt='Winery Image'
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