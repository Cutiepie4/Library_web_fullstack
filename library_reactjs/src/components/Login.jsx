import React from 'react';
import backgroundImage from '../assets/images/background.jpg'
import '../styles/login.scss';

function Login(props) {

    const styles = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
    };

    return (
        <div style={styles}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section">BOOK LIBRARY</h2>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="login-wrap p-0">
                            <h3 className="mb-4 text-center">Have an account?</h3>
                            <form action="#" className="signin-form">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder="Username" required />
                                </div>
                                <div className="form-group">
                                    <input id="password-field" type="password" className="form-control" placeholder="Password" required />
                                    <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="form-control btn btn-primary submit px-3">Sign In</button>
                                </div>
                                <div className="form-group d-md-flex">
                                    <div className="w-50">
                                        <label className="checkbox-wrap checkbox-primary">Remember Me
                                            <input type="checkbox" checked />
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <div className="w-50 text-md-right">
                                        <a href="/register" style={{ color: "#fff" }}>Register</a>
                                    </div>
                                </div>
                            </form>
                            <p className="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
                            <div className="social d-flex text-center">
                                <a href="manager-login" className="px-2 py-2 mr-md-1 rounded"><span className="mr-2"></span>Manager</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;