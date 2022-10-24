import { Button, Col, Image, Row, Space, Typography } from 'antd';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';

const { Title, Text } = Typography;

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <Row justify="center">
      <Row justify="center" align="middle" gutter={[32, 32]} className="main-section">
        <Col xs={{ span: 22, order: 1 }} lg={{ span: 11, order: 0 }}>
          <Space style={{ width: '100%' }} align="center" direction="vertical" size={'large'}>
            <Title>Klayground에서 당신만의 NFT를 수집하세요.</Title>
            <Button type="primary" size="large" onClick={() => router.push('/collections')}>
              모든 컬렉션 바로가기
            </Button>
          </Space>
        </Col>
        <Col xs={{ span: 22, order: 0 }} lg={{ span: 11, order: 1 }}>
          <Image
            alt="main_image"
            src="https://i.seadn.io/gae/X6ChZV3lw4YQ17c92mUk_94QiupUiXIkjimOdfTp1HEkvODZUFoZik9ZDlt-XPmfvGVrC1iI5trSa7-Ze2G1gwmN6vtCsuQHTR41?auto=format&w=1000"
            style={{
              width: '100%',
              height: '30rem',
              objectFit: 'cover',
              objectPosition: 'center center',
              borderRadius: '2px',
            }}
            preview={false}
          />
        </Col>
      </Row>
      <Col span={24} order="3">
        <div className="flow-container">
          <div className="flow-text" style={{ marginBottom: '-5rem' }}>
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <Text className="flow-wrap-left" key={index}>
                  &nbsp;세상에서 단 하나뿐인 예술 작품을 수집하세요!
                </Text>
              ))}
          </div>
          <div className="flow-text">
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <Text className="flow-wrap-right" key={index}>
                  &nbsp;세상에서 단 하나뿐인 예술 작품을 수집하세요!
                </Text>
              ))}
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Home;
