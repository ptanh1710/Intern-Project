import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSackDollar,
    faTruck,
    faHeadphonesSimple,
    faShield,
} from '@fortawesome/free-solid-svg-icons';

import style from './InfoPayment.module.scss';

const cx = classNames.bind(style);

const ITEMS = [
    {
        title: 'Money Back Guramtee',
        icon: <FontAwesomeIcon icon={faSackDollar} />,
        descriptrion: 'Shall open divide a one',
    },
    {
        title: 'Free Delivery',
        icon: <FontAwesomeIcon icon={faTruck} />,
        descriptrion: 'Shall open divide a one',
    },
    {
        title: 'Alway Support',
        icon: <FontAwesomeIcon icon={faHeadphonesSimple} />,
        descriptrion: 'Shall open divide a one',
    },
    {
        title: 'Secure Payment',
        icon: <FontAwesomeIcon icon={faShield} />,
        descriptrion: 'Shall open divide a one',
    },
];

function InfoPayment() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('row')}>
                    {ITEMS.map((item, index) => (
                        <div className={cx('col')} key={index}>
                            <div className={cx('feature')}>
                                {item.icon}
                                <h3>{item.title}</h3>
                                <p>{item.descriptrion}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default InfoPayment;
