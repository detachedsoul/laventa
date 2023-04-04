"use client";

import CategoryHero from "@components/categories/individual-category/CategoryHero";
import CategoryFilter from "@components/categories/CategoryFilter";
import Products from "@components/categories/Products";
import ProductsLoadingSkeleton from "@components/ProductsLoadingSkeleton";
import usePaginate from "@store/usePaginate";
import useFetch from "@helpers/useFetch";

const fetchProducts = async (url) => {
	const res = await fetch(url);

	const data = await res.json();

	return data;

};

const fetchCategoryName = async (url) => {
	const res = await fetch(url);

	const {data} = await res.json();

	return data;
};

const Page = ({params: {category}}) => {
    const categoryName = category.toString();

	// Fetch details for the partciular category and possible error messages
	const categoryDetails = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}categories/${categoryName}`,
		fetchCategoryName,
	).data;

	const categoryError = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}categories/${categoryName}`,
		fetchCategoryName
	).error;

	// Fetch products thats fall under the specified category
	const page = usePaginate((state) => state.page);
	const productsArr = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}products?filters[category][categoryName][$eqi]=${categoryName}&pagination[pageSize]=3&pagination[page]=${page}&populate=*`,
		fetchProducts,
	).data;

	const isLoading = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}products?filters[category][categoryName][$eqi]=${categoryName}&pagination[pageSize]=3&pagination[page]=${page}&populate=*`,
		fetchProducts,
	).isLoading;

	const productsError = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}products?filters[category][categoryName][$eqi]=${categoryName}&pagination[pageSize]=3&pagination[page]=${page}&populate=*`,
		fetchProducts,
	).error;

	const nextPage = usePaginate((state) => state.nextPage);
    const prevPage = usePaginate((state) => state.prevPage);
    const toPage = usePaginate((state) => state.toPage);

	if (productsError || categoryError) return <p className="px-[3%] font-bold text-center text-xl text-brand-red dark:text-rose-500 mx-auto md:w-1/2 py-12">There was an error fetching the requested resource. Please try again later.</p>

    return (
		<>
			<CategoryHero
				categoryName={categoryDetails?.attributes?.categoryName}
			/>

			<CategoryFilter />

			<main className="space-y-20 py-12 px-[3%]">
				{isLoading ? (
					<ProductsLoadingSkeleton />
				) : productsArr?.data?.length > 0 ? (
					<Products
						productData={productsArr}
						page={page}
						nextPage={nextPage}
						prevPage={prevPage}
						toPage={toPage}
					/>
				) : (
					<p className="font-bold text-center text-xl mx-auto md:w-1/2">
						There are no products under this category available yet. Please
						check back at a later time.
					</p>
				)}
			</main>
		</>
	);
};

export default Page;
