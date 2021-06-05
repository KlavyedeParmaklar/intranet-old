import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div className="container mb-5"> 
                <div className="m-5">
                    <div className="card">
                        <div className="card-header">Message from HR!</div>
                        <h4 className="m-2 card-title">Special title treatment</h4>
                        <p className="ms-3 card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-5">
                        <div className="col-md-4">Paygate</div>
                        <div className="col-md-4">Policy Hub</div>
                        <div className="col-md-4">Cifas</div>
                    </div>
                    <div className="col-md-5">
                        <div className="col-md-4">BOE</div>
                        <div className="col-md-4">Equifax</div>
                        <div className="col-md-4">Turkishbank Kurumsal</div>
                    </div>
                </div>
            </div>
        )
    }
}
