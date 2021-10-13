/* eslint-disable no-unused-vars */
import './App.css';
import Form from './components/Form';
import 'antd/dist/antd.css'; 
import React from 'react'
import { Layout, Menu } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons';

import ContentScreen from './screens/ContentScreen';
const { Header, Sider, Content } = Layout;

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      Pages:"",

    }

 }
 passprops=(a)=>{
    this.setState({
      Pages:a,
    
      
    })
 }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout  style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" onClick={()=>this.passprops("Driver")} icon={<UserOutlined />}>
               Drivers
            </Menu.Item>
            <Menu.Item key="2" onClick={()=>this.passprops("BusLocations")} icon={<VideoCameraOutlined />}>
               BusLocations
            </Menu.Item>
            <Menu.Item key="3" onClick={()=>this.passprops("Updates")} icon={<UploadOutlined />}>
              Updates
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          
          
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
           


            <ContentScreen pagename={this.state.Pages}/>
          </Content>


        </Layout>


      </Layout>
    );
  }
}

export default App;
