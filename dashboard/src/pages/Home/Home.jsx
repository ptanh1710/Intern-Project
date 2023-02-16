import React from 'react';
import classNames from 'classnames/bind';

import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <>
            <div>Dashboard</div>
            <div className={cx('content')}></div>
        </>
    );
}

export default Home;
