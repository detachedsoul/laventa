import IndexHero from "@components/IndexHero";
import NewArrivals from "@components/NewArrivals";
import IndexCategories from "@components/IndexCategories";

const Page = () => {
    return (
		<>
			<IndexHero />
			<main className="space-y-20 pt-18 pb-20 px-[3%] relative scroll-mt-20" id="new-arrivals">
				<NewArrivals />
				<IndexCategories />
			</main>
		</>
	);
};

export default Page;
