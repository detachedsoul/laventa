"use client";

import Image from "next/image";

const ProductOverviewModal = ({ product, isActive }) => {
	return (
		<div
			className={`min-h-screen fixed top-0 left-0 w-full z-[1024] bg-brand-black/70 grid place-items-center px-4 transition-transform duration-500 ease-linear ${
				isActive ? "scale-100" : "scale-0"
			}`}
		>
			<div className="bg-white text-slate-900 pb-4 max-h-[calc(100vh-1rem)] rounded-lg grid space-y-4 w-full overflow-y-auto custom-scrollbar dark:bg-brand-light-black dark:text-white">
				<div className="flex items-center gap-4 justify-between border-b border-gray-200 p-4 sticky top-0 z-50 bg-white dark:bg-brand-light-black dark:text-white dark:border-slate-50/10 rounded-t-lg">
					<h3 className="header text-xl">{product.productName}</h3>

					<button
						type="button"
						aria-label="Close modal"
                        onClick={ () => {
                                setModalIsActive(() => false);
                                document.body.style.overflowY = "auto";
                            }
						}
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
							<h4 className="header text-base mb-2">Details</h4>

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
	);
};

export default ProductOverviewModal;
