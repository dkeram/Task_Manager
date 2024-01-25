import { createContext, useContext, useMemo } from 'react';

const UrlContext = createContext();

const UrlProvider = ({ children }) => {
    
    const contextValue = useMemo(
        ()=> {
            const url = 'http://127.0.0.1:8000/';
            return(url);
        },[]
    );
    
    return(
        <UrlContext.Provider value={contextValue}>{children}</UrlContext.Provider>
    );
};

export const useUrl = () => {
    return useContext(UrlContext);
};

export default UrlProvider;