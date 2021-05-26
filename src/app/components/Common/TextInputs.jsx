import React from 'react';
import { Input, Form } from 'antd'

const getTextInput = (field,index)=>{
        return <Form.Item key={index} {...field}><Input/></Form.Item>
}
const TextInputs = (props) => {
    const { fields } = props;
    return (fields.map((field,index) => getTextInput(field,index)));
}

export default TextInputs;