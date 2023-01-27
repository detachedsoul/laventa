"use client";

import newArrivals from "@data/new-arrivals";
import Link from "next/link";
import { useRef, useState } from "react";
import ProductListings from "@components/ProductListings";

const IndexCategories = () => {
	return (
		<section className="flex flex-col gap-12">
			<div className="flex flex-wrap items-center gap-4 pb-4 justify-between border-b border-slate-200 dark:border-slate-100/[0.06]">
				<h2 className="header text-3xl lg:text-4xl">Explore More</h2>

				<select className="select">
					<option value="All Categories">All Categories</option>

					<option value="Electronics">Electronics</option>

					<option value="Foot Wares">Foot Wares</option>

					<option value="Foodstuffs">Foodstuffs</option>
				</select>
			</div>

			<div className="grid gap-8 lg:grid-cols-3">
				{newArrivals.map((product) => (
					<ProductListings
						product={product}
						key={product.id}
					/>
				))}
			</div>

			<div className="grid place-content-center">
				<Link
					className="view-more-btn group"
					href="/categories"
				>
					View More Products
					<i className="fr fi-rr-arrow-right text-base top-[0.22rem] pl-0.5 group-hover:pl-1"></i>
				</Link>
			</div>
		</section>
	);
};

export default IndexCategories;
