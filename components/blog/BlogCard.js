import DOMPurify from "dompurify";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ blogPosts }) => {
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

	return blogPosts?.map((story, id) => (
		<article key={story.id}>
			<div className="relative h-[250px] rounded-lg lg:h-[220px]">
				<Image
					className="rounded-lg object-center aspect-square object-cover"
					src={story.attributes.articleImage.data.attributes.url}
					alt={story.attributes.title}
					quality={100}
					fill
				/>
			</div>

			<div className="rounded-b-lg border-x border-gray-200 border-b p-4 grid gap-2 dark:border-brand-light-black">
				<Link
					className="text-xl hover:text-brand-red font-bold dark:hover:text-rose-500"
					href={`/blog/${story.id}/${story.attributes.slug}`}
				>
					<h3>{story.attributes.title}</h3>
				</Link>

				<div className="grid gap-4">
					<div className="border-b border-gray-200 pb-3 dark:border-brand-light-black space-y-4">
						<div
							className="space-y-1.5"
							dangerouslySetInnerHTML={{
								__html: DOMPurify.sanitize(
									story.attributes.summary,
								),
							}}
						/>

						<div className="inline-block">
							<Link
								className="text-brand-red hover:text-brand-dark-rose font-bold dark:text-rose-500 dark:hover:text-brand-red flex items-center gap-1 transition-all ease-in-out hover:gap-1.5"
								href={`/blog/${story.id}/${story.attributes.slug}`}
							>
								Read More
								<i className="fr fi-rr-arrow-right text-base top-[0.20rem]"></i>
							</Link>
						</div>
					</div>

					<div className="flex items-center gap-4 justify-between">
						<Image
							className="rounded-full object-center aspect-square object-cover"
							src={
								story.attributes.authorImage.data.attributes.url
							}
							alt={story.attributes.author}
							quality={100}
							width={50}
							height={50}
						/>

						<p>{`${
							story.attributes.datePublished.split("-")[1] < 10
								? months[
										story.attributes.datePublished
											.split("-")[1]
											.toString()
											.split("0")[1] - 1
								  ]
								: months[
										story.attributes.datePublished.split(
											"-",
										)[1] - 1
								  ]
						} ${story.attributes.datePublished.split("-")[2]}, ${
							story.attributes.datePublished.split("-")[0]
						}`}</p>
					</div>
				</div>
			</div>
		</article>
	));
};

export default BlogCard;
