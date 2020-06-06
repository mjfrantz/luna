import { Carousel } from 'antd';
import { Typography } from 'antd';
import { Button } from 'antd';

const { Title, Paragraph } = Typography;


const Banner = () => {
  return (
    <div className="container">
      <img
        alt='banner'
        src='./images/pic-intro.jpg'
      />
      <div className="home-hero-headline">
        <Title>Amazing Hair Care Products</Title>
        <Paragraph>To Deliver the Best Hair.</Paragraph>
        <Button type="primary">GET YOUR FORMULA</Button>
      </div>
      <style jsx>{`
        img{
          // backgoundSize: 'cover';
          height: 100%;
          width: 100%;
          opacity: 0.75;
        }
        .container {
          position: relative;
          color: black;
        }
        .home-hero-headline {
          position: absolute;
          top: 20rem;
          left: 7.5rem;
          font-size: 2rem;
          flex-wrap: wrap;
        }
      `}</style>
    </div>

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
