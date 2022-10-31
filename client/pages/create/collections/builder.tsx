import { Col, Row, Space, Steps } from 'antd';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import CollectionSetting from '../../../components/create/build/CollectionSetting';
import CreateMenu from '../../../components/Layout/Create/CreateMenu';
import { generativeArtBuilder } from '../../../store/GenerativeArtBuilderState';

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
  const [builderState, setBuilderState] = useRecoilState(generativeArtBuilder);

  const onChange = (value: number) => {
    console.log('onChange:', value);
    setBuilderState({ currentPage: value });
  };

  const renderStep = () => {
    switch (builderState.currentPage) {
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
              current={builderState.currentPage}
              onChange={onChange}
              className="site-navigation-steps"
            >
              <Step status="finish" title="Collection Setting" />
              <Step status="process" title="Generative Art Builder" />
              <Step status="wait" title="IMG Render & Confirm" />
              <Step status="wait" title="Reveal NFT" />
            </Steps>
            <Row justify="center">
              <Col xs={24} lg={16} style={{ padding: '6rem 0px' }}>
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
