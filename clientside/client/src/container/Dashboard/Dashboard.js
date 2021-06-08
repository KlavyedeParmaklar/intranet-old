import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    EditOutlined,
    PhoneOutlined,
    LaptopOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css'
import "./Dashboard.css"
import DashboardRoutes from './DashboardRoutes';
import CreatePage from '../Blog/BlogPage/Sections/CreatePage'


import { Switch, Route, Link, BrowserRouter } from 'react-router-dom'

// Components
import Home from '../../components/Home/Home' // Make for dashboard home!!!
import NoteBookTable from '../NoteBookTable/NoteBookTable'
import CreateBlog from '../Blog/BlogPage/Sections/CreatePage'

const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default class Dashboard extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        return (
            <>
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
                                <Menu.Item key="6" icon={<PhoneOutlined />}>Telephone List</Menu.Item>
                                <Menu.Item key="7" icon={<LaptopOutlined />}><Link to="/dashboard/notebooklist">Notebook List</Link></Menu.Item>
                            </SubMenu>
                            <Menu.Item key="8" icon={<EditOutlined />}><Link to="/dashboard/createblog">Create Blog</Link></Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout" style={this.state.collapsed ? { marginLeft: 100, transitionDelay: ".1s" } : { marginLeft: 200, transitionDelay: ".1s" }}>
                        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                <DashboardRoutes />
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </>
        )
    }
}
