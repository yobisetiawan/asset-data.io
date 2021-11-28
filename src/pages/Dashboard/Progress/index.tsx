import React, { memo } from "react";

import { Card, Col, Progress, Row } from "antd";

const Component = () => {
  return (
    <div>
      <Card title="Assets Category by Audit Status">
        <Row justify="space-between">
          <Col>
            <span>Air Comresion</span>
          </Col>
          <Col>
            <span>1</span>
          </Col>
        </Row>

        <Progress percent={10} showInfo={false} />

        <Row justify="space-between">
          <Col>
            <span>Air Comresion</span>
          </Col>
          <Col>
            <span>1</span>
          </Col>
        </Row>
        <Progress percent={40} showInfo={false} />

        <Row justify="space-between">
          <Col>
            <span>Air Comresion</span>
          </Col>
          <Col>
            <span>1</span>
          </Col>
        </Row>
        <Progress percent={30} showInfo={false} />

        <Row justify="space-between">
          <Col>
            <span>Air Comresion</span>
          </Col>
          <Col>
            <span>1</span>
          </Col>
        </Row>
        <Progress percent={50} showInfo={false} />

        <Row justify="space-between">
          <Col>
            <span>Air Comresion</span>
          </Col>
          <Col>
            <span>1</span>
          </Col>
        </Row>
        <Progress percent={20} showInfo={false} />

        <Row justify="space-between">
          <Col>
            <span>Air Comresion</span>
          </Col>
          <Col>
            <span>1</span>
          </Col>
        </Row>
        <Progress percent={36} showInfo={false} />

        <Row justify="space-between">
          <Col>
            <span>Air Comresion</span>
          </Col>
          <Col>
            <span>1</span>
          </Col>
        </Row>
        <Progress percent={70} showInfo={false} />

        <Row justify="space-between">
          <Col>
            <span>Air Comresion</span>
          </Col>
          <Col>
            <span>1</span>
          </Col>
        </Row>
        <Progress percent={70} showInfo={false} />

        <Row justify="space-between">
          <Col>
            <span>Air Comresion</span>
          </Col>
          <Col>
            <span>1</span>
          </Col>
        </Row>
        <Progress percent={70} showInfo={false} />

        <Row justify="space-between">
          <Col>
            <span>Air Comresion</span>
          </Col>
          <Col>
            <span>1</span>
          </Col>
        </Row>
        <Progress percent={70} showInfo={false} />
      </Card>
    </div>
  );
};

Component.defaultProps = {};

export default memo(Component);
