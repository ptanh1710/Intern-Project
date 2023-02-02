import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlus,
    faMinus,
    faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';

import { useShopContext } from '../../hooks/useShopContext';
import style from './Detail.module.scss';

const cx = classNames.bind(style);

function Detail() {
    const { product, fetchProductDetail } = useShopContext();

    let { id } = useParams();

    // Can Clean up Function when id was returned => need additional upgrade
    useEffect(() => {
        fetchProductDetail(id);
    }, [id, fetchProductDetail, product]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('top')}>
                    <div className={cx('image')}>
                        <img src={product.image} alt={product.title} />
                    </div>
                    <div className={cx('info')}>
                        <h4>{product.title}</h4>
                        <div className={cx('')}>
                            <p>
                                Rate <b>{product.rating.rate}</b>
                            </p>
                            <p>
                                Stocking <b>{product.rating.count}</b>
                            </p>
                        </div>
                        <div className={cx('')}>
                            <button>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                            <span className={cx('')}>0</span>
                            <button>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                        </div>
                        <p>
                            Price: <span>{product.price}</span>
                        </p>
                        <button>
                            {' '}
                            <FontAwesomeIcon icon={faShoppingBag} /> Add My Cart
                        </button>
                    </div>
                </div>
                <div className={cx('bottom')}>
                    <table>
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name</td>
                                <td>{product.title}</td>
                            </tr>
                            <tr>
                                <td>Category</td>
                                <td>{product.category}</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>{product.price}</td>
                            </tr>
                            <tr>
                                <td>Rating</td>
                                <td>
                                    Rate: {product.rating.rate} - Count:{' '}
                                    {product.rating.count}
                                </td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td>{product.description}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Detail;
