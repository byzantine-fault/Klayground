import React from 'react';
import { useRouter } from 'next/router';
import { Button, Menu, Space } from 'antd';
import Image from 'next/image';
import logoImage from '../../assets/images/logoImage.svg';

import { useRecoilState } from 'recoil';
import { walletConnectModalState } from '../../store/WalletConnectModalState';

const menuItem = [
  {
    id: '0',
    name: '모든 컬렉션',
    path: '/collections',
  },
];

function LayoutMenu() {
  const router = useRouter();
  const [isModal, setIsModal] = useRecoilState(walletConnectModalState);
  return (
    <Space style={{ height: '100%', width: '100%', justifyContent: 'space-between' }} align="start">
      <Space style={{ marginTop: '10px', cursor: 'pointer' }} onClick={() => router.push('/')}>
        <Image alt="logo" src={logoImage} />
      </Space>
      <Space style={{ height: '100%' }}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['0']}
          style={{ minWidth: '113px' }}
          items={menuItem.map((item) => ({
            key: item.id,
            label: item.name,
            onClick: () => router.push(item.path),
          }))}
        ></Menu>
        <Button type="primary" onClick={() => setIsModal({ open: true })}>
          지갑 연결하기
        </Button>
      </Space>
    </Space>
  );
}

export default LayoutMenu;
