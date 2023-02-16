import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';

import { useLoginContext } from '../../hooks/useLoginContext';
import { Header, Sidebar } from '../components';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout() {
    const { token } = useLoginContext();

    if (!token) return <Navigate to="/login" />;

    return (
        <div className={cx('wrapper')}>
            <div className={cx('nav')}>
                <Sidebar />
            </div>
            <div className={cx('container')}>
                <Header />
                <div className={cx('content')}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default DefaultLayout;
