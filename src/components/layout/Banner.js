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
        <div className="Banner">
          <motion.div variants={fadeInUp}>
            <Title style={{ color: "black", }}>Amazing Hair Care Products</Title>
            <Title style={{ color: "black" }} level={4}>To Deliver the Best Hair.</Title>
            <Button type="primary" size="large">
              <Link href="/products">
                <a>Buy Formula</a>
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
export default Banner;

