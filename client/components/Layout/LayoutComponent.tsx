import { Col, Layout, Row, Space, Typography } from 'antd';
import React from 'react';
import LayoutMenu from './LayoutMenu';
import WalletConnectModal from './WalletConnectModal';
import Image from 'next/image';
import logoImage from '../../assets/images/logoImage.svg';

const { Header, Content, Footer } = Layout;
const { Title, Text } = Typography;

function LayoutComponent({ children }: any) {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <LayoutMenu />
        <WalletConnectModal />
      </Header>
      <Content style={{ marginTop: 64 }}>
        <div style={{ padding: '24px 0', minHeight: '100vh' }}>{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        <Row justify="center">
          <Col xs={24} lg={4} style={{ marginBottom: '30px' }}>
            <Space direction="vertical">
              <Image alt="logo" src={logoImage} width={120} />
              <Text style={{ fontSize: '12px' }}>Created by Team AMBUSH ©2022</Text>
            </Space>
          </Col>
          <Col xs={24} lg={4} style={{ marginBottom: '30px' }}>
            <Space direction="vertical">
              <Title level={5}>Link</Title>
              <Text
                onClick={() => window.open('https://github.com/codestates/BEB-CC3-project-03')}
                className={'footer-text'}
              >
                Github
              </Text>
            </Space>
          </Col>
          <Col xs={24} lg={4} style={{ marginBottom: '30px' }}>
            <Space direction="vertical">
              <Title level={5}>Team Member</Title>
              <Text
                onClick={() => window.open('https://github.com/thyoondev')}
                className={'footer-text'}
              >
                thyoondev
              </Text>
              <Text
                onClick={() => window.open('https://github.com/qudgus9601')}
                className={'footer-text'}
              >
                qudgus9601
              </Text>
            </Space>
          </Col>
          <Col xs={24} lg={4} style={{ marginBottom: '30px' }}>
            <Space direction="vertical">
              <Title level={5}>Family Site</Title>
              <Text
                onClick={() => window.open('https://www.havruta.guru')}
                className={'footer-text'}
              >
                하브루타 DAO
              </Text>
            </Space>
          </Col>
        </Row>
      </Footer>
    </Layout>
  );
}

export default LayoutComponent;
