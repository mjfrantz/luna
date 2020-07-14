import { Row, Col, Layout, Typography, Card, Button } from 'antd';
import Link from 'next/link';



const { Content } = Layout;
const { Title } = Typography;

const { Meta } = Card;

const Product = ({ data }) => {
  return (
    <div style={{ backgroundColor: '#F0F2F5' }}>
      <Content style={{ paddingTop: '1rem' }}>
        <Title level={1} style={{ textAlign: 'center' }}>#1 rated customized hair care</Title>
        <p style={{ textAlign: 'center' }}>Your hair type. Your hair goals. Your color. Your fragrance. You name it (literally).</p>
        <Link href="/products">
          <Row justify="space-around" style={{ margin: '1rem' }}>
            {data.items.map(product => (
              <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src={product.fields.image && product.fields.image.fields.file.url} />}
              >
                <Meta title={product.fields.title}
                  description={product.fields.description} style={{ textAlign: 'center' }} />
              </Card>
            ))}
          </Row>
        </Link>
      </Content>

    </div >

  )
}

export default Product;

