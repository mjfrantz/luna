import { Carousel } from 'antd';
import { Button } from 'antd';


const Banner = () => {
  function onChange(a, b, c) {
    console.log(a, b, c);
  }
  return (
    <Carousel afterChange={onChange}>
      <div>
        <span className="banner-info"><h3>The Best Hair Care Product</h3>
        </span>
        <Button type="primary">Primary Button</Button>
      </div>
      <div>
        <h3></h3>
      </div>
      <div>
        <h3></h3>
      </div>
      <div>
        <h3></h3>
      </div>
    </Carousel>
  );
}

export default Banner;