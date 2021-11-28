import { Form, Input, Button, Row, Col, Divider, Alert } from "antd";
import { useCallback, useEffect, useRef } from "react";
import { API } from "../../config";
import { UseFetch } from "../../utils/hooks";

interface Props {
  id: string;
  row?: any;
  onSuccess: () => void;
  onExit: () => void;
}

const Component = ({ id, row, onSuccess, onExit }: Props) => {
  const formData = useRef() as any;
  const [form] = Form.useForm();

  const { data, error, loading, fetchData, onReset } = UseFetch({
    API: useCallback(() => {
      return API.supplierCreate(formData.current);
    }, []),
    manual: true,
  });

  const onFinish = async (dt: any) => {
    formData.current = { ...dt, guid: id };
    await fetchData();
  };

  useEffect(() => {
    form.resetFields();
    onReset();
  }, [row, form, onReset]);

  useEffect(() => {
    if (data) {
      onReset();
      onSuccess();
    }
  }, [data, onReset, onSuccess]);

  const msg = error?.response?.data?.message || "";

  return (
    <div>
      {msg !== "" && (
        <Alert
          message={
            <div>
              <h4>{msg}</h4>
              {(Object.entries(error?.response?.data?.data?.fields) || []).map(
                (ii: any, index: number) => {
                  return <div key={index}>{ii[1].join(", ")}</div>;
                }
              )}
            </div>
          }
          type="error"
          showIcon
          style={{ marginBottom: 30 }}
        />
      )}

      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        initialValues={{
          name: row?.name || "",
          country_code: row?.country_code || "",
          state: row?.state || "",
          city: row?.city || "",
          street: row?.street || "",
          postcode: row?.postcode || "",
          contact_person: row?.contact_person || "",
          contact_number_alternate: row?.contact_number_alternate || "",
          contact_number: row?.contact_number || "",
          email: row?.email || "",
          website: row?.website || "",
        }}
      >
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
                <Form.Item label="Country" name="country_code">
                  <Input placeholder="Country" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="State" name="state">
                  <Input placeholder="State" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="City" name="city">
                  <Input placeholder="City" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Street" name="street">
                  <Input placeholder="Street" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Postal Code/ZIP" name="postcode">
                  <Input placeholder="Postal Code/ZIP" />
                </Form.Item>
              </Col>
            </Row>
          </Col>

          <Col span={24}>
            <h4>Contact Detail</h4>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item label="Contact Person" name="contact_person">
                  <Input placeholder="Country" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item label="Primary Contact Number" name="contact_number">
                  <Input placeholder="Primary Contact Number" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  label="Alternate Contact Number"
                  name="contact_number_alternate"
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
                >
                  <Input placeholder="Postal Code/ZIP" />
                </Form.Item>
              </Col>
            </Row>
          </Col>
        </Row>

        <Divider />

        <div style={{ textAlign: "right" }}>
          <Button type="link" onClick={onExit}>
            <span>Cancel</span>
          </Button>
          <Button type="primary" htmlType="submit" loading={loading}>
            <span>Save</span>
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Component;
