import Link from 'next/link';
import {
  Menu, Icon, Avatar
} from 'antd';

import { HeartOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;


const Nav = () => {
  return (
    <Menu mode="vertical" id="menu">
      <Menu.Item key="/products">
        <Link href="/products">
          <a>Productos</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href="/about">
          <a>Nosotros</a>
        </Link>
      </Menu.Item>
      <Menu.Item >
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/" >
        <Link href="/">
          <Avatar style={{ width: '100px', height: '50px' }} src="./../images/luna-logo.png" />
        </Link>
      </Menu.Item>
      <Menu.Item >
        <Link href="/reviews">
          <a>Testimonios</a>
        </Link>
      </Menu.Item>
      <Menu.Item >
        <Link href="/contact">
          <a>Contáctanos</a>
        </Link>
      </Menu.Item>
      <Menu.Item >
        <Link href="/FAQ">
          <a>FAQs</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};
export default Nav;





