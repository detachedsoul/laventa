import ProductDetailsHero from "@components/product-details/ProductDetailsHero";
import NewArrivals from "@components/NewArrivals";
import IndexBlog from "@components/IndexBlog";
import ProductDetails from "@components/product-details/ProductDetails";

const Page = () => {
	return (
		<>
			<ProductDetailsHero />
			<main
				className="space-y-20 py-12 px-[3%]"
			>
				<ProductDetails />
			</main>
		</>
	);
};

export default Page;
