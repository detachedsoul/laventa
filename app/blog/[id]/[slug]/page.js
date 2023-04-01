import BlogPostHero from "@components/blog/individual-blog-post/BlogPostHero";
import BlogPost from "@components/blog/individual-blog-post/BlogPost";

const Page = async ({params: { id, slug }}) => {
	const articleId = id.toString();

	console.log(articleId, typeof articleId, "Hello world")

	const endpoint = `articles/${articleId}?populate=*`;
	const url = process.env.NEXT_PUBLIC_API_URL + endpoint;
	const res = await fetch(`${url}`);

	if (!res.ok) {
		return `There was an error fetching the requested resource. Please make sure that the API endpoint ${endpoint} is correct.`;
	}
	const {data} = await res.json();

	return (
		<>
			<BlogPostHero articleDetails={data.attributes} />

			<main className="py-12 px-[3%]">
				<section>
					<BlogPost articleDetails={data.attributes} />
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

	console.log(data);

	const blogPostDetails = data.map((blogDetails) => ({
		id: blogDetails.id.toString(),
		slug: blogDetails.attributes.slug,
	}));

	return blogPostDetails;
};

export const dynamicParams = false;
export default Page;
