"use client";

import Image from "next/image";
import Link from "next/link";
import useCart from "@store/useCart";
import formartAmountSum from "@helpers/formartAmountSum";
import {useState, useEffect, useId} from "react";

const Checkout = () => {
	const[isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setIsLoaded(() => true);
	}, []);

	const totalCartProducts = useCart((state) => state.cart.length);
	const clearCart = useCart((state) => state.clearCart);
	const cartProducts = useCart((state) => state.cart);
	const removeFromCart = useCart((state) => state.removeFromCart);

	const getPriceTotal = cartProducts.reduce((accumulator, currentValue) => accumulator + currentValue.product.currentPrice, 0);
	const formartAmount = formartAmountSum(getPriceTotal);

	return (
		!isLoaded ? (
			<p className="px-[3%] py-12">
				Loading content, please wait...
			</p>
		) :
		<div className="relative">
			<div
				className="absolute grid inset-0"
				aria-hidden="true"
			>
				<div className="bg-brand-red"></div>
				<div className="bg-white dark:bg-brand-black"></div>
			</div>

			<div className="bg-white text-slate-900 py-[3%] px-[2%] mx-[3%] rounded-lg z-30 shadow-card relative grid gap-8 mb-12 lg:grid-cols-12 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x lg:divide-slate-200 lg:p-0">
				<div
					className={`grid gap-4 lg:py-[3%] lg:px-[5%] ${
						totalCartProducts < 1
							? "lg:col-span-12"
							: "lg:col-span-8"
					}`}
				>
					<div
						className={`flex items-center justify-between gap-2 flex-wrap ${
							totalCartProducts > 0 &&
							"border-b border-slate-200 pb-4"
						}`}
					>
						<Link
							className="border border-blue-800/40 text-blue-800 py-1.5 rounded-md px-3 transition-colors ease-in-out hover:bg-blue-800 hover:text-white flex items-center"
							href="/categories"
						>
							<i className="fr fi-rr-angle-left text-base top-0.5 pr-0.5"></i>
							Back to shopping
						</Link>

						<p className="header">
							{totalCartProducts < 1
								? "You do not have any item in your cart."
								: `You have ${totalCartProducts} products in your cart`}
						</p>

						<button
							className="border border-rose-600/40 text-rose-600 py-1.5 rounded-md px-3 transition-colors ease-in-out hover:bg-rose-600 hover:text-white flex items-center"
							type="button"
							onClick={clearCart}
						>
							<i className="fr fi-rr-cross text-sm top-0.5 pr-2"></i>
							Clear cart
						</button>
					</div>

					{totalCartProducts > 0 && (
						<div className="divide-y divide-slate-200">
							{cartProducts.map(({ product, id }) => (
								<div
									className="grid lg:grid-cols-12 items-center gap-4 pb-4 pt-4 first:pt-0 last:pb-0"
									key={id}
								>
									<div className="relative h-[200px] lg:h-[150px] lg:col-span-4">
										<Image
											className="object-cover object-center aspect-square rounded-md"
											src={
												product.indexImage.data
													.attributes.url
											}
											quality={100}
											alt={product.productName}
											fill
										/>

										<button
											className="bg-brand-red/90 text-white rounded-lg px-2.5 pt-2 pb-1.5 z-50 absolute right-2 top-2"
											type="button"
											title="Remove item from cart"
											onClick={() =>
												removeFromCart({ id })
											}
										>
											<i className="fr fi-rr-trash text-base top-0.5"></i>
										</button>
									</div>

									<div className="grid gap-0.5 lg:col-span-8">
										<h3 className="font-semibold leading-0 text-2xl">
											{product.productName}
										</h3>

										<p className="text-brand-red slashed-zero text-xl">
											<span className="font-medium">
												${
													formartAmountSum(
														product.currentPrice,
													).wholeNumber
												}
											</span>

											{formartAmountSum(
												product.currentPrice,
											).hasFractions === true && (
												<small>
													.{formartAmountSum(product.currentPrice).fractions}
												</small>
											)}
										</p>
									</div>
								</div>
							))}
						</div>
					)}
				</div>

				{totalCartProducts > 0 && (
					<div className="pt-8 lg:col-span-4 lg:py-[6%] lg:px-[10%]">
						<div className="sticky top-24 lg:grid gap-8">
							<div className="divide-y divide-slate-200">
								<div className="grid place-items-center place-content-center gap-4 pb-4">
									<p className="font-semibold text-lg">
										Cart total amount
									</p>

									<div className="text-3xl slashed-zero">
										<span className="font-bold">
											${formartAmount.wholeNumber}
										</span>
										{formartAmount.hasFractions === true && (
											<small className="font-medium">
												.{formartAmount.fractions}
											</small>
										)}
									</div>
								</div>

								<div className="py-4 space-y-4">
									<h3 className="header font-semibold text-center text-lg">
										Promo code
									</h3>

									<div className="grid gap-4">
										<label
											className="w-full"
											htmlFor="promo-code"
										>
											<input
												className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2] w-full"
												type="text"
												name="promo-code"
												id="promo-code"
												placeholder="Promo code"
											/>
										</label>

										<button
											className="bg-slate-200 pointer-events-none select-none py-2.5 px-4 text-center hover:bg-brand-dark-rose rounded-lg"
											disabled
										>
											Apply promo code
										</button>
									</div>
								</div>

								<div className="py-4 space-y-1">
									<Link
										className="bg-brand-red text-white py-2.5 px-4 text-center hover:bg-brand-dark-rose rounded-lg shadow-card hover:shadow-none w-full block"
										href="/checkout"
									>
										<i className="fr fi-rr-lock text-base top-0.5 pr-2"></i>
										Secure Checkout
									</Link>

									<p className="text-center text-sm">
										100% money back guarantee
									</p>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Checkout;
