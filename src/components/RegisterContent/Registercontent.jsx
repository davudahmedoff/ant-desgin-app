import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  PlusOutlined,
  UserAddOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import {
  Row,
  Col,
  Button,
  Cascader,
  Checkbox,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
  Upload,
  Space,
} from "antd";

const { RangePicker } = DatePicker;
const { TextArea } = Input;

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const Registercontent = () => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Row style={{ height: "100%" }} justify={"center"} align={"middle"}>
        <Col span={2}></Col>
        <Col span={20}>
          <Form
            labelCol={{ span: 4 }}
            wrapperCol={{ span: 14 }}
            layout="vertical"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              overflow: "auto",
              backgroundColor: "white",
            borderRadius:"20px",
              padding: "10px",
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            initialValues={{
              remember: true,
              password: "password",
              username: "Username",
            }}
          >
            <Row>
              <Col span={12}>
                <img
                  style={{ margin: "40px" }}
                  src="./img/lll.avif"
                  alt="Login image"
                />
              </Col>
              <Col span={12}>
                <Form.Item  name="fname" label="Full Name">
                  <Input placeholder="Ali Aliyev" />
                </Form.Item>
                <Form.Item  name="email" label="Email">
                  <Input placeholder="ali@gmail.com" />
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

                <Form.Item   name="gender"label="Gender">
                  <Radio.Group
                    optionType="button"
                    buttonStyle="solid"
                    style={{ width: "100%" }}
                   value={"male"}
                  >
                    <Radio value="male" style={{ width: "50%" }}>
                      {" "}
                      Male{" "}
                    </Radio>
                    <Radio value="female" style={{ width: "50%" }}>
                      {" "}
                      Female{" "}
                    </Radio>
                  </Radio.Group>
                </Form.Item>

                <Form.Item  name="birthday" label="Date of birth">
                  <DatePicker style={{ width: "100%" }} />
                </Form.Item>

                <Form.Item
                name="photo"
                  label="Photo"
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                >
                  <Upload action="/upload.do" listType="picture-card">
                    <div>
                      <PlusOutlined />
                      <div style={{ marginTop: 8 }}>Upload</div>
                    </div>
                  </Upload>
                </Form.Item>

                <Form.Item  name="bio" label="Biography">
                  <TextArea rows={4} placeholder="Hi there,My name is Ali" />
                </Form.Item>
              </Col>
              <Col span={24} align="center">
                <Space>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<UserAddOutlined style={{ marginBottom: "5px" }} />}
                  >
                    Register
                  </Button>

                  <Link to="/">
                    <Button
                      type="primary"
                      icon={<LoginOutlined style={{ marginBottom: "5px" }} />}
                    >
                      Login
                    </Button>
                  </Link>
                </Space>
              </Col>
            </Row>
          </Form>
        </Col>
        <Col span={2}></Col>
      </Row>
    </>
  );
};

export default Registercontent;
