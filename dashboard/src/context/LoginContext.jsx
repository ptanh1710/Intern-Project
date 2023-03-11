import { createContext, useState } from 'react';

const LOCAL_STORAGE_TOKEN_KEY = 'Access_Token';
const LOCAL_STORAGE_USER_KEY = 'Access_User';

export const LoginContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export default function LoginProvider({ children }) {
    const [user, _setUser] = useState(() => {
        const localUser = localStorage.getItem(LOCAL_STORAGE_USER_KEY);
        const parstUser = JSON.parse(localUser);
        return parstUser || {};
    });
    const [token, _setToken] = useState(
        localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) || '',
    );

    function setUser(user) {
        _setUser(user);
        if (user) {
            const stringUser = JSON.stringify(user);
            localStorage.setItem(LOCAL_STORAGE_USER_KEY, stringUser);
        } else {
            localStorage.removeItem(LOCAL_STORAGE_USER_KEY);
        }
    }

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
