"use client";

import ProductListings from "@components/ProductListings";

const Products = ({productData, page, nextPage, prevPage, toPage}) => {
    const { data } = productData;
    const { meta } = productData;

    return (
		<section className="space-y-4">
			<div className="grid gap-8 pb-8 border-b border-slate-200 dark:border-brand-light-black md:grid-cols-2 lg:grid-cols-3">
				{data.map((products) => (
					<ProductListings
						id={products.id}
						product={products.attributes}
						key={products.id}
					/>
				))}
			</div>

			<div className="flex justify-between gap-4 items-center flex-wrap">
				<button
					className={`flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white ${
						page === 1 &&
						"bg-slate-200 pointer-events-none dark:bg-brand-light-black dark:text-white"
					}`}
					type="button"
					disabled={page === 1 ? true : false}
					onClick={() => {
						prevPage();
					}}
				>
					<i className="fr fi-rr-angle-left text-base top-[0.20rem]"></i>
					<span className="hidden lg:inline">Prev</span>
				</button>

				<div className="flex gap-1 items-center">
					<button
						className="flex items-center gap-1 py-1 px-3 mx-2 rounded-md pointer-events-none bg-brand-red text-white"
					>
						{ page }
					</button>

					<div className="w-20 text-center space-y-0.5">
						<span className="text-center block">
							of
						</span>

						<label className="block border border-slate-200 focus-within:border-brand-dark-rose/[0.2] rounded" htmlFor="jump-to-page">
							<input className="input-form text-slate-900 py-1 rounded w-full" type="number" max={ meta.pagination.pageCount } min={meta.pagination.pageCount} placeholder="Jump to page" pattern="[0-9]{*}" id="jump-to-page" onChange={ (e) => {
								if (
									Number(e.target.value) > meta.pagination.pageCount || isNaN(e.target.value) || e.target.value === ""
								) {
									return;
								}

								toPage(Number(e.target.value));
							}} />
						</label>
					</div>

					<p
						className="flex items-center gap-1 py-1 px-2 rounded-md  pointer-events-none select-none"
					>
						{meta.pagination.pageCount}
					</p>
				</div>

				<button
					className={`flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white ${
						page === meta.pagination.pageCount &&
						"bg-slate-200 pointer-events-none dark:bg-brand-light-black dark:text-white"
					}`}
					type="button"
					onClick={(e) => {
						nextPage();
					}}
					disabled={page === meta.pagination.pageCount ? true : false}
				>
					<span className="hidden lg:inline">Next</span>
					<i className="fr fi-rr-angle-right text-base top-[0.20rem]"></i>
				</button>
			</div>
		</section>
	);
};

export default Products;
