import Link from 'next/link';
import {
  Menu, Icon, Avatar
} from 'antd';

import { HeartOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;


const Nav = () => {
  return (
    <Menu mode="horizontal" id="menu">
      <Menu.Item key="/products">
        <Link href="/products">
          <a>Products</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/about">
          <a>About Us</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/" >
        <Link href="/">
          <Avatar style={{ width: '100px', height: '45px' }} src="./../images/luna-logo.png" />
        </Link>
      </Menu.Item>
      <Menu.Item >
        <Link href="/reviews">
          <a>Reviews</a>
        </Link>
      </Menu.Item>
      <Menu.Item >
        <Link href="/contact">
          <a>Contact</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};
export default Nav;





