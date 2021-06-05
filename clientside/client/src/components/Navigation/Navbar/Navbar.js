import React, { Component } from 'react'
import { Link } from 'react-router-dom'

// CSS 
import TBlogo from '../../../img/turkishbank.png';
import './App.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar card navbar-expand-lg navbar-light bg-light m-2">
                <div className="container-fluid">
                    <img src={TBlogo} className="AppLogo" alt="tblogo" />
                    <div className="collapse navbar-collapse ms-3" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/telephonelist">Telephone List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">TBUK Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog/create">TBUK Blog Create</Link>
                            </li>
                            <li className="nav-item">
                            <button className="nav-link btn" onClick={() => window.location.reload()}><Link style={{textDecoration: 'none', color: 'inherit'}} to="/dashboard">Dashboard</Link></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
