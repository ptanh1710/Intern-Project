import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';

import styles from '../Signin/SignIn.module.scss';
import TextField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import Img from '../../assets/1170176.jpg';
import { Link } from 'react-router-dom';
import axiosClient from '../../api/axiosClient';
import { useLoginContext } from '../../hooks/useLoginContext';

const cx = classNames.bind(styles);

function SignUp() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passConfrimRef = useRef();
    const [errors, setErrors] = useState({});

    const { setUser, setToken } = useLoginContext();
    const handleRegister = (e) => {
        e.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passConfrimRef.current.value,
        };
        axiosClient
            .post('/register', payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch((error) => {
                if (error.response) {
                    setErrors(error.response.data.errors);
                }
                console.log(error);
            });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h4>Register Dashboard</h4>
                <form onSubmit={handleRegister}>
                    <TextField
                        name="name"
                        type="text"
                        label="Name"
                        ref={nameRef}
                        error={errors.name && true}
                        errorText={errors.name && errors.name[0]}
                    />
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
                        errorText={
                            errors.password &&
                            errors.password.map((err, index) => (
                                <>
                                    {index + 1} - {err} <br />
                                </>
                            ))
                        }
                    />
                    <TextField
                        name="password-confirmation"
                        type="password"
                        label="Password Confirmation"
                        ref={passConfrimRef}
                        error={errors.password && true}
                    />
                    <Button type="submit" primary large>
                        Register
                    </Button>
                    <div className={cx('options')}>
                        <span>Or</span>
                        <Link to="/login">Login</Link>
                    </div>
                </form>
            </div>
            <div className={cx('image')}>
                <img src={Img} alt="logo" />
            </div>
        </div>
    );
}

export default SignUp;
