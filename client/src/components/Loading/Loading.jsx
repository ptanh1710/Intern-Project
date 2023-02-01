import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckLoading } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import style from './Loading.module.scss';

const cx = classNames.bind(style);

function Loading() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <FontAwesomeIcon icon={faTruckLoading} />
                <h6>Loading...</h6>
            </div>
        </div>
    );
}

export default Loading;
