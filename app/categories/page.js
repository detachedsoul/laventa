import CategoryHero from "@components/categories/CategoryHero";
import CategoryFilter from "@components/categories/CategoryFilter";
import Products from "@components/categories/Products";

const Page = () => {
    return (
        <>
            <CategoryHero />
            <CategoryFilter />
            <main className="space-y-20 py-12 px-[3%]">
                <Products />
            </main>
        </>
    );
};

export default Page;
