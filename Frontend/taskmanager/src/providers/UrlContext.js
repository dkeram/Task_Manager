import { createContext, useContext } from 'react';

const UrlContext = createContext();

export const UrlProvider = ({ children }) => {
    const url = 'http://127.0.0.1:8000';

    return(url);
};

export const useUrl = () => {
    const context = useContext(UrlContext);
    return context;
};