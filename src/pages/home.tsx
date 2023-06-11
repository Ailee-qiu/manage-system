import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Outlet, useNavigate } from 'react-router-dom';
import MainMenu from '@/components/MainMenu';
import { items } from '@/common/constants';
import MenuItem from 'antd/es/menu/MenuItem';
const { Header, Content, Footer, Sider } = Layout;



const menuitems = items
const rootSubmenuKeys = ['/pay-monitor/account', '/pay-monitor/unit', '/transaction-monitor/detail','/transaction-monitor/os-detail','/monitor-set/setting'];
const Home: React.FC = () => {
    // const [openKeys, setOpenKeys] = useState(['sub1']);
    const [collapsed, setCollapsed] = useState(false);
    // const navigateTo = useNavigate()
  const {
    token: { colorBgContainer },
    } = theme.useToken();
    
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
              <MainMenu items={menuitems} rootSubmenuKeys={rootSubmenuKeys}/>
      </Sider>
      <Layout>
            <Header style={{ paddingLeft: '16px', background: colorBgContainer,lineHeight:'64px' }} >
            <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
                  </Header>
        <Content style={{ margin: '16px 16px 0' }} className='site-layout-background'>
          {/* <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            Bill is a cat.
          </div> */}
                  <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center',padding:0,lineHeight: '48px'}}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default Home;