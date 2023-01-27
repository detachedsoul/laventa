"use client";

import newArrivals from "@data/new-arrivals";
import ContextProvider from "@components/ContextProvider";
import ScrollIndicator from "@components/ScrollIndicator";
import ProductListings from "@components/ProductListings";
import { useRef, useEffect, useState } from "react";

const NewArrivals = () => {
	const [isReady, setIsReady] = useState(false);
	const container = useRef(null);

	const perPage = () => {
		if (typeof window !== "undefined") {
			if (window.matchMedia("(min-width: 1024px)").matches) {
				return 3;
			} else {
				return 1;
			}
		}
	};

	useEffect(() => {
		setIsReady(() => true);
	}, []);


	return (
		isReady && (
			<section className="space-y-12 bg-white shadow-card rounded-xl pt-[5%] px-[5%] pb-[10%] relative -top-[8vh] lg:-top-[10vh] -mb-[calc(10vh)] lg:px-[3%] lg:pt-[3%] lg:pb-[5%] dark:bg-[#f3f5f9] dark:text-slate-900">
				<div className="text-center place-items-center place-content-center grid gap-1">
					<h2 className="header text-3xl">New Arrivals</h2>
					<p>
						Every week we hand-pick some of the best items from our
						collection
					</p>
				</div>

				<div
					className="flex gap-8 items-stretch overflow-y-auto custom-scrollbar snap-x snap-mandatory scroll-smooth min-w-full"
					ref={container}
				>
					{newArrivals.map((product) => (
						<div
							className="min-w-full snap-always lg:min-w-[calc(33.3333333%-1.34rem)] snap-center"
							key={product.id}
						>
							<ProductListings
								product={product}
								isNewArrival={true}
							/>
						</div>
					))}
				</div>

				<div className="flex flex-wrap place-content-center gap-2">
					<ScrollIndicator
						parentElement={container}
						totalSlides={newArrivals.length}
						perPage={perPage}
						slidesArray={newArrivals}
					/>
				</div>
			</section>
		)
	);
};

export default NewArrivals;
