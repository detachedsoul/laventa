import CategoryWrapper from "@components/categories/individual-category/CategoryWrapper";

export const generateMetadata = async ({ params: { category } }) => {
	const categoryName = category.toString();

	const endpoint = `categories/${categoryName}`;
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const res = await fetch(`${url}`);

	const { data } = await res.json();

	return {
		title: `Laventa | ${data?.attributes?.categoryName}`,
		description: `${data?.attributes?.categoryDesc}`,
	};
};

const Page = ({ params: { category } }) => {
	return (
		<CategoryWrapper category={category} />
	);
};

export default Page;
