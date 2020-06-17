import Link from 'next/link';
import { useState } from 'react';
import {
  Menu, Icon, Avatar
} from 'antd';
import Sticky from 'react-stickynode';

import { HeartOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

const Nav = () => {
  const [links] = useState([
    { title: 'products', path: '/products', text: 'Productos' },
    { title: 'about', path: '/about', text: 'Nosotros' },
    { title: 'blog', path: '/blog', text: 'Blog' },
    { title: 'home', path: '/', text: 'Mi Casa' },
    { title: 'reviews', path: '/reviews', text: 'Testimonios' },
    { title: 'contact', path: '/contact', text: 'Contáctanos' },
    { title: 'FAQ', path: '/FAQ', text: 'FAQs' }

  ]);
  return (
    <Sticky innerZ={9999} top={0}>
      <Menu mode="horizontal" id="menu" className="container">
        {links.map(({ title, path, text }) => {
          if (title === 'home') {
            return (
              <Menu.Item key='/' style={{ borderBottom: 'none' }}>
                <Link href='/'>
                  <Avatar
                    style={{ width: '100px', height: '50px' }}
                    src='./../images/luna-logo.png'
                  />
                </Link>
              </Menu.Item>
            );
          } else {
            return (
              <Menu.Item key={path} style={{ borderBottom: 'none' }}>
                <Link href={path}>
                  <a>{text}</a>
                </Link>
              </Menu.Item>
            );
          }
        })}
      </Menu>
    </Sticky>
  );
};
export default Nav;



// const Nav = () => {
//   return (
//     <Sticky innerZ={9999} top={0}>
//       <Menu mode="horizontal" id="menu" className="container">
//         <Menu.Item key="/products" style={{ borderBottom: 'none' }}>
//           <Link href="/products">
//             <a>Productos</a>
//           </Link>
//         </Menu.Item>
//         <Menu.Item key="/about" style={{ borderBottom: 'none' }}>
//           <Link href="/about">
//             <a>Nosotros</a>
//           </Link>
//         </Menu.Item>
//         <Menu.Item key="/blog" style={{ borderBottom: 'none' }}>
//           <Link href="/blog">
//             <a>Blog</a>
//           </Link>
//         </Menu.Item>
//         <Menu.Item key="/" style={{ borderBottom: 'none' }} >
//           <Link href="/">
//             <Avatar style={{ width: '100px', height: '50px' }} src="./../images/luna-logo.png" />
//           </Link>
//         </Menu.Item>
//         <Menu.Item key="/reviews" style={{ borderBottom: 'none' }}>
//           <Link href="/reviews">
//             <a>Testimonios</a>
//           </Link>
//         </Menu.Item>
//         <Menu.Item key="/contact" style={{ borderBottom: 'none' }}>
//           <Link href="/contact">
//             <a>Contáctanos</a>
//           </Link>
//         </Menu.Item>
//         <Menu.Item key="/FAQ" style={{ borderBottom: 'none' }}>
//           <Link href="/FAQ">
//             <a>FAQs</a>
//           </Link>
//         </Menu.Item>
//       </Menu>
//     </Sticky >
//   );
// };

