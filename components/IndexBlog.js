"use client";

import BlogCard from "@components/blog/BlogCard";
import Link from "next/link";
import useFetch from "@helpers/useFetch";
import BlogPostLoadingSkeleton from "@components/BlogPostLoadingSkeleton";

const fetchArticles = async (url) => {
	const res = await fetch(url);

	const {data} = await res.json();

	return data;
};

const IndexBlog = () => {
	const blogPosts = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}articles?sort=id%3Adesc&populate=*`,
		fetchArticles,
	).data;

	const isLoading = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}articles?sort=id%3Adesc&populate=*`,
		fetchArticles,
	).isLoading;

	const error = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}articles?sort=id%3Adesc&populate=*`,
		fetchArticles,
	).error;

	if (isLoading) return <BlogPostLoadingSkeleton />


	if (error) return (
		<p className="font-bold text-brand-red text-xl text-center mx-auto dark:text-rose-500">
			There was an error fetching articles. Please try again later.
		</p>
	);

	return (
		<section className="flex flex-col gap-12">
			<div className="text-center place-items-center place-content-center grid gap-1">
				<h2 className="header text-3xl">From the blog</h2>
				<p>Latest store, fashion news and trends</p>
			</div>

			{!isLoading && blogPosts?.length > 0 && !error ? (
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
			)}
		</section>
	);
};

export default IndexBlog;
