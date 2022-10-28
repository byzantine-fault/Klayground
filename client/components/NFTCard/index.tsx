import React from 'react';
import { Button, Card, Image, Space, Typography } from 'antd';
import { useRouter } from 'next/router';
import Caver from 'caver-js';
const caver = new Caver('https://api.baobab.klaytn.net:8651');

const { Meta } = Card;
const { Text } = Typography;

function NFTCard({ type, item }: { type: string; item: any }) {
  const router = useRouter();
  return (
    <Card
      hoverable
      style={{ width: '185px' }}
      onClick={() => router.push('/project/1/2')}
      cover={
        <div
          style={{
            overflow: 'hidden',
            height: '100%',
            maxHeight: '185px',
            width: '100%',
          }}
        >
          <Image
            alt="example"
            src={item.imageUrl || 'error'}
            preview={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
            fallback={
              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1920px-No-Image-Placeholder.svg.png?20200912122019'
            }
          />
        </div>
      }
    >
      <Meta
        description={
          <Space direction="vertical" size={1} style={{ width: '135px' }}>
            <span>{item.name || 'name'}</span>
            <Text>
              {' '}
              {caver.utils.convertFromPeb(
                `${String(item?.listPriceInKlay || 0)}`,
                'KLAY'
              )} KLAY{' '}
            </Text>
            {type === 'profile' ? (
              <Button style={{ width: '100%' }}>가격 제안하기</Button>
            ) : (
              <Button type="primary" style={{ width: '100%' }}>
                구매하기
              </Button>
            )}
          </Space>
        }
      />
    </Card>
  );
}

export default NFTCard;
