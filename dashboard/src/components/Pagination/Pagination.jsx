import React from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleLeft,
    faAngleRight,
    faAnglesRight,
    faAnglesLeft,
} from '@fortawesome/free-solid-svg-icons';

import { usePagination, DOTS } from '../../hooks/usePagination';
import style from './Pagination.module.scss';

const cx = classNames.bind(style);
const Pagination = (props) => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className,
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize,
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    const onFirstPage = () => {
        onPageChange((prev) => (prev = 1));
    };

    const onLastPage = () => {
        onPageChange((prev) => (prev = lastPage));
    };

    let lastPage = paginationRange[paginationRange.length - 1];
    return (
        <ul
            className={cx('pagination-container', {
                [className]: className,
            })}
        >
            <li
                className={cx('pagination-item', {
                    disabled: currentPage === 1,
                })}
                onClick={onFirstPage}
            >
                <FontAwesomeIcon icon={faAnglesLeft} />
            </li>
            <li
                className={cx('pagination-item', {
                    disabled: currentPage === 1,
                })}
                onClick={onPrevious}
            >
                <div className="arrow left">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </div>
            </li>
            {paginationRange.map((pageNumber) => {
                if (pageNumber === DOTS) {
                    return (
                        <li className="pagination-item dots" key={pageNumber}>
                            &#8230;
                        </li>
                    );
                }

                return (
                    <li
                        key={pageNumber}
                        className={cx('pagination-item', {
                            selected: pageNumber === currentPage,
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </li>
                );
            })}
            <li
                className={cx('pagination-item', {
                    disabled: currentPage === lastPage,
                })}
                onClick={onNext}
            >
                <div className="arrow right">
                    <FontAwesomeIcon icon={faAngleRight} />
                </div>
            </li>
            <li
                className={cx('pagination-item', {
                    disabled: currentPage === lastPage,
                })}
                onClick={onLastPage}
            >
                <div className="arrow right">
                    <FontAwesomeIcon icon={faAnglesRight} />
                </div>
            </li>
        </ul>
    );
};

export default Pagination;
