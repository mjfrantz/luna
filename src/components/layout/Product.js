import { Row, Col, Layout, Typography, Card } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const { Meta } = Card;

const Product = () => {
  return (
    <div style={{ backgroundColor: '#F0F2F5' }}>
      <Content style={{ paddingTop: '1rem' }}>
        <Title level={5} style={{ textAlign: 'center' }}>#1 rated customized hair care</Title>
        <p style={{ textAlign: 'center' }}>Your hair type. Your hair goals. Your color. Your fragrance. You name it (literally).</p>
        <Row justify="space-around" style={{ margin: '1rem' }}>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="./../images/Luna-BottleWhite.jpg" />}
          >
            <Meta title="Shampoo" style={{ textAlign: 'center' }} description="A daily dose of your hair goal" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="./../images/shampoo.jpg" />}
          >
            <Meta title="Treatment" style={{ textAlign: 'center' }} description="Prime & Protect your strand" />
          </Card>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="./../images/shampoo.jpg" />}
          >
            <Meta title="Oil" style={{ textAlign: 'center' }} description="Deep hydration & nourishment" />
          </Card>
        </Row>
      </Content>
    </div >

  )
}

export default Product;


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

