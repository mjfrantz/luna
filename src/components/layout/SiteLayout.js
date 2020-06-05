import { NextPage } from 'next';
import { Layout, Row } from 'antd';

import Nav from './Nav';

const { Header, Footer, Content } = Layout;

const SiteLayout = props => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout>
        <Nav />

        <Content>{props.children}</Content>
        <Footer style={{ textAlign: 'center' }}> Luna 2020</Footer>
      </Layout>
      <style jsx global>{`
         body {
           padding-top: 48px;;
         }
      `}</style>
    </Layout>
  );
};

export default SiteLayout;
