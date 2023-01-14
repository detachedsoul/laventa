import Link from "next/link";

const BlogPostsHero = () => {
	return (
		<div className="flex flex-wrap justify-between gap-6 items-center px-[3%] py-12 bg-brand-red text-white">
			<h1 className="header text-2xl">Blog Posts</h1>

			<div className="flex items-center gap-1">
				<Link href="/">
					<i className="fr fi-rr-bank text-base top-0.5 pr-1"></i>
					Home
				</Link>

				<i className="fr fi-rr-angle-right text-base"></i>

				<span>Blog Posts</span>
			</div>
		</div>
	);
};

export default BlogPostsHero;
