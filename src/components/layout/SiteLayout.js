import { NextPage } from 'next';
import { Layout, Typgraphy, Row } from 'antd';

import Nav from './Nav';

const { Header, Footer } = Layout;
const { Title } = Typography;

const SiteLayout = props => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Nav />
        {props.children}
        <Footer style={{ textAlign: 'center' }}> Luna 2020</Footer>
      </Layout>
      <style jsx>{`

      `}</style>
    </Layout>
  );
};

export default SiteLayout;
