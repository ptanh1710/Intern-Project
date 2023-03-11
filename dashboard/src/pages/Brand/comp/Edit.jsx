import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import styles from '../Brand.module.scss';
import TextField from '../../../components/TextField/TextField';
import Button from '../../../components/Button/Button';
import axiosClient from '../../../api/axiosClient';

const cx = classNames.bind(styles);

function Edit() {
    const [brand, setBrand] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    let { id } = useParams();

    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const addressRef = useRef();

    useEffect(() => {
        setIsLoading(true);
        const controller = new AbortController();

        async function getBrand() {
            try {
                const res = await axiosClient.get(`/v1/brands/${id}`, {
                    signal: controller.signal,
                });
                if (res.status === 200 || res.data.status === 'success') {
                    setBrand(res.data.data);
                    setIsLoading(false);
                }
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Cancelled');
                } else throw error;
            }
        }

        getBrand();

        return () => {
            setIsLoading(true);
            controller.abort();
        };
    }, [id]);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                {isLoading && <div>Loading...</div>}
                {!isLoading && (
                    <>
                        <h4>Edit Brand</h4>
                        <form>
                            <TextField
                                name="name"
                                type="text"
                                label="Name"
                                ref={nameRef}
                                value={brand.name}
                            />
                            <TextField
                                name="phone"
                                type="text"
                                label="Phone Number"
                                ref={phoneRef}
                                value={brand.phone}
                            />
                            <TextField
                                name="email"
                                type="email"
                                label="Email Contact"
                                ref={emailRef}
                                value={brand.email}
                            />
                            <TextField
                                name="address"
                                type="email"
                                label="Address"
                                multi
                                ref={addressRef}
                            >
                                {brand.address}
                            </TextField>

                            <Button primary large>
                                Update Brand
                            </Button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default Edit;
