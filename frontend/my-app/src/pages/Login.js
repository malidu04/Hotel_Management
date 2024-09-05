import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const { login, error, isLoading } = useLogin();

    const validateEmail = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address');
            return false;
        } else {
            setEmailError('');
            return true;
        }
    };

    const validatePassword = () => {
        if(password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
            return false;
        } else {
            setPasswordError('');
            return true;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(validateEmail() && validatePassword()) {
            await login(email, password);
        }
    };

    return (
        <div className='container card mt-5 mb-5'>
            <div className="row container">
                <div className="col-6 mt-2 p-3 mb-5 border-end border-dark">
                    <img
                        src="https://www.pexels.com/photo/palm-trees-at-night-258154/"
                        className="rounded"
                        width={500}
                        height={500}
                        alt="user login"
                    />
                </div>
                <div className="col-6">
                    <form className="p-5 ,t-5 mb-5" onSubmit={handleSubmit}>
                        <h3 className="text-center">Login</h3>
                        <hr />
                        <label>Email Address: </label>
                        <input
                            className={`form-control mb-3 ${emailError ? 'is-invalid' : ''}`}
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
};

export default Login;