import BlogPostHero from "@components/blog/individual-blog-post/BlogPostHero";
import BlogPost from "@components/blog/individual-blog-post/BlogPost";

const Page = () => {
	return (
		<>
			<BlogPostHero />
			<main className="py-12 px-[3%]">
				<section>
					<BlogPost />
				</section>
			</main>
		</>
	);
};

export default Page;
