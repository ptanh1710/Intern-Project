import React, { useEffect, useMemo, useState } from 'react';
import classNames from 'classnames/bind';
// import {  Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import style from './Product.module.scss';
import { useShopContext } from '../../hooks/useShopContext';
import Category from './Category';
import Pagination from '../../components/Pagination/Pagination';

const cx = classNames.bind(style);
let PageSize = 6;

function Products() {
    const { categories, fetchCategory, products, fetchProducts } =
        useShopContext();

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return products.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, products]);

    useEffect(() => {
        fetchCategory();
        fetchProducts();
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
                    <div className={cx('right')}>
                        <div className={cx('row')}>
                            {currentTableData.map((item) => (
                                <div className={cx('col')} key={item.id}>
                                    <div className={cx('single')}>
                                        <div className={cx('image')}>
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                            />
                                            <div className={cx('icon')}>
                                                <Link to={'/'}>
                                                    <FontAwesomeIcon
                                                        icon={faHeart}
                                                    />
                                                </Link>
                                                <Link to={'/'}>
                                                    <FontAwesomeIcon
                                                        icon={faShoppingCart}
                                                    />
                                                </Link>
                                            </div>
                                        </div>
                                        <div className={cx('body')}>
                                            <Link
                                                to={`/product/${item.id}/detail`}
                                            >
                                                <h4 title={item.title}>
                                                    {item.title}
                                                </h4>
                                                <p>{item.price} đ</p>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Pagination
                            className="pagination-bar"
                            currentPage={currentPage}
                            totalCount={products.length}
                            pageSize={PageSize}
                            onPageChange={(page) => setCurrentPage(page)}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
