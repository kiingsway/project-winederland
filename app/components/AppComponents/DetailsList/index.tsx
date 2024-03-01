import React from 'react';
import styles from '../style.module.scss';
import { Col, Row } from 'antd';
import '../../../styles/AppScroll.css'

export interface IDetailsListItem {
  label: string;
  description?: string;
}

interface Props {
  items: IDetailsListItem[];
  colon?: boolean;
}

export default function DetailsList({ items, colon }: Props): JSX.Element {

  return (
    <Row gutter={[16, 10]} className={styles.DetailsList + ' AppScroll'}>
      {items.map(({ description, label }) => {
        return (
          <React.Fragment key={label}>

            <Col span={24} md={description ? 8 : 24} className={styles.DetailsList_Item_Label} style={{marginTop: description ? 0 : 20}}>
              {label}{colon ? ':' : ''}
            </Col>

            {!description ? <></> : <Col span={24} md={24 - 8}>
              <div className={styles.DetailsList_Item_Desc}>
                {description.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            </Col>}
            
          </React.Fragment>
        );
      })}
    </Row>
  );
}