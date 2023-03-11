import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faIdCard, faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faArrowRightFromBracket,
    faGear,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
// import { useSpring, motion } from 'framer-motion';
import Button from '../../../components/Button/Button';

import styles from './Header.module.scss';
import { useLoginContext } from '../../../hooks/useLoginContext';
import axiosClient from '../../../api/axiosClient';

const cx = classNames.bind(styles);

const userNavigation = [
    {
        name: 'Your Profile',
        to: '/user',
        icon: <FontAwesomeIcon icon={faIdCard} />,
    },
    {
        name: 'Settings',
        to: '/dashboard',
        icon: <FontAwesomeIcon icon={faGear} />,
    },
];

function Header() {
    const { user, setUser, setToken } = useLoginContext();

    const handleLogout = (e) => {
        e.preventDefault();
        console.log('logout');
        axiosClient.post('/logout').then((response) => {
            setUser({});
            setToken(null);
        });
    };

    return (
        <header className={cx('header')}>
            <div className={cx('search')}></div>
            <div className={cx('content')}>
                <div className={cx('item')}>
                    <FontAwesomeIcon icon={faBell} />
                </div>

                <Tippy
                    interactive={true}
                    zIndex={999}
                    delay={[0, 1280]}
                    render={(attrs) => (
                        <div className={cx('box')} tabIndex="-1" {...attrs}>
                            {userNavigation.map((item, index) => (
                                <div key={index} className={cx('box-item')}>
                                    <Button
                                        to={item.to}
                                        leftIcon={item.icon}
                                        large
                                        className={cx('text')}
                                    >
                                        {item.name}
                                    </Button>
                                </div>
                            ))}
                            <div className={cx('box-item')}>
                                <Button
                                    onClick={handleLogout}
                                    className={cx('text')}
                                    large
                                    leftIcon={
                                        <FontAwesomeIcon
                                            icon={faArrowRightFromBracket}
                                        />
                                    }
                                >
                                    Sign out
                                </Button>
                            </div>
                            <div className={cx('box-arrow_top')} />
                        </div>
                    )}
                >
                    <div className={cx('item')}>
                        {<FontAwesomeIcon icon={faUser} />}{' '}
                        {user.name && user.name}
                    </div>
                </Tippy>
            </div>
        </header>
    );
}

export default Header;
