import CategoryHero from "@components/categories/CategoryHero";
import CategoryFilter from "@components/categories/CategoryFilter";
import Products from "@components/categories/Products";

const fetchCategories = async () => {
	const endpoint = "categories";
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const req = await fetch(`${url}`);

	if (!req.ok) {
		return `There was an error fetching the requested resource. Please make sure that the API endpoint ${endpoint} is correct.`;
	} else {
		const { data } = await req.json();

		return data;
	}
};

const fetchProducts = async () => {
	const endpoint = "products?populate=*";
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const req = await fetch(`${url}`);

	if (!req.ok) {
		return `There was an error fetching the requested resource. Please make sure that the API endpoint ${url} is correct.`;
	} else {
		const { data } = await req.json();

		return data;
	}
};

const Page = async () => {
    const productsArr = await fetchProducts();

    return (
        <>
            <CategoryHero />
            <CategoryFilter />
            <main className="space-y-20 py-12 px-[3%]">
                <Products productData={productsArr} />
            </main>
        </>
    );
};

export default Page;
