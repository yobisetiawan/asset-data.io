import { Container } from "../../components";
import { UseTitle, UseUser } from "../../utils/hooks";
import { Form, Input, Button, Row, Col, Divider, Upload } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const Page = () => {
  UseTitle("Profile");

  const { user } = UseUser();

  const onFinish = async (values: any) => {
    window.console.log(values);
  };

  const uploadButton = (
    <div>
      {<PlusOutlined />}
      <div style={{ marginTop: 8 }}>
        <small>Upload</small>
      </div>
    </div>
  );

  return (
    <div className="page page-profile">
      <Container>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 20 }}>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
            >
              {uploadButton}
            </Upload>
          </div>
          <div>
            <h1>Profile</h1>
            <h2>Account {user?.role_name}</h2>
            <p>{user?.email}</p>
            <p>{user?.account_type}</p>
          </div>
        </div>

        <Form
          onFinish={onFinish}
          layout="vertical"
          initialValues={{
            first_name: user?.first_name || "",
            last_name: user?.last_name || "",
            employee_number: user?.employee_number || "",
            job_title: user?.job_title || "",
            phone_number: user?.phone_number || "",
            company: user?.company?.name || "",
            company_department: user?.company_department || "",
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
                name="company"
                rules={[{ required: true, message: "This is required" }]}
              >
                <Input placeholder="Company" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="Department"
                name="company_department"
                rules={[{ required: true, message: "This is required" }]}
              >
                <Input placeholder="Department" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Jop Title"
                name="job_title"
                rules={[{ required: true, message: "This is required" }]}
              >
                <Input placeholder="Jop Title" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Employment ID"
                name="employee_number"
                rules={[{ required: true, message: "This is required" }]}
              >
                <Input placeholder="Employment ID" />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item
                label="Phone Number"
                name="phone_number"
                rules={[{ required: true, message: "This is required" }]}
              >
                <Input placeholder="Phone Number" />
              </Form.Item>
            </Col>
          </Row>

          <Divider />

          <Form.Item>
            <Button type="primary" htmlType="submit">
              <span style={{ minWidth: 150 }}>SAVE</span>
            </Button>
          </Form.Item>
        </Form>
      </Container>
    </div>
  );
};

export default Page;
