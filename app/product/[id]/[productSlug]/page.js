import ProductDetailsHero from "@components/product-details/ProductDetailsHero";
import ProductDetails from "@components/product-details/ProductDetails";
import ProductsLoadingSkeleton from "@components/ProductsLoadingSkeleton";
import { Suspense } from "react";

const Page = async ({ params: { id, productSlug }}) => {
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

			<main className="space-y-20 py-12">
				<Suspense fallback={<ProductsLoadingSkeleton />}>
					<ProductDetails product={ data } />
				</Suspense>
			</main>
		</>
	);
};

export async function generateStaticParams () {
	const endpoint = `products?populate=*`;
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const res = await fetch(`${url}`);

	if (!res.ok) {
		return `There was an error fetching the requested resource. Please make sure that the API endpoint ${endpoint} is correct.`;
	}

	const {data} = await res.json();

	const productDetails = data.map(product => ({
		id: product.id.toString(),
		productSlug: product.attributes.slug,
	}));

	return productDetails;
};

export const dynamicParams = false;
export default Page;
