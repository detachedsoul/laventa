"use client";

import newArrivals from "@data/new-arrivals";
import ScrollIndicator from "@components/ScrollIndicator";
import Image from "next/image";
import Link from "next/link";
import {useRef, useEffect, useState} from "react";

const NewArrivals = () => {
	const [isReady, setIsReady] = useState(false);

	const container = useRef(null);

	useEffect(() => {
		setIsReady(() => true);
	}, [])

	const perPage = () => {
		if (typeof window !== "undefined") {
			if (window.matchMedia('(min-width: 1024px)').matches) {
				return 3;
			} else {
				return 1;
			}
		}
	}

	return (
		isReady
			&&
		<section className="space-y-12 bg-white shadow-2xl rounded-xl pt-[5%] px-[5%] pb-[10%] relative -translate-y-[8vh] lg:-translate-y-[10vh] -mb-[calc(10vh)] lg:px-[3%] lg:pt-[3%] lg:pb-[5%] dark:text-slate-900">
			<div className="text-center place-items-center place-content-center grid gap-1">
				<h2 className="header text-3xl">
					New Arrivals
				</h2>
				<p>
					Every week we hand-pick some of the best items from our collection
				</p>
			</div>

			<div className="flex gap-8 items-stretch whitespace-nowrap overflow-y-auto custom-scrollbar snap-x snap-mandatory scroll-smooth min-w-full" ref={container}>
				{newArrivals.map((arrivals, index) => (
					<article className="min-w-full snap-always lg:min-w-[calc(33.3333333%-1.34rem)] snap-center" key={index}>
						<div className="relative h-[220px] rounded-lg group">
							<Image className="rounded-lg object-center aspect-square object-cover" src={arrivals.productImage} fill quality={100} alt={arrivals.productName} />

							<div className="absolute flex gap-5 place-content-center place-items-center h-full left-0 w-full rounded-lg bg-black/50 p-4 opacity-0 transition ease-in-out duration-500 group-hover:opacity-100 group-focus:opacity-100">
								<span className="bg-white rounded-full py-1 px-[0.55rem] lg:px-2 cursor-pointer absolute right-4 top-4 transition ease-in-out duration-500 hover:text-rose-500" aria-label="Star product">
									<i className="fr fi-rr-heart text-base top-[0.18rem] -right-[0.05rem]"></i>
								</span>

								<button className="bg-white rounded-lg py-2.5 px-4 transition ease-in-out duration-500 hover:text-rose-500" aria-label="Quick view of product details">
									<i className="fr fi-rr-eye text-base top-0.5"></i>
								</button>

								<button className="bg-white rounded-lg py-2.5 px-4 transition ease-in-out duration-500 hover:text-rose-500" aria-label="Add product to cart">
									<i className="fr fi-rr-shopping-cart text-base top-0.5"></i>
								</button>
							</div>
						</div>

						<div className="flex flex-col gap-6 p-3">
							<div className="flex flex-col gap-0.5">
								<p className="text-base">
									{arrivals.category}
								</p>
								<Link className="transition-colors duration-500 ease-in-out hover:text-rose-500 inline-block text-lg" href="/">
									<h3 className="font-bold">
										{arrivals.productName}
									</h3>
								</Link>
							</div>

							<div className="flex justify-between flex-wrap items-center gap-2">
								<div className="flex items-center gap-2 flex-wrap">
									{arrivals.inStock ? (
										arrivals.discount.isDiscount ? (
											<>
												<span className="text-sky-500 font-mono font-semibold bg-sky-100 rounded-md px-2 py-1">
													${arrivals.discount.currentPrice}
												</span>

												<del className="text-rose-500 font-mono font-semibold bg-rose-100 rounded-md px-2 py-1">
													${arrivals.discount.oldPrice}
												</del>
											</>
										) : (
											<span className="text-sky-500 font-mono font-semibold bg-sky-100 rounded-md px-2 py-1">
												${arrivals.discount.currentPrice}
											</span>
										)
									) : (
										<span className="font-mono font-semibold rounded-md py-1 text-slate-700">
											Out of stock!
										</span>
									)}
								</div>

								<div className="flex items-center gap-1">
									<i className="fr fi-rr-star text-sm top-0 text-rose-500"></i>
									<i className="fr fi-rr-star text-sm top-0 text-rose-500"></i>
									<i className="fr fi-rr-star text-sm top-0 text-rose-500"></i>
									<i className="fr fi-rr-star text-sm top-0 text-rose-500"></i>
									<i className="fr fi-rr-star text-sm top-0 text-rose-500"></i>
								</div>
							</div>

							<div className="flex flex-col gap-2">
								{arrivals.inStock ? (
									<button className="add-to-cart" type="button">
									<i className="fr fi-rr-shopping-cart text-base top-0.5 mr-2"></i>
										Add to Cart
									</button>
								) : (
									<button className="add-to-cart cursor-not-allowed bg-rose-400 hover:bg-rose-400 focus:bg-rose-400" type="button">
									<i className="fr fi-rr-shopping-cart text-base top-0.5 mr-2"></i>
										Add to Cart
									</button>
								)}

								<button className="add-to-cart bg-transparent text-slate-900 hover:bg-transparent focus:bg-transparent hover:text-rose-500" type="button">
									<i className="fr fi-rr-eye text-base top-0.5 mr-2"></i>
									Quick View
								</button>
							</div>
						</div>
					</article>
				))}
			</div>

			<div className="flex flex-wrap place-content-center gap-2">
				<ScrollIndicator parentElement={container} totalSlides={newArrivals.length} perPage={perPage()} slidesArray={newArrivals} />
			</div>
		</section>
	);
};

export default NewArrivals;
