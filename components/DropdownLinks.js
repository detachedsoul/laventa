import Image from "next/image";
import Link from "next/link";

const fetchCategories = async () => {
	const endpoint = "categories?populate=*";
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const req = await fetch(`${url}`);

	if (!req.ok) {
		return `There was an error fetching the requested resource. Please make sure that the API endpoint ${endpoint} is correct.`;
	} else {
		const { data } = await req.json();

		return data;
	}
};

const DropdownLinks = ({categories}) => {
	return categories.map(category => (
		<ul className="flex flex-col gap-4 lg:grid lg:grid-cols-2" key={category.id}>
			{categories.map((category) => (
				<li key={category.id}>
					<Link
						className="grid grid-cols-12 gap-4 items-start w-full transition-all ease-linear rounded-lg p-4 lg:gap-3 hover:bg-brand-light-black/80 dark:hover:text-white group"
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

						<div className="flex flex-col gap-1.5 transition-all ease-linear col-span-9 group-hover:text-white">
							<h3 className="font-bold leading-none lg:text-lg lg:leading-none">
								{category.attributes.categoryName}
							</h3>

							<p className="text-lg lg:text-base">
								{category.attributes.categoryDesc}
							</p>
						</div>
					</Link>
				</li>
			))}
		</ul>
	));
};

export default DropdownLinks;
