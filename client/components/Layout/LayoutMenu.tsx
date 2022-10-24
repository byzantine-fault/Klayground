import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Avatar, Button, Dropdown, Menu, Space, Typography, message } from 'antd';
import Image from 'next/image';
import logoImage from '../../assets/images/logoImage.svg';

import { useRecoilState } from 'recoil';
import { walletConnectModalState } from '../../store/WalletConnectModalState';
import { signOut, useSession } from 'next-auth/react';
import { CopyOutlined, DownOutlined, UpOutlined } from '@ant-design/icons';
import { ellipsisMiddle } from '../../lib/ellipsisMiddle';

const { Text } = Typography;

const menuItem = [
  {
    id: '0',
    name: '모든 컬렉션',
    path: '/collections',
  },
];

function LayoutMenu() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);

  const [isModal, setIsModal] = useRecoilState(walletConnectModalState);

  const loggedMenu = (
    <Menu
      items={[
        {
          label: <Text onClick={() => router.push('/profile')}>나의 NFT</Text>,
          key: '0',
        },
        {
          label: <Text onClick={() => signOut()}>로그아웃</Text>,
          key: '1',
        },
      ]}
    />
  );

  return (
    <Space style={{ height: '100%', width: '100%', justifyContent: 'space-between' }} align="start">
      <Space style={{ marginTop: '10px', cursor: 'pointer' }} onClick={() => router.push('/')}>
        <Image alt="logo" src={logoImage} />
      </Space>
      <Space style={{ height: '100%' }}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['0']}
          style={{ minWidth: '120px' }}
          items={menuItem.map((item) => ({
            key: item.id,
            label: item.name,
            onClick: () => router.push(item.path),
          }))}
        ></Menu>
        {session ? (
          <Space style={{ width: '100%' }} size={'middle'}>
            <Button
              onClick={() => {
                navigator.clipboard.writeText(session.user.user_address),
                  message.success('지갑 주소가 복사되었습니다!');
              }}
            >
              {ellipsisMiddle(session.user.user_address)}
              <CopyOutlined />
            </Button>
            <Dropdown
              className="logged-menu"
              overlay={loggedMenu}
              trigger={['click']}
              open={isLoginMenuOpen}
              overlayStyle={{ position: 'fixed' }}
            >
              <a
                onClick={(e) => {
                  e.preventDefault(), setIsLoginMenuOpen(!isLoginMenuOpen);
                }}
              >
                <Space style={{ width: '100%' }}>
                  <Avatar
                    src="https://joeschmoe.io/api/v1/random"
                    style={{ backgroundColor: '#fff', border: '1px solid #fff' }}
                  />
                  {isLoginMenuOpen ? <UpOutlined /> : <DownOutlined />}
                </Space>
              </a>
            </Dropdown>
          </Space>
        ) : (
          <Button type="primary" onClick={() => setIsModal({ open: true })}>
            지갑 연결하기
          </Button>
        )}
      </Space>
    </Space>
  );
}

export default LayoutMenu;
