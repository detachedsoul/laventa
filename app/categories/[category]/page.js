"use client";

import CategoryHero from "@components/categories/individual-category/CategoryHero";
import CategoryFilter from "@components/categories/CategoryFilter";
import Products from "@components/categories/Products";
import ProductsLoadingSkeleton from "@components/ProductsLoadingSkeleton";
import usePaginate from "@store/usePaginate";
import useFilterOrder from "@store/useFilterOrder";
import useFilterInStock from "@store/useFilterInStock";
import useSearchContent from "@store/useSearchContent";
import useFilterIsDiscount from "@store/useFilterIsDiscount";
import useFilterProductCategory from "@store/useFilterProductCategory";
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
	const order = useFilterOrder((state) => state.order);
	const filterInStock = useFilterInStock((state) => state.filterInStock);
	const filterIsDiscount = useFilterIsDiscount((state) => state.filterIsDiscount);
	const filterCategory = useFilterProductCategory((state) => state.filterCategory);

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
		`${process.env.NEXT_PUBLIC_API_URL}products?filters[category][categoryName][$eqi]=${categoryName}&sort=id%3A${order}&${filterCategory}${filterIsDiscount}${filterInStock}pagination[pageSize]=6&pagination[page]=${page}&populate=*`,
		fetchProducts,
	).data;

	const isLoading = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}products?filters[category][categoryName][$eqi]=${categoryName}&sort=id%3A${order}&${filterCategory}${filterIsDiscount}${filterInStock}pagination[pageSize]=6&pagination[page]=${page}&populate=*`,
		fetchProducts,
	).isLoading;

	const productsError = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}products?filters[category][categoryName][$eqi]=${categoryName}&sort=id%3A${order}&${filterCategory}${filterIsDiscount}${filterInStock}pagination[pageSize]=6&pagination[page]=${page}&populate=*`,
		fetchProducts,
	).error;

	const nextPage = usePaginate((state) => state.nextPage);
    const prevPage = usePaginate((state) => state.prevPage);
    const toPage = usePaginate((state) => state.toPage);

	const countTotalProducts = useFetch(`${process.env.NEXT_PUBLIC_API_URL}products?filters[category][categoryName][$eqi]=${categoryName}`, fetchCategoryName).data;

    const countTotalIsInStockProducts = useFetch(`${process.env.NEXT_PUBLIC_API_URL}products?filters[category][categoryName][$eqi]=${categoryName}&filters[inStock][$eqi]=1`, fetchCategoryName).data;

    const countTotalNotInStockProducts = useFetch(`${process.env.NEXT_PUBLIC_API_URL}products?filters[category][categoryName][$eqi]=${categoryName}&filters[inStock][$eqi]=0`, fetchCategoryName).data;

    const countTotalIsDiscountProducts = useFetch(`${process.env.NEXT_PUBLIC_API_URL}products?filters[category][categoryName][$eqi]=${categoryName}&filters[isDiscount][$eqi]=1`, fetchCategoryName).data;

    const countTotalIsNotDiscountProducts = useFetch(`${process.env.NEXT_PUBLIC_API_URL}products?filters[category][categoryName][$eqi]=${categoryName}&filters[isDiscount][$eqi]=0`, fetchCategoryName).data;

	const options = {
		countTotalProducts,
		countTotalIsInStockProducts,
		countTotalNotInStockProducts,
		countTotalIsDiscountProducts,
		countTotalIsNotDiscountProducts
	};

	const filteredContent = useSearchContent((state) => state.searchContent);

	if (productsError || categoryError) return <p className="px-[3%] font-bold text-center text-xl text-brand-red dark:text-rose-500 mx-auto md:w-1/2 py-12">There was an error fetching the requested resource. Please try again later.</p>

    return (
		<>
			<CategoryHero
				categoryName={categoryDetails?.attributes?.categoryName}
			/>

			{!isLoading && <CategoryFilter products={productsArr} productFilterOptions={options} />}

			<main className="space-y-20 py-12 px-4 sm:px-8]">
				{isLoading ? (
					<ProductsLoadingSkeleton />
				) : productsArr?.data?.length > 0 ? (
					<Products
						productData={filteredContent?.data?.length > 0 ? filteredContent : productsArr}
						page={page}
						nextPage={nextPage}
						prevPage={prevPage}
						toPage={toPage}
					/>
				) : (
					<p className="font-bold text-center text-xl mx-auto sm:w-3/5 md:w-1/2">
						There are no products under this category available yet. Please
						check back at a later time.
					</p>
				)}
			</main>
		</>
	);
};

export default Page;
