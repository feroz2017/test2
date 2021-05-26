import React from "react";

import { Form, Button, Divider } from "antd";

import PersonalInfo from "../components/PersonalInfo/PersonalInfo";
import Insurance from "../components/InsuranceDetails/Insurance"

const PatientForm = () => {
  const onSubmission = (submission) => {
    console.log("In Submission Function", submission);
  };
  return (
    <Form onFinish={onSubmission} layout="horizontal">
      <Divider orientation="left">Personal Information</Divider>
      <PersonalInfo />
      <Divider orientation="left">Insurance Details</Divider>
      <Insurance/>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PatientForm;
