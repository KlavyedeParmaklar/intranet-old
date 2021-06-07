import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import 'antd/dist/antd.css'
import "./Dashboard.css"

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
                <Layout style={{ marginTop: "50px", minHeight: '100vh' }} >
                    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}
                        style={{
                            overflow: 'auto',
                            height: '100vh',
                            position: 'fixed',
                            left: 0,
                        }}>
                        <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                Option 1</Menu.Item>
                            <Menu.Item key="2" icon={<DesktopOutlined />}>
                                Option 2</Menu.Item>
                            <SubMenu key="sub1" icon={<UserOutlined />} title="User">
                                <Menu.Item key="3">Add New...</Menu.Item>
                                <Menu.Item key="4">All Users</Menu.Item>
                                <Menu.Item key="5">Profile</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<TeamOutlined />} title="Lists">
                                <Menu.Item key="6">Telephone List</Menu.Item>
                                <Menu.Item key="8">Notebook List</Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Layout className="site-layout" style={this.state.collapsed ? { marginLeft: 100, transitionDelay: ".1s" } : { marginLeft: 200, transitionDelay: ".1s" }}>
                        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                                <h2>Content</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet nunc lorem, eget luctus urna feugiat ac. Suspendisse potenti. Vestibulum iaculis convallis tortor vel porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam augue dui, vehicula non turpis vitae, sollicitudin consectetur nibh. Mauris venenatis eu massa ac congue. Fusce eu risus et nunc fermentum pharetra rutrum eget erat. Praesent et massa eget est mollis imperdiet. Aenean accumsan semper diam, nec auctor magna ultricies aliquam. Mauris porta tortor ullamcorper, posuere ligula non, varius erat. Praesent scelerisque venenatis nibh et vulputate.

                                Integer id nisl et ligula lacinia pulvinar. Ut vel tortor pharetra, mollis dolor in, congue sapien. Ut placerat nisl eget erat congue, ac tempus sapien sagittis. Curabitur ac vulputate leo. Donec tincidunt elit sit amet consequat hendrerit. Praesent accumsan mauris eu velit hendrerit, ac tempus est finibus. Sed egestas dapibus dolor, et ullamcorper tellus dignissim ac. Nulla cursus ac nisl ac congue. Mauris egestas ante eu lacus ultrices scelerisque. Donec feugiat, nisl nec sollicitudin scelerisque, nunc felis vulputate orci, et blandit ipsum odio a felis. Nullam sem mauris, tincidunt non ultricies vitae, congue ut metus. Nam non finibus mi.

                                Aenean id augue vitae sapien commodo aliquam. Nam id ipsum eu enim molestie faucibus. Duis sit amet sapien sed metus malesuada mattis. Donec placerat posuere lorem, quis malesuada lorem elementum in. Suspendisse ac leo non mi finibus condimentum id vitae elit. Vestibulum vulputate lacus quis metus cursus convallis. Nulla at lacus egestas, posuere ex sit amet, iaculis nulla. Nunc molestie enim tortor, interdum malesuada arcu interdum non. Sed iaculis velit vitae elementum euismod. Donec pellentesque lorem eu ex facilisis, vitae pretium ipsum lacinia. Aenean ac eros vel ligula dapibus interdum non et arcu. Aliquam vitae mi accumsan velit gravida ornare quis non est. Ut ornare hendrerit risus, id malesuada odio laoreet eu. Nunc varius blandit justo, quis imperdiet lorem lobortis at. Nam ut urna sollicitudin tellus varius fringilla. Vivamus non efficitur velit.

                                In hac habitasse platea dictumst. Maecenas vestibulum aliquam erat eget congue. Duis congue tortor nisl, eu tristique felis varius elementum. Fusce dignissim ligula ut arcu eleifend, sed sollicitudin nulla commodo. Quisque quam ex, suscipit venenatis nisl ac, imperdiet eleifend nisl. Maecenas at justo odio. Nunc pharetra sapien ac dui ultrices vehicula. Ut tortor sem, faucibus in malesuada id, porttitor a massa. Praesent cursus, justo quis ornare mattis, purus nisi euismod lorem, eget consequat magna est in urna. Cras ultrices tincidunt tristique. Vestibulum nisl nisi, condimentum eu mollis sit amet, finibus sit amet turpis. Curabitur sagittis dignissim tellus, sed gravida mi elementum at. Cras semper hendrerit ante eget tristique.

                                Maecenas fermentum, nibh quis consequat consectetur, nunc purus aliquet massa, non varius augue odio vitae massa. Ut faucibus euismod enim, ut cursus velit varius ac. Nullam ultrices, quam et elementum viverra, erat augue faucibus risus, eget vulputate urna metus ac dui. Aliquam dictum luctus fringilla. Aliquam erat volutpat. Pellentesque accumsan, dui vel feugiat mollis, lectus quam consequat metus, vitae tempus sapien dolor nec nisl. Pellentesque ligula sapien, fringilla quis libero pellentesque, gravida convallis ipsum. Morbi iaculis ligula diam, at molestie dolor auctor vitae. Proin luctus luctus ex, id cursus dui egestas vitae. Proin vel egestas massa. Sed eget pharetra augue. Proin hendrerit ante sed turpis convallis, eu ornare augue egestas. In eget lorem est. Nulla facilisi. Nullam molestie tortor congue mauris fringilla porttitor.
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet nunc lorem, eget luctus urna feugiat ac. Suspendisse potenti. Vestibulum iaculis convallis tortor vel porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam augue dui, vehicula non turpis vitae, sollicitudin consectetur nibh. Mauris venenatis eu massa ac congue. Fusce eu risus et nunc fermentum pharetra rutrum eget erat. Praesent et massa eget est mollis imperdiet. Aenean accumsan semper diam, nec auctor magna ultricies aliquam. Mauris porta tortor ullamcorper, posuere ligula non, varius erat. Praesent scelerisque venenatis nibh et vulputate.

                                Integer id nisl et ligula lacinia pulvinar. Ut vel tortor pharetra, mollis dolor in, congue sapien. Ut placerat nisl eget erat congue, ac tempus sapien sagittis. Curabitur ac vulputate leo. Donec tincidunt elit sit amet consequat hendrerit. Praesent accumsan mauris eu velit hendrerit, ac tempus est finibus. Sed egestas dapibus dolor, et ullamcorper tellus dignissim ac. Nulla cursus ac nisl ac congue. Mauris egestas ante eu lacus ultrices scelerisque. Donec feugiat, nisl nec sollicitudin scelerisque, nunc felis vulputate orci, et blandit ipsum odio a felis. Nullam sem mauris, tincidunt non ultricies vitae, congue ut metus. Nam non finibus mi.

                                Aenean id augue vitae sapien commodo aliquam. Nam id ipsum eu enim molestie faucibus. Duis sit amet sapien sed metus malesuada mattis. Donec placerat posuere lorem, quis malesuada lorem elementum in. Suspendisse ac leo non mi finibus condimentum id vitae elit. Vestibulum vulputate lacus quis metus cursus convallis. Nulla at lacus egestas, posuere ex sit amet, iaculis nulla. Nunc molestie enim tortor, interdum malesuada arcu interdum non. Sed iaculis velit vitae elementum euismod. Donec pellentesque lorem eu ex facilisis, vitae pretium ipsum lacinia. Aenean ac eros vel ligula dapibus interdum non et arcu. Aliquam vitae mi accumsan velit gravida ornare quis non est. Ut ornare hendrerit risus, id malesuada odio laoreet eu. Nunc varius blandit justo, quis imperdiet lorem lobortis at. Nam ut urna sollicitudin tellus varius fringilla. Vivamus non efficitur velit.

                                In hac habitasse platea dictumst. Maecenas vestibulum aliquam erat eget congue. Duis congue tortor nisl, eu tristique felis varius elementum. Fusce dignissim ligula ut arcu eleifend, sed sollicitudin nulla commodo. Quisque quam ex, suscipit venenatis nisl ac, imperdiet eleifend nisl. Maecenas at justo odio. Nunc pharetra sapien ac dui ultrices vehicula. Ut tortor sem, faucibus in malesuada id, porttitor a massa. Praesent cursus, justo quis ornare mattis, purus nisi euismod lorem, eget consequat magna est in urna. Cras ultrices tincidunt tristique. Vestibulum nisl nisi, condimentum eu mollis sit amet, finibus sit amet turpis. Curabitur sagittis dignissim tellus, sed gravida mi elementum at. Cras semper hendrerit ante eget tristique.

                                Maecenas fermentum, nibh quis consequat consectetur, nunc purus aliquet massa, non varius augue odio vitae massa. Ut faucibus euismod enim, ut cursus velit varius ac. Nullam ultrices, quam et elementum viverra, erat augue faucibus risus, eget vulputate urna metus ac dui. Aliquam dictum luctus fringilla. Aliquam erat volutpat. Pellentesque accumsan, dui vel feugiat mollis, lectus quam consequat metus, vitae tempus sapien dolor nec nisl. Pellentesque ligula sapien, fringilla quis libero pellentesque, gravida convallis ipsum. Morbi iaculis ligula diam, at molestie dolor auctor vitae. Proin luctus luctus ex, id cursus dui egestas vitae. Proin vel egestas massa. Sed eget pharetra augue. Proin hendrerit ante sed turpis convallis, eu ornare augue egestas. In eget lorem est. Nulla facilisi. Nullam molestie tortor congue mauris fringilla porttitor.
                                </p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet nunc lorem, eget luctus urna feugiat ac. Suspendisse potenti. Vestibulum iaculis convallis tortor vel porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam augue dui, vehicula non turpis vitae, sollicitudin consectetur nibh. Mauris venenatis eu massa ac congue. Fusce eu risus et nunc fermentum pharetra rutrum eget erat. Praesent et massa eget est mollis imperdiet. Aenean accumsan semper diam, nec auctor magna ultricies aliquam. Mauris porta tortor ullamcorper, posuere ligula non, varius erat. Praesent scelerisque venenatis nibh et vulputate.

                                Integer id nisl et ligula lacinia pulvinar. Ut vel tortor pharetra, mollis dolor in, congue sapien. Ut placerat nisl eget erat congue, ac tempus sapien sagittis. Curabitur ac vulputate leo. Donec tincidunt elit sit amet consequat hendrerit. Praesent accumsan mauris eu velit hendrerit, ac tempus est finibus. Sed egestas dapibus dolor, et ullamcorper tellus dignissim ac. Nulla cursus ac nisl ac congue. Mauris egestas ante eu lacus ultrices scelerisque. Donec feugiat, nisl nec sollicitudin scelerisque, nunc felis vulputate orci, et blandit ipsum odio a felis. Nullam sem mauris, tincidunt non ultricies vitae, congue ut metus. Nam non finibus mi.

                                Aenean id augue vitae sapien commodo aliquam. Nam id ipsum eu enim molestie faucibus. Duis sit amet sapien sed metus malesuada mattis. Donec placerat posuere lorem, quis malesuada lorem elementum in. Suspendisse ac leo non mi finibus condimentum id vitae elit. Vestibulum vulputate lacus quis metus cursus convallis. Nulla at lacus egestas, posuere ex sit amet, iaculis nulla. Nunc molestie enim tortor, interdum malesuada arcu interdum non. Sed iaculis velit vitae elementum euismod. Donec pellentesque lorem eu ex facilisis, vitae pretium ipsum lacinia. Aenean ac eros vel ligula dapibus interdum non et arcu. Aliquam vitae mi accumsan velit gravida ornare quis non est. Ut ornare hendrerit risus, id malesuada odio laoreet eu. Nunc varius blandit justo, quis imperdiet lorem lobortis at. Nam ut urna sollicitudin tellus varius fringilla. Vivamus non efficitur velit.

                                In hac habitasse platea dictumst. Maecenas vestibulum aliquam erat eget congue. Duis congue tortor nisl, eu tristique felis varius elementum. Fusce dignissim ligula ut arcu eleifend, sed sollicitudin nulla commodo. Quisque quam ex, suscipit venenatis nisl ac, imperdiet eleifend nisl. Maecenas at justo odio. Nunc pharetra sapien ac dui ultrices vehicula. Ut tortor sem, faucibus in malesuada id, porttitor a massa. Praesent cursus, justo quis ornare mattis, purus nisi euismod lorem, eget consequat magna est in urna. Cras ultrices tincidunt tristique. Vestibulum nisl nisi, condimentum eu mollis sit amet, finibus sit amet turpis. Curabitur sagittis dignissim tellus, sed gravida mi elementum at. Cras semper hendrerit ante eget tristique.

                                Maecenas fermentum, nibh quis consequat consectetur, nunc purus aliquet massa, non varius augue odio vitae massa. Ut faucibus euismod enim, ut cursus velit varius ac. Nullam ultrices, quam et elementum viverra, erat augue faucibus risus, eget vulputate urna metus ac dui. Aliquam dictum luctus fringilla. Aliquam erat volutpat. Pellentesque accumsan, dui vel feugiat mollis, lectus quam consequat metus, vitae tempus sapien dolor nec nisl. Pellentesque ligula sapien, fringilla quis libero pellentesque, gravida convallis ipsum. Morbi iaculis ligula diam, at molestie dolor auctor vitae. Proin luctus luctus ex, id cursus dui egestas vitae. Proin vel egestas massa. Sed eget pharetra augue. Proin hendrerit ante sed turpis convallis, eu ornare augue egestas. In eget lorem est. Nulla facilisi. Nullam molestie tortor congue mauris fringilla porttitor.
</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet nunc lorem, eget luctus urna feugiat ac. Suspendisse potenti. Vestibulum iaculis convallis tortor vel porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam augue dui, vehicula non turpis vitae, sollicitudin consectetur nibh. Mauris venenatis eu massa ac congue. Fusce eu risus et nunc fermentum pharetra rutrum eget erat. Praesent et massa eget est mollis imperdiet. Aenean accumsan semper diam, nec auctor magna ultricies aliquam. Mauris porta tortor ullamcorper, posuere ligula non, varius erat. Praesent scelerisque venenatis nibh et vulputate.

                                Integer id nisl et ligula lacinia pulvinar. Ut vel tortor pharetra, mollis dolor in, congue sapien. Ut placerat nisl eget erat congue, ac tempus sapien sagittis. Curabitur ac vulputate leo. Donec tincidunt elit sit amet consequat hendrerit. Praesent accumsan mauris eu velit hendrerit, ac tempus est finibus. Sed egestas dapibus dolor, et ullamcorper tellus dignissim ac. Nulla cursus ac nisl ac congue. Mauris egestas ante eu lacus ultrices scelerisque. Donec feugiat, nisl nec sollicitudin scelerisque, nunc felis vulputate orci, et blandit ipsum odio a felis. Nullam sem mauris, tincidunt non ultricies vitae, congue ut metus. Nam non finibus mi.

                                Aenean id augue vitae sapien commodo aliquam. Nam id ipsum eu enim molestie faucibus. Duis sit amet sapien sed metus malesuada mattis. Donec placerat posuere lorem, quis malesuada lorem elementum in. Suspendisse ac leo non mi finibus condimentum id vitae elit. Vestibulum vulputate lacus quis metus cursus convallis. Nulla at lacus egestas, posuere ex sit amet, iaculis nulla. Nunc molestie enim tortor, interdum malesuada arcu interdum non. Sed iaculis velit vitae elementum euismod. Donec pellentesque lorem eu ex facilisis, vitae pretium ipsum lacinia. Aenean ac eros vel ligula dapibus interdum non et arcu. Aliquam vitae mi accumsan velit gravida ornare quis non est. Ut ornare hendrerit risus, id malesuada odio laoreet eu. Nunc varius blandit justo, quis imperdiet lorem lobortis at. Nam ut urna sollicitudin tellus varius fringilla. Vivamus non efficitur velit.

                                In hac habitasse platea dictumst. Maecenas vestibulum aliquam erat eget congue. Duis congue tortor nisl, eu tristique felis varius elementum. Fusce dignissim ligula ut arcu eleifend, sed sollicitudin nulla commodo. Quisque quam ex, suscipit venenatis nisl ac, imperdiet eleifend nisl. Maecenas at justo odio. Nunc pharetra sapien ac dui ultrices vehicula. Ut tortor sem, faucibus in malesuada id, porttitor a massa. Praesent cursus, justo quis ornare mattis, purus nisi euismod lorem, eget consequat magna est in urna. Cras ultrices tincidunt tristique. Vestibulum nisl nisi, condimentum eu mollis sit amet, finibus sit amet turpis. Curabitur sagittis dignissim tellus, sed gravida mi elementum at. Cras semper hendrerit ante eget tristique.

                                Maecenas fermentum, nibh quis consequat consectetur, nunc purus aliquet massa, non varius augue odio vitae massa. Ut faucibus euismod enim, ut cursus velit varius ac. Nullam ultrices, quam et elementum viverra, erat augue faucibus risus, eget vulputate urna metus ac dui. Aliquam dictum luctus fringilla. Aliquam erat volutpat. Pellentesque accumsan, dui vel feugiat mollis, lectus quam consequat metus, vitae tempus sapien dolor nec nisl. Pellentesque ligula sapien, fringilla quis libero pellentesque, gravida convallis ipsum. Morbi iaculis ligula diam, at molestie dolor auctor vitae. Proin luctus luctus ex, id cursus dui egestas vitae. Proin vel egestas massa. Sed eget pharetra augue. Proin hendrerit ante sed turpis convallis, eu ornare augue egestas. In eget lorem est. Nulla facilisi. Nullam molestie tortor congue mauris fringilla porttitor.
</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet nunc lorem, eget luctus urna feugiat ac. Suspendisse potenti. Vestibulum iaculis convallis tortor vel porttitor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam augue dui, vehicula non turpis vitae, sollicitudin consectetur nibh. Mauris venenatis eu massa ac congue. Fusce eu risus et nunc fermentum pharetra rutrum eget erat. Praesent et massa eget est mollis imperdiet. Aenean accumsan semper diam, nec auctor magna ultricies aliquam. Mauris porta tortor ullamcorper, posuere ligula non, varius erat. Praesent scelerisque venenatis nibh et vulputate.

                                Integer id nisl et ligula lacinia pulvinar. Ut vel tortor pharetra, mollis dolor in, congue sapien. Ut placerat nisl eget erat congue, ac tempus sapien sagittis. Curabitur ac vulputate leo. Donec tincidunt elit sit amet consequat hendrerit. Praesent accumsan mauris eu velit hendrerit, ac tempus est finibus. Sed egestas dapibus dolor, et ullamcorper tellus dignissim ac. Nulla cursus ac nisl ac congue. Mauris egestas ante eu lacus ultrices scelerisque. Donec feugiat, nisl nec sollicitudin scelerisque, nunc felis vulputate orci, et blandit ipsum odio a felis. Nullam sem mauris, tincidunt non ultricies vitae, congue ut metus. Nam non finibus mi.

                                Aenean id augue vitae sapien commodo aliquam. Nam id ipsum eu enim molestie faucibus. Duis sit amet sapien sed metus malesuada mattis. Donec placerat posuere lorem, quis malesuada lorem elementum in. Suspendisse ac leo non mi finibus condimentum id vitae elit. Vestibulum vulputate lacus quis metus cursus convallis. Nulla at lacus egestas, posuere ex sit amet, iaculis nulla. Nunc molestie enim tortor, interdum malesuada arcu interdum non. Sed iaculis velit vitae elementum euismod. Donec pellentesque lorem eu ex facilisis, vitae pretium ipsum lacinia. Aenean ac eros vel ligula dapibus interdum non et arcu. Aliquam vitae mi accumsan velit gravida ornare quis non est. Ut ornare hendrerit risus, id malesuada odio laoreet eu. Nunc varius blandit justo, quis imperdiet lorem lobortis at. Nam ut urna sollicitudin tellus varius fringilla. Vivamus non efficitur velit.

                                In hac habitasse platea dictumst. Maecenas vestibulum aliquam erat eget congue. Duis congue tortor nisl, eu tristique felis varius elementum. Fusce dignissim ligula ut arcu eleifend, sed sollicitudin nulla commodo. Quisque quam ex, suscipit venenatis nisl ac, imperdiet eleifend nisl. Maecenas at justo odio. Nunc pharetra sapien ac dui ultrices vehicula. Ut tortor sem, faucibus in malesuada id, porttitor a massa. Praesent cursus, justo quis ornare mattis, purus nisi euismod lorem, eget consequat magna est in urna. Cras ultrices tincidunt tristique. Vestibulum nisl nisi, condimentum eu mollis sit amet, finibus sit amet turpis. Curabitur sagittis dignissim tellus, sed gravida mi elementum at. Cras semper hendrerit ante eget tristique.

                                Maecenas fermentum, nibh quis consequat consectetur, nunc purus aliquet massa, non varius augue odio vitae massa. Ut faucibus euismod enim, ut cursus velit varius ac. Nullam ultrices, quam et elementum viverra, erat augue faucibus risus, eget vulputate urna metus ac dui. Aliquam dictum luctus fringilla. Aliquam erat volutpat. Pellentesque accumsan, dui vel feugiat mollis, lectus quam consequat metus, vitae tempus sapien dolor nec nisl. Pellentesque ligula sapien, fringilla quis libero pellentesque, gravida convallis ipsum. Morbi iaculis ligula diam, at molestie dolor auctor vitae. Proin luctus luctus ex, id cursus dui egestas vitae. Proin vel egestas massa. Sed eget pharetra augue. Proin hendrerit ante sed turpis convallis, eu ornare augue egestas. In eget lorem est. Nulla facilisi. Nullam molestie tortor congue mauris fringilla porttitor.
</p>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
                {/* <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                    <div className="container-fluid">
                        <a className="navbar-brand">IT Dashboard</a>
                    </div>
                </nav>
                <nav className="navbar navbar-light">
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Active</a>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#lists-collapse" aria-expanded="false">
                                Lists
                            </button>
                            <div className="collapse" id="lists-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="link-dark rounded">Telephone List</a></li>
                                    <li><a href="#" className="link-dark rounded">Notebook List</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#users-collapse" aria-expanded="false">
                                Users
                            </button>
                            <div className="collapse" id="users-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="link-dark rounded">New...</a></li>
                                    <li><a href="#" className="link-dark rounded">Profile</a></li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="border-top my-3"></li>
                    </ul>
                </nav> */}
            </>
        )
    }
}
