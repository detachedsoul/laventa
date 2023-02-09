import blogStories from "@data/blog-stories";
import Image from "next/image";
import Link from "next/link";

const Posts = () => {
	return (
		<section className="space-y-4">
			<div className="grid gap-8 pb-8 lg:grid-cols-3 border-b border-slate-200 dark:border-brand-light-black">
				{blogStories.map((story) => (
					<article key={story.id}>
						<div className="relative h-[250px] rounded-lg lg:h-[220px]">
							<Image
								className="rounded-lg object-center aspect-square object-cover"
								src={story.image}
								alt={story.title}
								quality={100}
								fill
							/>
						</div>

						<div className="rounded-b-lg border-x border-gray-200 border-b p-4 grid gap-2 dark:border-brand-light-black">
							<Link
								className="text-xl hover:text-brand-red font-bold dark:hover:text-rose-500"
								href={story.route}
							>
								<h3>{story.title}</h3>
							</Link>

							<div className="grid gap-4">
								<div className="border-b border-gray-200 pb-3 dark:border-brand-light-black grid gap-4">
									<p>{story.summary}</p>

									<Link
										className="text-brand-red hover:text-brand-dark-rose font-bold dark:text-rose-500 dark:hover:text-brand-red flex items-center gap-1 transition-all ease-in-out hover:gap-1.5"
										href={story.route}
									>
										Read More
										<i className="fr fi-rr-arrow-right text-base top-[0.20rem]"></i>
									</Link>
								</div>

								<div className="flex items-center gap-4 justify-between">
									<Image
										className="rounded-full object-center aspect-square object-cover"
										src={story.authorImage}
										alt={story.title}
										quality={100}
										width={50}
										height={50}
									/>

									<p>{story.datePosted}</p>
								</div>
							</div>
						</div>
					</article>
				))}
			</div>

			<div className="flex justify-between gap-4 items-center flex-wrap">
				<Link
					className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white"
					href="/"
				>
					<i className="fr fi-rr-angle-left text-base top-[0.20rem]"></i>
					<span className="hidden lg:inline">Prev</span>
				</Link>

				<div className="flex gap-1 items-center">
					<Link
						className="flex items-center gap-1 py-1 px-3 rounded-md bg-brand-red text-white pointer-events-none hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white"
						href="/"
					>
						1
					</Link>

					<Link
						className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white"
						href="/"
					>
						2
					</Link>

					<span className="flex items-center gap-2 font-bold pointer-events-none select-none">
						&bull; &bull; &bull;
					</span>

					<Link
						className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white"
						href="/"
					>
						4
					</Link>

					<Link
						className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white"
						href="/"
					>
						5
					</Link>
				</div>

				<Link
					className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white"
					href=""
				>
					<span className="hidden lg:inline">Next</span>
					<i className="fr fi-rr-angle-right text-base top-[0.20rem]"></i>
				</Link>
			</div>
		</section>
	);
};

export default Posts;
