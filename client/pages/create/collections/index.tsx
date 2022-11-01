import { PlusOutlined } from '@ant-design/icons';
import { Card, Col, Image, Row, Typography } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import AddCardButton from '../../../components/create/AddCardButton';
import CreateMenu from '../../../components/Layout/Create/CreateMenu';

const { Title } = Typography;
const { Meta } = Card;

function Collections() {
  const router = useRouter();

  return (
    <CreateMenu>
      <Row justify="center">
        <Col span={22}>
          <Title level={2}>Generative Art Builder</Title>
          <Row gutter={[16, 16]} justify="start">
            <Col xs={12} lg={4} onClick={() => router.push('/create/collections/builder')}>
              <AddCardButton />
            </Col>
            <Col xs={12} lg={4}>
              <Card
                hoverable
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingBottom: '100%',
                }}
                bodyStyle={{
                  height: '100%',
                  width: '100%',
                  position: 'absolute',
                  padding: '8px',
                  transform: 'translate(0%,125%)',
                }}
                cover={
                  <div
                    style={{
                      overflow: 'hidden',
                      maxHeight: '75%',
                      width: '100%',
                      position: 'absolute',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <Image
                      alt="example"
                      src={
                        'https://dwckk6v6uouee.cloudfront.net/project/0xCe70EEf5ADaC126C37c8BC0c1228d48B70066d03/cover.png' ||
                        'error'
                      }
                      preview={false}
                      style={{
                        width: '100%',
                        height: '100%',
                        minHeight: '200px',
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                      fallback={
                        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1920px-No-Image-Placeholder.svg.png?20200912122019'
                      }
                    />
                  </div>
                }
              >
                <Meta
                  title="BELLYGOM"
                  description={
                    <>
                      <span>아이템 10,000개</span>
                    </>
                  }
                />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </CreateMenu>
  );
}

export default Collections;
