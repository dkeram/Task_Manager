import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useJwt } from 'react-jwt';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [ token, setToken] = useState(localStorage.getItem('access_token'));
    const { decodedToken, isExpired} = useJwt(token);

    const contextValue = useMemo(
        () => {
            const isAuth = !isExpired;
            const id = (decodedToken) ? decodedToken['user_id'] : null;
            const userClass = (decodedToken) ? decodedToken['user_class'] : null;
            const username =  (decodedToken) ? decodedToken['username'] : null;
            const firstname = (decodedToken) ? decodedToken['firstname'] : null;
            const lastname = (decodedToken) ? decodedToken['lastname'] : null;

            return{
                token,
                setToken,
                decodedToken,
                username,
                isExpired,
                isAuth,
                id,
                userClass,
                firstname,
                lastname,
            };
        }, [token, decodedToken, isExpired]
    );
    
    useEffect(() => {
        localStorage.setItem('access_token', token)
    },[token]);

    return(
        <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>    
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthProvider;