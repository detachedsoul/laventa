const Head = async ({params: {id}}) => {
	const blogArticleId = id.toString();

	const endpoint = `articles/${blogArticleId}`;
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const res = await fetch(`${url}`);

	if (!res.ok) {
		return `There was an error fetching the requested resource. Please make sure that the API endpoint ${endpoint} is correct.`;
	}

	const {data} = await res.json();

	return (
		<>
			<title>{`Laventa | ${data?.attributes?.title}`}</title>
			<meta
				name="description"
				content={data?.attributes?.summary}
			/>
			<meta
				name="author"
				content={data?.attributes?.author}
			/>
		</>
	);
};

export default Head;
