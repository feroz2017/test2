import React from "react";
import { Select, Form, Checkbox } from "antd";
import Details from './Details'
const Insurance = (props) => {
  const { Option } = Select;
  const getInsuranceDetails = () => {
    if (props.insuranceStatus === "yes") {
      return <Details/>
    } else  if(props.insuranceStatus === "no"){
     return ( <Form.Item name="attestation" >
     <Checkbox>
      Insurance Document Attestation
     </Checkbox>
   </Form.Item>)
    }
  };
  return (
    <React.Fragment>
      <Form.Item
        name="insurance"
        label="Do you have Insurance ?"
        rules={[{ required: true, message: "Please select gender!" }]}
      >
        <Select
          placeholder="Do you have Insurance"
          onChange={(value)=>props.setInsuranceStatus(value)}
        >
          <Option value="yes">Yes</Option>
          <Option value="no">No</Option>
        </Select>
      </Form.Item>
      {getInsuranceDetails()}
    </React.Fragment>
  );
};

export default Insurance;
