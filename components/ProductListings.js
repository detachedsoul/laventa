"use client";

import ProductOverviewModal from "@components/ProductOverviewModal";
import ContextProvider from "@components/ContextProvider";
import Image from "next/image";
import Link from "next/link";
import { useState, memo, useContext } from "react";

const ProductListings = ({ product, isNewArrival = false }) => {
	const [modalIsActive, setModalIsActive] = useState(false);

	const handleClick = () => {
		setModalIsActive(() => true);
		document.body.style.overflowY = "hidden";
	};

	return (
		<>
			<article>
				<div className="relative h-[250px] rounded-lg group lg:h-[220px]">
					<Image
						className="rounded-lg object-center aspect-square object-cover"
						src={product.productImage}
						fill
						quality={100}
						alt={product.productName}
					/>

					<div className="absolute flex gap-5 place-content-center place-items-center h-full left-0 w-full rounded-lg bg-black/50 p-4 opacity-0 transition ease-in-out duration-500 group-hover:opacity-100 group-focus:opacity-100 dark:text-slate-900">
						<span className="bg-white rounded-full py-1.5 px-[0.58rem] lg:py-1 lg:px-2 cursor-pointer absolute right-4 top-4 transition ease-in-out duration-500 hover:text-brand-red">
							<i className="fr fi-rr-heart text-base top-[0.19rem] -right-[0.05rem]"></i>
						</span>

						<Link
							className="bg-white rounded-lg py-2.5 px-3.5 transition-colors ease-in-out duration-500 hover:text-brand-red"
							aria-label="View of product details"
							href={`/product/${product.id}/${product.productName}`}
						>
							<i className="fr fi-rr-eye text-base top-0.5"></i>
						</Link>

						<button
							className="bg-white rounded-lg py-2.5 px-4 transition-colors ease-in-out duration-500 hover:text-brand-red"
							aria-label="Add product to cart"
						>
							<i className="fr fi-rr-shopping-cart text-base top-0.5"></i>
						</button>
					</div>
				</div>

				<div className="flex flex-col gap-6 p-3">
					<div className="flex flex-col gap-2">
						<Link
							className={`transition-colors duration-500 ease-in-out hover:text-brand-red dark:hover:text-rose-500 ${
								isNewArrival ? "dark:hover:text-brand-red" : ""
							}`}
							href={`/categories/${product.category}`}
						>
							{product.category}
						</Link>

						<Link
							className={`transition-colors duration-500 ease-in-out text-lg hover:text-brand-red dark:hover:text-rose-500 ${
								isNewArrival ? "dark:hover:text-brand-red" : ""
							}`}
							href={`/product/${product.id}/${product.productName}`}
						>
							<h3 className="font-bold">{product.productName}</h3>
						</Link>
					</div>

					<div className="flex justify-between flex-wrap items-center gap-2">
						<div className="flex items-center gap-2 flex-wrap">
							{product.inStock ? (
								product.discount.isDiscount ? (
									<>
										<span className="text-brand-dark-sky font-mono font-semibold bg-sky-100 rounded-md px-2 py-1">
											${product.discount.currentPrice}
										</span>

										<del className="text-brand-dark-rose font-mono font-semibold bg-rose-100 rounded-md px-2 py-1">
											${product.discount.oldPrice}
										</del>
									</>
								) : (
									<span className="text-brand-dark-sky font-mono font-semibold bg-sky-100 rounded-md px-2 py-1">
										${product.discount.currentPrice}
									</span>
								)
							) : (
								<span
									className={`font-semibold rounded-md py-1 text-brand-red dark:text-rose-500 text-xl header ${
										isNewArrival
											? "dark:text-brand-red"
											: ""
									}`}
								>
									Out of stock!
								</span>
							)}
						</div>

						<div className="flex items-center gap-1">
							<i className="fr fi-rr-star text-sm top-0 text-rose-500"></i>
							<i className="fr fi-rr-star text-sm top-0 text-rose-500"></i>
							<i className="fr fi-rr-star text-sm top-0 text-rose-500"></i>
							<i className="fr fi-rr-star text-sm top-0 text-rose-500"></i>
							<i className="fr fi-rr-star text-sm top-0 text-rose-500"></i>
						</div>
					</div>

					<div className="flex flex-col gap-2">
						<button
							className={`add-to-cart ${
								!product.inStock
									? `cursor-not-allowed pointer-events-none select-none bg-slate-100 text-brand-red dark:bg-transparent dark:text-rose-500 ${
											isNewArrival
												? "dark:text-brand-red"
												: ""
									  }`
									: ""
							}`}
							type="button"
						>
							{!product.inStock ? (
								""
							) : (
								<i className="fr fi-rr-shopping-cart text-base top-0.5 mr-2"></i>
							)}
							{`${
								!product.inStock
									? "Out of stock"
									: "Add to Cart"
							}`}
						</button>

						<button
							className={`add-to-cart bg-transparent text-slate-900 hover:bg-transparent focus:bg-transparent hover:text-brand-red dark:hover:text-brand-red ${
								isNewArrival
									? "dark:text-brand-red dark:hover:text-brand-dark-rose"
									: "dark:text-rose-600"
							}`}
							type="button"
							onClick={handleClick}
						>
							<i className="fr fi-rr-eye text-base top-0.5 mr-2"></i>
							Quick View
						</button>
					</div>
				</div>
			</article>

			{modalIsActive && (
				<div
					className={`min-h-screen fixed top-0 left-0 w-full z-[1024] bg-brand-black/70 grid place-items-center px-4 transition-transform duration-500 ease-linear ${
						modalIsActive ? "scale-100" : "scale-0"
					}`}
				>
					<div className="bg-white text-slate-900 pb-4 max-h-[calc(100vh-1rem)] rounded-lg grid space-y-4 w-full overflow-y-auto custom-scrollbar dark:bg-brand-light-black dark:text-white">
						<div className="flex items-center gap-4 justify-between border-b border-gray-200 p-4 sticky top-0 z-50 bg-white dark:bg-brand-light-black dark:text-white dark:border-slate-50/10 rounded-t-lg">
							<h3 className="header text-xl">
								{product.productName}
							</h3>

							<button
								type="button"
								aria-label="Close modal"
								onClick={() => {
									setModalIsActive(() => false);
									document.body.style.overflowY = "auto";
								}}
							>
								<i className="fr fi-rr-cross text-base"></i>
							</button>
						</div>

						<div className="grid gap-4 lg:grid-cols-2 lg:gap-6 px-4">
							<div className="space-y-4">
								<div className="h-[200px] relative rounded-lg lg:h-[300px]">
									<Image
										className="rounded-lg object-cover aspect-square object-center"
										src={product.productImage}
										fill
										alt={product.productName}
										quality={100}
									/>
								</div>

								<div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
									<div className="h-[100px] relative rounded-lg">
										<Image
											className="rounded-lg object-cover aspect-square object-center"
											src="/img/01.jpg"
											fill
											alt={product.productName}
											quality={100}
										/>
									</div>

									<div className="h-[100px] relative rounded-lg">
										<Image
											className="rounded-lg object-cover aspect-square object-center"
											src="/img/02.jpg"
											fill
											alt={product.productName}
											quality={100}
										/>
									</div>

									<div className="h-[100px] relative rounded-lg">
										<Image
											className="rounded-lg object-cover aspect-square object-center"
											src="/img/03.jpg"
											fill
											alt={product.productName}
											quality={100}
										/>
									</div>

									<div className="h-[100px] relative rounded-lg">
										<Image
											className="rounded-lg object-cover aspect-square object-center"
											src="/img/04.jpg"
											fill
											alt={product.productName}
											quality={100}
										/>
									</div>
								</div>
							</div>

							<div className="space-y-4">
								<div className="space-y-1">
									<h3 className="header text-2xl">
										{product.productName}
									</h3>

									<p className="text-2xl font-medium slashed-zero">
										${product.discount.currentPrice}
									</p>

									<div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
										<div className="flex items-center gap-1">
											<i className="fr fi-rr-star text-sm text-rose-500 top-0.5"></i>
											<i className="fr fi-rr-star text-sm text-rose-500 top-0.5"></i>
											<i className="fr fi-rr-star text-sm text-rose-500 top-0.5"></i>
											<i className="fr fi-rr-star text-sm text-rose-500 top-0.5"></i>
											<i className="fr fi-rr-star text-sm text-rose-500 top-0.5"></i>
										</div>

										<span className="bg-green-700 text-white flex items-center gap-1 rounded-md py-1.5 px-3">
											<i className="fr fi-rr-shield-check text-base top-0.5"></i>

											<span className="header text-sm tracking-widest">
												Product available
											</span>
										</span>
									</div>
								</div>

								<div className="text-sm">
									<h4 className="header text-base mb-2">
										Highlights
									</h4>

									<ul className="list-inside list-disc space-y-2">
										<li className="text-gray-500 dark:text-gray-200">
											Hand cut and sewn locally
										</li>

										<li className="text-gray-500 dark:text-gray-200">
											Dyed with our proprietary colors
										</li>

										<li className="text-gray-500 dark:text-gray-200">
											Pre-washed & pre-shrunk
										</li>

										<li className="text-gray-500 dark:text-gray-200">
											Ultra-soft 100% cotton
										</li>
									</ul>
								</div>

								<div className="text-sm">
									<h4 className="header text-base mb-2">
										Details
									</h4>

									<p>{product.productInfo}</p>
								</div>

								<button
									className="py-2 px-3 rounded-md bg-brand-red text-white hover:bg-brand-dark-rose border-none"
									type="button"
								>
									Add to cart
									<i className="fr fi-rr-shopping-cart text-base top-[0.22rem] pl-3"></i>
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default memo(ProductListings);
