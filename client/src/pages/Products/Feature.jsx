import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';

import style from './Product.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

// const MOCK_PRODUCT = [
//     {
//         id: 1,
//         name: 'Product1',
//         price: 250000,
//         image: 'https://preview.colorlib.com/theme/eiser/img/product/feature-product/f-p-1.jpg.webp',
//     },
//     {
//         id: 2,
//         name: 'Product2',
//         price: 300000,
//         image: 'https://preview.colorlib.com/theme/eiser/img/product/feature-product/f-p-1.jpg.webp',
//     },
//     {
//         id: 3,
//         name: 'Product3',
//         price: 150000,
//         image: 'https://preview.colorlib.com/theme/eiser/img/product/feature-product/f-p-1.jpg.webp',
//     },
//     {
//         id: 4,
//         name: 'Product4',
//         price: 150000,
//         image: 'https://preview.colorlib.com/theme/eiser/img/product/feature-product/f-p-1.jpg.webp',
//     },
//     {
//         id: 5,
//         name: 'Product5',
//         price: 150000,
//         image: 'https://preview.colorlib.com/theme/eiser/img/product/feature-product/f-p-1.jpg.webp',
//     },
//     {
//         id: 6,
//         name: 'Product6',
//         price: 150000,
//         image: 'https://preview.colorlib.com/theme/eiser/img/product/feature-product/f-p-1.jpg.webp',
//     },
// ];

function FeatureProduct({ products }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <p>Components Title ...</p>
                <div className={cx('row')}>
                    {products.map((item) => (
                        <div className={cx('col')} key={item.id}>
                            <div className={cx('single')}>
                                <div className={cx('image')}>
                                    <img src={item.image} alt={item.title} />
                                    <div className={cx('icon')}>
                                        <Link to={'/'}>
                                            <FontAwesomeIcon icon={faHeart} />
                                        </Link>
                                        <Link to={'/'}>
                                            <FontAwesomeIcon
                                                icon={faShoppingCart}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className={cx('body')}>
                                    <Link to={`/product/${item.id}/detail`}>
                                        <h4 title={item.title}>{item.title}</h4>
                                        <p>{item.price} đ</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

FeatureProduct.propsTypes = {
    products: PropTypes.array.isRequired,
};

export default FeatureProduct;
