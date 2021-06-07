import React, { Component } from 'react'

import { Layout, Menu } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    EditOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css'
import "./Dashboard.css"
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default class DashboardSideBar extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return (
            <Layout style={{ marginTop: "65px", minHeight: '100vh' }} >
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}
                    style={{
                        overflow: 'auto',
                        height: '100vh',
                        position: 'fixed',
                        left: 0,
                    }}>
                    <div className="logo" />
                    <Menu className="mt-3" theme="dark" defaultSelectedKeys={['1']} defaultOpenKeys={['sub2']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>Option 1</Menu.Item>
                        <Menu.Item key="2" icon={<DesktopOutlined />}>Option 2</Menu.Item>
                        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                            <Menu.Item key="3">Add New...</Menu.Item>
                            <Menu.Item key="4">All Users</Menu.Item>
                            <Menu.Item key="5">Profile</Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<TeamOutlined />} title="Lists">
                            <Menu.Item key="6">Telephone List</Menu.Item>
                            <Menu.Item key="7"><Link to="/dashboard/notebooklist">Notebook List</Link></Menu.Item>
                        </SubMenu>
                        <Menu.Item key="8" icon={<EditOutlined />}><Link to="/dashboard/createblog">Create Blog</Link></Menu.Item>
                    </Menu>
                </Sider>
            </Layout>
        )
    }
}
