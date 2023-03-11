import { createBrowserRouter, Navigate } from 'react-router-dom';
import { DefaultLayout, GuestLayout } from '../layouts';
import { Brand, Category, Home, SignIn, SignUp, User } from '../pages';

// Child Pages
import {
    List as BrandList,
    Create as BrandCreate,
    Edit as BrandEdit,
} from '../pages/Brand/comp';

export const router = createBrowserRouter([
    // Layout Default
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to="/dashboard" />,
            },
            {
                path: '/dashboard',
                element: <Home />,
            },
            {
                path: '/user',
                element: <User />,
            },
            {
                path: '/brands/*',
                element: <Brand />,
                children: [
                    {
                        path: 'list',
                        element: <Navigate to="/brands" />,
                    },
                    {
                        path: '',
                        element: <BrandList />,
                    },
                    {
                        path: 'create',
                        element: <BrandCreate />,
                    },
                    {
                        path: ':id/edit',
                        element: <BrandEdit />,
                    },
                ],
            },
            {
                path: '/categories',
                element: <Category />,
            },
        ],
    },

    // Layout Guest
    {
        path: '/',
        element: <GuestLayout />,
        children: [
            {
                path: '/login',
                element: <SignIn />,
            },
            {
                path: '/register',
                element: <SignUp />,
            },
        ],
    },
]);
