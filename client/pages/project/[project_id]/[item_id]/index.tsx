import React from 'react';
import { useRouter } from 'next/router';
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Empty,
  Image,
  Row,
  Space,
  Statistic,
  Tabs,
  Typography,
} from 'antd';
import { ellipsisMiddle } from '../../../../lib/ellipsisMiddle';
import { ClockCircleOutlined, EyeFilled, TagOutlined, WalletOutlined } from '@ant-design/icons';
import useSWR from 'swr';
import Caver from 'caver-js';
const caver = new Caver('https://api.baobab.klaytn.net:8651');

const { Title, Link, Text, Paragraph } = Typography;

const onChangeOfTabs = (key: string) => {
  console.log(key);
};

function Item() {
  const router = useRouter();
  const { data: detail } = useSWR(`${process.env.NEXT_PUBLIC_ENDPOINT3}/detail`);

  return (
    <Row justify="center">
      <Col xl={22} xxl={16}>
        <Row justify="center" gutter={[32, 16]}>
          <Col xs={22} lg={10}>
            <Image
              alt="example"
              src={detail?.imageUrl}
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
                objectPosition: 'center center',
              }}
            />
          </Col>
          <Col xs={22} lg={14}>
            <Space direction="vertical" style={{ width: '100%' }}>
              <Title level={2}>{detail?.name}</Title>
              <Space size={'large'}>
                <Space>
                  <Avatar size={32} src={detail?.imageUrl} />
                  <Link onClick={() => router.push('/project/1')}>BELLYGOM</Link>
                </Space>
                <Space>
                  <Text type="secondary">소유자</Text>
                  <Link onClick={() => router.push('/profile/1')}>
                    {ellipsisMiddle(detail?.ownerWalletAddress)}
                  </Link>
                </Space>
              </Space>
              <Space size={'large'}>
                <Text type="secondary">
                  <EyeFilled /> {detail?.viewCount} 조회
                </Text>
              </Space>
              <Divider />
              <Text type="secondary">
                <ClockCircleOutlined /> 판매 종료까지 <strong>174일 2시간</strong> 남음
              </Text>
              <Title level={2}>
                {caver.utils.convertFromPeb(`${String(detail?.listPriceInKlay || 0)}`, 'KLAY')}{' '}
                <Text style={{ fontSize: '1rem' }}>KLAY</Text>
              </Title>
              <Row gutter={[8, 8]}>
                <Col span={12}>
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      width: '100%',
                    }}
                  >
                    <WalletOutlined />
                    구매하기
                  </Button>
                </Col>
                <Col span={12}>
                  <Button size="large" style={{ width: '100%' }}>
                    <TagOutlined />
                    가격 제안하기
                  </Button>
                </Col>
              </Row>
              <Tabs
                defaultActiveKey="1"
                onChange={onChangeOfTabs}
                items={[
                  {
                    label: `거래내역`,
                    key: '1',
                    children: (
                      <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description={
                          <>
                            <Title level={5} type="secondary">
                              거래내역이 없습니다.
                            </Title>
                            <Text type="secondary">현재 거래가에 아이템을 구매해보세요.</Text>
                          </>
                        }
                      />
                    ),
                  },
                  {
                    label: `가격 제안`,
                    key: '2',
                    children: (
                      <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description={
                          <>
                            <Title level={5} type="secondary">
                              아직 제안이 없습니다.
                            </Title>
                            <Text type="secondary">가격을 제안하고 아이템을 구매해보세요.</Text>
                          </>
                        }
                      />
                    ),
                  },
                  {
                    label: `상세정보`,
                    key: '3',
                    children: (
                      <Space direction="vertical" size={'middle'} style={{ width: '100%' }}>
                        <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Text type="secondary">소유자</Text>
                          <Link onClick={() => router.push('/profile/1')}>
                            {ellipsisMiddle('0x8F06fe2c39BD3655027f4331C7DC6d6660b1FA68')}
                          </Link>
                        </Space>
                        <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Text type="secondary">컨트랙트 주소</Text>
                          <Link
                            onClick={() =>
                              window.open(
                                `https://scope.klaytn.com/account/${detail?.projectContractAddress}`
                              )
                            }
                          >
                            {ellipsisMiddle(detail?.projectContractAddress)}
                          </Link>
                        </Space>
                        <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Text type="secondary">토큰 아이디</Text>
                          <Text>{detail?.tokenId}</Text>
                        </Space>
                        <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Text type="secondary">토큰 스탠다드</Text>
                          <Text>ERC-721</Text>
                        </Space>
                        <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Text type="secondary">블록체인</Text>
                          <Text>Klaytn</Text>
                        </Space>
                        <Space style={{ display: 'flex', justifyContent: 'space-between' }}>
                          <Text type="secondary">창작자 로열티</Text>
                          <Text>7.5%</Text>
                        </Space>
                      </Space>
                    ),
                  },
                ]}
              />
              <Divider orientation="left" orientationMargin="0" plain>
                아이템 특성
              </Divider>
              <Row gutter={[8, 8]}>
                {detail &&
                  Object.entries(detail?.attributes).map((attribute: any, index: number) => (
                    <Col key={index} xs={12} lg={6}>
                      <Card bodyStyle={{ padding: 12 }}>
                        <Statistic
                          title={attribute[0]}
                          value={attribute[1].value}
                          valueStyle={{ fontSize: '14px', wordBreak: 'keep-all' }}
                        />
                        <Text type="secondary">
                          희소성 {Math.round(attribute[1].rarity * 0.1) / 100}%
                        </Text>
                      </Card>
                    </Col>
                  ))}
              </Row>
              <Divider orientation="left" orientationMargin="0" plain>
                이 아이템이 속한 컬렉션
              </Divider>
              <Space>
                <Avatar
                  size={32}
                  src={
                    'https://dwckk6v6uouee.cloudfront.net/project/0xCe70EEf5ADaC126C37c8BC0c1228d48B70066d03/logo.gif'
                  }
                />
                <Link onClick={() => router.push('/project/1')}>BELLYGOM</Link>
              </Space>
              <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: '더보기' }}>
                벨리곰 NFT 프로젝트는 Collectable, Unique, Utilities의 메시지를 중심으로 NFT 를
                만들어 보자는 목표와 비전을 가지고 시작되었습니다. 벨리곰 IP는 보다 많은 분들에게
                사랑받기위해서 많은 투자를 아끼지않는 핵심 프로젝트로서 지난 5년간 많은 성과를
                만들어내며 오늘까지 왔으며 현재 MZ세대를 중심으로 많은 사랑을 받고 있는 국내 대표
                캐릭터,IP입니다.
              </Paragraph>
            </Space>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Item;
