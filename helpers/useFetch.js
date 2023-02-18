import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
			const urlPrefix =
				process.env.NODE_ENV === "production"
					? "https://laventa-strapi-production.up.railway.app/api/"
					: "http://localhost:1337/api/";

			const urlPath = urlPrefix + url;

			const req = await fetch(`${urlPath}`);

			if (!req.ok) {
				setError(
					() =>
						`Failed to fetch the requested resource. Plase verify that the api endpoint ${urlPath} is correct.`,
				);
			} else {
				const {data} = await req.json();
				setData(data.map((data) => data));
			}
		};

		fetchData();
    }, [url]);

    return (typeof error === "string") ? error : data;

};

export default useFetch;
