import React from 'react';
import { Outlet } from 'react-router-dom';
import classNames from 'classnames/bind';
import { Header } from '../components';

import style from './Default.module.scss';

const cx = classNames.bind(style);

function DefaultLayout() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <Header />
                <Outlet />
            </div>
        </div>
    );
}

export default DefaultLayout;
