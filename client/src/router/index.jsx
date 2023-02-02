import { createBrowserRouter } from 'react-router-dom';
import { DefaultLayout, GuestLayout } from '../Layout';
import { Home, Cart, SignIn, SignUp, User, Products, Detail } from '../pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/user/*',
                element: <User />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/products/*',
                element: <Products />,
            },
            {
                path: 'product/:id/detail',
                element: <Detail />,
            },
        ],
    },

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

export default router;
