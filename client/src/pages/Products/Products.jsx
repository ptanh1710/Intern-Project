import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
// import {  Routes, Route } from 'react-router-dom';

import style from './Product.module.scss';
import { useShopContext } from '../../hooks/useShopContext';
import Category from './Category';

const cx = classNames.bind(style);

function Products() {
    const { categories, fetchCategory, products, fetchProduct } =
        useShopContext();
    console.log(categories, products);

    useEffect(() => {
        fetchCategory();
        fetchProduct();
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h1>Products</h1>
                <div className={cx('content')}>
                    <div className={cx('left')}>
                        <div className={cx('left-content')}>
                            <Category data={categories} />
                        </div>
                    </div>
                    <div className={cx('right')}>render product</div>
                </div>
            </div>
        </div>
    );
}

export default Products;
