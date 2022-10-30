import { Layout, Menu, Typography } from 'antd';
import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { AppstoreAddOutlined, CalendarOutlined, CopyOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';

const { Sider, Content } = Layout;
const { Text, Link } = Typography;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

function CreateMenu({ children }: any) {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(true);

  const items: MenuItem[] = [
    getItem(
      <span onClick={() => router.push('/create/collections')}>Generative Art Builder</span>,
      '1',
      <AppstoreAddOutlined />
    ),
    getItem(
      <span onClick={() => router.push('/create/mint')}>Mint Schedule</span>,
      '2',
      <CalendarOutlined />
    ),
    getItem(<span onClick={() => router.push('/create/docs')}>Docs</span>, '3', <CopyOutlined />),
  ];

  return (
    <Layout>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={256}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 64,
          bottom: 0,
          zIndex: 1000,
        }}
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
      >
        <Menu defaultSelectedKeys={['1']} mode="inline" theme="light" items={items} />
      </Sider>
      <Layout style={{ width: '100%', marginLeft: 80 }}>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default CreateMenu;
