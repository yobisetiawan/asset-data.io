import { Button, Col, Modal, Row } from "antd";

import { Container } from "../../components";

import Table from "./Table";

import { UseTitle } from "../../utils/hooks";
import { useState } from "react";

import Form from "./Form";

const Page = () => {
  UseTitle("Supplier");

  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div className="page page-supplier">
      <Container>
        <Row gutter={16}>
          <Col span={12}>
            <h1>Supplier</h1>
          </Col>
          <Col span={12} style={{ textAlign: "right" }}>
            <Button
              type="primary"
              onClick={() => {
                setIsModalVisible(true);
              }}
            >
              Add New Supplier
            </Button>
          </Col>
        </Row>

        <Table />

        <Modal
          title="Form Supplier"
          visible={isModalVisible}
          footer={false}
          onCancel={() => {
            setIsModalVisible(false);
          }}
        >
          <Form />
        </Modal>
      </Container>
    </div>
  );
};

export default Page;
