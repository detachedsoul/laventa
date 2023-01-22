import IndexHero from "@components/IndexHero";
import NewArrivals from "@components/NewArrivals";
import IndexCategories from "@components/IndexCategories";
import IndexBlog from "@components/IndexBlog";

const Page = () => {
    return (
		<>
			<IndexHero />
			<main className="space-y-20 pt-18 pb-20 px-[3%] scroll-mt-[8.5rem] lg:scroll-mt-[7.5rem]" id="new-arrivals">
				<NewArrivals />
				<IndexCategories />
				<IndexBlog />
			</main>
		</>
	);
};

export default Page;
