import {
  Form,
  Select,
  Menu
} from 'antd'
import { HeartOutlined, MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';


const { SubMenu } = Menu;
const FormItem = Form.Item
const Option = Select.Option

export default function Home() {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="mail" icon={<HeartOutlined />}>
          Luna
        </Menu.Item>
        <Menu.Item >
          Products
        </Menu.Item>
        <Menu.Item>
          About Us
        </Menu.Item>
        <Menu.Item >
          Contact
        </Menu.Item>
      </Menu>
    </div>
  )
}
