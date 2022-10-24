import React from 'react';
import { useRecoilState } from 'recoil';
import { Button, Card, Col, Image, Modal, Row, Space, Typography } from 'antd';
import { walletConnectModalState } from '../../store/WalletConnectModalState';

const { Text } = Typography;

function WalletConnect() {
  const [isModal, setIsModal] = useRecoilState(walletConnectModalState);
  return (
    <Modal visible={isModal.open} onCancel={() => setIsModal({ open: false })} footer={''}>
      <Row justify="center">
        <Space style={{ width: '100%' }} direction="vertical" size={'large'}>
          <Col span={24}>
            <Card style={{ textAlign: 'center' }}>
              <Space style={{ width: '100%' }} direction="vertical">
                <Image src={`/kaikas_logo.png`} alt="logo" preview={false} width={50} />
                <Text>카이카스(Kaikas)로 연결하기</Text>
                <Button style={{ width: '100%' }} size="large">
                  카이카스로 연결
                </Button>
              </Space>
            </Card>
          </Col>
          <Col span={24}>
            <Card style={{ textAlign: 'center' }}>
              <Space style={{ width: '100%' }} direction="vertical">
                <Image src={`/kilp_logo.png`} alt="logo" preview={false} width={50} />
                <Text>클립(Kilp)으로 연결하기</Text>
                <Button style={{ width: '100%' }} size="large">
                  클립으로 연결
                </Button>
              </Space>
            </Card>
          </Col>
        </Space>
      </Row>
    </Modal>
  );
}

export default WalletConnect;
