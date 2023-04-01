import ProductListings from "@components/ProductListings";
import ProductsLoadingSkeleton from "@components/ProductsLoadingSkeleton";
import newArrivals from "@data/new-arrivals";
import Link from "next/link";
import { Suspense } from "react";

const fetchProducts = async () => {
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

const Products = async () => {
    const productsArr = await fetchProducts();

    return (
        <section className="space-y-4">
            <div className="grid gap-8 pb-8 lg:grid-cols-3 border-b border-slate-200 dark:border-brand-light-black">
                <Suspense fallback={<ProductsLoadingSkeleton />}>
                    {typeof productsArr !== "string" ?
                        productsArr.length > 0 ? productsArr.map((products) => (
                                <ProductListings
                                    id={products.id}
                                    product={products.attributes}
                                    key={products.id}
                                />
                            ))
                        : (
                            <p className="font-bold text-center text-xl mx-auto">
                                There are no products available yet. Please check
                                back at a later time.
                            </p>
                        ) : (
                        <p className="font-bold text-brand-red text-center mx-auto md:w-1/2 dark:text-rose-500">
                            {productsArr}
                        </p>
                    )}
                </Suspense>
            </div>

            <div className="flex justify-between gap-4 items-center flex-wrap">
                <Link className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white" href="/">
                    <i className="fr fi-rr-angle-left text-base top-[0.20rem]"></i>
                    <span className="hidden lg:inline">Prev</span>
                </Link>

                <div className="flex gap-1 items-center">
                    <Link className="flex items-center gap-1 py-1 px-3 rounded-md bg-brand-red text-white pointer-events-none hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white" href="/">
                        1
                    </Link>

                    <Link className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white" href="/">
                        2
                    </Link>

                    <span className="flex items-center gap-2 font-bold pointer-events-none select-none">
                        &bull; &bull; &bull;
                    </span>

                    <Link className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white" href="/">
                        4
                    </Link>

                    <Link className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white" href="/">
                        5
                    </Link>
                </div>

                <Link className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white" href="">
                    <span className="hidden lg:inline">Next</span>
                    <i className="fr fi-rr-angle-right text-base top-[0.20rem]"></i>
                </Link>
            </div>
        </section>
    );
};

export default Products;
