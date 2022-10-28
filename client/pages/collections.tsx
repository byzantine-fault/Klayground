import React from 'react';
import { useRouter } from 'next/router';
import { Avatar, Card, Col, Empty, Image, Row, Typography } from 'antd';
import useSWR from 'swr';
import Caver from 'caver-js';
const caver = new Caver('https://api.baobab.klaytn.net:8651');

const { Title } = Typography;
const { Meta } = Card;

function Collections() {
  const router = useRouter();
  const { data: collections } = useSWR(`${process.env.NEXT_PUBLIC_ENDPOINT}/collections`);

  return (
    <Row justify="center">
      <Col span={22}>
        <Title>전체 NFT Collections</Title>
        <Row gutter={[16, 16]}>
          {collections ? (
            collections?.map((collection: any, index: number) => (
              <Col xs={12} sm={8} md={8} lg={6} xl={6} xxl={4} key={index}>
                <Card
                  hoverable
                  onClick={() => router.push(`/project/${collection?.slug}`)}
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
                        src={collection?.coverUrl || 'error'}
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
                  <Avatar
                    size={{ xs: 64, sm: 64, md: 64, lg: 64, xl: 80, xxl: 80 }}
                    src={collection?.logoUrl}
                    style={{
                      position: 'relative',
                      transform: 'translateY(calc(-50% + -24px))',
                      border: '4px solid #fff',
                      marginBottom: '-50px',
                    }}
                  />
                  <Meta
                    title={collection.name}
                    description={
                      <>
                        <span>아이템 {collection?.numOfTokens}개</span>
                        <br />
                        <span>
                          <Image src={`/klaytn_logo.png`} alt="logo" preview={false} width={12} />
                          최저 거래가{' '}
                          {caver.utils.convertFromPeb(
                            `${String(collection?.floorPriceInKlay || 0)}`,
                            'KLAY'
                          )}
                        </span>
                      </>
                    }
                  />
                </Card>
              </Col>
            ))
          ) : (
            <Col span={22}>
              <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={
                  <>
                    <Title level={5} type="secondary">
                      NFT Collections이 없습니다.
                    </Title>
                  </>
                }
              />
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  );
}

export default Collections;
