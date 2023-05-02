import IndexBlog from "@components/IndexBlog";
import IndexHero from "@components/IndexHero";
import IndexProductListings from "@components/IndexProductListings";
import NewArrivals from "@components/NewArrivals";

const Page = () => {
    return (
		<>
			<IndexHero />
			<main className="space-y-20 pt-18 pb-20 px-4 sm:px-8 scroll-mt-[8.5rem] lg:scroll-mt-[7.5rem]" id="new-arrivals">
				<NewArrivals />
				<IndexProductListings />
				<IndexBlog />
			</main>
		</>
	);
};

export default Page;
