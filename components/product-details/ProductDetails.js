"use client";

import Image from "next/image";
import AddedToCartPopup from "@components/AddedToCartPopup";
import useCart from "@store/useCart";
import { useState } from "react";

const ProductDetails = ({product, id}) => {
	const [isAddedToCart, setIsAddedToCart] = useState(false);
	const addtoCart = useCart((state) => state.addToCart);

	if (isAddedToCart) {
        setTimeout(() => {
            setIsAddedToCart(() => false);
         }, 3000);
    }

    return (
		<>
			<AddedToCartPopup item={product?.attributes?.productName} isActive={isAddedToCart} />

			<div className="bg-white text-slate-900 p-[3%] rounded-lg grid space-y-4 dark:bg-brand-light-black dark:text-white lg:space-y-8">
				<div className="grid gap-4 items-stretch lg:grid-cols-2">
					<div className="space-y-4">
						<div className="h-[200px] relative rounded-lg lg:h-full">
							<Image
								className="rounded-lg object-cover aspect-square object-center"
								src={
									product?.attributes?.indexImage?.data
										?.attributes?.url
								}
								fill
								alt={product?.attributes.productName}
								quality={100}
							/>
						</div>
					</div>

					<div className="grid grid-cols-2 gap-4">
						<div className="h-[150px] lg:h-[200px] relative rounded-lg">
							<Image
								className="rounded-lg object-cover aspect-square object-center"
								src={
									product?.attributes?.productImageOne?.data
										?.attributes?.url
								}
								fill
								alt={product?.attributes.productName}
								quality={100}
							/>
						</div>

						<div className="h-[150px] lg:h-[200px] relative rounded-lg">
							<Image
								className="rounded-lg object-cover aspect-square object-center"
								src={
									product?.attributes?.productImageTwo?.data
										?.attributes?.url
								}
								fill
								alt={product?.attributes.productName}
								quality={100}
							/>
						</div>

						<div className="h-[200px] lg:h-[250px] relative rounded-lg col-span-2">
							<Image
								className="rounded-lg object-cover aspect-square object-center"
								src={
									product?.attributes?.productImageThree?.data
										?.attributes?.url
								}
								fill
								alt={product?.attributes.productName}
								quality={100}
							/>
						</div>
					</div>
				</div>

				<div className="space-y-6 lg:w-4/5">
					<div className="space-y-1">
						<h3 className="header text-3xl">
							{product?.attributes.productName}
						</h3>

						<p className="text-2xl font-medium slashed-zero">
							{product?.attributes?.isDiscount ? (
								<>
									<del className="text-xl text-rose-500">
										${product?.attributes?.oldPrice}
									</del>{" "}
									<span className="text-green-600">
										${product?.attributes?.currentPrice}
									</span>
								</>
							) : (
								<span className="text-green-600">
									${product?.attributes?.currentPrice}
								</span>
							)}
						</p>

						<div className="flex items-center gap-x-4 gap-y-2 flex-wrap">
							<div className="flex items-center gap-1">
								<i className="fr fi-rr-star text-sm text-rose-500 top-0.5"></i>
								<i className="fr fi-rr-star text-sm text-rose-500 top-0.5"></i>
								<i className="fr fi-rr-star text-sm text-rose-500 top-0.5"></i>
								<i className="fr fi-rr-star text-sm text-rose-500 top-0.5"></i>
								<i className="fr fi-rr-star text-sm text-rose-500 top-0.5"></i>
							</div>

							{product?.attributes?.inStock ? (
								<span className="bg-green-700 text-white flex items-center gap-1 rounded-md py-1.5 px-3">
									<i className="fr fi-rr-shield-check text-base top-0.5"></i>

									<span className="header text-sm tracking-widest">
										Product available
									</span>
								</span>
							) : (
								<span className="bg-brand-red text-white flex items-center gap-1 rounded-md py-1.5 px-3">
									<i className="fr fi-rr-ban text-base top-0.5"></i>

									<span className="header text-sm tracking-widest">
										Product Unavailable
									</span>
								</span>
							)}
						</div>
					</div>

					<div className="text-sm">
						<h4 className="header text-2xl mb-2">Highlights</h4>

						<ul className="list-inside list-disc space-y-2">
							{product?.attributes?.highlights}
						</ul>
					</div>

					<div>
						<h4 className="header text-2xl mb-2">Details</h4>

						<p>{product?.attributes?.details}</p>
					</div>

					{product?.attributes?.inStock && (
						<button
							className="py-2 px-3 rounded-md bg-brand-red text-white hover:bg-brand-dark-rose border-none"
							type="button"
							onClick={() => {
								setIsAddedToCart(() => true);
								addtoCart({ id, product });
							}}
						>
							Add to cart
							<i className="fr fi-rr-shopping-cart text-base top-[0.22rem] pl-3"></i>
						</button>
					)}
				</div>
			</div>
		</>
	);
 };

export default ProductDetails;
