import React from 'react';
import classNames from 'classnames/bind';

import style from './Slider.module.scss'

const cx = classNames.bind(style)

function Slider() {
    return <div className={cx('wrapper')}>Slider</div>;
}

export default Slider;
