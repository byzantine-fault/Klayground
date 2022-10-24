import React from 'react';
import { useRouter } from 'next/router';
import { LinkOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import {
  Avatar,
  Col,
  Divider,
  Empty,
  Image,
  Row,
  Space,
  Statistic,
  Tabs,
  Tooltip,
  Typography,
} from 'antd';
import { ellipsisMiddle } from '../../../lib/ellipsisMiddle';
import NFTCard from '../../../components/NFTCard';

const { Title, Text, Paragraph } = Typography;

const projectContractAddress = '0xce70eef5adac126c37c8bc0c1228d48b70066d03';

function Project() {
  const onChangeOfTabs = (key: string) => {
    console.log(key);
  };

  return (
    <Row justify="center">
      <Col span={24}>
        <div
          style={{
            overflow: 'hidden',
            height: '100%',
            maxHeight: '260px',
            width: '100%',
          }}
        >
          <Image
            alt="example"
            src="https://dwckk6v6uouee.cloudfront.net/project/0xCe70EEf5ADaC126C37c8BC0c1228d48B70066d03/cover.png"
            preview={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'bottom',
            }}
          />
        </div>
        <Row justify="center">
          <Col xs={22} xl={22} xxl={16}>
            <Space direction="vertical" style={{ maxWidth: '700px' }}>
              <Avatar
                size={{ xs: 100, sm: 100, md: 100, lg: 100, xl: 100, xxl: 100 }}
                src="https://dwckk6v6uouee.cloudfront.net/project/0xCe70EEf5ADaC126C37c8BC0c1228d48B70066d03/logo.gif"
                style={{
                  position: 'relative',
                  transform: 'translateY(-50%)',
                  border: '4px solid #fff',
                }}
              />
              <Title>BELLYGOM</Title>
              <Text>
                <Tooltip title="KlayScope로 이동" color="#434343">
                  <span
                    style={{ cursor: 'pointer' }}
                    onClick={() =>
                      window.open(`https://scope.klaytn.com/account/${projectContractAddress}`)
                    }
                  >
                    {ellipsisMiddle(projectContractAddress)} <LinkOutlined />
                  </span>
                </Tooltip>
                <Divider type="vertical" />
                창작자 로열티 5%{' '}
                <Tooltip
                  title={
                    <>
                      <Title level={5} style={{ color: '#fff' }}>
                        창작자 로열티 사용처
                      </Title>
                      <Text style={{ color: '#fff' }}>
                        아직 프로젝트 팀에서 창작자 로열티와 사용처를 입력하지 않았습니다.
                      </Text>
                    </>
                  }
                  color="#434343"
                >
                  <QuestionCircleOutlined />
                </Tooltip>
              </Text>
              <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: '더보기' }}>
                벨리곰 NFT 프로젝트는 Collectable, Unique, Utilities의 메시지를 중심으로 NFT 를
                만들어 보자는 목표와 비전을 가지고 시작되었습니다. 벨리곰 IP는 보다 많은 분들에게
                사랑받기위해서 많은 투자를 아끼지않는 핵심 프로젝트로서 지난 5년간 많은 성과를
                만들어내며 오늘까지 왔으며 현재 MZ세대를 중심으로 많은 사랑을 받고 있는 국내 대표
                캐릭터,IP입니다.
              </Paragraph>
              <Row gutter={16}>
                <Col span={4.8}>
                  <Statistic
                    title="네트워크"
                    value={'Klaytn'}
                    valueStyle={{ fontSize: '1em' }}
                    prefix={
                      <Image src={`/klaytn_logo.png`} alt="logo" preview={false} width={16} />
                    }
                  />
                </Col>
                <Col span={4.8}>
                  <Statistic
                    title="최저 거래가"
                    value={'1.2K'}
                    valueStyle={{ fontSize: '1em' }}
                    prefix={
                      <Image src={`/klaytn_logo.png`} alt="logo" preview={false} width={16} />
                    }
                  />
                </Col>
                <Col span={4.8}>
                  <Statistic
                    title="거래량"
                    value={'3.92M'}
                    valueStyle={{ fontSize: '1em' }}
                    prefix={
                      <Image src={`/klaytn_logo.png`} alt="logo" preview={false} width={16} />
                    }
                  />
                </Col>
                <Col span={4.8}>
                  <Statistic title="아이템" value={'10K 개'} valueStyle={{ fontSize: '1em' }} />
                </Col>
                <Col span={4.8}>
                  <Statistic title="소유자" value={'2.79K 명'} valueStyle={{ fontSize: '1em' }} />
                </Col>
              </Row>
            </Space>
            <Tabs
              defaultActiveKey="1"
              onChange={onChangeOfTabs}
              items={[
                {
                  label: `아이템`,
                  key: '1',
                  children: (
                    <Space direction="vertical">
                      <Title level={5}>9,997개의 아이템</Title>

                      <Row gutter={[16, 16]}>
                        {Array(30)
                          .fill(null)
                          .map((_, index) => (
                            <Col xs={12} sm={8} lg={6} xl={4} xxl={4} key={index}>
                              <NFTCard type="collections" />
                            </Col>
                          ))}
                      </Row>
                    </Space>
                  ),
                },
                {
                  label: `거래내역`,
                  key: '2',
                  children: (
                    <Empty
                      image={Empty.PRESENTED_IMAGE_SIMPLE}
                      description={
                        <>
                          <Title level={5} type="secondary">
                            거래내역이 없습니다.
                          </Title>
                        </>
                      }
                    />
                  ),
                },
              ]}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default Project;
