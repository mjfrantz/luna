import { Typography } from 'antd';
import { Card } from 'antd';
import { Row, Col, Layout } from 'antd';


const { Content } = Layout;
const { Title } = Typography;


const About = () => {
  return (
    <div>
      <Content style={{ paddingTop: '1rem', width: '100%', backgroundColor: 'orange' }}>
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
        <style jsx>{`
        //Ask Ivan about it being more central
       .about-img img{
         width: 90%;
         box-shadow: 5px 5px;
         display: block;
         margin-right: auto;
         margin-left: auto;
         margin-top: 1.5rem;
         margin-bottom: 1.5rem;
       }
       `}</style>
      </Content>
    </div >
  )
}

export default About;


// <div className="about_img">
// <Reveal effect="fadeInRight" duration={1500}><img src={require('../image/Me.png')} alt="" /></Reveal>

// // .about {
//   //  display: flex;
//   //  justify-content: ;
//   //  width: 50%;
//    background-color:green;
//    height: 50vh;
//    text-align:center;
//   //  margin: auto;
//    padding: 1rem;
//    //  font-family: Helvetica;
//   font-style: italic;
//  }

// <Card
//   hoverable
//   style={{ width: 240 }}
//   cover={<img alt="example" src="./../images/pic1.jpg" />}
// >
//   <Meta title="Europe Street beat" description="www.instagram.com" />
// </Card>

// <Card
// style={{ width: '100%' }}
// cover={<img alt="example" src="./../images/pic1.jpg" />}
// >
// </Card>