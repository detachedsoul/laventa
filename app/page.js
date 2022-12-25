import IndexHero from "@components/IndexHero";
import NewArrivals from "@components/NewArrivals";
import IndexCategories from "@components/IndexCategories";

const Page = () => {
    return (
		<>
			<IndexHero />
			<main className="space-y-20 py-20 px-[5%] scroll-mt-4" id="new-arrivals">
				<NewArrivals />
				<IndexCategories />
			</main>
		</>
	);
};

export default Page;