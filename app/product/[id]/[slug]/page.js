import ProductDetails from "@components/product-details/ProductDetails";
import ProductDetailsHero from "@components/product-details/ProductDetailsHero";

export const generateMetadata = async ({params: {id}}) => {
    const productId = id.toString();

	const endpoint = `products/${productId}`;
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const res = await fetch(`${url}`);

	if (!res.ok) {
		return `There was an error fetching the requested resource. Please make sure that the API endpoint ${endpoint} is correct.`;
	}

	const {data} = await res.json();

    return {
		title: `Laventa | ${data?.attributes?.productName}`,
		description: `${data?.attributes?.highlights}`
	};
};

const Page = async ({ params: { id }}) => {
	const productId = id.toString();

	const endpoint = `products/${productId}?populate=*`;
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const res = await fetch(`${url}`);

	if (!res.ok) {
		return `There was an error fetching the requested resource. Please make sure that the API endpoint ${endpoint} is correct.`;
	}
	const {data} = await res.json();

	return (
		<>
			<ProductDetailsHero productDetails={ data } />

			<main className="py-12">
				<ProductDetails product={ data } id={ productId } />
			</main>
		</>
	);
};

export const generateStaticParams = async () => {
	const endpoint = `products?populate=*`;
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const res = await fetch(`${url}`);

	if (!res.ok) {
		return `There was an error fetching the requested resource. Please make sure that the API endpoint ${endpoint} is correct.`;
	}

	const {data} = await res.json();

	const productDetails = data.map(product => ({
		id: product.id.toString(),
		slug: product.attributes.slug,
	}));

	return productDetails;
};

export const dynamicParams = false;
export default Page;
