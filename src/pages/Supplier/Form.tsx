import { Button, Col, Row } from "antd";

import { Container } from "../../components";

import Table from "./Table";

import { UseTitle } from "../../utils/hooks";

const Page = () => {
  UseTitle("Supplier");

  return (
    <div className="page page-supplier">
      <Container>
        <Row gutter={16}>
          <Col span={12}>
            <h1>Supplier</h1>
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            <Button type="primary">Add New Supplier</Button>
          </Col>
        </Row>
        <Table />
      </Container>
    </div>
  );
};

export default Page;
