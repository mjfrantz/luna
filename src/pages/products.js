import { useState } from 'react';
import { Row, Col, Layout, Typography, Card, Avatar, Tag, Button } from 'antd';

const { Content } = Layout;
const { Title, Subtitle, Text } = Typography;
const { Meta } = Card;

const Product = () => {
  const createProduct = (count) => {
    const products = [];
    const arr = Array.from(Array(count).keys());

    for (const item in arr) {
      products.push({
        title: `Product ${+item + 1}`,
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nulla recusandae praesentiun.',
        quantity: Math.ceil(Math.random() * 10000),
        price: "$" + Math.round(Math.random() * 100).toFixed(2)
      });
    }

    return products;
  };

  const [products, setProducts] = useState(createProduct(10));

  console.log(createProduct(5));

  return (
    <div>
      <Content style={{ padding: '20px 50px' }}>
        <Title>Products</Title>
        <Title level={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          repellendus incidunt nihil asperiores in inventore aperiam nobis
          optio?
        </Title>

        <Row justify="center" gutter={[16, 42]} style={{ marginTop: '5rem', padding: '0 4rem' }}>
          {products.map((product) => (
            <Col xs={24} sm={24} md={10} lg={8} xl={6}>
              <Card
                style={{ width: 280 }}
                cover={
                  <img
                    alt='example'
                    src='https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
                  />
                }
                actions={[
                  <Tag>{product.price}</Tag>,
                  <Button type="primary" small>Buy Now</Button>,
                ]}
              >
                <Meta
                  title={product.title}
                  description={product.description}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </div>
  );
};

export default Product;
