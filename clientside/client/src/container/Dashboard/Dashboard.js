import React, { Component } from 'react'
import { BsBackspace } from 'react-icons/bs'

export default class Dashboard extends Component {
    render() {

        const routeChange = () =>{ 
            this.props.history.push("/");
            window.location.reload()
          }

        return (
            <>
                <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                    <div className="container-fluid">
                        <a className="navbar-brand"><BsBackspace onClick={routeChange} className="me-2" />IT Dashboard</a>
                        <li className="d-flex">
                            <h4>Logout</h4>
                        </li>
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
                </nav>
            </>
        )
    }
}
