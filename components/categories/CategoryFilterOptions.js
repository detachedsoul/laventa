import useFetch from "@helpers/useFetch";
import useFilterInStock from "@store/useFilterInStock";
import useFilterIsDiscount from "@store/useFilterIsDiscount";

const fetchCategories = async (url) => {
    const req = await fetch(url);

    const {data} = await req.json();

    return data;
};

const CategoryFilterOptions = ({ filterIsOpen }) => {
    const filterInStock = useFilterInStock((state) => state.filterInStock);
    const setInStockOption = useFilterInStock((state) => state.setFilterInStock);

    const filterIsDiscount = useFilterIsDiscount((state) => state.filterIsDiscount);
    const setIsDiscount = useFilterIsDiscount((state) => state.setIsDiscount);

    const categories = useFetch(`${process.env.NEXT_PUBLIC_API_URL}categories`, fetchCategories).data;
    const categoryFetchIsLoading = useFetch(`${process.env.NEXT_PUBLIC_API_URL}categories`, fetchCategories).isLoading;
    const categoryFetchError = useFetch(`${process.env.NEXT_PUBLIC_API_URL}categories`, fetchCategories).error;

    // countTotalCategoryProducts = useFetch(`${process.env.NEXT_PUBLIC_API_URL}products?filter=[category][categoryName]=${category}`, fetchCategories).data;

    const countTotalCategoryProducts = useFetch(`${process.env.NEXT_PUBLIC_API_URL}products`, fetchCategories).data;

    const countTotalIsInStockProducts = useFetch(`${process.env.NEXT_PUBLIC_API_URL}products?filters[inStock][$eqi]=1`, fetchCategories).data;

    const countTotalNotInStockProducts = useFetch(`${process.env.NEXT_PUBLIC_API_URL}products?filters[inStock][$eqi]=0`, fetchCategories).data;

    const countTotalIsDiscountProducts = useFetch(`${process.env.NEXT_PUBLIC_API_URL}products?filters[isDiscount][$eqi]=1`, fetchCategories).data;

    const countTotalIsNotDiscountProducts = useFetch(`${process.env.NEXT_PUBLIC_API_URL}products?filters[isDiscount][$eqi]=0`, fetchCategories).data;

    return (
		<div
			className={`accordion-container ${
				filterIsOpen
					? "accordion-container-active mt-4"
					: "accordion-container-hidden mt-0"
			}`}
		>
			<div
				className={`accordion-content-container gap-4 lg:grid-cols-3 items-start ${
					filterIsOpen
						? "accordion-content-container-active"
						: "accordion-content-container-hidden"
				}`}
			>
				<div className="border border-slate-200 p-4 rounded-lg grid gap-4">
					<h3 className="header text-lg">Categories</h3>

					<div className="grid gap-4">
                        {countTotalCategoryProducts && (
                            <div className="flex items-center justify-between">
                                <label
                                    className="flex items-center gap-2 cursor-pointer"
                                    htmlFor="categories"
                                >
                                    <input
                                        className="form-checkbox cursor-pointer rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded"
                                        type="checkbox"
                                        id="categories"
                                    />
                                    All Categories
                                </label>

                                <span>{countTotalCategoryProducts.length}</span>
                            </div>
                        )}

						{categoryFetchIsLoading ? (
                            <p className="font-bold text-xl">
                                Sorry, there are no product categories yet!.
                            </p>
                        ) : categories.length > 0 ? categories.map((category) => (
								<div className="flex items-center justify-between" key={category.id}>
									<label
										className="flex items-center gap-2 cursor-pointer"
										htmlFor="bags"
									>
										<input
											className="form-checkbox cursor-pointer rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded"
											type="checkbox"
											id="bags"
										/>
										{category?.attributes?.categoryName}
									</label>

									{/* <span>{countCategoryProducts(category?.attributes?.categoryName)}</span> */}

									<span>50</span>
								</div>
							)) : (
                                <p className="font-bold text-xl">
                                    Sorry, there are no product categories yet!.
                                </p>
                            )
                        }
					</div>
				</div>

				<div className="border border-slate-200 p-4 rounded-lg grid gap-4">
					<h3 className="header text-lg">Product Status</h3>

					<div className="grid gap-4">
                        {countTotalCategoryProducts && (
                            <div className="flex items-center justify-between">
                                <label
                                    className="flex items-center gap-2 cursor-pointer"
                                    htmlFor="both"
                                >
                                    <input
                                        className="form-checkbox cursor-pointer rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded"
                                        type="checkbox"
                                        id="both"
                                        checked={filterInStock === '' ? true : false}
                                        onChange={() => {
                                            setInStockOption('')
                                        }}
                                    />
                                    Both
                                </label>

                                <span>{countTotalCategoryProducts.length}</span>
                            </div>
                        )}

                        {countTotalIsInStockProducts && (
                            <div className="flex items-center justify-between">
                                <label
                                    className="flex items-center gap-2 cursor-pointer"
                                    htmlFor="in-stock"
                                >
                                    <input
                                        className="form-checkbox cursor-pointer rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded"
                                        type="checkbox"
                                        id="in-stock"
                                        checked={filterInStock === 'filters[inStock][$eqi]=1&' ? true : false}
                                        onChange={() => {
                                            setInStockOption('filters[inStock][$eqi]=1&')
                                        }}
                                    />
                                    In Stock
                                </label>

                                <span>{countTotalIsInStockProducts.length}</span>
                            </div>
                        )}

                        {countTotalNotInStockProducts && (
                            <div className="flex items-center justify-between">
                                <label
                                    className="flex items-center gap-2 cursor-pointer"
                                    htmlFor="out-of-stock"
                                >
                                    <input
                                        className="form-checkbox cursor-pointer rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded"
                                        type="checkbox"
                                        id="out-of-stock"
                                        checked={filterInStock === 'filters[inStock][$eqi]=0&' ? true : false}
                                        onChange={() => {
                                            setInStockOption('filters[inStock][$eqi]=0&')
                                        }}
                                    />
                                    Out of Stock
                                </label>

                                <span>{countTotalNotInStockProducts.length}</span>
                            </div>
                        )}
					</div>
				</div>

				<div className="border border-slate-200 p-4 rounded-lg grid gap-4">
					<h3 className="header text-lg">Discount Status</h3>

					<div className="grid gap-4">
                        {countTotalCategoryProducts && (
                            <div className="flex items-center justify-between">
                                <label
                                    className="flex items-center gap-2 cursor-pointer"
                                    htmlFor="is-discount"
                                >
                                    <input
                                        className="form-checkbox cursor-pointer rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded"
                                        type="checkbox"
                                        id="is-discount"
                                        checked={filterIsDiscount === '' ? true : false}
                                        onChange={() => {
                                            setIsDiscount('')
                                        }}
                                    />
                                    All Types
                                </label>

                                <span>{countTotalCategoryProducts.length}</span>
                            </div>
                        )}

                        {countTotalIsDiscountProducts && (
                            <div className="flex items-center justify-between">
                                <label
                                    className="flex items-center gap-2 cursor-pointer"
                                    htmlFor="is-discount"
                                >
                                    <input
                                        className="form-checkbox cursor-pointer rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded"
                                        type="checkbox"
                                        id="is-discount"
                                        checked={filterIsDiscount === 'filters[isDiscount][$eqi]=1&' ? true : false}
                                        onChange={() => {
                                            setIsDiscount('filters[isDiscount][$eqi]=1&')
                                        }}
                                    />
                                    Is Discount
                                </label>

                                <span>{countTotalIsDiscountProducts.length}</span>
                            </div>
                        )}

                        {countTotalIsNotDiscountProducts && (
                            <div className="flex items-center justify-between">
                                <label
                                    className="flex items-center gap-2 cursor-pointer"
                                    htmlFor="no-discount"
                                >
                                    <input
                                        className="form-checkbox cursor-pointer rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded"
                                        type="checkbox"
                                        id="no-discount"
                                        checked={filterIsDiscount === 'filters[isDiscount][$eqi]=0&' ? true : false}
                                        onChange={() => {
                                            setIsDiscount('filters[isDiscount][$eqi]=0&')
                                        }}
                                    />
                                    No Discount
                                </label>

                                <span>{countTotalIsNotDiscountProducts.length}</span>
                            </div>
                        )}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryFilterOptions;
