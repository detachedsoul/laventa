import Link from "next/link";

const BlogPostHero = ({ articleDetails }) => {
	return (
		<div className="flex flex-wrap justify-between gap-6 items-center px-[3%] py-12 bg-brand-red text-white">
			<h1 className="header text-2xl">Blog Post Title</h1>

			<div className="flex items-center gap-x-2 gap-y-3 flex-wrap">
				<Link href="/">
					<i className="fr fi-rr-bank text-base top-0.5 pr-1"></i>
					Home
				</Link>

				<i className="fr fi-rr-angle-right text-base"></i>

				<Link href="/blog">
					<i className="fr fi-rr-book text-base top-0.5 pr-1"></i>
					Blog
				</Link>

				<i className="fr fi-rr-angle-right text-base"></i>

				<span>{articleDetails?.title}</span>
			</div>
		</div>
	);
};

export default BlogPostHero;
