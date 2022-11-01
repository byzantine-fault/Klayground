import { PlusOutlined } from '@ant-design/icons';
import { Button, Card, Col, Collapse, Image, Row, Space, Table, Tabs, Typography } from 'antd';
import React, { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { generativeArtBuilder } from '../../../store/GenerativeArtBuilderState';
import AddCardButton from '../AddCardButton';

const { Title, Text } = Typography;
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function GenerativeArtBuilder() {
  const onChangeCollapse = (key: string | string[]) => {
    console.log(key);
  };
  const initialItems = [
    {
      label: '일반',
      children: (
        <Collapse defaultActiveKey={['1']} onChange={onChangeCollapse}>
          <Panel header="Background" key="1">
            <Row gutter={[16, 16]} justify="start">
              <Col xs={12} lg={6}>
                <AddCardButton />
              </Col>
              <Col xs={12} lg={6}>
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
                    alt="example"
                    src={
                      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAA1BMVEUAre+MZgCXAAAASElEQVR4nO3BgQAAAADDoPlTX+AIVQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwDcaiAAFXD1ujAAAAAElFTkSuQmCC' ||
                      'error'
                    }
                    preview={false}
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
              <Col xs={12} lg={6}>
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
                    alt="example"
                    src={
                      'https://scontent-ssn1-1.xx.fbcdn.net/v/t1.18169-9/29789969_10156149619961132_1093403634151707588_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=e3f864&_nc_ohc=wT8Wqsbjw5MAX9ymkQg&_nc_ht=scontent-ssn1-1.xx&oh=00_AfANZ_KwWQhgeO1oVjkvrhX9EeZYRYljC9sfW8TWDDe34w&oe=63860D14' ||
                      'error'
                    }
                    preview={false}
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
            </Row>
          </Panel>
          <Panel header="Body" key="2">
            <Row gutter={[16, 16]} justify="start">
              <Col xs={12} lg={6}>
                <AddCardButton />
              </Col>
            </Row>
          </Panel>
          <Panel header="Clothes" key="3">
            <p>{text}</p>
          </Panel>
          <Panel header="Head" key="4">
            <p>{text}</p>
          </Panel>
          <Panel header="Acc" key="5">
            <p>{text}</p>
          </Panel>
          <Panel header="Special" key="6">
            <p>{text}</p>
          </Panel>
          <Panel header="Rank" key="7">
            <p>{text}</p>
          </Panel>
          <Panel header="Grade" key="8">
            <p>{text}</p>
          </Panel>
        </Collapse>
      ),
      key: '1',
    },
    {
      label: '희귀',
      children: (
        <Collapse defaultActiveKey={['1']} onChange={onChangeCollapse}>
          <Panel header="Background" key="1">
            <Row gutter={[16, 16]} justify="start">
              <Col xs={12} lg={6}>
                <AddCardButton />
              </Col>
            </Row>
          </Panel>
          <Panel header="Body" key="2">
            <Row gutter={[16, 16]} justify="start">
              <Col xs={12} lg={6}>
                <AddCardButton />
              </Col>
            </Row>
          </Panel>
        </Collapse>
      ),
      key: '2',
    },
    {
      label: '전설',
      children: (
        <Collapse defaultActiveKey={['1']} onChange={onChangeCollapse}>
          <Panel header="Background" key="1">
            <Row gutter={[16, 16]} justify="start">
              <Col xs={12} lg={6}>
                <AddCardButton />
              </Col>
            </Row>
          </Panel>
          <Panel header="Body" key="2">
            <Row gutter={[16, 16]} justify="start">
              <Col xs={12} lg={6}>
                <AddCardButton />
              </Col>
            </Row>
          </Panel>
          <Panel header="Clothes" key="3">
            <p>{text}</p>
          </Panel>
          <Panel header="Head" key="4">
            <p>{text}</p>
          </Panel>
          <Panel header="Acc" key="5">
            <p>{text}</p>
          </Panel>
          <Panel header="Special" key="6">
            <p>{text}</p>
          </Panel>
          <Panel header="Rank" key="7">
            <p>{text}</p>
          </Panel>
          <Panel header="Grade" key="8">
            <p>{text}</p>
          </Panel>
        </Collapse>
      ),
      key: '3',
      closable: false,
    },
  ];

  const [builderState, setBuilderState] = useRecoilState(generativeArtBuilder);

  const [activeKey, setActiveKey] = useState(initialItems[0].key);
  const [items, setItems] = useState(initialItems);
  const newTabIndex = useRef(0);

  const onChange = (newActiveKey: string) => {
    setActiveKey(newActiveKey);
  };

  const add = () => {
    const newActiveKey = `newTab${newTabIndex.current++}`;
    const newPanes = [...items];
    newPanes.push({ label: 'New Tab', children: 'Content of new Tab', key: newActiveKey });
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const remove = (targetKey: string) => {
    let newActiveKey = activeKey;
    let lastIndex = -1;
    items.forEach((item, i) => {
      if (item.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = items.filter((item) => item.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setItems(newPanes);
    setActiveKey(newActiveKey);
  };

  const onEditTab = (targetKey: string, action: 'add' | 'remove') => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <Row justify="center">
      <Col xs={24} lg={22} style={{ padding: '6rem 0px' }}>
        <Row gutter={[32, 32]}>
          <Col span={12}>
            <Title level={3}>Editor</Title>
          </Col>
          <Col span={12}>
            <Title level={3}>Simulator</Title>
          </Col>
          <Col span={12}>
            <Tabs
              type="editable-card"
              onChange={onChange}
              activeKey={activeKey}
              onEdit={onEditTab}
              items={items}
            />
          </Col>
          <Col span={12}>
            <Row gutter={[8, 8]}>
              {Array(10)
                .fill(null)
                .map((_, index) => (
                  <Col span={6} key={index}>
                    <Card
                      style={{ height: 200, borderRadius: 8 }}
                      bodyStyle={{ padding: 8 }}
                      cover={
                        <div
                          style={{
                            overflow: 'hidden',
                            height: '100%',
                            maxHeight: '160px',
                            width: '100%',
                          }}
                        >
                          <Image
                            alt="example"
                            src={
                              'https://dwckk6v6uouee.cloudfront.net/project/0xCe70EEf5ADaC126C37c8BC0c1228d48B70066d03/token/29ec83388d44117be3b2b58e17ad6c46a38652c7d1dac4ef456a5b10fa8a23e8.png' ||
                              'error'
                            }
                            style={{
                              width: '100%',
                              height: '100%',
                              minHeight: '160px',
                              objectFit: 'cover',
                              objectPosition: 'center',
                              borderRadius: 8,
                            }}
                            fallback={
                              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1920px-No-Image-Placeholder.svg.png?20200912122019'
                            }
                          />
                        </div>
                      }
                    >
                      NFT name # {index}
                    </Card>
                  </Col>
                ))}
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={16}>
        <Space style={{ float: 'right' }}>
          <Button style={{ width: '120px' }} onClick={() => setBuilderState({ currentPage: 0 })}>
            이전
          </Button>
          <Button
            type="primary"
            style={{ width: '120px' }}
            onClick={() => setBuilderState({ currentPage: 2 })}
          >
            다음
          </Button>
        </Space>
      </Col>
    </Row>
  );
}

export default GenerativeArtBuilder;
