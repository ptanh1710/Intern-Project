import React from 'react';
import { Outlet } from 'react-router-dom';

function Brand() {
    return (
        <>
            {/* <div>Brand</div> */}
            <Outlet />
        </>
    );
}

export default Brand;
