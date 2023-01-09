import blogStories from "@data/blog-stories";
import Image from "next/image";
import Link from "next/link";

const IndexBlog = () => {
    return (
        <section className="flex flex-col gap-12">
            <div className="text-center place-items-center place-content-center grid gap-1">
                <h2 className="header text-3xl">
                    From the blog
                </h2>
                <p>
                    Latest store, fashion news and trends
                </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
                {blogStories.map(story => (
                    <article key={story.id}>
                        <div className="relative h-[250px] rounded-lg lg:h-[220px]">
                            <Image className="rounded-lg object-center aspect-square object-cover" src={story.image} alt={story.title} quality={100} fill />
                        </div>

                        <div className="rounded-b-lg border-x border-gray-200 border-b p-4 grid gap-2 dark:border-[#383838]">
                            <Link className="text-xl hover:text-brand-red font-bold dark:hover:text-rose-500" href={story.route}>
                                <h3>
                                    {story.title}
                                </h3>
                            </Link>

                            <div className="grid gap-4">
                                <div className="border-b border-gray-200 pb-3 dark:border-[#383838]">
                                    <p>
                                        {story.summary}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 justify-between">
                                    <Image className="rounded-full object-center aspect-square object-cover" src={story.authorImage} alt={story.title} quality={100} width={50} height={50} />

                                    <p>
                                        {story.datePosted}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <div className="grid place-content-center">
                <Link className="view-more-btn group" href="/blog">
                    Read More Posts
                    <i className="fr fi-rr-arrow-right text-base top-[0.22rem] pl-0.5 group-hover:pl-1"></i>
                </Link>
            </div>
        </section>
    );
};

export default IndexBlog;
