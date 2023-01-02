"use client";

import demo from "@assets/img/demo-img.jpg";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

const IndexCategories = () => {
    const slideBack = useRef(null);
    const slideNext = useRef(null);

    const getElementSize = () => slideBack.current.parentElement.nextElementSibling.childNodes[0].offsetWidth+3;

    const slideToPrev = () => {
        slideBack.current.parentElement.nextElementSibling.scrollLeft -= getElementSize();
    };

    const slideToNext = () => {
        slideBack.current.parentElement.nextElementSibling.scrollLeft += getElementSize();
    };

	return (
		<section className="flex flex-col gap-12">
			<div className="text-center space-y-2">
				<h2 className="header text-3xl lg:text-4xl">Explore More</h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit,
					sed do eiusmod.
				</p>
			</div>

            <div className="flex items-center gap-4 min-w-full border-b border-gray-300 whitespace-nowrap overflow-y-auto custom-scrollbar snap-x snap-mandatory scroll-smooth">
                <button className="py-1.5 px-4 border-b-2 hover:border-sky-500">
                    All Products
                </button>

                <button className="py-1.5 px-4 border-b-2 hover:border-sky-500">
                    All Products
                </button>

                <button className="py-1.5 px-4 border-b-2 hover:border-sky-500">
                    All Products
                </button>

                <button className="py-1.5 px-4 border-b-2 hover:border-sky-500">
                    All Products
                </button>

                <button className="py-1.5 px-4 border-b-2 hover:border-sky-500">
                    All Products
                </button>

                <button className="py-1.5 px-4 border-b-2 hover:border-sky-500">
                    All Products
                </button>

                <button className="py-1.5 px-4 border-b-2 hover:border-sky-500">
                    All Products
                </button>

                <button className="py-1.5 px-4 border-b-2 hover:border-sky-500">
                    All Products
                </button>

                <button className="py-1.5 px-4 border-b-2 hover:border-sky-500">
                    All Products
                </button>

                <button className="py-1.5 px-4 border-b-2 hover:border-sky-500">
                    All Products
                </button>

                <button className="py-1.5 px-4 border-b-2 hover:border-sky-500">
                    All Products
                </button>

                <button className="py-1.5 px-4 border-b-2 hover:border-sky-500">
                    All Products
                </button>
            </div>

			<div className="space-y-5">
                <div className="relative">
                    <div>
                        <button
                            className="absolute top-1/4 bg-rose-500 px-2 py-1 -left-[4.5%] bg-gradient-to-r from-rose-500/80 to-sky-500/90 text-white z-40 backdrop-blur"
                            aria-label="Slide back"
                            ref={slideBack}
                            onClick={slideToPrev}
                        >
                            <i className="fr fi-rr-arrow-small-left text-2xl"></i>
                        </button>

                        <button
                            className="absolute top-1/4 bg-rose-500 px-2 py-1 -right-[4.5%] bg-gradient-to-r from-rose-500/80 to-sky-500/90 text-white z-40 backdrop-blur"
                            aria-label="Slide forward"
                            ref={slideNext}
                            onClick={slideToNext}
                        >
                            <i className="fr fi-rr-arrow-small-right text-2xl"></i>
                        </button>
                    </div>

                    <div className="flex gap-4 min-w-full whitespace-nowrap overflow-y-auto custom-scrollbar snap-x snap-mandatory scroll-smooth relative">
                        <article className="relative min-w-full lg:min-w-[calc(33.3333333%-.67rem)] snap-center">
                            <div className="bg-black text-white p-4 space-y-5 slashed-zero">
                                <div className="relative after:w-full after:absolute after:h-full after:bg-gradient-to-r after:from-rose-500/80 after:to-sky-500/90 after:top-1 after:left-1 h-44">
                                    <Image
                                        className="object-center object-cover relative z-30 aspect-square"
                                        src={demo}
                                        alt="Happy Customer"
                                        quality={100}
                                        priority={true}
                                        fill
                                    />
                                </div>

                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold">
                                        Puma Slide
                                    </h2>

                                    <p>
                                        $89.00{" "}
                                        <span className="font-serif text-emerald-500 ml-2">
                                            IN STOCK
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 space-y-4 bg-gray-100 dark:bg-slate-800">
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-2 py-1 block">
                                            XS
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-3 py-1 block">
                                            S
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-3 py-1 block">
                                            M
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-3 py-1 block">
                                            L
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-2 py-1 block">
                                            XL
                                        </span>
                                    </button>
                                </div>

                                <Link
                                    className="text-center bg-rose-600 text-white px-4 py-2 font-bold block hover:bg-rose-500 focus:bg-rose-500 rounded-md"
                                    href="/"
                                >
                                    BUY NOW
                                </Link>

                                <div className="grid gap-2 grid-cols-12 dark:text-slate-900">
                                    <button
                                        className="text-center border border-gray-500/[0.06] px-4 py-0.5 bg-white block font-bold col-span-10 rounded-md hover:bg-slate-50"
                                        type="button"
                                    >
                                        ADD TO CART
                                    </button>

                                    <button
                                        className="text-center border border-gray-500/[0.06] px-4 py-1.5 bg-white  font-bold col-span-2 rounded-md hover:bg-slate-50"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <i className="fr fi-rr-heart -left-1.5"></i>
                                    </button>
                                </div>

                                <p>Free shipping on all orders.</p>
                            </div>
                        </article>

                        <article className="relative min-w-full lg:min-w-[calc(33.3333333%-.67rem)] snap-center">
                            <div className="bg-black text-white p-4 space-y-5 slashed-zero">
                                <div className="relative after:w-full after:absolute after:h-full after:bg-gradient-to-r after:from-rose-500/80 after:to-sky-500/90 after:top-1 after:left-1 h-44">
                                    <Image
                                        className="object-center object-cover relative z-30 aspect-square"
                                        src={demo}
                                        alt="Happy Customer"
                                        quality={100}
                                        priority={true}
                                        fill
                                    />
                                </div>

                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold">
                                        Adidas Sneakers
                                    </h2>

                                    <p>
                                        $89.00{" "}
                                        <span className="font-serif text-emerald-500 ml-2">
                                            IN STOCK
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 space-y-4 bg-gray-100 dark:bg-slate-800">
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-2 py-1 block">
                                            XS
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-3 py-1 block">
                                            S
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-3 py-1 block">
                                            M
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-3 py-1 block">
                                            L
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-2 py-1 block">
                                            XL
                                        </span>
                                    </button>
                                </div>

                                <Link
                                    className="text-center bg-rose-600 text-white px-4 py-2 font-bold block hover:bg-rose-500 focus:bg-rose-500 rounded-md"
                                    href="/"
                                >
                                    BUY NOW
                                </Link>

                                <div className="grid gap-2 grid-cols-12 dark:text-slate-900">
                                    <button
                                        className="text-center border border-gray-500/[0.06] px-4 py-0.5 bg-white block font-bold col-span-10 rounded-md hover:bg-slate-50"
                                        type="button"
                                    >
                                        ADD TO CART
                                    </button>

                                    <button
                                        className="text-center border border-gray-500/[0.06] px-4 py-1.5 bg-white  font-bold col-span-2 rounded-md hover:bg-slate-50"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <i className="fr fi-rr-heart -left-1.5"></i>
                                    </button>
                                </div>

                                <p>Free shipping on all orders.</p>
                            </div>
                        </article>

                        <article className="relative min-w-full lg:min-w-[calc(33.3333333%-.67rem)] snap-center">
                            <div className="bg-black text-white p-4 space-y-5 slashed-zero">
                                <div className="relative after:w-full after:absolute after:h-full after:bg-gradient-to-r after:from-rose-500/80 after:to-sky-500/90 after:top-1 after:left-1 h-44">
                                    <Image
                                        className="object-center object-cover relative z-30 aspect-square"
                                        src={demo}
                                        alt="Happy Customer"
                                        quality={100}
                                        priority={true}
                                        fill
                                    />
                                </div>

                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold">
                                        Nike All Stars
                                    </h2>

                                    <p>
                                        $89.00{" "}
                                        <span className="font-serif text-emerald-500 ml-2">
                                            IN STOCK
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 space-y-4 bg-gray-100 dark:bg-slate-800">
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-2 py-1 block">
                                            XS
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-3 py-1 block">
                                            S
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-3 py-1 block">
                                            M
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-3 py-1 block">
                                            L
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-2 py-1 block">
                                            XL
                                        </span>
                                    </button>
                                </div>

                                <Link
                                    className="text-center bg-rose-600 text-white px-4 py-2 font-bold block hover:bg-rose-500 focus:bg-rose-500 rounded-md"
                                    href="/"
                                >
                                    BUY NOW
                                </Link>

                                <div className="grid gap-2 grid-cols-12 dark:text-slate-900">
                                    <button
                                        className="text-center border border-gray-500/[0.06] px-4 py-0.5 bg-white block font-bold col-span-10 rounded-md hover:bg-slate-50"
                                        type="button"
                                    >
                                        ADD TO CART
                                    </button>

                                    <button
                                        className="text-center border border-gray-500/[0.06] px-4 py-1.5 bg-white  font-bold col-span-2 rounded-md hover:bg-slate-50"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <i className="fr fi-rr-heart -left-1.5"></i>
                                    </button>
                                </div>

                                <p>Free shipping on all orders.</p>
                            </div>
                        </article>

                        <article className="relative min-w-full lg:min-w-[calc(33.3333333%-.67rem)] snap-center">
                            <div className="bg-black text-white p-4 space-y-5 slashed-zero">
                                <div className="relative after:w-full after:absolute after:h-full after:bg-gradient-to-r after:from-rose-500/80 after:to-sky-500/90 after:top-1 after:left-1 h-44">
                                    <Image
                                        className="object-center object-cover relative z-30 aspect-square"
                                        src={demo}
                                        alt="Happy Customer"
                                        quality={100}
                                        priority={true}
                                        fill
                                    />
                                </div>

                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold">
                                        New Balance Canvas
                                    </h2>

                                    <p>
                                        $89.00{" "}
                                        <span className="font-serif text-emerald-500 ml-2">
                                            IN STOCK
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 space-y-4 bg-gray-100 dark:bg-slate-800">
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-2 py-1 block">
                                            XS
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-3 py-1 block">
                                            S
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-3 py-1 block">
                                            M
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-3 py-1 block">
                                            L
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-2 py-1 block">
                                            XL
                                        </span>
                                    </button>
                                </div>

                                <Link
                                    className="text-center bg-rose-600 text-white px-4 py-2 font-bold block hover:bg-rose-500 focus:bg-rose-500 rounded-md"
                                    href="/"
                                >
                                    BUY NOW
                                </Link>

                                <div className="grid gap-2 grid-cols-12 dark:text-slate-900">
                                    <button
                                        className="text-center border border-gray-500/[0.06] px-4 py-0.5 bg-white block font-bold col-span-10 rounded-md hover:bg-slate-50"
                                        type="button"
                                    >
                                        ADD TO CART
                                    </button>

                                    <button
                                        className="text-center border border-gray-500/[0.06] px-4 py-1.5 bg-white  font-bold col-span-2 rounded-md hover:bg-slate-50"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <i className="fr fi-rr-heart -left-1.5"></i>
                                    </button>
                                </div>

                                <p>Free shipping on all orders.</p>
                            </div>
                        </article>

                        <article className="relative min-w-full lg:min-w-[calc(33.3333333%-.67rem)] snap-center">
                            <div className="bg-black text-white p-4 space-y-5 slashed-zero">
                                <div className="relative after:w-full after:absolute after:h-full after:bg-gradient-to-r after:from-rose-500/80 after:to-sky-500/90 after:top-1 after:left-1 h-44">
                                    <Image
                                        className="object-center object-cover relative z-30 aspect-square"
                                        src={demo}
                                        alt="Happy Customer"
                                        quality={100}
                                        priority={true}
                                        fill
                                    />
                                </div>

                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold">
                                        Retro Shoe
                                    </h2>

                                    <p>
                                        $89.00{" "}
                                        <span className="font-serif text-emerald-500 ml-2">
                                            IN STOCK
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 space-y-4 bg-gray-100 dark:bg-slate-800">
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-2 py-1 block">
                                            XS
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-3 py-1 block">
                                            S
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-3 py-1 block">
                                            M
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-3 py-1 block">
                                            L
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-2 py-1 block">
                                            XL
                                        </span>
                                    </button>
                                </div>

                                <Link
                                    className="text-center bg-rose-600 text-white px-4 py-2 font-bold block hover:bg-rose-500 focus:bg-rose-500 rounded-md"
                                    href="/"
                                >
                                    BUY NOW
                                </Link>

                                <div className="grid gap-2 grid-cols-12 dark:text-slate-900">
                                    <button
                                        className="text-center border border-gray-500/[0.06] px-4 py-0.5 bg-white block font-bold col-span-10 rounded-md hover:bg-slate-50"
                                        type="button"
                                    >
                                        ADD TO CART
                                    </button>

                                    <button
                                        className="text-center border border-gray-500/[0.06] px-4 py-1.5 bg-white  font-bold col-span-2 rounded-md hover:bg-slate-50"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <i className="fr fi-rr-heart -left-1.5"></i>
                                    </button>
                                </div>

                                <p>Free shipping on all orders.</p>
                            </div>
                        </article>

                        <article className="relative min-w-full lg:min-w-[calc(33.3333333%-.67rem)] snap-center">
                            <div className="bg-black text-white p-4 space-y-5 slashed-zero">
                                <div className="relative after:w-full after:absolute after:h-full after:bg-gradient-to-r after:from-rose-500/80 after:to-sky-500/90 after:top-1 after:left-1 h-44">
                                    <Image
                                        className="object-center object-cover relative z-30 aspect-square"
                                        src={demo}
                                        alt="Happy Customer"
                                        quality={100}
                                        priority={true}
                                        fill
                                    />
                                </div>

                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold">
                                        Deforsaken Shoes
                                    </h2>

                                    <p>
                                        $89.00{" "}
                                        <span className="font-serif text-emerald-500 ml-2">
                                            IN STOCK
                                        </span>
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 space-y-4 bg-gray-100 dark:bg-slate-800">
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-2 py-1 block">
                                            XS
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-3 py-1 block">
                                            S
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-3 py-1 block">
                                            M
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-3 py-1 block">
                                            L
                                        </span>
                                    </button>

                                    <button
                                        className="group relative after:bg-gradient-to-r after:hover:from-rose-500/80 after:hover:to-sky-500/90 after:focus:from-rose-500/80 after:focus:to-sky-500/90 after:w-full after:absolute after:h-full after:top-0.5 after:left-0.5 after:rounded-sm after:hover:border after:hover:border-black after:focus:border after:focus:border-black"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <span className="group-hover:bg-black group-hover:text-white group-focus:bg-black group-focus:text-white group-hover:rounded-sm group-focus:rounded-sm relative z-30 px-2 py-1 block">
                                            XL
                                        </span>
                                    </button>
                                </div>

                                <Link
                                    className="text-center bg-rose-600 text-white px-4 py-2 font-bold block hover:bg-rose-500 focus:bg-rose-500 rounded-md"
                                    href="/"
                                >
                                    BUY NOW
                                </Link>

                                <div className="grid gap-2 grid-cols-12 dark:text-slate-900">
                                    <button
                                        className="text-center border border-gray-500/[0.06] px-4 py-0.5 bg-white block font-bold col-span-10 rounded-md hover:bg-slate-50"
                                        type="button"
                                    >
                                        ADD TO CART
                                    </button>

                                    <button
                                        className="text-center border border-gray-500/[0.06] px-4 py-1.5 bg-white  font-bold col-span-2 rounded-md hover:bg-slate-50"
                                        type="button"
                                        aria-label="Like product"
                                    >
                                        <i className="fr fi-rr-heart -left-1.5"></i>
                                    </button>
                                </div>

                                <p>Free shipping on all orders.</p>
                            </div>
                        </article>
                    </div>
                </div>
			</div>
		</section>
	);
};

export default IndexCategories;
