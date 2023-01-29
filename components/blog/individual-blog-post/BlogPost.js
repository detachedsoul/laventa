import Image from "next/image";

const BlogPost = () => {
	return (
		<article className="space-y-8">
			<div className="flex gap-4 items-center text-lg">
				<p className="border-r border-gray-300 dark:border-gray-200 pr-4">
					Wisdom Ojimah
				</p>

				<p>Jan 29, 2023</p>
			</div>

			<div className="rounded-lg relative h-[200px] lg:h-[400px]">
				<Image
					className="h-full w-full aspect-square object-cover object-center rounded-lg"
					src="/img/04.jpg"
					alt="Some Random Title"
					title="Some Random Title"
					fill
					quality={100}
				/>
			</div>

			<div className="space-y-4">
				<h1 className="header text-2xl">Some Random Title</h1>

				<div className="space-y-2">
					<p>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Eligendi asperiores expedita quia reiciendis,
						voluptatibus distinctio minus explicabo deserunt enim
						esse iste laboriosam ipsa ad labore itaque cupiditate
						quasi officia omnis.
					</p>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Accusantium tempore iusto, nulla velit, ipsum vitae
						harum nemo odit nisi, expedita incidunt aliquid
						voluptate! Ullam, eveniet sed asperiores saepe
						reprehenderit eos!
					</p>
				</div>
			</div>
		</article>
	);
};

export default BlogPost;
