const Head = async ({params: {category}}) => {
    const categoryName = category.toString();

	const endpoint = `categories/${categoryName}`;
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const res = await fetch(`${url}`);

	if (!res.ok) {
		return `There was an error fetching the requested resource. Please make sure that the API endpoint ${endpoint} is correct.`;
	}

    const { data } = await res.json();

    return (
        <>
            <title>{`Laventa | ${data?.attributes?.categoryName}`}</title>
            <meta name="description" content={data?.attributes?.categoryDesc} />
        </>
    );
};

export default Head;
