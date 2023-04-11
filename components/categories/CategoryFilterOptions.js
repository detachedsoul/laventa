import useFetch from "@helpers/useFetch";
import useFilterInStock from "@store/useFilterInStock";
import useFilterIsDiscount from "@store/useFilterIsDiscount";
import useFilterProductCategory from "@store/useFilterProductCategory";
import { usePathname } from "next/navigation";

const fetchCategories = async (url) => {
	const req = await fetch(url);

	const { data } = await req.json();

	return data;
};

const CategoryFilterOptions = ({ filterIsOpen, productFilterOptions }) => {
	const pathname = usePathname();

	const filterInStock = useFilterInStock((state) => state.filterInStock);
	const setInStockOption = useFilterInStock(
		(state) => state.setFilterInStock,
	);

	const filterIsDiscount = useFilterIsDiscount(
		(state) => state.filterIsDiscount,
	);
	const setIsDiscount = useFilterIsDiscount((state) => state.setIsDiscount);

	const filterCategory = useFilterProductCategory(
		(state) => state.filterCategory,
	);
	const setFilterCategory = useFilterProductCategory(
		(state) => state.setFilterCategory,
	);

	const categories = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}categories`,
		fetchCategories,
	).data;
	const categoryFetchIsLoading = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}categories`,
		fetchCategories,
	).isLoading;
	const categoryFetchError = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}categories`,
		fetchCategories,
	).error;

	if (categoryFetchError)
		return (
			<p>
				There was an error fetching this resource. Please try again
				later!
			</p>
		);

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
						{productFilterOptions?.countTotalProducts && (
							<div className="flex items-center justify-between">
								<label
									className="flex items-center gap-2 cursor-pointer"
									htmlFor="categories"
								>
									<input
										className="form-checkbox cursor-pointer rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded"
										type="checkbox"
										id="categories"
										checked={
											filterCategory === "" ? true : false
										}
										onChange={() => {
											setFilterCategory("");
										}}
									/>
									{pathname !== "/categories" ? (
                                        pathname?.split("/")[2].split(" ")?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                    ) : "All Categories"}
								</label>

								<span>
									{productFilterOptions?.countTotalProducts?.length}
								</span>
							</div>
						)}

						{pathname !==
						"/categories" ? null : categoryFetchIsLoading ? (
							<p className="font-bold text-xl">
								Fetching categories...
							</p>
						) : categories?.length > 0 ? (
							categories?.map((category) => (
								<div
									className="flex items-center justify-between"
									key={category?.id}
								>
									<label
										className="flex items-center gap-2 cursor-pointer"
										htmlFor={category?.attributes?.categoryName?.toLowerCase()}
									>
										<input
											className="form-checkbox cursor-pointer rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded"
											type="checkbox"
											id={category?.attributes?.categoryName?.toLowerCase()}
											checked={
												filterCategory ===
												`filters[category][categoryName][$eqi]=${category?.attributes?.categoryName?.toLowerCase()}&`
													? true
													: false
											}
											onChange={() => {
												setFilterCategory(
													`filters[category][categoryName][$eqi]=${category?.attributes?.categoryName?.toLowerCase()}&`,
												);
											}}
										/>
										{category?.attributes?.categoryName}
									</label>

									<span>
                                        {productFilterOptions?.countTotalProducts?.filter(categoryName => categoryName?.attributes?.category?.data?.attributes?.categoryName === category?.attributes?.categoryName).length}
                                    </span>
								</div>
							))
						) : (
							<p className="font-bold text-xl">
								Sorry, there are no product categories yet!
							</p>
						)}
					</div>
				</div>

				<div className="border border-slate-200 p-4 rounded-lg grid gap-4">
					<h3 className="header text-lg">Product Status</h3>

					<div className="grid gap-4">
						{productFilterOptions?.countTotalProducts && (
							<div className="flex items-center justify-between">
								<label
									className="flex items-center gap-2 cursor-pointer"
									htmlFor="both"
								>
									<input
										className="form-checkbox cursor-pointer rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded"
										type="checkbox"
										id="both"
										checked={
											filterInStock === "" ? true : false
										}
										onChange={() => {
											setInStockOption("");
										}}
									/>
									Both
								</label>

								<span>
									{productFilterOptions?.countTotalProducts?.length}
								</span>
							</div>
						)}

						{productFilterOptions?.countTotalIsInStockProducts && (
							<div className="flex items-center justify-between">
								<label
									className="flex items-center gap-2 cursor-pointer"
									htmlFor="in-stock"
								>
									<input
										className="form-checkbox cursor-pointer rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded"
										type="checkbox"
										id="in-stock"
										checked={
											filterInStock ===
											"filters[inStock][$eqi]=1&"
												? true
												: false
										}
										onChange={() => {
											setInStockOption(
												"filters[inStock][$eqi]=1&",
											);
										}}
									/>
									In Stock
								</label>

								<span>
									{
										productFilterOptions
											?.countTotalIsInStockProducts
											?.length
									}
								</span>
							</div>
						)}

						{productFilterOptions?.countTotalNotInStockProducts && (
							<div className="flex items-center justify-between">
								<label
									className="flex items-center gap-2 cursor-pointer"
									htmlFor="out-of-stock"
								>
									<input
										className="form-checkbox cursor-pointer rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded"
										type="checkbox"
										id="out-of-stock"
										checked={
											filterInStock ===
											"filters[inStock][$eqi]=0&"
												? true
												: false
										}
										onChange={() => {
											setInStockOption(
												"filters[inStock][$eqi]=0&",
											);
										}}
									/>
									Out of Stock
								</label>

								<span>
									{
										productFilterOptions
											?.countTotalNotInStockProducts
											?.length
									}
								</span>
							</div>
						)}
					</div>
				</div>

				<div className="border border-slate-200 p-4 rounded-lg grid gap-4">
					<h3 className="header text-lg">Discount Status</h3>

					<div className="grid gap-4">
						{productFilterOptions?.countTotalProducts && (
							<div className="flex items-center justify-between">
								<label
									className="flex items-center gap-2 cursor-pointer"
									htmlFor="all-discount-types"
								>
									<input
										className="form-checkbox cursor-pointer rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded"
										type="checkbox"
										id="all-discount-types"
										checked={
											filterIsDiscount === ""
												? true
												: false
										}
										onChange={() => {
											setIsDiscount("");
										}}
									/>
									All Types
								</label>

								<span>
									{productFilterOptions?.countTotalProducts?.length}
								</span>
							</div>
						)}

						{productFilterOptions?.countTotalIsDiscountProducts && (
							<div className="flex items-center justify-between">
								<label
									className="flex items-center gap-2 cursor-pointer"
									htmlFor="is-discount"
								>
									<input
										className="form-checkbox cursor-pointer rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded"
										type="checkbox"
										id="is-discount"
										checked={
											filterIsDiscount ===
											"filters[isDiscount][$eqi]=1&"
												? true
												: false
										}
										onChange={() => {
											setIsDiscount(
												"filters[isDiscount][$eqi]=1&",
											);
										}}
									/>
									Is Discount
								</label>

								<span>
									{
										productFilterOptions
											?.countTotalIsDiscountProducts
											?.length
									}
								</span>
							</div>
						)}

						{productFilterOptions?.countTotalIsNotDiscountProducts && (
							<div className="flex items-center justify-between">
								<label
									className="flex items-center gap-2 cursor-pointer"
									htmlFor="no-discount"
								>
									<input
										className="form-checkbox cursor-pointer rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded"
										type="checkbox"
										id="no-discount"
										checked={
											filterIsDiscount ===
											"filters[isDiscount][$eqi]=0&"
												? true
												: false
										}
										onChange={() => {
											setIsDiscount(
												"filters[isDiscount][$eqi]=0&",
											);
										}}
									/>
									No Discount
								</label>

								<span>
									{
										productFilterOptions
											?.countTotalIsNotDiscountProducts
											?.length
									}
								</span>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CategoryFilterOptions;
