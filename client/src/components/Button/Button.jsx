import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import style from './Button.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function Button({ to, href, iconLeft, iconRight, children, ...passprops }) {
    let Component = 'button';

    const props = {
        ...passprops,
    };

    if (to) {
        Component = Link;
        props.to = to;
    } else if (href) {
        Component = 'a';
        props.href = href;
    }

    const classes = cx('wrapper', {});

    return (
        <Component className={classes}>
            {iconLeft && <span className={cx('icon')}>{iconLeft}</span>}
            <span className={cx('title')}>{children}</span>
            {iconRight && <span className={cx('icon')}>{iconRight}</span>}
        </Component>
    );
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    iconLeft: PropTypes.element,
    iconRight: PropTypes.element,
};

export default Button;
