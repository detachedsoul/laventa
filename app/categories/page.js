import CategoryHero from "@components/categories/CategoryHero";
import CategoryFilter from "@components/categories/CategoryFilter";
import NewArrivals from "@components/NewArrivals";
import IndexCategories from "@components/IndexCategories";
import IndexBlog from "@components/IndexBlog";

const Page = () => {
    return (
        <>
            <CategoryHero />
            <CategoryFilter />
            <main className="space-y-20 py-20 px-[3%]" id="new-arrivals">
                <IndexCategories />
                <IndexBlog />
            </main>
        </>
    );
};

export default Page;
