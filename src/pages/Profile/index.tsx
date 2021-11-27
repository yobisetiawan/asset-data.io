import { Container } from "../../components";
import { UseTitle, UseUser } from "../../utils/hooks";
import { Form, Input, Button, Row, Col, Card } from "antd";

const Page = () => {
  UseTitle("Profile");

  const { user } = UseUser();

  const onFinish = async (values: any) => {
    window.console.log(values);
  };

  return (
    <div>
      <Container>
        <Card>
          <div>
            <h1>Profile</h1>
            <h2>Account {user?.role_name}</h2>
            <p>{user?.email}</p>
            <p>{user?.account_type}</p>
          </div>

          <Form
            onFinish={onFinish}
            layout="vertical"
            initialValues={{
              first_name: user?.first_name || "",
              last_name: user?.last_name || "",
            }}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="First Name"
                  name="first_name"
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Last Name"
                  name="last_name"
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Company"
                  name="first_name"
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="Email" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Department"
                  name="last_name"
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Jop Title"
                  name="last_name"
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Employment ID"
                  name="last_name"
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item
                  label="Phone Number"
                  name="last_name"
                  rules={[{ required: true, message: "This is required" }]}
                >
                  <Input placeholder="Last Name" />
                </Form.Item>
              </Col>
            </Row>

            <Form.Item>
              <Button type="primary" block htmlType="submit">
                SIGN IN
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Container>
    </div>
  );
};

export default Page;
