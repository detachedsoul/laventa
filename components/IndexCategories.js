"use client";

import newArrivals from "@data/new-arrivals";
import demo from "@assets/img/demo-img.jpg";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const IndexCategories = () => {

	return (
		<section className="flex flex-col gap-12">
			<div className="flex flex-wrap items-center gap-4 pb-4 justify-between border-b border-slate-200">
				<h2 className="header text-3xl lg:text-4xl">Explore More</h2>

				<select className="form-select select">
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
					<article className="" key={index}>
						<div className="relative h-[250px] rounded-lg group lg:h-[220px]">
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

			<div className="grid place-content-center">
				<Link className="text-rose-500 py-2 px-3 rounded-lg border border-slate-200 flex items-center gap-2 transition-all duration-100 ease-linear hover:bg-rose-500 hover:text-white focus:bg-rose-500 focus:text-white group" href="">
					View More Products
					<i className="fr fi-rr-arrow-right text-base top-1 group-hover:pl-1"></i>
				</Link>
			</div>
		</section>
	);
};

export default IndexCategories;
