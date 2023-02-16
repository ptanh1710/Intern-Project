import React from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Button from '../../../components/Button/Button';
import styles from '../Brand.module.scss';

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

const MOCK_DATA = [
    {
        id: 1,
        name: 'CTY 1001212',
        email: 'test@example.com',
        phone: '123-456-789',
        date: '02/12/2020',
        status: 1,
    },
    {
        id: 2,
        name: 'CTY 100135656',
        email: 'test@example.com',
        phone: '123-456-789',
        date: '06/30/2021',
        status: 0,
    },
    {
        id: 3,
        name: 'CTY 1001212',
        email: 'test@example.com',
        phone: '123-456-789',
        date: '02/12/2020',
        status: 1,
    },
    {
        id: 4,
        name: 'CTY 100135656',
        email: 'test@example.com',
        phone: '123-456-789',
        date: '06/30/2021',
        status: 0,
    },
];

function List() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('header')}>
                    <h4>Brand List</h4>
                    <Button to={'create'}>Add brands</Button>
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
                        {MOCK_DATA.map((item, index) => (
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
                                <td>{item.date}</td>
                                <td>
                                    {item.status === 1
                                        ? 'Actived'
                                        : 'Unactived'}
                                </td>
                                <td>
                                    <Button to={item.id + '/edit'}>Edit</Button>{' '}
                                    <Button>Delete</Button>
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
