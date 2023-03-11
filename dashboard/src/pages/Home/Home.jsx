import React from 'react';
import classNames from 'classnames/bind';
// Toast Import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './Home.module.scss';
import Button from '../../components/Button/Button';

const cx = classNames.bind(styles);

function Home() {
    const handleToggle = () => {
        toast.success('Wow so easy!', {
            position: 'top-right',
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

    return (
        <>
            <div>Dashboard</div>
            <div className={cx('content')}>
                <Button onClick={handleToggle} primary>
                    Toast
                </Button>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
                theme="light"
            />
        </>
    );
}

export default Home;
