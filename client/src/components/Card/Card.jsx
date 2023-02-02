import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import style from './Card.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);

// event: handleAdd, handleDetail, handleFavorite

function Card(props) {
    const { data } = props;

    return (
        <div className={cx('single')}>
            <div className={cx('image')}>
                <img src={data.image} alt={data.title} />
                <div className={cx('icon')}>
                    <Link to={'/'}>
                        <FontAwesomeIcon icon={faHeart} />
                    </Link>
                    <Link to={'/'}>
                        <FontAwesomeIcon icon={faShoppingCart} />
                    </Link>
                </div>
            </div>
            <div className={cx('body')}>
                <Link to={`/detail/${data.id}`}>
                    <h4 title={data.title}>{data.title}</h4>
                    <p>{data.price}</p>
                </Link>
            </div>
        </div>
    );
}

Card.propTypes = {
    data: PropTypes.array.isRequired,
};

export default Card;
