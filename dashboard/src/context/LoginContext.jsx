import { createContext, useState } from 'react';

const LOCAL_STORAGE_TOKEN_KEY = 'Access_Token';

export const LoginContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export default function LoginProvider({ children }) {
    const [user, setUser] = useState({
        name: 'AnhPham',
    });
    const [token, _setToken] = useState(
        localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) || '',
        // '15462368',
    );

    function setToken(token) {
        _setToken(token);
        if (token) {
            localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token);
        } else {
            localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
        }
    }

    const values = {
        user,
        token,
        setToken,
        setUser,
    };

    return (
        <LoginContext.Provider value={values}>{children}</LoginContext.Provider>
    );
}
