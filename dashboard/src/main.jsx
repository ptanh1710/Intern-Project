import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { router } from './router';
import LoginProvider from './context/LoginContext';
import GlobalStyle from './components/GlobalStyle/GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <LoginProvider>
            <GlobalStyle>
                <RouterProvider router={router} />
            </GlobalStyle>
        </LoginProvider>
    </React.StrictMode>,
);
