import blogStories from "@data/blog-stories";
import BlogPostsHero from "@components/blog/BlogPostsHero";
import BlogPostFilter from "@components/blog/BlogPostFilter";
import BlogCard from "@components/blog/BlogCard";
import Link from "next/link";

const Page = () => {
    return (
		<>
			<BlogPostsHero />
			<BlogPostFilter />
            <main className="space-y-20 py-12 px-[3%]">
                <section className="space-y-4">
			        <div className="grid gap-8 pb-8 lg:grid-cols-3 border-b border-slate-200 dark:border-brand-light-black">
                        <BlogCard blogPosts={ blogStories } />
                    </div>

                    <div className="flex justify-between gap-4 items-center flex-wrap">
                        <Link
                            className="flex items-center gap-1 py-1 px-2 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white"
                            href="/"
                        >
                            <i className="fr fi-rr-angle-left text-base top-[0.20rem]"></i>
                            <span className="hidden lg:inline">Prev</span>
                        </Link>

                        <div className="flex gap-1 items-center">
                            <Link
                                className="flex items-center gap-1 py-1 px-3 rounded-md bg-brand-red text-white pointer-events-none hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white"
                                href="/"
                            >
                                1
                            </Link>

                            <Link
                                className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white"
                                href="/"
                            >
                                2
                            </Link>

                            <span className="flex items-center gap-2 font-bold pointer-events-none select-none">
                                &bull; &bull; &bull;
                            </span>

                            <Link
                                className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white"
                                href="/"
                            >
                                4
                            </Link>

                            <Link
                                className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white"
                                href="/"
                            >
                                5
                            </Link>
                        </div>

                        <Link
                            className="flex items-center gap-1 py-1 px-2 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white"
                            href=""
                        >
                            <span className="hidden lg:inline">Next</span>
                            <i className="fr fi-rr-angle-right text-base top-[0.20rem]"></i>
                        </Link>
                    </div>
		        </section>
			</main>
		</>
	);
};

export default Page;
