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

			<div className="grid gap-8 lg:grid-cols-12 items-start">
				<div className="lg:col-span-4 space-y-4 sticky lg:top-[15%]">
					<div className="space-y-2">
						<p>{fullDate}</p>

						<h1 className="header text-4xl">
							{articleDetails?.title}
						</h1>
					</div>

					<div className="flex gap-4 items-center text-lg">
						<div className="w-[60px]">
							<Image
								className="h-full w-full aspect-square object-cover object-center rounded-full"
								src={
									articleDetails?.authorImage?.data?.attributes
										?.url
								}
								alt={articleDetails?.author}
								title={articleDetails?.author}
								quality={ 100 }
								width={100}
								height={100}
							/>
						</div>

						<p className="border-l border-gray-300 dark:border-gray-200 pl-4 w-full block">
							{articleDetails?.author}
						</p>
					</div>
				</div>

				<div
					className="space-y-2 lg:col-span-8"
					dangerouslySetInnerHTML={{
						__html: articleDetails?.articleContent,
					}}
				/>
			</div>
		</article>
	);
};

export default BlogPost;
