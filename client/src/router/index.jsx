import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import { DefaultLayout, GuestLayout } from '../Layout';
import { Home, Cart, SignIn, SignUp, User, Products, Detail } from '../pages';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<DefaultLayout />}></Route>,
    ),
    createRoutesFromElements(),
);

export default router;

// [
//     {
//         path: '/',
//         element: <DefaultLayout />,
//         children: [
//             {
//                 path: '/',
//                 element: <Home />,
//             },
//             {
//                 path: '/user/*',
//                 element: <User />,
//             },
//             {
//                 path: '/cart',
//                 element: <Cart />,
//             },
//             {
//                 path: '/products/*',
//                 element: <Products />,
//             },
//             {
//                 path: 'product/:id/detail',
//                 element: <Detail />,
//             },
//         ],
//     },

//     {
//         path: '/',
//         element: <GuestLayout />,
//         children: [
//             {
//                 path: '/login',
//                 element: <SignIn />,
//             },
//             {
//                 path: '/register',
//                 element: <SignUp />,
//             },
//         ],
//     },
// ]
