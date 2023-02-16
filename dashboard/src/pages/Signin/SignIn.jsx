import React from 'react';
import classNames from 'classnames/bind';

import styles from './SignIn.module.scss';
import TextField from '../../components/TextField/TextField';
import Button from '../../components/Button/Button';
import Img from '../../assets/1170176.jpg';

const cx = classNames.bind(styles);

function SignIn() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('image')}>
                <img src={Img} alt="logo" />
            </div>
            <div className={cx('container')}>
                <h4>Sign In Dashboard</h4>
                <form>
                    <TextField
                        name="email"
                        type="email"
                        label="Email Address"
                    />
                    <TextField
                        name="password"
                        type="password"
                        label="Password"
                    />
                    <Button>Sign In</Button>
                </form>
            </div>
        </div>
    );
}

export default SignIn;
