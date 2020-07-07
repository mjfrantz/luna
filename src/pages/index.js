import Banner from '../components/layout/Banner';
import Product from '../components/layout/Product';
import About from '../components/layout/About';
// import Nav from '../components/layout/Nav';
import client from '../../config/contentful';

export async function getStaticProps() {
  try {
    const entries = await client.getEntries({ content_type: "product", 'fields.feature': true });

    return {
      props: { entries }, // will be passed to the page component as props
    }
  } catch (error) {
    console.log
  }

}

const Home = ({ entries }) => {
  return (
    <div>
      <Banner />
      <Product data={entries} />
      <About />
    </div>
  )
}

export default Home;