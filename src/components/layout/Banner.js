import Link from 'next/link';
import { Carousel, Typography, Button } from 'antd';
import { motion } from 'framer-motion';

const { Title, Paragraph } = Typography;

let easing = [0.6, -0.05, 0.01, 0.99];


const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: easing
    }
  }
};


const Banner = () => {
  return (
    <motion.div initial='initial' animate='animate' exit={{ opacity: 0 }}>
      <div className="container">
        <motion.div variants={fadeInUp}>
          <Title color="white">Amazing Hair Care Products</Title>
        </motion.div>
        <Title level={4}>To Deliver the Best Hair.</Title>
        <Button type="primary" size="large">
          <Link href="/products">
            <a>Buy Formula</a>
          </Link>
        </Button>
        <style jsx>{`
        .container {
          position: relative;
          color: black;
          height: 70vh;
          background-image: linear-gradient(to bottom, rgba(0,0,0, 0.2), rgba(0,0,0,.5)) ,url('/images/pic-intro.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: self-start;
          padding-left: 3rem;
        }
      `}</style>
      </div>
    </motion.div>
  )

}
export default Banner;

// className={`banner_area ${bClass}`} style={{ width: '100%', height: '100%', backgroundSize: 'cover' }} imageUrl={require("../../image/" + imag)}
  // function onChange(a, b, c) {
  //   console.log(a, b, c);
  // }
  // return (
  //   <Carousel afterChange={onChange}>
  //     <div>
  //       <span className="banner-info"><h3>The Best Hair Care Product</h3>
  //       </span>
  //       <Button type="primary">Primary Button</Button>

  //     </div>
  //     <div>
  //       <h3></h3>
  //     </div>
  //     <div>
  //       <h3></h3>
  //     </div>
  //   </Carousel>
  // );

  //
