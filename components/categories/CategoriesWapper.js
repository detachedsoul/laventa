"use client";

import ProductsLoadingSkeleton from "@components/ProductsLoadingSkeleton";
import CategoryFilter from "@components/categories/CategoryFilter";
import CategoryHero from "@components/categories/CategoryHero";
import Products from "@components/categories/Products";
import useFetch from "@helpers/useFetch";
import useFilterInStock from "@store/useFilterInStock";
import useFilterIsDiscount from "@store/useFilterIsDiscount";
import useFilterOrder from "@store/useFilterOrder";
import useFilterProductCategory from "@store/useFilterProductCategory";
import usePaginate from "@store/usePaginate";
import useSearchContent from "@store/useSearchContent";

const fetchProducts = async (url) => {
	const res = await fetch(url);

	const data = await res.json();

	return data;
};

const fetchCategories = async (url) => {
    const req = await fetch(url);

    const {data} = await req.json();

    return data;
};

const CategoriesWrapper = () => {
	// Fetch products for all categories
	const page = usePaginate((state) => state.page);
	const order = useFilterOrder((state) => state.order);
	const filterInStock = useFilterInStock((state) => state.filterInStock);
	const filterIsDiscount = useFilterIsDiscount((state) => state.filterIsDiscount);
	const filterCategory = useFilterProductCategory((state) => state.filterCategory);

	const productsArr = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}products?sort=id%3A${order}&${filterCategory}${filterIsDiscount}${filterInStock}pagination[pageSize]=6&pagination[page]=${page}&populate=*`,
		fetchProducts,
	).data;

	const isLoading = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}products?sort=id%3A${order}&${filterCategory}${filterIsDiscount}${filterInStock}pagination[pageSize]=6&pagination[page]=${page}&populate=*`,
		fetchProducts,
	).isLoading;

	const productsError = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}products?sort=id%3A${order}&${filterCategory}${filterIsDiscount}${filterInStock}pagination[pageSize]=6&pagination[page]=${page}&populate=*`,
		fetchProducts,
	).error;

	const nextPage = usePaginate((state) => state.nextPage);
	const prevPage = usePaginate((state) => state.prevPage);
	const toPage = usePaginate((state) => state.toPage);

	const countTotalProducts = useFetch(`${process.env.NEXT_PUBLIC_API_URL}products?populate=category`, fetchCategories).data;

    const countTotalIsInStockProducts = useFetch(`${process.env.NEXT_PUBLIC_API_URL}products?filters[inStock][$eqi]=1`, fetchCategories).data;

    const countTotalNotInStockProducts = useFetch(`${process.env.NEXT_PUBLIC_API_URL}products?filters[inStock][$eqi]=0`, fetchCategories).data;

    const countTotalIsDiscountProducts = useFetch(`${process.env.NEXT_PUBLIC_API_URL}products?filters[isDiscount][$eqi]=1`, fetchCategories).data;

    const countTotalIsNotDiscountProducts = useFetch(`${process.env.NEXT_PUBLIC_API_URL}products?filters[isDiscount][$eqi]=0`, fetchCategories).data;

	const options = {
		countTotalProducts,
		countTotalIsInStockProducts,
		countTotalNotInStockProducts,
		countTotalIsDiscountProducts,
		countTotalIsNotDiscountProducts
	};

	const filteredContent = useSearchContent((state) => state.searchContent);

	if (productsError)
		return (
			<p className="px-[3%] font-bold text-center text-brand-red dark:text-rose-500 text-xl mx-auto sm:w-3/5 md:w-1/2 py-12">
				There was an error fetching the requested resource. Please try
				again later.
			</p>
		);

	return (
		<>
			<CategoryHero />

			{!isLoading && <CategoryFilter products={productsArr} productFilterOptions={options} />}

			<main className="space-y-20 py-12 px-4 sm:px-8">
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
						There are no products under this category available yet.
						Please check back at a later time.
					</p>
				)}
			</main>
		</>
	);
};

export default CategoriesWrapper;
