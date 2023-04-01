const Head = async ({params: {id}}) => {
	const productId = id.toString();

	const endpoint = `products/${productId}`;
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const res = await fetch(`${url}`);

	if (!res.ok) {
		return `There was an error fetching the requested resource. Please make sure that the API endpoint ${endpoint} is correct.`;
	}

	const {data} = await res.json();

	return (
		<>
			<title>{`Laventa | ${data?.attributes?.productName}`}</title>
			<meta
				name="description"
				content={data?.attributes?.details}
			/>
		</>
	);
};

export default Head;
