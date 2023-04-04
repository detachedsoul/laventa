import useSWR from "swr";

const useFetch = (url, fetcher) => {
	const { data, error, isLoading } = useSWR(url, fetcher);

	return {
		data,
		error,
		isLoading,
	};
};

export default useFetch;
