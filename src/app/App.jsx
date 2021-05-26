import React from "react";
import { Layout , Row,Col} from "antd";

// App Components
import PatientForm from './containers/PatientForm'

// Static Resources
import "../static/styles/app.less"

const App = () => {
  const { Header, Content, Footer } = Layout;
  return (
    <Layout>
      <Row>
        <Col span={20}><Header className="header" style={{color: "white"}}>Patient Signup Form</Header></Col>
      </Row>
      <Content className="content"> 
        <Row>
          <Col span={4}></Col>
          <Col span={8}><PatientForm/></Col>
        </Row>
       </Content>
      <Footer className="footer">End of 2nd App</Footer>
    </Layout>
  );
};

export default App;
