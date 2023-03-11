import React, { useRef, useState } from 'react';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
// Toast Import
import { toast } from 'react-toastify';

import styles from '../Brand.module.scss';
import TextField from '../../../components/TextField/TextField';
import Button from '../../../components/Button/Button';
import brandsApi from '../../../api/brands';

const cx = classNames.bind(styles);

function Create() {
    const nameRef = useRef();
    const phoneRef = useRef();
    const emailRef = useRef();
    const statuslRef = useRef();

    const navigate = useNavigate();

    const [errors, setErrors] = useState({});

    const handleCreate = (e) => {
        e.preventDefault();

        const payload = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            status: statuslRef.current.checked,
        };
        brandsApi
            .add(payload)
            .then((response) => {
                toast.success(response.data.message, {
                    position: 'top-right',
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
                navigate('/brands');
            })
            .catch((error) => {
                if (error.response) {
                    setErrors(error.response.data.errors);

                    toast.warning('Data is wrong ', {
                        position: 'top-right',
                        autoClose: 1500,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                }
                console.log(error);
            });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h4>Create Brand</h4>
                <form onSubmit={handleCreate}>
                    <TextField
                        name="name"
                        type="text"
                        label="Name"
                        placeholder="Cong ty ABC ..."
                        ref={nameRef}
                    />
                    <TextField
                        name="phone"
                        type="text"
                        label="Phone Number"
                        placeholder="12314641..."
                        ref={phoneRef}
                    />
                    <TextField
                        name="email"
                        type="email"
                        label="Email Contact"
                        placeholder="congtyabc@gmail.com"
                        ref={emailRef}
                    />
                    <div
                        style={{
                            marginBottom: '0.5rem',
                        }}
                    >
                        <label>
                            Status{' '}
                            <input
                                type="checkbox"
                                name="status"
                                ref={statuslRef}
                            />
                        </label>
                    </div>
                    <Button type="submit" large primary>
                        Create a new Brand
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Create;
