import React, { useState } from 'react'

// React ICON
import { FaUser, FaKey } from 'react-icons/fa'

import TBlogo from '../../img/turkishbank.png';
import bgPicture from '../../img/death-star.jpg'
import './Login.css'
import { withRouter } from 'react-router-dom'
import { loginUser } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";

function Login(props) {

    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const { email, password } = inputs;
    const dispatch = useDispatch();

    function onSubmitChangeHandler(e) {
        e.preventDefault()
        setTimeout(() => {
            let dataToSubmit = {
                email: email,
                password: password
            };

            dispatch(loginUser(dataToSubmit))
                .then(response => {                                            
                    if (response.payload.loginSuccess) {
                        window.location.reload()
                        props.history.push("/");
                    } else {
                        alert('Check out your Account or Password again')
                    }
                })
                .catch(err => {
                    alert('Check out your Account or Password again')
                });
        }, 500)
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setInputs(inputs => ({ ...inputs, [name]: value }));
    }

    return (
        <div
            style={{
                width: '100%',
                height: '88.5vh',
                backgroundImage: `url(${bgPicture})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
            <div className="d-flex justify-content-center">
                <div className="card-group">
                    <div style={{
                        background: 'rgba(220, 97, 20, 0.25)',
                        boxShadow: '0 8px 32px 0 rgba(31, 38 135, 0.37)',
                        backdropFilter: 'blur(3px)',
                        border: '2px solid transparent',
                        borderRadius: '10px'
                    }}>
                        <div className="d-flex justify-content-center">
                            <div className="m-2">
                                <img className="rounded-circle mb-4" src={TBlogo} alt="tblogo" width="150" height="150" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-center m-3">
                            <form onSubmit={onSubmitChangeHandler}>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text m-1"><FaUser /></span>
                                    </div>
                                    <input onChange={handleChange} name="email" value={email} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                                </div>
                                <div className="input-group mb-2">
                                    <div className="input-group-append">
                                        <span className="input-group-text m-1"><FaKey /></span>
                                    </div>
                                    <input type="password" name="password" value={password} onChange={handleChange} id="inputPassword" className="form-control" placeholder="Password" required />
                                </div>
                                <div className="d-flex justify-content-center m-3">
                                    <button className="btn btn-lg btn-block" style={{ background: 'rgba(220, 97, 20, 0.65)' }} type="submit" onSubmit={onSubmitChangeHandler}>Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(Login)