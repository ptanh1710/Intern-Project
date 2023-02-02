import React, { useEffect } from 'react';
import classNames from 'classnames/bind';

import style from './Home.module.scss';
import { HomeSlider, HomeInfoPayment } from './comps';
import FeatureProduct from '../Products/Feature';
import { useShopContext } from '../../hooks/useShopContext';
// import FeatureBlog from '../Blog/Feature';
const cx = classNames.bind(style);

function Home() {
    const { products, fetchProducts } = useShopContext();

    useEffect(() => {
        fetchProducts({ limit: 6 });
    }, []);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <HomeSlider />
                <HomeInfoPayment />
                <FeatureProduct products={products} />
                {/* <FeatureBlog /> */}
            </div>
        </div>
    );
}

export default Home;
