import React, {createContext, useContext, useState} from 'react';

const ResultsContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultsContextProvider = ({children}) => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (url) => {
        setLoading(true);
        const response = await fetch(`${baseUrl}${url}`, {
            method: 'GET',
            headers: {
                'x-user-agent': 'desktop',
                'x-proxy-location': 'US',
                'x-rapidapi-host': 'google-search3.p.rapidapi.com',
                'x-rapidapi-key': process.env.REACT_APP_API_KEY,
            }
        });

        const data = await response.json();

        // // if(type.includes('/news')) {
        // //     setResults(data.entries);
        // // } else if(type.includes('/images')){
        // //     setResults (data.image_results);
        // // } else{
        // //     setResults (data.results);
        // }
        setResults(data);
        setLoading(false);
    };

    return (
        <ResultsContext.Provider value={{results, loading, searchTerm, setSearchTerm, getResults}}>
            {children}
        </ResultsContext.Provider>
    );
};

export const useResultsContext = () => useContext(ResultsContext);