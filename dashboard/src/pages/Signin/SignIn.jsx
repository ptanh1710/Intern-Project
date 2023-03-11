import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import styles from './SignIn.module.scss';
import TextField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import Img from '../../assets/1170176.jpg';
import axiosClient from '../../api/axiosClient';
import { useLoginContext } from '../../hooks/useLoginContext';

const cx = classNames.bind(styles);

function SignIn() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const toastId = useRef(null);
    const [errors, setErrors] = useState({});

    const { setUser, setToken } = useLoginContext();

    const handleLogin = (e) => {
        e.preventDefault();
        toastId.current = toast.loading('Loading...');
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        };

        axiosClient
            .post('/login', payload)
            .then((response) => {
                toast.update(toastId.current, {
                    render: 'Login successfully',
                    type: 'success',
                    isLoading: false,
                    autoClose: 1500,
                });
                if (response.status === 200) {
                    setUser(response.data.user);
                    setToken(response.data.token);
                }
            })
            .catch((error) => {
                toast.update(toastId.current.value, {
                    render: 'Error ',
                    type: 'error',
                    isLoading: false,
                    autoClose: 1500,
                });
                if (error.response) {
                    setErrors(error.response.data.errors);
                }
                console.log(error);
            });
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('image')}>
                    <img src={Img} alt="logo" />
                </div>
                <div className={cx('container')}>
                    <h4>Sign In Dashboard</h4>
                    <form onSubmit={handleLogin}>
                        <TextField
                            name="email"
                            type="email"
                            label="Email Address"
                            ref={emailRef}
                            error={errors.email && true}
                            errorText={errors.email && errors.email[0]}
                        />
                        <TextField
                            name="password"
                            type="password"
                            label="Password"
                            ref={passwordRef}
                            error={errors.password && true}
                            errorText={errors.password && errors.password[0]}
                        />
                        <Button type="submit" primary large>
                            Sign In
                        </Button>

                        <div className={cx('options')}>
                            <span>Or</span>
                            <Link to="/register">Register</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignIn;
