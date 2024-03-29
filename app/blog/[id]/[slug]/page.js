import BlogPost from "@components/blog/individual-blog-post/BlogPost";
import BlogPostHero from "@components/blog/individual-blog-post/BlogPostHero";

export const generateMetadata = async ({params: {id}}) => {
    const blogArticleId = id.toString();

	const endpoint = `articles/${blogArticleId}`;
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const res = await fetch(`${url}`);

	const {data} = await res.json();

    return {
		title: `Laventa | ${data?.attributes?.title}`,
		description: `${data?.attributes?.author}`
	};
};

const Page = async ({params: { id }}) => {
	const articleId = id.toString();

	const endpoint = `articles/${articleId}?populate=*`;
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const res = await fetch(`${url}`);

	if (!res.ok) {
		return `There was an error fetching the requested resource. Please make sure that the API endpoint ${endpoint} is correct.`;
	}
	const {data} = await res.json();

	return (
		<>
			<BlogPostHero articleDetails={data?.attributes} />

			<main className="py-12 px-4 sm:px-8">
				<section>
					<BlogPost articleDetails={data?.attributes} />
				</section>
			</main>
		</>
	);
};

export const generateStaticParams = async () => {
	const endpoint = `articles?populate=*`;
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const res = await fetch(`${url}`);

	if (!res.ok) {
		return `There was an error fetching the requested resource. Please make sure that the API endpoint ${endpoint} is correct.`;
	}

	const { data } = await res.json();

	const blogPostDetails = data.map((blogDetails) => ({
		id: blogDetails.id.toString(),
		slug: blogDetails.attributes.slug,
	}));

	return blogPostDetails;
};

export const dynamicParams = false;
export default Page;
