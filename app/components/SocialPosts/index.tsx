import React from 'react';
import styles from './SocialPosts.module.scss';
import { Avatar, Col, Row, Image } from 'antd';
import { linkProps } from '@/app/services/helpers';
import { TSocialMedia } from '@/interfaces';
import { social_info } from '@/parameters';

interface Props {
  socialMedia: TSocialMedia;
}

export default function SocialPosts({ socialMedia }: Props): JSX.Element {

  const parameters = social_info[socialMedia];

  if (!parameters) return <></>;

  return (
    <a className={styles.Main} {...linkProps} href={parameters.url}>
      <div className={styles.Main_AppIcon}>
        {parameters.icon}
      </div>

      <div className={styles.Main_Header}>
        <Avatar size={56} src={parameters.profile} className={styles.Main_Header_Profile} />
        <div className={styles.Main_Header_Description}>
          <h4>{parameters.user}</h4>
          {parameters.desc ? <span>{parameters.desc}</span> : <></>}
        </div>
      </div>
      <Row className={styles.Main_Posts}>
        {parameters.posts?.map(post => {
          const { alt, src } = post;
          return (
            <Col key={alt} span={24 / 3}>
              <Image
                className={styles.Main_Posts_Image}
                alt={alt}
                src={src}
                width={'100%'}
                height={120}
                preview={false}
              />
            </Col>
          );
        })}
      </Row>
    </a>
  );
}