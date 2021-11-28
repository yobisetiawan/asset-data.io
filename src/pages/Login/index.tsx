import React, { useEffect, useRef } from "react";
import { Form, Input, Button, Card } from "antd";
import { useNavigate } from "react-router-dom";

import { UseFetch, UseTitle } from "../../utils/hooks";
import { API } from "../../config";

import TokenManager from "../../utils/helpers/TokenManager";

import "./style.scss";
import { AlertErr } from "../../components";

const Page = () => {
  UseTitle("Login");

  const formData = useRef({}) as any;
  const nav = useNavigate();

  const { data, error, loading, fetchData } = UseFetch({
    API: () => API.login(formData.current),
    manual: true,
  });

  const onFinish = async (values: any) => {
    formData.current = values;
    fetchData();
  };

  useEffect(() => {
    if (data?.token) {
      TokenManager.setToken(data?.token);
      nav("/dashboard");
    }
  }, [data, nav]);

  return (
    <div className="login-page">
      <div className="wrap">
        <h1 className="logo">AssetData.io</h1>

        <AlertErr error={error} />

        <Card>
          <Form onFinish={onFinish} layout="vertical">
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "This is required" },
                { type: "email" },
              ]}
            >
              <Input placeholder="Email" />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "This is required" }]}
            >
              <Input.Password placeholder="Password" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" block htmlType="submit" loading={loading}>
                SIGN IN
              </Button>
            </Form.Item>
          </Form>

          <Button type="link" block>
            FORGOT PASSWORD
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Page;
