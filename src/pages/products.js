import { useState } from 'react';
import client from '../../config/contentful';

import { Row, Col, Layout, Typography, Card, Avatar, Tag, Button } from 'antd';

const { Content } = Layout;
const { Title, Subtitle, Text } = Typography;
const { Meta } = Card;

export async function getStaticProps() {
  const entries = await client.getEntries();

  if (entries.items) return { props: { entries } };

  console.log(`Error getting Entries for ${contentType.name}.`);
}

const Product = ({ entries }) => {
  const products = entries.items;

  console.log(products);

  // const createProduct = (count) => {
  //   const products = [];
  //   const arr = Array.from(Array(count).keys());

  //   for (const item in arr) {
  //     products.push({
  //       title: `Product ${+item + 1}`,
  //       description:
  //         'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum nulla recusandae praesentiun.',
  //       quantity: Math.ceil(Math.random() * 10000),
  //       price: '$' + Math.round(Math.random() * 100).toFixed(2),
  //     });
  //   }

  //   return products;
  // };

  // const [products, setProducts] = useState(createProduct(2));

  // console.log(createProduct(5));

  return (
    <div>
      <Content style={{ padding: '20px 50px' }}>
        <Title>Products</Title>
        <Title level={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          repellendus incidunt nihil asperiores in inventore aperiam nobis
          optio?
        </Title>

        {products.entries.length ? (
          <Row
            justify='center'
            gutter={[42, 42]}
            style={{ marginTop: '5rem', padding: '0 4rem' }}
          >
            {products.map((product) => (
              <Col
                xs={24}
                sm={24}
                md={10}
                lg={8}
                xl={6}
                key={product.fields.title}
              >
                <Card
                  cover={
                    <img
                      alt='example'
                      src={product.fields.image.fields.file.url}
                    />
                  }
                  actions={[
                    <Tag>{product.fields.price}</Tag>,
                    <Button type='primary' small>
                      Buy Now
                    </Button>,
                  ]}
                >
                  <Meta
                    title={product.fields.title}
                    description={product.fields.description}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        ) : (
          <Title>There are no products to display</Title>
        )}
      </Content>
    </div>
  );
};

export default Product;