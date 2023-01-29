import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

import style from './Product.module.scss';

const cx = classNames.bind(style);

const MOCK_PRODUCT = [
    {
        id: 1,
        name: 'Product1',
        price: 250000,
        image: 'https://preview.colorlib.com/theme/eiser/img/product/feature-product/f-p-1.jpg.webp',
    },
    {
        id: 2,
        name: 'Product2',
        price: 300000,
        image: 'https://preview.colorlib.com/theme/eiser/img/product/feature-product/f-p-1.jpg.webp',
    },
    {
        id: 3,
        name: 'Product3',
        price: 150000,
        image: 'https://preview.colorlib.com/theme/eiser/img/product/feature-product/f-p-1.jpg.webp',
    },
];

function FeatureProduct() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <p>Components Title ...</p>
                <div className={cx('row')}>
                    {MOCK_PRODUCT.map((item) => (
                        <div className={cx('col')}>
                            <div className={cx('single')}>
                                <div className={cx('image')}>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className={cx('body')}></div>
                                <div className={cx('icon')}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeatureProduct;
