import BlogCard from "@components/blog/BlogCard";
import Link from "next/link";

const fetchArticles = async () => {
	const endpoint = "articles?populate=*";
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const req = await fetch(`${url}`);

	if (!req.ok) {
		return `There was an error fetching the requested resource. Please make sure that the API endpoint ${url} is correct.`;
	} else {
		const { data } = await req.json();

		return data;
	}
};

const IndexBlog = async () => {
	const blogPosts = await fetchArticles();

	return (
		<section className="flex flex-col gap-12">
			<div className="text-center place-items-center place-content-center grid gap-1">
				<h2 className="header text-3xl">From the blog</h2>
				<p>Latest store, fashion news and trends</p>
			</div>

			{typeof blogPosts !== "string" ? (
				blogPosts.length > 0 ? (
						<>
							<div className="grid gap-8 lg:grid-cols-3">
								<BlogCard blogPosts={blogPosts} />
							</div>

							<div className="grid place-content-center">
								<Link
									className="view-more-btn group"
									href="/blog"
								>
									Read More Posts
									<i className="fr fi-rr-arrow-right text-base top-[0.22rem] pl-0.5 group-hover:pl-1"></i>
								</Link>
							</div>
						</>
					) : (
						<p className="font-bold text-center text-xl mx-auto">
							There are no blog articles available yet. Please check
							back at a later time.
						</p>
					)
			) : (
				<p className="font-bold text-brand-red text-center mx-auto dark:text-rose-500 md:w-1/2">
					{blogPosts}
				</p>
			)}
		</section>
	);
};

export default IndexBlog;
