import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

// CSS 
import TBlogo from '../../../img/turkishbank.png';
import './App.css'

// ANTD 
import { Layout, Menu } from 'antd';
import 'antd/dist/antd.css'

export default class Navbar extends Component {

    render() {

        // const { Header, Content, Footer } = Layout;

        const logoutHandler = () => {
            axios.get("/api/users/logout").then(response => {
                if (response.status === 200) {
                    localStorage.removeItem("user")
                    window.location.reload()
                } else {
                    alert('Log Out Failed')
                }
            });
        }

        let isUser = localStorage.getItem("user")
        if (isUser) {
            return (
                <div className="fixed-top">
                    <div className="logo"></div>
                    <Menu style={{ paddingTop: "1rem", paddingBottom: "1rem" }} theme="light" mode="horizontal">
                        <Menu.Item key="1"><img src={TBlogo} className="AppLogo" alt="tblogo" /></Menu.Item>
                        <Menu.Item key="2"><Link to="/">Home</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/telephonelist">Telephone List</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/blog">TBUK Blog</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/dashboard">Dashboard</Link></Menu.Item>
                        <Menu.Item key="7" className="ms-auto"><Link onClick={() => logoutHandler()} to="/">Logout</Link></Menu.Item>
                    </Menu>
                </div>
            )
        } else {
            return (
                <div className="fixed-top">
                    <div className="logo"></div>
                    <Menu style={{ paddingTop: "1rem", paddingBottom: "1rem" }} theme="light" mode="horizontal">
                        <Menu.Item  key="1"><img src={TBlogo} className="AppLogo" alt="tblogo" /></Menu.Item>
                        <Menu.Item key="2"><Link to="/">Home</Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/telephonelist">Telephone List</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/blog">TBUK Blog</Link></Menu.Item>
                        <Menu.Item key="5"><Link to="/blog/create">TBUK Blog Create</Link></Menu.Item>
                    </Menu>
                </div>
            )
        }
        // <nav className="navbar card navbar-expand-lg navbar-light bg-light m-2">
        //     <div className="container-fluid">
        //         <img src={TBlogo} className="AppLogo" alt="tblogo" />
        //         <div className="collapse navbar-collapse ms-3" id="navbarNav">
        //             <ul className="navbar-nav">
        //                 <li className="nav-item">
        //                     <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/telephonelist">Telephone List</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/blog">TBUK Blog</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link className="nav-link" to="/blog/create">TBUK Blog Create</Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <button className="nav-link btn" onClick={() => window.location.reload()}><Link style={{ textDecoration: 'none', color: 'inherit' }} to="/dashboard">Dashboard</Link></button>
        //                 </li>
        //                 <li className="nav-item">
        //                     <button className="nav-link btn" onClick={() => logoutHandler()}><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }} >Logout</Link></button>
        //                 </li>
        //             </ul>
        //         </div>
        //     </div>
        // </nav>
    }
}
