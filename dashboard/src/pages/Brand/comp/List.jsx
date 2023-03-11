import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPenToSquare,
    faTrashCan,
    faSquarePlus,
} from '@fortawesome/free-regular-svg-icons';
import { format } from 'date-fns';
import axios from 'axios';

import Button from '../../../components/Button/Button';
import styles from '../Brand.module.scss';
import brandsApi from '../../../api/brands.js';

const cx = classNames.bind(styles);

const tableTHead = [
    {
        title: 'Id',
    },
    {
        title: 'Infomation',
    },
    {
        title: 'Date',
    },
    {
        title: 'Status',
    },
    {
        title: 'Actions',
    },
];

function List() {
    const [brands, setBrands] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const controller = new AbortController();

        const getBrands = async () => {
            try {
                const response = await brandsApi.getAll({
                    signal: controller.signal,
                });
                if (
                    response.status === 200 ||
                    response.data.status === 'success'
                ) {
                    setBrands(response.data.data);
                    setIsLoading(false);
                }
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Cancelled');
                } else throw error;
            }
        };
        getBrands();
        return () => {
            setIsLoading(true);
            controller.abort();
        };
    }, []);

    const handleDeleteItem = (e, id) => {
        e.preventDefault();
        console.log('Deleted', id);
    };

    const handleOnActived = (e, id) => {
        e.preventDefault();
        console.log('is actived', id);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <h4>Brand List</h4>
                    <Button
                        to={'create'}
                        primary
                        leftIcon={<FontAwesomeIcon icon={faSquarePlus} />}
                    >
                        Add brands
                    </Button>
                </div>
                <table cellSpacing={0}>
                    <thead>
                        <tr>
                            {tableTHead.map((item, index) => (
                                <th key={index} scope="col">
                                    {item.title}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading && (
                            <tr>
                                <td>Loading...</td>
                            </tr>
                        )}
                        {brands.map((item, index) => (
                            <tr key={item.id}>
                                <th scope="row">{index + 1}</th>
                                <td>
                                    <div className={cx('infomation')}>
                                        <h4>{item.name}</h4>
                                        <p>
                                            <span>Phone:</span> {item.phone}
                                        </p>
                                        <p>
                                            <span>Email:</span> {item.email}
                                        </p>
                                    </div>
                                </td>
                                <td>
                                    {format(new Date(item.date), 'dd/MM/yyyy')}
                                </td>
                                <td>
                                    {item.status === 1 ? (
                                        <Button
                                            onClick={(e) =>
                                                handleOnActived(e, item.id)
                                            }
                                            success
                                        >
                                            Actived
                                        </Button>
                                    ) : (
                                        <Button
                                            onClick={(e) =>
                                                handleOnActived(e, item.id)
                                            }
                                            warning
                                        >
                                            Unactived
                                        </Button>
                                    )}
                                </td>
                                <td>
                                    <div className={cx('actions')}>
                                        <Button
                                            to={item.id + '/edit'}
                                            primary
                                            leftIcon={
                                                <FontAwesomeIcon
                                                    icon={faPenToSquare}
                                                />
                                            }
                                        >
                                            Edit
                                        </Button>{' '}
                                        <Button
                                            error
                                            onClick={(e) =>
                                                handleDeleteItem(e, item.id)
                                            }
                                            leftIcon={
                                                <FontAwesomeIcon
                                                    icon={faTrashCan}
                                                />
                                            }
                                        >
                                            Delete
                                        </Button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default List;
