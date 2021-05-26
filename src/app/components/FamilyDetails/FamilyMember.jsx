import React , {useState}from 'react';
import {Form,Input,InputNumber,Radio, Space,Select,Checkbox, DatePicker,Upload,Button} from 'antd'
import { MinusCircleOutlined, PlusOutlined,UploadOutlined } from '@ant-design/icons';


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

const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
};



const FamilyMember = (props) =>{
    let {fieldKey,name,remove,isListField,insuranceStatus, ...restField} = props;
    let [memInsurance,setMemInsurance] = useState();

    // let [attestation,setAttestation] = useState()

    const onChange = (e)=>{
        setMemInsurance(e.target.value) 
    }
    return (
      <Space  style={{ display: 'flex',flexDirection:"column" }} align="baseline">
        <h1> Family Member: <MinusCircleOutlined onClick={() => remove(name)} /></h1> 
        <Form.Item
          {...restField}
          name={[name, 'first']}
          fieldKey={[fieldKey, 'first']}
          rules={[{ required: true, message: 'Missing first name' }]}
        >
          <Input placeholder="First Name" />
        </Form.Item>
        <Form.Item
          {...restField}
          name={[name, 'last']}
          fieldKey={[fieldKey, 'last']}
          rules={[{ required: true, message: 'Missing last name' }]}
        >
          <Input placeholder="Last Name" />
        </Form.Item>
        <Form.Item 
            {...restField}
            name={[name, 'dob']}
            fieldKey={[fieldKey, 'dob']}
            rules={[{ required: true, message: 'Missing last Dob' }]}
            label="DoB">
                <DatePicker />
        </Form.Item>
        <Form.Item
            {...restField}
            name={[name, 'insuranceStatus']}
            fieldKey={[fieldKey, 'insuranceStatus']}
            label="Select Insurance Status"
            rules={[{ required: true, message: 'Missing Insurance Status' }]}
        >
            <Radio.Group onChange={onChange} >
              <Radio value={"same"} disabled={insuranceStatus === "yes" ? false:true}>Same</Radio>
              <Radio value={"other"}>Other</Radio>
              <Radio value={"none"}>None</Radio>
            </Radio.Group>
        </Form.Item>
            {/* Document Attestation */}
            {memInsurance === "none" ? <Form.Item  
            {...restField}
            name={[name, 'attestation']}
            fieldKey={[fieldKey, 'Attestation']}
            rules={[{ required: true, message: 'Missing Insurance Attestation' }]} >
                <Checkbox>
                Insurance Document Attestation
                </Checkbox>
            </Form.Item>: null}
            {/* Document Attestation */}
            {
                memInsurance === "other" ? (<React.Fragment>
                    {uploads.map((upload,index) => (<Form.Item
                        name={upload.name}
                        label={upload.label}
                        key={index}
                        getValueFromEvent={normFile}
                    >
                        <Upload name={upload.name}  listType="picture">
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                        </Upload>
                    </Form.Item>))}
                    <Form.Item
                        {...restField}
                        name={[name, 'insuranceComponay']}
                        fieldKey={[fieldKey, 'insuranceComponay']}
                        label="Select Insurance Company"
                        rules={[{ required: true, message: 'Missing Insurance Company' }]}
                    >
                      <Select placeholder="Select Insurnace Company">
                        {InsuranceCompanies.map((comp,index)=> <Select.Option key={index} value={comp.toLowerCase()}>{comp}</Select.Option>)}
                      </Select>
                    </Form.Item>
                    <Form.Item 
                    {...restField}
                    name={[name, 'insuranceNumber']}
                    fieldKey={[fieldKey, 'insuranceNumber']}
                    label="Insurance Number"
                    rules={[{ required: true, message: 'Missing Insurance Number' }]}
                    >
                    <InputNumber />
                  </Form.Item>
                  </React.Fragment> ) : null
            }
      </Space>
    )
  }
  export default FamilyMember;