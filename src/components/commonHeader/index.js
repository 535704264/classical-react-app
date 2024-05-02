import React from 'react'
import { Layout, Avatar, Button, Dropdown } from 'antd';

import { MenuFoldOutlined } from '@ant-design/icons'
import './index.css';
import {} from 'react-redux'

const { Header } = Layout;

const CommonHeader = ({collapsed}) => {
    // 登出
    const logout = ()=>{}
    const items = [
        {
          key: '1',
          label: (
            <a target="_blank" rel="noopener noreferrer" href='/#'>
                    个人中心
            </a>
          ),
        },
        {
          key: '2',
          label: (
            <a  onclick = {() => logout} target="_blank" rel="noopener noreferrer" href='/#'>
             退出
            </a>
          ),
        }
      ]

   // 点击展开/收起按钮
   const setCollapse   = () => {
    console.log(collapsed)
   }
   return (
    <Header className='hadeer-container'>
          <Button
            type="text"
            icon={<MenuFoldOutlined />}
            // onClick={() => {}}
            style={{
              fontSize: '16px',
              width: 64,
              height: 32,
              backgroundColor: '#fff'
            }}
            onClick={(()=>setCollapse())}
          />
          <Dropdown menu={{items}}>
            <Avatar size={36} src={ <img alt="" src={require("../../assets/images/user.png")}/>}/>
          </Dropdown>
        </Header>
   )
}

export default CommonHeader