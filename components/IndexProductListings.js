"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import ProductListings from "@components/ProductListings";
import useFetch from "@helpers/useFetch";

const IndexProductListings = () => {
	const productsArr = useFetch(`products?populate=*`);
	const categories = useFetch(`categories`);

	return (
		<section className="flex flex-col gap-12">
			<div className="flex flex-wrap items-center gap-4 pb-4 justify-between border-b border-slate-200 dark:border-slate-100/[0.06]">
				<h2 className="header text-3xl lg:text-4xl">Explore More</h2>

				<select className="select">
					<option value="All Categories">All Categories</option>
					{typeof categories !== "string" &&
						categories.map((category) => (
							<option
								value={category.attributes.categoryName}
								key={category.id}
							>
								{category.attributes.categoryName}
							</option>
						))}
				</select>
			</div>

			{typeof productsArr !== "string" ? (
				productsArr.length > 0 ? (
					<div className="grid gap-8 lg:grid-cols-3">
						{productsArr.map((products) => (
								<ProductListings
									id={products.id}
									product={ products.attributes }
									key={products.id}
								/>
						))}
					</div>
				) : (
					<p className="font-bold text-center text-xl mx-auto">
						There are no products available yet. Please check back
						at a later time.
					</p>
				)
			) : (
				<p className="font-bold text-brand-red text-center mx-auto md:w-1/2 dark:text-rose-500">
					{productsArr}
				</p>
			)}

			{typeof productsArr !== "string" &&
				productsArr.length > 0 && (
					<div className="grid place-content-center">
						<Link
							className="view-more-btn group"
							href="/categories"
						>
							View More Products
							<i className="fr fi-rr-arrow-right text-base top-[0.22rem] pl-0.5 group-hover:pl-1"></i>
						</Link>
					</div>
				)
			}
		</section>
	);
};

export default IndexProductListings;
