import React, { useState } from "react";
import { Select, Form, Upload, InputNumber } from "antd";
import PicUploads from "../Common/PicUploads";
const uploads = [
  {
    name: "frontSnap",
    label: "Front Snapshot of Insurance Document",
    action: "/remote-server",
  },
  {
    name: "backSnbap",
    label: "Back Snapshot of Insurance Document",
    action: "/remote-server",
  },
];
const InsuranceCompanies = ["A","B","C","D","E","F","G","H","I","J"];

const Insurance = () => {
  const { Option } = Select;
  let [insurance, setInsurance] = useState(false);

  const OnInsuranceSelect = (value) => {
    value === "yes" ? setInsurance(true) : setInsurance(false);
  };
  console.log(InsuranceCompanies)
  const getInsuranceDetails = () => {
    if (insurance) {
      return (
        <React.Fragment>
          <PicUploads fields={uploads} />
          <Form.Item
            name="insuranceCompany"
            label="Insurance Company"
            rules={[{ required: true, message: "Select Insurnace Company" }]}
          >
            <Select placeholder="Select Insurnace Company">
              {InsuranceCompanies.map((comp,index)=> <Option key={index} value={comp.toLowerCase()}>{comp}</Option>)}
            </Select>
          </Form.Item>
          <Form.Item label="Insurance number" name="insuranceNum">
          <InputNumber />
        </Form.Item>
        </React.Fragment>
      );
    } else {
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
          onChange={OnInsuranceSelect}
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
