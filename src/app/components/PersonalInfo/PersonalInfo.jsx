import React from "react";
import { Form, Input,InputNumber, DatePicker,Upload, Select, Button } from "antd";
import { UploadOutlined, InboxOutlined } from '@ant-design/icons';

import TextInputs from '../Common/TextInputs'

const personalInfo = [
  {
    label: "Email Address",
    name: "email",
    rules:[
      {
        required: true,
        message: "Please input your Email Address!",
      },
    ]
  },
  {
    label: "Phone Number",
    name: "phone",
    rules:[
      {
        required: true,
        message: "Please input your Phone Number!",
      },
    ]
  },
  {
    label: "First Name",
    name: "first",
    rules:[
      {
        required: true,
        message: "Please input your First Name!",
      },
    ]
  },
  {
    label: "Last Name",
    name: "last",
    rules:[
      {
        required: true,
        message: "Please input your Last Name!",
      },
    ]
  },
]

const addressInfo = [
  {
    label: "Address",
    name: "address",
    rules:[
      {
        required: true,
        message: "Address is required",
      },
    ]
  },
  {
    label: "City",
    name: "city",
    rules:[
      {
        required: true,
        message: "City is required!",
      },
    ]
  },
  {
    label: "State",
    name: "state",
    rules:[
      {
        required: true,
        message: "State field is required!",
      },
    ]
  },
]
const PersonalInfo = () => {
  const {Option} = Select;
  return (
    <React.Fragment>
      
      <TextInputs fields={personalInfo}/>
      <Form.Item
        name="gender"
        label="Gender"
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <Select placeholder="Select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item label="DatePicker" name="dob">
          <DatePicker />
      </Form.Item>

        <TextInputs fields={addressInfo}/>
        <Form.Item label="ZipCode" name="zipcode">
          <InputNumber />
        </Form.Item>
      <Form.Item
        name="idSnap"
        label="ID Snapshot"
        valuePropName="fileList"
      >
        <Upload name="idSnap" action="/remote-server" listType="picture">
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
    </React.Fragment>
  );
};

export default PersonalInfo;
