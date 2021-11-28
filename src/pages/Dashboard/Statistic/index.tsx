import React, { memo } from "react";
import { Card, Col, Row, Statistic } from "antd";

import { Box } from "../../../components";

import "./style.scss";

const Component = () => {
  return (
    <div className="home-statistic">
      <Row gutter={16}>
        <Col xs={24} sm={8}>
          <Card className="card bg-color-1">
            <Statistic title="Total Policies" value={14} />
          </Card>
          <Box height={20}></Box>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="card bg-color-2">
            <Statistic title="Total Unassigned Assets" value={3} />
          </Card>
          <Box height={20}></Box>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="card bg-color-3">
            <Statistic title="Total User" value={53} />
          </Card>
          <Box height={20}></Box>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="card bg-color-4">
            <Statistic title="Total User" value={1344} />
          </Card>
          <Box height={20}></Box>
        </Col>
        <Col xs={24} sm={8}>
          <Card className="card bg-color-5">
            <Statistic title="Total Audited Assets" value={17} />
          </Card>
          <Box height={20}></Box>
        </Col>
      </Row>
    </div>
  );
};

Component.defaultProps = {};

export default memo(Component);
