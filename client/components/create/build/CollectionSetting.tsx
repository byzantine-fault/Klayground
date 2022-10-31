import React, { useState } from 'react';
import { Button, Col, Form, Image, Input, message, Row, Typography, Upload } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';
import type { RcFile } from 'antd/es/upload';
import { PlusOutlined } from '@ant-design/icons';
import { generativeArtBuilder } from '../../../store/GenerativeArtBuilderState';
import { useRecoilState } from 'recoil';

const { Title, Text } = Typography;

function CollectionSetting() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [builderState, setBuilderState] = useRecoilState(generativeArtBuilder);

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file as RcFile);
    });
    // setUploading(true);
    // You can use any AJAX library you like
    console.log(fileList);
    fetch('http://localhost:5005/files', {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        res.json();
      })
      .then(() => {
        setFileList([]);
        message.success('upload successfully.');
      })
      .catch(() => {
        message.error('upload failed.');
      })
      .finally(() => {
        // setUploading(false);
      });
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <>
      <Row gutter={[32, 32]} align="middle">
        <Col span={24}>
          <Title level={3}>1. 컬렉션 설정</Title>
        </Col>
        <Col xs={24} lg={14}>
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
              rules={[{ required: true, message: '컬렉션명을 입력해주세요!' }]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="컬렉션 기호"
              name="collection_symbol"
              tooltip="컬렉션 기호는 컬렉션의 NFT(토큰)를 나타내는 약어입니다. 클레이튼을 KLAY로 표현하는 것과 비슷합니다. 공백 없이 영문 대문자로 1~7자를 입력하세요."
              rules={[{ required: true, message: '컬렉션 기호를 입력해주세요!' }]}
            >
              <Input size="large" />
            </Form.Item>
            <Form.Item
              label="총 NFT 수량"
              name="total_count"
              rules={[{ required: true, message: 'NFT 발행 수량을 입력해주세요!' }]}
            >
              <Input size="large" />
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} lg={10}>
          <Image
            alt="collection-sample"
            preview={false}
            src="https://assets-dist-01.omnuum.io/app-fe-stud/build/_assets/img-ex-collection-BBQDX4XS.png"
            width={'100%'}
            height={'100%'}
          ></Image>
        </Col>
        <Col span={24}>
          <Title level={3}>2. NFT 설정</Title>
        </Col>
        <Col xs={24} lg={14}>
          <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="NFT 명"
              name="username"
              tooltip="각 NFT 이름 뒤에 # 번호가 옵니다. (NFT 이름 + # 번호)"
              rules={[{ required: true, message: 'NFT 명을 입력해주세요!' }]}
            >
              <Input size="large" />
            </Form.Item>

            <Form.Item label="NFT 설명(선택 사항)" name="password" rules={[{ required: false }]}>
              <Input size="large" />
            </Form.Item>
          </Form>
        </Col>
        <Col xs={24} lg={10}>
          <Image
            alt="collection-sample"
            preview={false}
            src="https://assets-dist-01.omnuum.io/app-fe-stud/build/_assets/img-ex-nfts-5CPKV52F.png"
            width={'100%'}
            height={'100%'}
          ></Image>
        </Col>
        <Col span={24}>
          <Title level={3}>3. 리빌용 NFT 이미지</Title>
        </Col>
        <Col xs={24} lg={14}>
          <Text>
            모두가 궁금해 할 미공개 이미지/동영상을 등록/배포합니다. 'Reveal NFT' 시 NFT 이미지의
            임의성을 유지하기 때문에 공개될 때까지 누가 어떤 NFT 이미지를 갖게 될지 알 수 없습니다.
            미공개 이미지/동영상을 등록하고 블록체인의 컨텍스트에 배포할 수 있는 ' Mint Schedule '
            설정과 Generative Art Builder에서 메타데이터를 임의의 이미지로 대체할 수 있는 'Reveal'
            단계로 들어갈 수 있습니다. .
          </Text>
        </Col>
        <Col xs={24} lg={10}>
          <Image
            alt="collection-sample"
            preview={false}
            src="https://assets-dist-01.omnuum.io/app-fe-stud/build/_assets/img-ex-unrevealed-7N432NK3.png"
            width={'100%'}
            height={'100%'}
          ></Image>
        </Col>
        <Col span={24}>
          <Upload
            beforeUpload={(file) => {
              setFileList([...fileList, file]);
              return false;
            }}
            listType="picture-card"
            fileList={fileList}
            showUploadList={{ showPreviewIcon: false }}
            onRemove={(file) => {
              setFileList(fileList.filter((_file) => _file.uid !== file.uid));
              return false;
            }}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
        </Col>
        <Col span={24}>
          <Button
            type="primary"
            style={{ width: '120px', float: 'right' }}
            onClick={() => setBuilderState({ currentPage: 1 })}
          >
            다음
          </Button>
        </Col>
      </Row>
    </>
  );
}

export default CollectionSetting;
