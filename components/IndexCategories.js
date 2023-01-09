"use client";

import newArrivals from "@data/new-arrivals";
import demo from "@assets/img/demo-img.jpg";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const IndexCategories = () => {

	return (
		<section className="flex flex-col gap-12">
			<div className="flex flex-wrap items-center gap-4 pb-4 justify-between border-b border-slate-200 dark:border-slate-100/[0.06]">
				<h2 className="header text-3xl lg:text-4xl">Explore More</h2>

				<select className="select">
					<option value="All Categories">
						All Categories
					</option>

					<option value="Aall Categories">
						Electronics
					</option>

					<option value="Aall Categories">
						Foot Wares
					</option>

					<option value="Aall Categories">
						Foodstuffs
					</option>
				</select>
            </div>

			<div className="grid gap-8 lg:grid-cols-3">
                {newArrivals.map((arrivals, index) => (
					<article key={index}>
						<div className="relative h-[250px] rounded-lg group lg:h-[220px]">
							<Image className="rounded-lg object-center aspect-square object-cover" src={arrivals.productImage} fill quality={100} alt={arrivals.productName} />

							<div className="absolute flex gap-5 place-content-center place-items-center h-full left-0 w-full rounded-lg bg-black/50 p-4 opacity-0 transition ease-in-out duration-500 group-hover:opacity-100 group-focus:opacity-100 dark:text-slate-900">
								<span className="bg-white rounded-full py-1 px-[0.58rem] lg:px-2 cursor-pointer absolute right-4 top-4 transition ease-in-out duration-500 hover:text-brand-red" aria-label="Star product">
									<i className="fr fi-rr-heart text-base top-[0.20rem] -right-[0.05rem]"></i>
								</span>

								<button className="bg-white rounded-lg py-2.5 px-4 transition-colors ease-in-out duration-500 hover:text-brand-red" aria-label="Quick view of product details">
									<i className="fr fi-rr-eye text-base top-0.5"></i>
								</button>

								<button className="bg-white rounded-lg py-2.5 px-4 transition-colors ease-in-out duration-500 hover:text-brand-red" aria-label="Add product to cart">
									<i className="fr fi-rr-shopping-cart text-base top-0.5"></i>
								</button>
							</div>
						</div>

						<div className="flex flex-col gap-6 p-3">
							<div className="flex flex-col gap-0.5">
								<Link className="transition-colors duration-500 ease-in-out hover:text-rose-500 inline-block text-base" href="/">
									{arrivals.category}
								</Link>

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
												<span className="text-brand-dark-sky font-mono font-semibold bg-sky-100 rounded-md px-2 py-1">
													${arrivals.discount.currentPrice}
												</span>

												<del className="text-brand-dark-rose font-mono font-semibold bg-rose-100 rounded-md px-2 py-1">
													${arrivals.discount.oldPrice}
												</del>
											</>
										) : (
											<span className="text-brand-dark-sky font-mono font-semibold bg-sky-100 rounded-md px-2 py-1">
												${arrivals.discount.currentPrice}
											</span>
										)
									) : (
										<span className="font-semibold rounded-md py-1 text-brand-red dark:text-rose-500 text-xl header">
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
								<button className={ `add-to-cart ${!arrivals.inStock ? 'cursor-not-allowed pointer-events-none select-none bg-rose-400 dark:bg-[#383838]' : ''}`} type="button">
									<i className="fr fi-rr-shopping-cart text-base top-0.5 mr-2"></i>
									Add to Cart
								</button>

								<button className="add-to-cart bg-transparent text-slate-900 hover:bg-transparent focus:bg-transparent hover:text-rose-500 dark:text-rose-500 dark:hover:text-rose-600" type="button">
									<i className="fr fi-rr-eye text-base top-0.5 mr-2"></i>
									Quick View
								</button>
							</div>
						</div>
					</article>
				))}
			</div>

			<div className="grid place-content-center">
				<Link className="view-more-btn group" href="">
					View More Products
					<i className="fr fi-rr-arrow-right text-base top-[0.22rem] pl-0.5 group-hover:pl-1"></i>
				</Link>
			</div>
		</section>
	);
};

export default IndexCategories;
