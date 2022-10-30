import { Calendar, Col, Row, Typography } from 'antd';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';
import type { Moment } from 'moment';
import React from 'react';
import CreateMenu from '../../components/Layout/Create/CreateMenu';

const { Title } = Typography;

function Mint() {
  const onPanelChange = (value: Moment, mode: CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return (
    <CreateMenu>
      <Row justify="center">
        <Col span={22}>
          <Title level={2}>Mint Schedule</Title>
          <Calendar onPanelChange={onPanelChange} />
        </Col>
      </Row>
    </CreateMenu>
  );
}

export default Mint;
