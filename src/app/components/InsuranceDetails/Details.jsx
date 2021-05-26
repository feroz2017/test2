import React from 'react';
import {Form,InputNumber,Select} from 'antd';
import PicUploads from '../Common/PicUploads'

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

const Details = () => {
    const {Option}  = Select;
    return ( <React.Fragment>
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
      </React.Fragment> );
}
 
export default Details;