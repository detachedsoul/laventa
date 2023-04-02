import ProductListings from "@components/ProductListings";
import ProductsLoadingSkeleton from "@components/ProductsLoadingSkeleton";
import Link from "next/link";
import { Suspense } from "react";

const Products = async ({productData}) => {
    return (
		<section className="space-y-4">
			<div
				className={`grid gap-8 pb-8 border-b border-slate-200 dark:border-brand-light-black ${
					typeof productData === "string" && productData.length < 1 || typeof productData === "string" && productData.length > 0
						? "grid-cols-1 md:grid-cols-2"
						: "lg:grid-cols-3"
				}`}
			>
				<Suspense fallback={<ProductsLoadingSkeleton />}>
					{typeof productData !== "string" ? (
						productData.length > 0 ? (
							productData.map((products) => (
								<ProductListings
									id={products.id}
									product={products.attributes}
									key={products.id}
								/>
							))
						) : (
							<p className="font-bold text-center text-xl mx-auto">
								There are no products available yet. Please
								check back at a later time.
							</p>
						)
					) : (
						<p className="font-bold text-brand-red text-center mx-auto md:w-1/2 dark:text-rose-500">
							{productData}
						</p>
					)}
				</Suspense>
			</div>

			<div className="flex justify-between gap-4 items-center flex-wrap">
				<Link
					className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white"
					href="/"
				>
					<i className="fr fi-rr-angle-left text-base top-[0.20rem]"></i>
					<span className="hidden lg:inline">Prev</span>
				</Link>

				<div className="flex gap-1 items-center">
					<Link
						className="flex items-center gap-1 py-1 px-3 rounded-md bg-brand-red text-white pointer-events-none hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white"
						href="/"
					>
						1
					</Link>

					<Link
						className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white"
						href="/"
					>
						2
					</Link>

					<span className="flex items-center gap-2 font-bold pointer-events-none select-none">
						&bull; &bull; &bull;
					</span>

					<Link
						className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white"
						href="/"
					>
						4
					</Link>

					<Link
						className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white"
						href="/"
					>
						5
					</Link>
				</div>

				<Link
					className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white"
					href=""
				>
					<span className="hidden lg:inline">Next</span>
					<i className="fr fi-rr-angle-right text-base top-[0.20rem]"></i>
				</Link>
			</div>
		</section>
	);
};

export default Products;
