import React from 'react';
import { useRecoilState } from 'recoil';
import { Button, Card, Col, Image, message, Modal, Row, Space, Typography } from 'antd';
import { walletConnectModalState } from '../../store/WalletConnectModalState';
import { signIn, signOut, useSession } from 'next-auth/react';
// import { prepare, request, getResult, getCardList } from 'klip-sdk';
const { Text, Paragraph } = Typography;

function WalletConnect() {
  const { data: session, status } = useSession();
  const [isModal, setIsModal] = useRecoilState(walletConnectModalState);

  const withoutKaikasWarning = () => {
    Modal.warning({
      title: '지갑 연결을 위해 카이카스가 필요합니다.',
      content: (
        <Typography>
          <Paragraph>아래 링크에서 카이카스를 설치해주세요.</Paragraph>
          <Paragraph>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi"
            >
              카이카스 설치 페이지 바로가기
            </a>
          </Paragraph>
        </Typography>
      ),
    });
  };

  const onConnectKaikas = async () => {
    if (typeof window.klaytn !== 'undefined') {
      if (window.klaytn?.isKaikas) {
        try {
          if (status === 'unauthenticated') {
            //로그인/회원가입 진행
            const accounts = await window.klaytn.enable();
            const address = accounts[0];
            const network = await window.klaytn.networkVersion;
            // next auth
            const response = await signIn('kaikas-credential', {
              address,
              network,
              redirect: false,
            });
            if (response?.ok && response.status === 200) {
              setIsModal({ open: false });
            }
          }
        } catch (error) {
          console.error(error);
        }
      }
    } else {
      //카이카스 설치 팝업
      withoutKaikasWarning();
    }
  };

  const onConnectKlip = async () => {
    message.warning('준비 중인 기능입니다!');
    // const bappName = 'my app';
    // const successLink = 'myApp://...';
    // const failLink = 'myApp://...';
    // if (typeof window !== 'undefined') {
    //   const res = await prepare.auth({ bappName, successLink, failLink });
    //   if (res.err) {
    //     // 에러 처리
    //     console.error(res.err);
    //   } else if (res.request_key) {
    //     // request_key 보관
    //     console.log(res.request_key);
    //   }
    // }
  };
  return (
    <Modal open={isModal.open} onCancel={() => setIsModal({ open: false })} footer={''}>
      <Row justify="center">
        <Space style={{ width: '100%' }} direction="vertical" size={'large'}>
          <Col span={24}>
            <Card style={{ textAlign: 'center' }}>
              <Space style={{ width: '100%' }} direction="vertical">
                <Image src={`/kaikas_logo.png`} alt="logo" preview={false} width={50} />
                <Text>카이카스(Kaikas)로 연결하기</Text>
                <Button style={{ width: '100%' }} size="large" onClick={onConnectKaikas}>
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
                <Button style={{ width: '100%' }} size="large" onClick={onConnectKlip}>
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
