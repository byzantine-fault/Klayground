import { CopyOutlined, WalletOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Empty, message, Row, Space, Tabs, Typography } from 'antd';
import React from 'react';
import NFTCard from '../components/NFTCard';
import { ellipsisMiddle } from '../lib/ellipsisMiddle';
import { useRouter } from 'next/router';

const { Title, Link, Text } = Typography;
function Profile() {
  const router = useRouter();

  const onChangeTabs = (key: string) => {
    console.log(key);
  };
  return (
    <Row justify="center">
      <Col xs={22} xl={22} xxl={16}>
        <Space direction="vertical" style={{ width: '100%' }} size="large">
          <Space size={'large'}>
            <Avatar
              size={{ xs: 80, sm: 80, md: 80, lg: 80, xl: 80, xxl: 100 }}
              src="https://joeschmoe.io/api/v1/random"
              style={{ background: '#fff', border: '4px solid #fff' }}
            />
            <Space direction="vertical">
              <Text strong style={{ fontSize: '2em' }}>
                User Name
              </Text>
              <Link
                onClick={() => {
                  navigator.clipboard.writeText('0xAe88dFEE2Da3d2a46b2dafEe0De2ee97dC8Fa1b5'),
                    message.success('지갑 주소가 복사되었습니다!');
                }}
              >
                {ellipsisMiddle('0xAe88dFEE2Da3d2a46b2dafEe0De2ee97dC8Fa1b5') + ' '}
                <CopyOutlined />
              </Link>
            </Space>
          </Space>
          <Tabs
            defaultActiveKey="1"
            onChange={onChangeTabs}
            items={[
              {
                label: `보유 아이템`,
                key: '1',
                children: (
                  <Row gutter={[16, 16]} justify="center">
                    {Array(30)
                      .fill(null)
                      .map((_, index) => (
                        <Col xs={12} sm={8} lg={6} xl={4} xxl={4} key={index}>
                          <NFTCard type="profile" item={''} />
                        </Col>
                      ))}
                    {/* <Col span={22}>
                      <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description={
                          <>
                            <Title level={5} type="secondary">
                              보유한 아이템이 없습니다.
                            </Title>
                            <br />
                            <Button onClick={() => router.push('/collections')}>
                              아이템 둘러보기
                            </Button>
                          </>
                        }
                      />
                    </Col> */}
                  </Row>
                ),
              },
              {
                label: `거래 내역`,
                key: '2',
                children: (
                  <Row gutter={[16, 16]} justify="center">
                    <Col span={22}>
                      <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description={
                          <>
                            <Title level={5} type="secondary">
                              거래 내역이 없습니다.
                            </Title>
                            <br />
                            <Button onClick={() => router.push('/collections')}>
                              아이템 둘러보기
                            </Button>
                          </>
                        }
                      />
                    </Col>
                  </Row>
                ),
              },
            ]}
          />
        </Space>
      </Col>
    </Row>
  );
}

export default Profile;
