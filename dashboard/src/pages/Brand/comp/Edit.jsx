import React from 'react';
import classNames from 'classnames/bind';

import styles from '../Brand.module.scss';
import TextField from '../../../components/TextField/TextField';
import Button from '../../../components/Button/Button';

const cx = classNames.bind(styles);

function Edit() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <h4>Edit Brand</h4>
                <form>
                    <TextField
                        name="name"
                        type="text"
                        label="Name"
                        placeholder="Cong ty ABC ..."
                    />
                    <TextField
                        name="phone"
                        type="text"
                        label="Phone Number"
                        placeholder="12314641..."
                    />
                    <TextField
                        name="email"
                        type="email"
                        label="Email Contact"
                        placeholder="congtyabc@gmail.com"
                    />
                    <Button>Update Brand</Button>
                </form>
            </div>
        </div>
    );
}

export default Edit;
