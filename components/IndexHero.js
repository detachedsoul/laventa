"use client";

import heroImage from "@assets/img/hero-image.png";
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
		<div className="grid gap-12 grid-cols-1 pt-12 items-center lg:grid-cols-2 min-h-[80vh] px-[5%] lg:pt-8 lg:pr-0">
			<div className="space-y-4">
				<h1 className="header text-5xl">
					Every <span className="text-rose-500">Purchase</span> Will Be Made With <span className="text-sky-500">Pleasure</span>
				</h1>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
				</p>

                <button className="rounded-full bg-rose-500 text-white py-3 lg:py-2 px-4 bg-gradient-to-r from-rose-500/80 to-sky-500/90 hover:from-sky-500/80 hover:to-rose-500/90 transition-colors ease-linear duration-500" type="button" onClick={scrollToNewArrivals}>
                    Start Shopping <i className="fr fi-rr-arrow-small-down top-1.5"></i>
                </button>
			</div>

			<Image
				className="object-center aspect-square"
				src={heroImage}
				alt="Happy Customer"
				quality={100}
				priority={true}
			/>
		</div>
	);
};

export default IndexHero;
