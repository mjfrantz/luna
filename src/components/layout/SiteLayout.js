import { NextPage } from 'next';
import { Layout as AntLayout, Typography, Row } from 'antd';

const { Header, Footer } = AntLayout;
const { Title } = Typography;

const SiteLayout = props => {
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <AntLayout>
        <Header style={{ display: 'flex' }}>
          Header
        </Header>
        {props.children}
        <Footer style={{ textAlign: 'center' }}> Luna 2020</Footer>
      </AntLayout>
      <style jsx>{`

      `}</style>
    </AntLayout>
  );
};

export default Layout;
