import ProductDetailsHero from "@components/product-details/ProductDetailsHero";
import ProductDetails from "@components/product-details/ProductDetails";

const Page = () => {
	return (
		<>
			<ProductDetailsHero />
			<main
				className="space-y-20 py-12"
			>
				<ProductDetails />
			</main>
		</>
	);
};

export default Page;
