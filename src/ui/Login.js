// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4001/user/login', { email, password });
            localStorage.setItem('token', response.data.token);
            navigate('/');
        } catch (err) {
            setError('Invalid credentials');
        }
    };

    return (
        <section className="h-100 gradient-form" style={{ backgroundColor: '#eee' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">
                                        <div className="text-center">
                                            
                                            <h4 className="mt-1 mb-5 pb-1">We are The UpstartAI Team</h4>
                                        </div>

                                        <form onSubmit={handleLogin}>
                                            <p>Please login to your account</p>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="email" id="form2Example11" className="form-control"
                                                    placeholder="Phone number or email address" 
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required/>
                                                <label className="form-label" htmlFor="form2Example11">Username</label>
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="password" id="form2Example22" className="form-control"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required/>
                                                <label className="form-label" htmlFor="form2Example22">Password</label>
                                            </div>
                                               
                                            <div className="text-center pt-1 mb-5 pb-1">
                                            <Link to="/">
                                                <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Log in</button>
                                            </Link>
                                            </div>

                                            {error && <div className="alert alert-danger mt-3">{error}</div>}

                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">Don't have an account?</p>
                                                <Link to="/signup">
                                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-danger">Create new</button>
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">We are more than just a company</h4>
                                        <p className="small mb-0">Welcome to UpstartAI, where reality meets innovation in the digital world! We're a team of wildly creative minds fused with deep technological expertise. Specializing in website development, redesigning, social media management, email campaigns, SEO, digital marketing, e-commerce, and content creation, we've honed our craft through diverse client collaborations and top-tier institute insights.
                                      </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Login
