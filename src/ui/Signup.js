
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:4001/user/signup', { fullname, email, password });
            navigate('/');
        } catch (err) {
            setError('Error creating account');
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
                                          
                                            <h4 className="mt-1 mb-5 pb-1">Welcome to our Exciting World</h4>
                                        </div>

                                        <form onSubmit={handleSignup}>
                                            <p>Please create your account</p>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="text" id="form3Example1" className="form-control"
                                                    placeholder="Full Name"
                                                    value={fullname}
                                                    onChange={(e) => setFullname(e.target.value)}
                                                    required />
                                                <label className="form-label" htmlFor="form3Example1">Full Name</label>
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="email" id="form3Example2" className="form-control"
                                                    placeholder="Email Address"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required />
                                                <label className="form-label" htmlFor="form3Example2">Email</label>
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <input type="password" id="form3Example3" className="form-control"
                                                    placeholder="Password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required />
                                                <label className="form-label" htmlFor="form3Example3">Password</label>
                                            </div>

                                            <div className="text-center pt-1 mb-5 pb-1">
                                                <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Sign up</button>
                                            </div>

                                            {error && <div className="alert alert-danger mt-3">{error}</div>}

                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">Already have an account?</p>
                                                <Link to="/login">
                                                    <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-danger">Log in</button>
                                                </Link>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">We are more than just a company</h4>
                                        <p className="small mb-0">At UpstartAI, we redefine creativity with a practical edge. Clients love us for our unique blend of imaginative solutions and tangible results. Expect not just quality but a delightful surprise in the returns we deliver. Let's turn your digital dreams into thriving realities. Elevate your business with UpstartAI today!</p>
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

export default Signup;
