import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
// Toast Import
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { router } from './router';
import LoginProvider from './context/LoginContext';
import GlobalStyle from './components/GlobalStyle/GlobalStyle';
import DataProvider from './context/DataContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <LoginProvider>
            <DataProvider>
                <GlobalStyle>
                    <RouterProvider router={router} />
                    <ToastContainer
                        position="top-right"
                        autoClose={1500}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover={false}
                        theme="light"
                    />
                </GlobalStyle>
            </DataProvider>
        </LoginProvider>
    </React.StrictMode>,
);
