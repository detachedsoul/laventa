import blogStories from "@data/blog-stories";
import BlogCard from "@components/blog/BlogCard";
import Link from "next/link";

const IndexBlog = () => {
	return (
		<section className="flex flex-col gap-12">
			<div className="text-center place-items-center place-content-center grid gap-1">
				<h2 className="header text-3xl">From the blog</h2>
				<p>Latest store, fashion news and trends</p>
			</div>

			<div className="grid gap-8 lg:grid-cols-3">
				<BlogCard blogPosts={ blogStories } />
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
		</section>
	);
};

export default IndexBlog;
