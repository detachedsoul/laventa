"use client";

import heroImage from "@assets/img/hero-image.svg";
import Image from "next/image";

const IndexHero = () => {
	const scrollToNewArrivals = () => {
		if (typeof window !== "undefined") {
			const newArrivals = document.querySelector("#new-arrivals");

			newArrivals.scrollIntoView({
				behavior: 'smooth'
			});
		}
	}

	return (
		<div className="grid gap-12 grid-cols-1 pt-12 items-center sm:grid-cols-2 min-h-screen pb-20 px-4 sm:px-8 lg:pt-8 sm:pr-0 bg-sky-100 dark:text-white dark:bg-brand-light-black">
			<div className="space-y-4">
				<h1 className="main-header font-medium">
					Every <span className="font-bold">Purchase</span> Will Be Made With <span className="font-bold">Pleasure</span>
				</h1>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
				</p>

                <button className="rounded-full text-white py-3 lg:py-2 px-4 bg-brand-red transition-colors ease-linear duration-500" type="button" onClick={scrollToNewArrivals}>
                    Start Shopping <i className="fr fi-rr-arrow-small-down top-1.5"></i>
                </button>
			</div>

			<Image
				className="object-center object-cover aspect-square"
				src={heroImage}
				alt="Hero Image"
				quality={100}
				priority={true}
			/>
		</div>
	);
};

export default IndexHero;
