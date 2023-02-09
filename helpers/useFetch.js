import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const urlPrefix = process.env.NODE_ENV === 'production' ? 'https://laventa-strapi.onrender.com/' : 'http://localhost:1337/';

            const urlPath = urlPrefix+url;

            const req = await fetch(`${urlPath}`);

            if (!req.ok) {
                setError(() => `Failed to fetch the requested resource. Plase verify that the api endpoint ${url} is correct.`);

                return;
            }

            const {data} = await req.json();
            setData(data.map(data => data));
        };

        fetchData();
    },[url]);

    return error === null ? data : error;
};

export default useFetch;
