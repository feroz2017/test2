import React from 'react';
import {Form,Upload,Button} from 'antd';
import { UploadOutlined } from '@ant-design/icons';
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};

const getUploadField = (field,index)=> (
    <Form.Item
    name={field.name}
    label={field.label}
    key={index}
    getValueFromEvent={normFile}
  >
    <Upload name={field.name}  listType="picture">
      <Button icon={<UploadOutlined />}>Click to upload</Button>
    </Upload>
 </Form.Item>);


const PicUploads = (props) => {
    const {fields} = props;
    return (fields.map((field,index) => getUploadField(field,index)));
}
 
export default PicUploads;