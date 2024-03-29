"use client";

import useFilterOrder from "@store/useFilterOrder";
import useSearchContent from "@store/useSearchContent";

const BlogPostFilter = ({articles}) => {
	const { data } = articles;
    const { meta } = articles;

	const setOrder = useFilterOrder((state) => state.setOrder);
    const currentOrder = useFilterOrder((state) => state.currentOrder);
    const setCurrentOrder = useFilterOrder((state) => state.setCurrentOrder);
    const order = useFilterOrder((state) => state.order);


    const handleOrderChange = (e) => {
        if (e.target.value === "Newest") {
            setCurrentOrder(e.target.value);

            setOrder("desc");
        } else {
            setCurrentOrder(e.target.value);

            setOrder("asc");
        }
    };

	const setFilteredContent = useSearchContent((state) => state.setSearchContent);

    const handleSearchChange = (e) => {
        const filterContent = data.filter((params) => {
            if (e.target.value === "") return articles;


            return params.id.toString().toLowerCase().includes(e.target.value.toLowerCase()) || params.attributes.articleContent.toLowerCase().includes(e.target.value.toLowerCase()) || params.attributes.author.toLowerCase().includes(e.target.value.toLowerCase()) || params.attributes.slug.toLowerCase().includes(e.target.value.toLowerCase()) || params.attributes.summary.toLowerCase().includes(e.target.value.toLowerCase()) || params.attributes.title.toLowerCase().includes(e.target.value.toLowerCase())
        });

        // Check if fiterContent is equal to the products data
        if (filterContent.length === data.length) {
            setFilteredContent({data: [], meta});
        } else {
            setFilteredContent({data: [...filterContent], meta});
        }

        setOrder(order);
    };

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
				<div className="grid gap-4 lg:gap-8 sm:grid-cols-12">
					<form
						className="flex flex-nowrap border border-slate-200 rounded-lg focus-within:border-brand-dark-rose/[0.2] sm:col-span-8"
					>
						<label
							className="py-0.5 px-1 w-full"
							htmlFor="search"
						>
							<input
								className="bg-white py-2.5 input-form w-full sm:py-2"
								type="search"
								id="search"
								placeholder="Search for blog posts"
								onChange={(e) => handleSearchChange(e)}
							/>
						</label>
					</form>

					<div className="items-center sm:col-span-4 lg:grid lg:grid-cols-3">
						<span
							className="hidden lg:inline-block lg:col-span-1"
							id="sort-by"
						>
							Sort by:
						</span>

						<select
							className="select dark:focus:ring-slate-200 dark:focus:ring-offset-white dark:bg-white dark:text-slate-900 dark:border-slate-200 w-full py-2.5 lg:col-span-2 lg:py-2"
							aria-describedby="sort-by"
							value={currentOrder}
							onChange={(e) => handleOrderChange(e)}
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
