"use client";

import BlogPostLoadingSkeleton from "@components/BlogPostLoadingSkeleton";
import BlogCard from "@components/blog/BlogCard";
import BlogPostFilter from "@components/blog/BlogPostFilter";
import BlogPostsHero from "@components/blog/BlogPostsHero";
import useFetch from "@helpers/useFetch";
import useFilterOrder from "@store/useFilterOrder";
import usePaginate from "@store/usePaginate";
import useSearchContent from "@store/useSearchContent";

const fetchArticles = async (url) => {
	const res = await fetch(url);

	const data = await res.json();

	return data;
};

const BlogWrapper = () => {
    const page = usePaginate((state) => state.page);
	const order = useFilterOrder((state) => state.order);

	const blogPosts = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}articles?sort=id%3A${order}&pagination[pageSize]=6&pagination[page]=${page}&populate=*`,
		fetchArticles,
	).data;

	const isLoading = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}articles?sort=id%3A${order}&pagination[pageSize]=6&pagination[page]=${page}&populate=*`,
		fetchArticles,
	).isLoading;

	const error = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}articles?sort=id%3A${order}&pagination[pageSize]=6&pagination[page]=${page}&populate=*`,
		fetchArticles,
	).error;

	const nextPage = usePaginate((state) => state.nextPage);
	const prevPage = usePaginate((state) => state.prevPage);
	const toPage = usePaginate((state) => state.toPage);

	const filteredContent = useSearchContent((state) => state.searchContent);

    return (
		<>
			<BlogPostsHero />

			{!isLoading && <BlogPostFilter articles={blogPosts} />}

			<main className="space-y-20 py-12 px-4 sm:px-8">
                {error && (
                    <p className="font-bold text-brand-red text-xl text-center mx-auto dark:text-rose-500 sm:w-3/5">
                        There was an error fetching articles. Please try
                        again later.
                    </p>
                )}

				<section className="space-y-4">
					{isLoading ? (
                        <BlogPostLoadingSkeleton />
                    ) : blogPosts?.data?.length > 0 ? (
						<>
							<div className="grid gap-8 pb-8 lg:grid-cols-3 border-b border-slate-200 dark:border-brand-light-black">
								<BlogCard blogPosts={filteredContent?.data?.length > 0 ? filteredContent?.data : blogPosts?.data} />
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
									<span className="hidden lg:inline">
										Prev
									</span>
								</button>

								<div className="flex gap-1 items-center">
									<button className="flex items-center gap-1 py-1 px-3 mx-2 rounded-md pointer-events-none bg-brand-red text-white">
										{page}
									</button>

									<div className="w-20 text-center space-y-0.5">
										<span className="text-center block">
											of
										</span>

										<label
											className="block border border-slate-200 focus-within:border-brand-dark-rose/[0.2] rounded"
											htmlFor="jump-to-page"
										>
											<input
												className="input-form text-slate-900 py-1 rounded w-full"
												type="number"
												max={blogPosts?.meta.pagination.pageCount}
												min={blogPosts?.meta.pagination.pageCount}
												placeholder="Jump to page"
												pattern="[0-9]{*}"
												id="jump-to-page"
												onChange={(e) => {
													if (
														Number(e.target.value) >
															blogPosts?.meta.pagination
																.pageCount ||
														isNaN(e.target.value) ||
														e.target.value === ""
													) {
														return;
													}

													toPage(
														Number(e.target.value),
													);
												}}
											/>
										</label>
									</div>

									<p className="flex items-center gap-1 py-1 px-2 rounded-md  pointer-events-none select-none">
										{blogPosts?.meta.pagination.pageCount}
									</p>
								</div>

								<button
									className={`flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white ${
										page === blogPosts?.meta.pagination.pageCount &&
										"bg-slate-200 pointer-events-none dark:bg-brand-light-black dark:text-white"
									}`}
									type="button"
									onClick={(e) => {
										nextPage();
									}}
									disabled={
										page === blogPosts?.meta.pagination.pageCount
											? true
											: false
									}
								>
									<span className="hidden lg:inline">
										Next
									</span>
									<i className="fr fi-rr-angle-right text-base top-[0.20rem]"></i>
								</button>
							</div>
						</>
					) : (
						<p className="font-bold text-center text-xl mx-auto sm:w-3/5">
							There are no blog articles available yet. Please
							check back at a later time.
						</p>
					)}
				</section>
			</main>
		</>
	);
};

export default BlogWrapper;
