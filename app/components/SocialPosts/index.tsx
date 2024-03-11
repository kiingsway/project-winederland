import React from 'react';
import styles from './SocialPosts.module.scss';
import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { Avatar, Col, Row, Image } from 'antd';
import { socialmedia_posts, socialmedia_profile, socialmedia_urls, socialmedia_usernames } from '@/parameters';
import { linkProps } from '@/app/services/helpers';
import { TSocialMedia } from '@/interfaces';
import { AppContext, IAppContext } from '@/pages/_app';

interface Props {
  socialMedia: TSocialMedia;
}

export default function SocialPosts({ socialMedia }: Props): JSX.Element {

  const { socialmedia_followers } = React.useContext(AppContext) as IAppContext;
  const [followers, setFollowers] = React.useState<Record<TSocialMedia, number | undefined>>({ instagram: undefined, tiktok: undefined });

  React.useEffect(() => {
    setFollowers(prev => {
      const instagram = socialmedia_followers?.instagram || prev.instagram;
      const tiktok = socialmedia_followers?.tiktok || prev.tiktok;
      return { instagram, tiktok };
    });
  }, [socialmedia_followers]);

  const ig_parameters = {
    link: socialmedia_urls.instagram,
    user: socialmedia_usernames.instagram,
    icon: <FaInstagram />,
    desc: followers.instagram ? `${followers.instagram} followers` : undefined,
    posts: socialmedia_posts.instagram,
    profile: socialmedia_profile.instagram,
  };

  const tk_parameters = {
    link: socialmedia_urls.tiktok,
    user: socialmedia_usernames.tiktok,
    icon: <FaTiktok />,
    desc: followers.tiktok ? `${followers.tiktok} likes` : undefined,
    posts: socialmedia_posts.tiktok,
    profile: socialmedia_profile.tiktok,
  };

  const parameters = socialMedia === 'instagram' ? ig_parameters : tk_parameters;

  return (
    <a className={styles.Main} {...linkProps} href={parameters.link}>
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
        {parameters.posts.map(post => {
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