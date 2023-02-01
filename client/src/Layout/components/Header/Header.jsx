import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faGoogle,
} from '@fortawesome/free-brands-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

const SOCIAL_URL = [
    {
        name: 'Facebook',
        icon: <FontAwesomeIcon icon={faFacebook} />,
        href: 'https://www.facebook.com',
    },
    {
        name: 'Twitter',
        icon: <FontAwesomeIcon icon={faTwitter} />,
        href: 'https://twitter.com/',
    },
    {
        name: 'Instagram',
        icon: <FontAwesomeIcon icon={faInstagram} />,
        href: 'https://www.instagram.com/',
    },
    {
        name: 'Google',
        icon: <FontAwesomeIcon icon={faGoogle} />,
        href: 'https://www.google.com',
    },
];

function Header(props) {
    let cartItems = 2;

    return (
        <header className={cx('header')}>
            <div className={cx('container')}>
                <div className={cx('top')}>
                    <div className={cx('social-links')}>
                        {SOCIAL_URL.map((social, index) => (
                            <div className={cx('social')} key={index}>
                                <a
                                    href={social.href}
                                    title={social.name}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {social.icon}
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className={cx('user')}>
                        <Link to={'/login'}>Login</Link>
                    </div>
                </div>
                <div className={cx('bottom')}>
                    <div className={cx('logo')}>
                        <Link to={'/'}>SC-Shop</Link>
                    </div>
                    <div className={cx('menu')}>
                        <div className={cx('menu-item')}>
                            <Link to={'/'}>Home</Link>
                        </div>
                        <div className={cx('menu-item')}>
                            <Link to={'/products'}>Products</Link>
                        </div>
                        <div className={cx('menu-item')}>
                            <Link to={'/contact'}>Contact</Link>
                        </div>
                        <div className={cx('menu-item')}>
                            <Link to={'/cart'}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </Link>
                            {cartItems > 0 && (
                                <span className={cx('cart')}>0</span>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

Header.propTypes = {};

export default Header;
