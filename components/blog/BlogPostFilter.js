const BlogPostFilter = () => {
	return (
		<div className="relative">
			<div
				className="absolute grid inset-0"
				aria-hidden="true"
			>
				<div className="bg-brand-red"></div>
				<div className="bg-white dark:bg-brand-black"></div>
			</div>

			<div className="bg-white text-slate-900 p-[3%] mx-[3%] rounded-lg z-30 shadow-card relative grid">
				<div className="grid gap-4 lg:grid-cols-12">
					<div className="items-center lg:col-span-3 lg:grid lg:grid-cols-3">
						<span
							className="hidden lg:inline-block lg:col-span-1"
							id="sort-by-order"
						>
							Order:
						</span>

						<select
							className="select dark:focus:ring-slate-200 dark:focus:ring-offset-white dark:bg-white dark:text-slate-900 dark:border-slate-200 w-full py-2.5 lg:col-span-2 lg:py-2"
							aria-describedby="sort-by-order"
						>
							<option value="Newest">Ascending</option>

							<option value="Oldest">Descending</option>
						</select>
					</div>

					<form
						className="flex flex-nowrap border border-slate-200 rounded-lg focus-within:border-brand-dark-rose/[0.2] lg:col-span-6"
					>
						<label
							className="py-0.5 px-1 w-full"
							htmlFor="search"
						>
							<input
								className="bg-white py-2.5 input-form w-full lg:py-2"
								type="search"
								id="search"
								placeholder="Search for blog posts"
							/>
						</label>
					</form>

					<div className="items-center lg:col-span-3 lg:grid lg:grid-cols-3">
						<span
							className="hidden lg:inline-block lg:col-span-1"
							id="sort-by"
						>
							Sort by:
						</span>

						<select
							className="select dark:focus:ring-slate-200 dark:focus:ring-offset-white dark:bg-white dark:text-slate-900 dark:border-slate-200 w-full py-2.5 lg:col-span-2 lg:py-2"
							aria-describedby="sort-by"
						>
							<option value="Newest">Newest</option>

							<option value="Oldest">Oldest</option>
						</select>
					</div>
				</div>
			</div>
		</div>
	);
};

export default BlogPostFilter;
