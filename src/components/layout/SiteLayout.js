import { NextPage } from 'next';
import { Row, Layout } from 'antd';
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
          /// ADD FONT HERE

         body {
           padding-top: 0px;
         }
         a::after{
           color: transparent;
         }
         h1, p{
           margin: 0;
         }
         .banner-info{
          display: flex;
          justify-content: flex-start;
          align-item: center; 
          margin: 2rem;
        }
        .banner-info h3{
          font-weight:bold;
        } 
      `}</style>
    </Layout>
  );
};
export default SiteLayout;

