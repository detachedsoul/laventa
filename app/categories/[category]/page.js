import CategoryHero from "@components/categories/individual-category/CategoryHero";
import CategoryFilter from "@components/categories/CategoryFilter";
import Products from "@components/categories/Products";

const fetchCategoryName = async (categoryName) => {
    const endpoint = `categories/${categoryName}`;
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const res = await fetch(`${url}`);

	if (!res.ok) {
		return `There was an error fetching the requested resource. Please make sure that the API endpoint ${endpoint} is correct.`;
	}

    const { data } = await res.json();

    return data;
};

const fetchProducts = async (categoryName) => {
	const endpoint = `products?filters[category][categoryName][$eqi]=${categoryName}&pagination[pageSize]=3&populate=*`;
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const req = await fetch(`${url}`);

	if (!req.ok) {
		return `There was an error fetching the requested resource. Please make sure that the API endpoint ${url} is correct.`;
	} else {
		const { data } = await req.json();

		return data;
	}
};

const Page = async ({params: {category}}) => {
    const categoryName = category.toString();
    const categoryData = await fetchCategoryName(categoryName);
    const productsArr = await fetchProducts(categoryName);

    return (
		<>
			<CategoryHero
				categoryName={categoryData?.attributes?.categoryName}
			/>
			<CategoryFilter />

			<main className="space-y-20 py-12 px-[3%]">
				<Products productData={productsArr} />
			</main>
		</>
	);
};

export default Page;
