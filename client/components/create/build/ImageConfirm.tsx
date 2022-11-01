import { Button, Card, Col, Image, Row, Space } from 'antd';
import React from 'react';
import { useRecoilState } from 'recoil';
import { generativeArtBuilder } from '../../../store/GenerativeArtBuilderState';

function ImageConfirm() {
  const [builderState, setBuilderState] = useRecoilState(generativeArtBuilder);
  return (
    <Row justify="center">
      <Col xs={24} lg={22} style={{ padding: '6rem 0px' }}>
        <Row gutter={[32, 32]} align="middle">
          <Col span={24}>
            <Row gutter={[8, 8]}>
              {Array(30)
                .fill(null)
                .map((_, index) => (
                  <Col span={4} key={index}>
                    <Card
                      bordered={false}
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingBottom: '100%',
                      }}
                      bodyStyle={{
                        height: '100%',
                        width: '100%',
                        position: 'absolute',
                        padding: '0px',
                        transform: 'translate(50%,100%)',
                      }}
                    >
                      <Image
                        preview={false}
                        alt="example"
                        src={
                          'https://dwckk6v6uouee.cloudfront.net/project/0xCe70EEf5ADaC126C37c8BC0c1228d48B70066d03/token/29ec83388d44117be3b2b58e17ad6c46a38652c7d1dac4ef456a5b10fa8a23e8.png' ||
                          'error'
                        }
                        style={{
                          transform: 'translate(-50%,-50%)',
                          borderRadius: '16px',
                        }}
                        fallback={
                          'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1920px-No-Image-Placeholder.svg.png?20200912122019'
                        }
                      />
                    </Card>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={16}>
        <Space style={{ float: 'right' }}>
          <Button style={{ width: '120px' }} onClick={() => setBuilderState({ currentPage: 1 })}>
            이전
          </Button>
          <Button
            type="primary"
            style={{ width: '120px' }}
            onClick={() => setBuilderState({ currentPage: 3 })}
          >
            다음
          </Button>
        </Space>
      </Col>
    </Row>
  );
}

export default ImageConfirm;
