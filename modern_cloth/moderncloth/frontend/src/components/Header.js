import React, { useState } from "react"
import { Menu } from "antd"
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  UserOutlined,
  UserAddOutlined

} from "@ant-design/icons"

import { Link } from 'react-router-dom'

const { SubMenu, Item } = Menu;

const Header = () => {
    //The default value of state is stored here in useState
    const [current, setCurrent] = useState('home')

    const submitHandler = (e) => {
        setCurrent(e.key)
        console.log(e.key)
    }

  return (
  <Menu onClick={submitHandler} selectedKeys={[current]} mode='horizontal'>
  <Item key="home" icon={<AppstoreOutlined />}>
      <Link to='/'>HOME</Link>
  </Item>

  <SubMenu key="SubMenu" icon={<SettingOutlined />} title="USERNAME">   
      <Item key="setting:3">Option 1</Item>
      <Item key="setting:4">Ocption 2</Item>
  </SubMenu>

  <Item key="register" icon={<UserAddOutlined />} className='float-right' >
    <Link to='/register'>REGISTER</Link>
  </Item>

  <Item key="login" icon={<UserOutlined />} className='float-right' >
    <Link to='/login'>LOGIN</Link>
  </Item>

</Menu>
  )
}

export default Header
