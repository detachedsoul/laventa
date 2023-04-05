"use client";

import Link from "next/link";
import ProductListings from "@components/ProductListings";
import ProductsLoadingSkeleton from "@components/ProductsLoadingSkeleton";
import IndexProductCategorySort from "@components/products/IndexProductCategorySort";
import useFetch from "@helpers/useFetch";
import useFilterCategory from "@store/useFilterCategory";

const fetcher = async (url) => {
	const res = await fetch(url);

	const {data} = await res.json();

	return data;
};

const IndexProductListings = () => {
	const filter = useFilterCategory((state) => state.filter);

	const setFilterValue = useFilterCategory((state) => state.setFilter);

	// setFilterValue('products?pagination[limit]=6&populate=*');

	const categories = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}categories`,
		fetcher,
	).data;

	const categoryError = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}categories`,
		fetcher,
	).error;

	const productsArr = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}${filter}`,
		fetcher,
	).data;

	const isLoading = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}${filter}`,
		fetcher,
	).isLoading;

	const error = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}${filter}`,
		fetcher,
	).error;

	if (error || categoryError)
		return (
			<p className="px-[3%] font-bold text-center text-brand-red dark:text-rose-500 text-xl mx-auto md:w-1/2 py-12">
				There was an error fetching the requested resource. Please try
				again later.
			</p>
		);

	return (
		<section className="flex flex-col gap-12">
			<div className="flex flex-wrap items-center gap-4 pb-4 justify-between border-b border-slate-200 dark:border-slate-100/[0.06]">
				<h2 className="header text-3xl lg:text-4xl">Explore More</h2>

				{!isLoading && categories?.length > 0 && <IndexProductCategorySort categories={categories} setFilter={setFilterValue} />}
			</div>

			{isLoading ? (
					<ProductsLoadingSkeleton />
				) : productsArr?.length > 0 ? (
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
					<p className="font-bold text-center text-xl mx-auto md:w-1/2">
						There are no products available yet. Please check
							back at a later time.
					</p>
				)}

			{!isLoading && productsArr?.length > 0 && (
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
