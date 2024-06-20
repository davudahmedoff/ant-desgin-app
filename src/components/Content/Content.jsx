import React from "react";
import { Link } from "react-router-dom";
import { Layout, Button, Checkbox, Form, Input,Row,Col,Space} from "antd";
import { LoginOutlined } from '@ant-design/icons';
const { Content } = Layout;

const ContentC = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Content className="content">
      <Row style={{ height: "100%" }} justify={"center"} align={"middle"}>
        <Col span={8}></Col>
        <Col st span={10}>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{
              remember: true,
              password: "password",
              username: "Username",
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{ offset: 8, span: 16 }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Space>
             
                  <Button  type="primary" htmlType="submit" icon={<LoginOutlined  style={{marginBottom:"5px"}}/>} >Login</Button>
               
                <Link to="/signup">
                  <Button type="primary">Register</Button>
                </Link>
              </Space>
            </Form.Item>
          </Form>
        </Col>
        <Col span={6}></Col>
      </Row>
    </Content>
  );
};

export default ContentC;
