import { Col, Row, Space, Steps } from 'antd';
import React, { useState } from 'react';
import CollectionSetting from '../../../components/create/build/CollectionSetting';
import CreateMenu from '../../../components/Layout/Create/CreateMenu';

const { Step } = Steps;

function GenerativeArtBuilder() {
  return <div>GenerativeArtBuilder</div>;
}
function ImageConfirm() {
  return <div>ImageConfirm</div>;
}
function RevealNFT() {
  return <div>RevealNFT</div>;
}

function Builder() {
  const [current, setCurrent] = useState(0);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  const renderStep = () => {
    switch (current) {
      case 0:
        return <CollectionSetting />;
      case 1:
        return <GenerativeArtBuilder />;
      case 2:
        return <ImageConfirm />;
      case 3:
        return <RevealNFT />;

      default:
        break;
    }
  };

  return (
    <CreateMenu>
      <Row justify="center">
        <Col span={22}>
          <Space direction="vertical" style={{ width: '100%' }} size={'large'}>
            <Steps
              type="navigation"
              current={current}
              onChange={onChange}
              className="site-navigation-steps"
            >
              <Step status="finish" title="Collection Setting" />
              <Step status="process" title="Generative Art Builder" />
              <Step status="wait" title="IMG Render & Confirm" />
              <Step status="wait" title="Reveal NFT" />
            </Steps>
            <Row justify="center">
              <Col xs={24} lg={16}>
                {renderStep()}
              </Col>
            </Row>
          </Space>
        </Col>
      </Row>
    </CreateMenu>
  );
}

export default Builder;
