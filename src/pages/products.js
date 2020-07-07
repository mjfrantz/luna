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
  return (
    <div>
      <Content style={{ padding: '20px 50px' }}>
        <Title>Products</Title>
        <Title level={4}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          repellendus incidunt nihil asperiores in inventore aperiam nobis
          optio?
        </Title>

        <Row
          justify='center'
          gutter={[42, 42]}
          style={{ marginTop: '5rem', padding: '0 4rem' }}
        >
          {entries.items ? (
            entries.items.map((product) => (
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
                      src={product.fields.image && product.fields.image.fields.file.url}
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
            ))
          ) : (
              <Title level={4}>There are no products to display</Title>
            )}
        </Row>
        )
      </Content>
    </div>
  );
};

export default Product;
