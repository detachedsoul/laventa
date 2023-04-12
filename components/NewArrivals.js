import NewArrivalsProductListing from "@components/new-arrivals/NewArrivalsProductListing";

const NewArrivals = () => {
	return (
		<section className="space-y-12 bg-white shadow-card rounded-xl pt-[5%] px-4 sm:px-8 pb-[10%] relative -top-[8vh] lg:-top-[10vh] -mb-[calc(10vh)] lg:pt-[3%] lg:pb-[5%] dark:bg-[#f3f5f9] dark:text-slate-900">
			<div className="text-center place-items-center place-content-center grid gap-1">
				<h2 className="header text-3xl">New Arrivals</h2>
				<p>
					Every week we hand-pick some of the best items from our
					collection
				</p>
			</div>

			<NewArrivalsProductListing />
		</section>
	);
};

export default NewArrivals;
