import React from 'react';
import classNames from 'classnames/bind';

import style from './Home.module.scss';
import { HomeSlider, HomeInfoPayment } from './comps';
import FeatureProduct from '../Products/Feature';
// import FeatureBlog from '../Blog/Feature';
const cx = classNames.bind(style);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <HomeSlider />
                <HomeInfoPayment />
                <FeatureProduct />
                {/* <FeatureBlog /> */}
            </div>
        </div>
    );
}

export default Home;
