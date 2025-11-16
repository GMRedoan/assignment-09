import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className="hero bg-linear-to-b from-white to-blue-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-center">
                    <h1 className="text-5xl font-bold bg-linear-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Welcome to ToyTopia</h1>
                    <p className="py-6 text-gray-500">
                        Enter your account to continue your ToyTopia adventure.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl shadow-blue-500 border border-blue-200">
                    <div className="card-body">
                        <form>
                            <fieldset className="fieldset">
                                <label>Email</label>
                                <input type="email" className="input"
                                name='email' 
                                required
                                placeholder="Email" />
                                {/* password */}
                                <label>Password</label>
                                <input type="password"
                                name='password'
                                required 
                                className="input" placeholder="Password" />
                                <button className="btn bg-linear-to-r from-blue-500 to-purple-600 mt-4 text-white 
                                font-semibold">Login Now</button>
                            </fieldset>
                            <p className='pt-2'>Don't have any Account ! <Link to='/registration'><span className='text-blue-500 font-semibold hover:underline'>Registration</span></Link></p>
                         </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;