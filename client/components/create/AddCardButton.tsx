import { PlusOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';

function AddCardButton() {
  return (
    <Card
      hoverable
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
      <PlusOutlined style={{ transform: 'translate(-50%,-100%)' }} />
    </Card>
  );
}

export default AddCardButton;
