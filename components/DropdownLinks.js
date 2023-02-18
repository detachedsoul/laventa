"use client";

import useFetch from "@helpers/useFetch";
import Image from "next/image";
import Link from "next/link";

const DropdownLinks = () => {
    const categories = useFetch(`categoriesS?populate=categoryImage`);

    return (
        (typeof categories !== "string") ?
            <ul className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
                {categories.map((category) => (
                    <li key={category.id}>
                        <Link
                            className="grid grid-cols-12 gap-4 items-start w-full transition-all ease-linear rounded-lg p-4 lg:gap-3 hover:bg-brand-light-black/80 dark:hover:text-white group"
                            href={`/categories/${category.attributes.categoryName.toLowerCase()}`}
                        >
                            <div className="relative h-12 col-span-3 rounded-md">
                                <Image
                                    className="rounded-md aspect-sqaure object-cover object-center m-0"
                                    src={
                                        category
                                            .attributes
                                            .categoryImage
                                            .data
                                            .attributes
                                            .url
                                    }
                                    alt={
                                        category
                                            .attributes
                                            .categoryName
                                    }
                                    fill
                                />
                            </div>

                            <div className="flex flex-col gap-1.5 transition-all ease-linear col-span-9 group-hover:text-white">
                                <h3 className="font-bold leading-none lg:text-lg lg:leading-none">
                                    {
                                        category
                                            .attributes
                                            .categoryName
                                    }
                                </h3>

                                <p className="text-lg lg:text-base">
                                    {
                                        category
                                            .attributes
                                            .categoryDesc
                                    }
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
            :
            <p className="font-bold text-brand-red dark:text-rose-500">
                {categories}
            </p>
    );
};

export default DropdownLinks;
