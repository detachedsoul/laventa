"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DropdownLinks = ({ categories, error, isLoading }) => {
	const pathname = usePathname();

	if (isLoading) {
		return <p>Loading...</p>;
	}

	if (error) {
		return (
			<p className="font-bold text-brand-red dark:text-rose-500 mx-auto md:w-1/2">
				There was an error fetching categories.
			</p>
		);
	}

	console.log(typeof error, categories)

	return (
		<ul
			className={`flex flex-col gap-4 lg:grid md:grid-cols-2 ${typeof categories === null && 'md:grid-cols-1'}`}
		>
			{categories?.length > 0 ? (
				categories.map((category) => (
					<li key={category.id}>
						<Link
							className={`grid grid-cols-12 gap-4 items-start w-full transition-all ease-linear rounded-lg p-4 lg:gap-3 hover:bg-brand-light-black/80 dark:hover:text-white group ${
								pathname ===
									`/categories/${category.attributes.slug}` &&
								"bg-brand-light-black/80 text-white"
							}}`}
							href={`/categories/${category.attributes.slug}`}
						>
							<div className="relative h-12 col-span-3 rounded-md">
								<Image
									className="rounded-md aspect-sqaure object-cover object-center m-0"
									src={
										category.attributes.categoryImage.data
											.attributes.url
									}
									alt={category.attributes.categoryName}
									fill
								/>
							</div>

							<div
								className={`flex flex-col gap-1.5 transition-all ease-linear col-span-9 group-hover:text-white ${
									pathname ===
										`/categories/${category.attributes.slug}` &&
									"text-white"
								}`}
							>
								<h3 className="font-bold leading-none lg:text-lg lg:leading-none">
									{category.attributes.categoryName}
								</h3>

								<p className="text-lg lg:text-base">
									{category.attributes.categoryDesc}
								</p>
							</div>
						</Link>
					</li>
				))
			) : (
				<p className="font-bold text-center md:w-1/2 md:mx-auto">
					There are no product category yet. Please check back at a
					later time.
				</p>
			)}
		</ul>
	);
};

export default DropdownLinks;
