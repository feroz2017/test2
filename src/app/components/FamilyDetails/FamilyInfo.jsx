import React from 'react';
import {Form,Button} from 'antd'
import {  PlusOutlined } from '@ant-design/icons';
import FamilyMember from './FamilyMember'
const FamilyInfo = (props) => {
    let {insuranceStatus} = props;
     return (
       <React.Fragment>
             <Form.List name="familyMemebers">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field) => <FamilyMember insuranceStatus={insuranceStatus} remove={remove} {...field}/>)}
                <Form.Item>
                  <Button type="dashed" onClick={() => add()}  icon={<PlusOutlined />}>
                    Add Family Member
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
       </React.Fragment>
      );
}
 
export default FamilyInfo;