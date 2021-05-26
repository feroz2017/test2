import React, { useState } from "react";

import { Form, Button, Divider } from "antd";
import { v4 as uuidv4 } from 'uuid';

import PersonalInfo from "../components/PersonalDetails/PersonalInfo";
import Insurance from "../components/InsuranceDetails/Insurance"

// import FamilyMember from "../components/FamilyDetails/FamilyMember";
import FamilyInfo from "../components/FamilyDetails/FamilyInfo";

const PatientForm = () => {
  let [insuranceStatus, setInsuranceStatus] = useState()
  const onSubmission = (submission) => {
    for(let i = 0; submission.familyMemebers && i<submission.familyMemebers.length; i++){
      submission.familyMemebers[0].id = uuidv4()
    }
    console.log("In Submission Function", submission);
    /**
     *  Using Axios we can send this form to some api
     */
  };
  return (
    <Form onFinish={onSubmission} layout="horizontal">
      <Divider orientation="left">Personal Information</Divider>
      <PersonalInfo />
      <Divider orientation="left">Insurance Details</Divider>
      <Insurance setInsuranceStatus={setInsuranceStatus} insuranceStatus={insuranceStatus}/>
      <Divider orientation="left">Family Details</Divider>
          <FamilyInfo  insuranceStatus={insuranceStatus}/>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PatientForm;
