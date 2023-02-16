import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useLoginContext } from '../../hooks/useLoginContext';

function GuestLayout() {
    const { token, user } = useLoginContext();

    if (token) return <Navigate to="/dashboard" />;
    return (
        <div
            style={{
                backgroundColor: 'rgb(237, 237, 237)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                height: '100vh',
            }}
        >
            <Outlet />
        </div>
    );
}

export default GuestLayout;
