import React, { useState } from 'react'

// React ICON
import { FaUser, FaKey } from 'react-icons/fa'

import TBlogo from '../../img/turkishbank.png';
import bgPicture from '../../img/death-star.jpg'
import './Login.css'

import { loginUser } from "../../_actions/user_actions";
import { useDispatch } from "react-redux";

function Login(props) {

    const [input, setInput] = useState(initialState)

    const dispatch = useDispatch();

    onSubmitChangeHandler = (values, { setSubmitting }) => {
        setTimeout(() => {
            let dataToSubmit = {
                email: values.email,
                password: values.password
            };

            dispatch(loginUser(dataToSubmit))
                .then(response => {
                    if (response.payload.loginSuccess) {
                        props.history.push("/");
                    } else {
                        setFormErrorMessage('Check out your Account or Password again')
                    }
                })
                .catch(err => {
                    setFormErrorMessage('Check out your Account or Password again')
                    setTimeout(() => {
                        setFormErrorMessage("")
                    }, 3000);
                });
            setSubmitting(false);
        }, 500);
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
                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-append">
                                        <span className="input-group-text m-1"><FaUser /></span>
                                    </div>
                                    <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                                </div>
                                <div className="input-group mb-2">
                                    <div className="input-group-append">
                                        <span className="input-group-text m-1"><FaKey /></span>
                                    </div>
                                    <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                </div>
                                <div className="d-flex justify-content-center m-3">
                                    <button className="btn btn-lg btn-block" style={{ background: 'rgba(220, 97, 20, 0.65)' }} type="submit">Sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login