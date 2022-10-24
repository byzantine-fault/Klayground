import React from 'react';
import { Button, Card, Image, Space, Typography } from 'antd';
import { useRouter } from 'next/router';

const { Meta } = Card;
const { Text } = Typography;

function NFTCard({ type }: { type: string }) {
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
            src="https://dwckk6v6uouee.cloudfront.net/project/0xCe70EEf5ADaC126C37c8BC0c1228d48B70066d03/token/25c5935addf624d9fb3a1447622f005c17cf8fd66b96c71f15fcd43febceb803.png.preview.medium"
            preview={false}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
          />
        </div>
      }
    >
      <Meta
        description={
          <Space direction="vertical" size={1} style={{ width: '135px' }}>
            <span>BELLYGOM</span>
            <span>#1</span>
            <Text> 1,300 KLAY </Text>
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
