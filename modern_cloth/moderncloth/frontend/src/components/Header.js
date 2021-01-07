import React, { useState } from "react"
import { Menu } from "antd"
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons"

const { SubMenu } = Menu;

const Header = () => {
    const [current, setCurrent] = useState('')

    const submitHandler = () => {

    }

  return (
  <Menu onClick={submitHandler} selectedKeys={[current]} mode="horizontal">
  <Menu.Item key="mail" icon={<MailOutlined />}>
    HOME
  </Menu.Item>
  <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Register">   
      <Menu.Item key="setting:3">Option 1</Menu.Item>
      <Menu.Item key="setting:4">Option 2</Menu.Item>
  </SubMenu>
</Menu>
  )
}

export default Header
