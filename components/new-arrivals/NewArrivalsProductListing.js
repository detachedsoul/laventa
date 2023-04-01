import ProductsLoadingSkeleton from "@components/ProductsLoadingSkeleton";
import ProductListings from "@components/ProductListings";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const NewArrivalsScrollIndicator = dynamic(() =>
    import("./NewArrivalsScrollIndicator"),
    { ssr: false }
);

const fetchData = async () => {
	const endpoint = "products?populate=*";
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const req = await fetch(`${url}`);

	if (!req.ok) {
		return `There was an error fetching the requested resource. Please make sure that the API endpoint ${url} is correct.`;
	} else {
		const { data } = await req.json();

		return data;
	}
};

const NewArrivalsProductListing = async () => {
    const data = await fetchData();

    return (
		<>
			<Suspense fallback={<ProductsLoadingSkeleton />}>
				{typeof data !== "string" ? (
					data?.length > 0 ? (
						<div
							className="flex gap-8 items-stretch overflow-y-auto custom-scrollbar snap-x snap-mandatory scroll-smooth min-w-full"
							id="new-arrivals-content-container"
						>
							{data.map((products) => (
								<div
									className="min-w-full snap-always lg:min-w-[calc(33.3333333%-1.34rem)] snap-center"
									key={products.id}
								>
									<ProductListings
										id={products.id}
										product={products.attributes}
										isNewArrival={true}
									/>
								</div>
							))}
						</div>
					) : (
						<p className="font-bold text-center text-xl mx-auto">
							There are no products available yet. Please check
							back at a later time.
						</p>
					)
				) : (
					<p className="font-bold text-brand-red text-center mx-auto md:w-1/2">
						{data}
					</p>
				)}
			</Suspense>

            {typeof data !== "string" && data.length > 0 && (
                <NewArrivalsScrollIndicator data={data} />
            )}
		</>
	);
};

export default NewArrivalsProductListing;
