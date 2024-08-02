import { useEffect, useState, useCallback } from "react";
async function sendHTTPRequest (url, config) {
    const response = await fetch(url, config)
    console.log(response);
    const resData = await response.json();

    if (!response.ok) {
        throw new Error(resData.message || "Something went wrong!");
    }

    return resData;
};

export default function useHttp(url, config, initialData) {
    // console.log(url, config, initialData);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState(initialData);

    const sendRequest = useCallback(async function sendRequest () {
        setIsLoading(true);
        try {
            const resData = await sendHTTPRequest(url, config);
            setData(resData);
        } catch (error) {
            setError(error.message || "Something went wrong!");
        }
        setIsLoading(false);
    }, [url, config])

    useEffect(() => {
        sendRequest();
        if ((config && (config.method === "GET" || !config.method)) || !config){
        }
    }, [sendRequest, config]);

    return {
        data,
        isLoading,
        error,
        sendRequest,
    };
}