import React, { useState } from 'react';
import { Button, Checkbox, Form, Input, Typography } from 'antd';

const { Title } = Typography;

function CollectionSetting() {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Title level={3}>1. 컬렉션 설정</Title>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="컬렉션명"
          name="collection_name"
          tooltip="NFT 마켓플레이스마다 정책이 약간 다를 수 있습니다."
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="컬렉션 기호"
          name="collection_symbol"
          tooltip="컬렉션 기호는 컬렉션의 NFT(토큰)를 나타내는 약어입니다. 클레이튼을 KLAY로 표현하는 것과 비슷합니다. 공백 없이 영문 대문자로 1~7자를 입력하세요."
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="총 NFT 수량"
          name="total_count"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
      <Title level={3}>2. NFT 설정</Title>
      <Form
        name="basic"
        layout="vertical"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="NFT 이름"
          name="username"
          tooltip="각 NFT 이름 뒤에 # 번호가 옵니다. (NFT 이름 + # 번호)"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="NFT 설명(선택 사항)"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input />
        </Form.Item>
      </Form>
    </>
  );
}

export default CollectionSetting;
