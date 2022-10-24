import React from 'react';
import { useRouter } from 'next/router';
import { Avatar, Card, Col, Image, Row, Typography } from 'antd';

const { Title } = Typography;
const { Meta } = Card;

function Collections() {
  const router = useRouter();
  return (
    <Row justify="center">
      <Col span={22}>
        <Title>전체 NFT Collections</Title>
        <Row gutter={[16, 16]}>
          {Array(30)
            .fill(null)
            .map((_, index) => (
              <Col xs={12} sm={8} md={8} lg={6} xl={6} xxl={4} key={index}>
                <Card
                  hoverable
                  onClick={() => router.push('/project/1')}
                  cover={
                    <div
                      style={{
                        overflow: 'hidden',
                        height: '100%',
                        maxHeight: '200px',
                        width: '100%',
                      }}
                    >
                      <Image
                        alt="example"
                        src="https://dwckk6v6uouee.cloudfront.net/project/0xCe70EEf5ADaC126C37c8BC0c1228d48B70066d03/cover.png.preview.large"
                        preview={false}
                        style={{
                          width: '100%',
                          height: '200px',
                          objectFit: 'cover',
                          objectPosition: 'center center',
                        }}
                      />
                    </div>
                  }
                >
                  <Avatar
                    size={{ xs: 64, sm: 64, md: 64, lg: 64, xl: 80, xxl: 80 }}
                    src="https://dwckk6v6uouee.cloudfront.net/project/0xCe70EEf5ADaC126C37c8BC0c1228d48B70066d03/logo.gif"
                    style={{
                      position: 'relative',
                      transform: 'translateY(calc(-50% + -24px))',
                      border: '4px solid #fff',
                      marginBottom: '-50px',
                    }}
                  />
                  <Meta
                    title="BELLYGOM"
                    description={
                      <>
                        <span>아이템 9,997개</span>
                        <br />
                        <span>
                          <Image src={`/klaytn_logo.png`} alt="logo" preview={false} width={12} />{' '}
                          최저 거래가 1,199
                        </span>
                      </>
                    }
                  />
                </Card>
              </Col>
            ))}
        </Row>
      </Col>
    </Row>
  );
}

export default Collections;
