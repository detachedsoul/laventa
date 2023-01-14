import BlogPostsHero from "@components/blog/BlogPostsHero";
import BlogPostFilter from "@components/blog/BlogPostFilter";
import Posts from "@components/blog/Posts";

const Page = () => {
    return (
        <>
            <BlogPostsHero />
            <BlogPostFilter />
            <main className="space-y-20 py-12 px-[3%]">
                <Posts />
            </main>
        </>
    );
};

export default Page;
