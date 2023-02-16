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
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
};

const userNavigation = [
    {
        name: 'Your Profile',
        to: '/dashboard',
        icon: <FontAwesomeIcon icon={faIdCard} />,
    },
    {
        name: 'Settings',
        to: '/dashboard',
        icon: <FontAwesomeIcon icon={faGear} />,
    },
    {
        name: 'Sign out',
        to: '/logout',
        icon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
    },
];

function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('search')}></div>
            <div className={cx('content')}>
                <div className={cx('item')}>
                    <FontAwesomeIcon icon={faBell} />
                </div>

                <Tippy
                    interactive={true}
                    render={(attrs) => (
                        <div className={cx('box')} tabIndex="-1" {...attrs}>
                            {userNavigation.map((item, index) => (
                                <div key={index} className={cx('box-item')}>
                                    <Button
                                        to={item.to}
                                        leftIcon={item.icon}
                                        className={cx('text')}
                                    >
                                        {item.name}
                                    </Button>
                                </div>
                            ))}
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
