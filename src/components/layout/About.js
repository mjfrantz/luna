import { Row, Col, Layout, Typography, Card } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const About = () => {
  return (
    <div>
      <Content style={{ paddingTop: '1rem', width: '100%', backgroundColor: 'orange' }}>
        <Title level={1} style={{ textAlign: 'center' }}>About Us</Title>
        <Row>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{ display: 'block', marginTop: '1rem', padding: '2rem' }}>
            <Title style={{ fontStyle: 'italic', textAlign: 'center', fontWeight: 'bold' }}>Our Story</Title>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={12} >
            <div className="about-img">
              <img alt="example" src="./../images/pic1.jpg" />
            </div>
          </Col>
        </Row>
      </Content>
    </div>
  )
}

export default About;