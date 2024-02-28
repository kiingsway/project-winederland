import { departments, description_about, students } from '@/parameters';
import React from 'react';
import { Avatar, Card, Col, Image, Row } from 'antd';
import styles from './About.module.scss';
import { getRandomDarkColor } from '@/app/services/helpers';

export default function About(): JSX.Element {

  const [w, h] = [800, 200];



  return (
    <div className={styles.Main}>
      <div style={{ width: w, height: h }}>
        <Image
          preview={false}
          src={`https://picsum.photos/${w}/${h}`}
          alt='Winery Image'
        />
      </div>
      <span className={styles.Description}>
        {description_about}
      </span>

      <Row gutter={[16, 16]} style={{ width: '100%' }}>
        {departments.map(department => {
          const students_deparment = students.filter(s => s.department === department).map(s => s.name);
          const department_color = getRandomDarkColor();
          return (
            <Col span={24} md={12} key={department}>
              <Card
                style={{ height: '100%' }}
                type='inner'
                bordered={false}
                title={department}>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
                  {students_deparment.map((student, index) => (
                    <Avatar
                      key={index}
                      size={50}

                      style={{ borderRadius: '50%', cursor: 'default', backgroundColor: department_color }}>
                      {student.slice(0, 3).toUpperCase()}
                    </Avatar>
                  ))}
                </div>

              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}