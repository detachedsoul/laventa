import Image from "next/image";

const BlogPost = ({ articleDetails }) => {
	// Convert the date the blog post was posted to the format Jan 1, 2023
	const rawDate = new Date(articleDetails.datePublished.toString().split("-"));

	const months = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sept",
		"Oct",
		"Nov",
		"Dec",
	];

	const month = months[rawDate.getMonth()];
	const date = rawDate.getDate();
	const year = rawDate.getFullYear();

	const fullDate = `${month} ${date}, ${year}`;

	return (
		<article className="space-y-8">
			<div className="flex gap-4 items-center text-lg">
				<p className="border-r border-gray-300 dark:border-gray-200 pr-4">
					{articleDetails.author}
				</p>

				<p>{fullDate}</p>
			</div>

			<div className="rounded-lg relative h-[200px] lg:h-[400px]">
				<Image
					className="h-full w-full aspect-square object-cover object-center rounded-lg"
					src={articleDetails?.articleImage?.data?.attributes?.url}
					alt="Some Random Title"
					title="Some Random Title"
					fill
					quality={100}
				/>
			</div>

			<div className="space-y-4">
				<h1 className="header text-2xl">{articleDetails.title}</h1>

				<div className="space-y-2">
					{articleDetails.articleContent}
				</div>
			</div>
		</article>
	);
};

export default BlogPost;
