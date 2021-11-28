import { Form, Input, Button, Row, Col, Divider } from "antd";

const Component = () => {
  return (
    <div>
      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={24}>
            <Form.Item
              label="Supplier Name"
              name="name"
              rules={[{ required: true, message: "This is required" }]}
            >
              <Input placeholder="Supplier Name" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <h4>Address</h4>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Country"
                  name="country_code"
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="Country" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="State"
                  name="state"
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="State" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="City"
                  name="city"
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="City" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Street"
                  name="street"
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="Street" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Postal Code/ZIP"
                  name="postcode"
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="Postal Code/ZIP" />
                </Form.Item>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <h4>Contact Detail</h4>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Contact Person"
                  name="contact_person"
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="Country" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Primary Contact Number"
                  name="contact_number"
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="Primary Contact Number" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Alternate Contact Number"
                  name="contact_number_alternate"
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="City" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Email Address"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "This is required",
                    },
                    { type: "email" },
                  ]}
                >
                  <Input placeholder="Street" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Website"
                  name="website"
                  rules={[
                    { required: true, message: "This is required" },
                    { type: "url" },
                  ]}
                >
                  <Input placeholder="Website" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Company Register ID"
                  name="registration_number"
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="Postal Code/ZIP" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>

        <Divider />

        <div style={{ textAlign: "right" }}>
          <Button type="link">
            <span>Cancel</span>
          </Button>
          <Button type="primary" htmlType="submit">
            <span>Save</span>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Component;
