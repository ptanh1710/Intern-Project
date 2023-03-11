import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleCheck,
    faCircleXmark,
} from '@fortawesome/free-regular-svg-icons';
import {
    faTriangleExclamation,
    faCircleExclamation,
    faXmark,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Toast.module.scss';

const cx = classNames.bind(styles);

// Include: success (faCircleCheck), warning (faTriangleExclamation),
//          error (faCircleXmark) , info (faCircleExclamation)

function Toast(props) {
    const { label, message, type } = props;

    const _type = (type) => {
        switch (type) {
        }
    };

    return <div>Toast</div>;
}

Toast.propTypes = {
    label: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};

export default Toast;
