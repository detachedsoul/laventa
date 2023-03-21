import Link from "next/link";
import ProductListings from "@components/ProductListings";
import ProductsLoadingSkeleton from "@components/ProductsLoadingSkeleton";
import IndexProductCategorySort from "@components/products/IndexProductCategorySort";
import { Suspense } from "react";

const fetchProducts = async () => {
	const endpoint = "products?populate=*";
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const req = await fetch(`${url}`);

	if (!req.ok) {
		return `There was an error fetching the requested resource. Please make sure that the API endpoint ${endpoint} is correct.`;
	} else {
		const { data } = await req.json();

		return data;
	}
};

const fetchCategories = async () => {
	const endpoint = "categories";
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const req = await fetch(`${url}`);

	if (!req.ok) {
		return `There was an error fetching the requested resource. Please make sure that the API endpoint ${endpoint} is correct.`;
	} else {
		const { data } = await req.json();

		return data;
	}
};

const IndexProductListings = async () => {
	const productsArr = await fetchProducts();
	const categories = await fetchCategories();

	return (
		<section className="flex flex-col gap-12">
			<div className="flex flex-wrap items-center gap-4 pb-4 justify-between border-b border-slate-200 dark:border-slate-100/[0.06]">
				<h2 className="header text-3xl lg:text-4xl">Explore More</h2>

				<IndexProductCategorySort categories={categories} />
			</div>

			<Suspense fallback={<ProductsLoadingSkeleton />}>
				{typeof productsArr !== "string" ? (
					productsArr.length > 0 ? (
						<div className="grid gap-8 lg:grid-cols-3">
							{productsArr.map((products) => (
								<ProductListings
									id={products.id}
									product={products.attributes}
									key={products.id}
								/>
							))}
						</div>
					) : (
						<p className="font-bold text-center text-xl mx-auto">
							There are no products available yet. Please check
							back at a later time.
						</p>
					)
				) : (
					<p className="font-bold text-brand-red text-center mx-auto md:w-1/2 dark:text-rose-500">
						{productsArr}
					</p>
				)}
			</Suspense>

			{typeof productsArr !== "string" && productsArr.length > 0 && (
				<div className="grid place-content-center">
					<Link
						className="view-more-btn group"
						href="/categories"
					>
						View More Products
						<i className="fr fi-rr-arrow-right text-base top-[0.22rem] pl-0.5 group-hover:pl-1"></i>
					</Link>
				</div>
			)}
		</section>
	);
};

export default IndexProductListings;
