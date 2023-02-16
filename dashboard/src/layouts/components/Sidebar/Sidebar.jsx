import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBars,
    faBoxesPacking,
    faCube,
    faHouse,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

import styles from './Sidebar.module.scss';

const cx = classNames.bind(styles);

const menus = [
    {
        title: 'Home',
        to: '/dashboard',
        icon: <FontAwesomeIcon icon={faHouse} />,
    },
    {
        title: 'Brands',
        to: '/brands',
        icon: <FontAwesomeIcon icon={faBoxesPacking} />,
    },
    {
        title: 'Categories',
        to: '/categories',
        icon: <FontAwesomeIcon icon={faCube} />,
    },
];

function Sidebar() {
    return (
        <nav className={cx('sidebar')}>
            <div className={cx('inner')}>
                <div className={cx('header')}>
                    <button className={cx('burger')}>
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                    <h2 className={cx('logo')}>Dashboard</h2>
                </div>
                <nav className={cx('menu')}>
                    {menus.map((menu) => (
                        <NavLink
                            key={menu.title}
                            to={menu.to}
                            className={({ isActive }) =>
                                cx('menu-item', {
                                    active: isActive ? true : false,
                                })
                            }
                        >
                            {menu.icon} <span>{menu.title}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>
        </nav>
    );
}

export default Sidebar;
