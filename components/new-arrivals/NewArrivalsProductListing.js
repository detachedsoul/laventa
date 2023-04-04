"use client";

import ProductsLoadingSkeleton from "@components/ProductsLoadingSkeleton";
import ProductListings from "@components/ProductListings";
import NewArrivalsScrollIndicator from "@components/new-arrivals/NewArrivalsScrollIndicator";
import useFetch from "@helpers/useFetch";

const fetchProducts = async (url) => {
	const res = await fetch(url);

	const {data} = await res.json();

	return data;
};

const NewArrivalsProductListing = () => {
    const data = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}products?sort=id%3Adesc&pagination[limit]=6&populate=*`,
		fetchProducts,
	).data;

	const isLoading = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}products?sort=id%3Adesc&pagination[limit]=6&populate=*`,
		fetchProducts,
	).isLoading;

	const error = useFetch(
		`${process.env.NEXT_PUBLIC_API_URL}products?sort=id%3Adesc&pagination[limit]=6&populate=*`,
		fetchProducts,
	).error;

	if (error)
		return (
			<p className="px-[3%] font-bold text-brand-red dark:text-rose-500 text-center text-xl mx-auto md:w-1/2 py-12">
				There was an error fetching the requested resource. Please try
				again later.
			</p>
		);

    return (
		<>
			{isLoading ? (
					<ProductsLoadingSkeleton />
				) : data?.length > 0 ? (
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
					<p className="font-bold text-center text-xl mx-auto md:w-1/2">
						There are no products available yet. Please check
							back at a later time.
					</p>
				)}

            {!isLoading && data?.length > 0 && (
                <NewArrivalsScrollIndicator data={data} />
            )}
		</>
	);
};

export default NewArrivalsProductListing;
