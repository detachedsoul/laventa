"use client";

import Image from "next/image";
import acceptedCards from "@assets/img/cards-alt.png";
import Link from "next/link";
import useCart from "@store/useCart";
import formartAmountSum from "@helpers/formartAmountSum";
import Popup from "@components/checkout/Popup";
import { useState, useEffect } from "react";
import Stripe from "stripe";
import CardFormatter from "creditcardutils";

const Checkout = () => {
	const [isActive, setIsActive] = useState(false);
	const [isSuccess, setIsSuccess] = useState(false);
	const [message, setMessage] = useState("");
	const [isProcessing, setIsProcessing] = useState(false);
	const [receiptURL, setReceiptURL] = useState(null);

	const stripeInstance = Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [billingAddress, setBillingAddress] = useState("");
	const [cardNumber, setCardNumber] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [expMonth, setExpMonth] = useState("");
	const [expYear, setExpYear] = useState("");
	const [expiration, setExpiration] = useState("");
	const [cvv, setCVV] = useState("");

	const handleExpirationDetails = (e) => {
		const month = e.target.value.toString().split("/")[0];
		const year = e.target.value.toString().split("/")[1];

		setExpMonth(() => Number(month));
		setExpYear(() => Number(year));

		const formartCardExpiration = CardFormatter.formatCardExpiry(e.target.value);

		setExpiration(() => formartCardExpiration);
	};

	const handleCVVChange = (e) => {
		if (typeof e.target.value !== "string") {
			return;
		}

		const convertedNumber = Number(e.target.value);

		if (isNaN(convertedNumber)) {
			return;
		}

		const numDigits = convertedNumber.toString().length;

		if (numDigits > 4) {
			return;
		}

		setCVV(() => e.target.value);
	};

	const handlePhoneNumberChange = (e) => {
		if (typeof e.target.value !== "string") {
			return;
		}

		const convertedNumber = Number(e.target.value);

		if (isNaN(convertedNumber)) {
			return;
		}

		const numDigits = convertedNumber.toString().length;

		if (numDigits > 11) {
			return;
		}

		setPhoneNumber(() => e.target.value);
	};

	const handleCardNumberChange = (e) => {
		if (typeof e.target.value !== "string") {
			return;
		}

		const formartCard = CardFormatter.formatCardNumber(e.target.value);

		setCardNumber(() => formartCard);
	};

	const handleFirstNameChange = (e) => {
		if (!/^[a-zA-Z]*$/.test(e.target.value)) {
			return;
		}

		setFirstName(() => e.target.value);
	};

	const handleLastNameChange = (e) => {
		if (!/^[a-zA-Z]*$/.test(e.target.value)) {
			return;
		}

		setLastName(() => e.target.value);
	};

	const handleEmailChange = (e) => {
		setEmail(() => e.target.value);
	};

	const handleBillingAddressChange = (e) => {
		setBillingAddress(() => e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		setIsProcessing(() => true);

		const values = [
			firstName,
			lastName,
			email,
			billingAddress,
			cardNumber,
			cvv,
			expYear,
			expMonth,
		];

		for (const value of values) {
			if (value === "") {
				setIsActive(() => true);
				setIsSuccess(() => false);
				setMessage(
					() =>
						"Oops! Looks like you forgot to provide some needed information. 😔",
				);

				return;
			}
		}

		// Check if CVV is valid for a particular card type
		const cardNumberType = CardFormatter.parseCardType(cardNumber);
		const isValidCVV = CardFormatter.validateCardCVC(cvv, cardNumberType);
		if (!isValidCVV) {
			setIsActive(() => true);
			setIsSuccess(() => false);
			setMessage(() => "Invalid CVV. 😒");

			return;
		}

		// Check if card number is valid
		if (!CardFormatter.validateCardNumber(cardNumber)) {
			setIsActive(() => true);
			setIsSuccess(() => false);
			setMessage(() => "Invalid card number. 😒");

			return;
		}

		// Check if the typed string is a valid email
		const isValidEmail = /^[^\s@]*@[^\s@]+\.[^\s@]+$/.test(email);

		if (!isValidEmail) {
			setIsActive(() => true);
			setIsSuccess(() => false);
			setMessage(() => "Please enter a valid email address. 😒")

			return;
		}

		try {
			const token = await stripeInstance.tokens.create({
				card: {
					number: cardNumber.toString(),
					exp_month: expMonth,
					exp_year: expYear,
					cvc: cvv.toString(),
					name: `${firstName} ${lastName}`,
					address_line1: billingAddress.toString(),
				},
			});

			const charge = await stripeInstance.charges.create({
				amount: Math.round((getPriceTotal + 9.3) * 100),
				currency: "usd",
				source: token.id,
				description: "Payment For Goods",
				receipt_email: email.toString(),
				metadata: {
					email: email.toString(),
					phone: phoneNumber.toString(),
				},
			});

			if (charge.status === "succeeded" && charge.paid === true) {
				setIsActive(() => true);
				setIsSuccess(() => true);
				setMessage(() => "Click the link below to view the receipt for your transaction.");
				setReceiptURL(() => charge.receipt_url);
				clearCart();
			} else {
				setIsActive(() => true);
				setIsSuccess(() => false);
				setMessage(
					() =>
						"There was a problem performing this transaction. Please again later. 😔",
				);
			}
		} catch (e) {
			setIsActive(() => true);
			setIsSuccess(() => false);
			setMessage(() => `${e.message} 😔`)
		}
	};

	const [isLoaded, setIsLoaded] = useState(false);
	useEffect(() => {
		setIsLoaded(() => true);
	}, []);

	const togglePaymentMethod = (e) => {
		const accordionContainerHiddenClasses = ["accordion-container-hidden"];

		const accordionContainerActiveClasses = ["accordion-container-active"];

		const accordionContentHiddenClasses = [
			"accordion-content-container-hidden",
		];

		const accordionContentActiveClasses = [
			"accordion-content-container-active",
		];

		if (
			e.currentTarget.nextElementSibling.classList.contains(
				"accordion-container-hidden",
			)
		) {
			e.currentTarget.classList.add("text-brand-red");
			e.currentTarget.lastElementChild.classList.replace(
				"fi-rr-angle-down",
				"fi-rr-angle-up",
			);

			accordionContainerHiddenClasses.forEach((hiddenClasses) => {
				accordionContainerActiveClasses.forEach((activeClasses) => {
					e.currentTarget.nextElementSibling.classList.replace(
						hiddenClasses,
						activeClasses,
					);
				});
			});

			accordionContentHiddenClasses.forEach((hiddenClasses) => {
				accordionContentActiveClasses.forEach((activeClasses) => {
					e.currentTarget.nextElementSibling.firstElementChild.classList.replace(
						hiddenClasses,
						activeClasses,
					);
				});
			});

			e.currentTarget.nextElementSibling.firstElementChild.classList.add(
				"pt-4",
			);
		} else {
			e.currentTarget.classList.remove("text-brand-red");
			e.currentTarget.lastElementChild.classList.replace(
				"fi-rr-angle-up",
				"fi-rr-angle-down",
			);

			accordionContainerHiddenClasses.forEach((hiddenClasses) => {
				accordionContainerActiveClasses.forEach((activeClasses) => {
					e.currentTarget.nextElementSibling.classList.replace(
						activeClasses,
						hiddenClasses,
					);
				});
			});

			accordionContentHiddenClasses.forEach((hiddenClasses) => {
				accordionContentActiveClasses.forEach((activeClasses) => {
					e.currentTarget.nextElementSibling.firstElementChild.classList.replace(
						activeClasses,
						hiddenClasses,
					);
				});
			});

			e.currentTarget.nextElementSibling.firstElementChild.classList.remove(
				"pt-4",
			);
		}
	};

	const totalCartProducts = useCart((state) => state.cart.length);
	const cartProducts = useCart((state) => state.cart);
	const clearCart = useCart((state) => state.clearCart);

	const getPriceTotal = cartProducts.reduce(
		(accumulator, currentValue) =>
			accumulator + currentValue.product.currentPrice,
		0,
	);
	const formartAmount = formartAmountSum(getPriceTotal);

	const formartTotalPayableAmount = formartAmountSum(getPriceTotal + 9.3);

	return !isLoaded ? (
		<p className="px-[3%] py-12">Loading checkout form, please wait...</p>
	) : (
		<div className="relative">
			<div
				className="absolute grid inset-0"
				aria-hidden="true"
			>
				<div className="bg-brand-red"></div>
				<div className="bg-white dark:bg-brand-black"></div>
			</div>

			<div className="bg-white text-slate-900 p-4 mx-[3%] sm:mx-8 rounded-lg z-30 shadow-card relative grid gap-8 mb-12 lg:grid-cols-12 items-start divide-y lg:divide-y-0 lg:divide-x lg:divide-slate-200 lg:gap-4">
				<div
					className={`grid gap-4 ${
						totalCartProducts < 1
							? "lg:col-span-12"
							: "lg:col-span-8"
					}`}
				>
					<div
						className={`${
							totalCartProducts < 1
								? "flex items-center gap-4 flex-wrap"
								: "block border-b border-slate-200 pb-4"
						}`}
					>
						<div className="inline-block">
							<Link
								className="border border-blue-800/40 text-blue-800 py-1.5 rounded-md px-3 transition-colors ease-in-out hover:bg-blue-800 hover:text-white flex items-center w-auto"
								href={
									totalCartProducts < 1
										? "/categories"
										: "/cart"
								}
							>
								<i className="fr fi-rr-angle-left text-base top-0.5 pr-0.5"></i>
								{totalCartProducts < 1
									? "Continue shopping"
									: "Back to cart"}
							</Link>
						</div>

						{totalCartProducts < 1 && (
							<p className="font-bold">
								You don’t have any item in your cart yet.
							</p>
						)}
					</div>

					{totalCartProducts > 0 && (
						<>
							<h2 className="header text-xl mb-4 lg:px-8">
								Billing details
							</h2>

							<form
								className="grid gap-4 sm:grid-cols-2 items-start lg:px-8"
								method="POST"
							>
								<label
									className="grid gap-1.5"
									htmlFor="first-name"
								>
									<span className="font-semibold block">
										First Name{" "}
										<span className="text-brand-red">
											*
										</span>
									</span>

									<input
										className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2]"
										type="text"
										name="first-name"
										value={firstName}
										onChange={(e) =>
											handleFirstNameChange(e)
										}
										id="first-name"
									/>
								</label>

								<label
									className="grid gap-1.5"
									htmlFor="last-name"
								>
									<span className="font-semibold block">
										Last Name{" "}
										<span className="text-brand-red">
											*
										</span>
									</span>

									<input
										className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2]"
										type="text"
										name="last-name"
										value={lastName}
										onChange={(e) =>
											handleLastNameChange(e)
										}
										id="last-name"
									/>
								</label>

								<label
									className="grid gap-1.5"
									htmlFor="email-address"
								>
									<span className="font-semibold block">
										Email Address{" "}
										<span className="text-brand-red">
											*
										</span>
									</span>

									<input
										className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2]"
										type="email"
										name="email-address"
										value={email}
										onChange={(e) => handleEmailChange(e)}
										id="email-address"
									/>
								</label>

								<label
									className="grid gap-1.5"
									htmlFor="phone-number"
								>
									<span className="font-semibold block">
										Phone Number{" "}
										<span className="text-brand-red">
											*
										</span>
									</span>

									<input
										className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2]"
										type="number"
										inputMode="numeric"
										name="phone-number"
										patter="[0-9]{11}"
										value={phoneNumber}
										onChange={(e) =>
											handlePhoneNumberChange(e)
										}
										id="phone-number"
									/>
								</label>

								<label
									className="grid gap-1.5 sm:col-span-2"
									htmlFor="address"
								>
									<span className="font-semibold block">
										Billing Address{" "}
										<span className="text-brand-red">
											*
										</span>
									</span>

									<input
										className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2]"
										type="text"
										name="address"
										value={billingAddress}
										onChange={(e) =>
											handleBillingAddressChange(e)
										}
										id="address"
									/>
								</label>

								<div className="grid gap-4 sm:col-span-2 lg:hidden lg:not-sr-only">
									<h2 className="header text-xl">
										Order summary
									</h2>

									<div className="divide-y divide-slate-200">
										{cartProducts.map(({ product, id }) => (
											<div
												className="flex items-center gap-4 py-2"
												key={id}
											>
												<Image
													className="object-cover aspect-square rounded-md"
													src={
														product.indexImage.data
															.attributes.url
													}
													height={60}
													width={60}
													quality={100}
													alt={product.productName}
												/>

												<div className="grid gap-0.5">
													<h3 className="font-semibold leading-0">
														{product.productName}
													</h3>

													<p className="text-brand-red slashed-zero">
														<span className="font-medium">
															$
															{
																formartAmountSum(
																	product.currentPrice,
																).wholeNumber
															}
														</span>

														{formartAmountSum(
															product.currentPrice,
														).hasFractions ===
															true && (
															<small>
																.
																{
																	formartAmountSum(
																		product.currentPrice,
																	).fractions
																}
															</small>
														)}
													</p>
												</div>
											</div>
										))}

										<div className="py-4 grid gap-0.5 slashed-zero">
											<div className="flex items-center gap-4 justify-between">
												<p className="font-medium">
													Subtotal:
												</p>

												<p>
													<span className="font-medium">
														$
														{
															formartAmount.wholeNumber
														}
													</span>
													{formartAmount.hasFractions ===
														true && (
														<small>
															.
															{
																formartAmount.fractions
															}
														</small>
													)}
												</p>
											</div>

											<div className="flex items-center gap-4 justify-between">
												<p className="font-medium">
													Taxes:
												</p>

												<p>
													$
													<span className="font-medium">
														9.
													</span>
													<small>30</small>
												</p>
											</div>

											<div className="flex items-center gap-4 justify-between text-xl">
												<p className="font-medium">
													Total:
												</p>

												<p>
													<span className="font-bold">
														$
														{
															formartTotalPayableAmount.wholeNumber
														}
													</span>
													{formartTotalPayableAmount.hasFractions ===
														true && (
														<small className="font-medium">
															.
															{
																formartTotalPayableAmount.fractions
															}
														</small>
													)}
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="border border-slate-200 rounded-lg divide-y divide-slate-200 sm:col-span-2">
									<div className="p-4">
										<button
											className="flex items-center justify-between gap-4 w-full font-semibold hover:text-brand-red"
											type="button"
											onClick={(e) =>
												togglePaymentMethod(e)
											}
										>
											<span>
												<i className="fr fi-rr-credit-card pr-2"></i>
												Pay with Credit Card
											</span>

											<i className="fr fi-rr-angle-down text-base"></i>
										</button>

										<div className="accordion-container accordion-container-hidden">
											<div className="accordion-content-container accordion-content-container-hidden gap-8">
												<div className="flex items-center gap-x-2 gap-y-1 flex-wrap">
													<p>
														We accept the following
														cards:
													</p>

													<Image
														src={acceptedCards}
														alt="Accepted cards"
														height={200}
														width={200}
														quality={100}
													/>
												</div>

												<div className="grid gap-4 sm:grid-cols-2">
													<label
														className="w-full sm:col-span-2"
														htmlFor="card-number"
													>
														<input
															className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2] w-full"
															type="text"
															inputMode="numeric"
															name="card-number"
															id="card-number"
															maxLength={19}
															pattern="[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}"
															value={cardNumber}
															onChange={(e) =>
																handleCardNumberChange(
																	e,
																)
															}
															placeholder="Card Number"
														/>
													</label>

													<div className="grid gap-4 sm:grid-cols-2">
														<label
															className="w-full"
															htmlFor="expiry-date"
														>
															<input
																className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2] w-full"
																type="text"
																name="expiry-date"
																id="expiry-date"
																maxLength={7}
																pattern="[0-9]{2}/[0-9]{2}"
																value={
																	expiration
																}
																onChange={(e) =>
																	handleExpirationDetails(
																		e,
																	)
																}
																placeholder="MM/YY"
															/>
														</label>

														<label
															className="w-full"
															htmlFor="cvc"
														>
															<input
																className="input-form border border-slate-200 rounded-lg border-solid focus:border-brand-dark-rose/[0.2] w-full"
																type="number"
																name="cvc"
																id="cvc"
																inputMode="numeric"
																maxLength={4}
																pattern="[0-9]{4}"
																value={cvv}
																onChange={(e) =>
																	handleCVVChange(
																		e,
																	)
																}
																placeholder="CVC"
															/>
														</label>
													</div>

													<button
														className={`bg-brand-red text-white py-2.5 px-4 text-center relative hover:bg-brand-dark-rose rounded-lg ${
														isProcessing
															? "font-medium bg-brand-dark-rose/90 select-none disabled:cursor-not-allowed  animate-pulse pointer-events-none"
															: ""
														}`}
														disabled={isProcessing}
														onClick={(e) => {
															handleSubmit(e)
														}}
														type="button"
													>
														{isProcessing ? (
															<>
																<i
																	className="fi fi-rr-loading top-0.5 mr-3 relative animate-spin"
																></i>

																<span className="animate-bounce">
																	Processing...
																</span>
															</>
														) : (
															"Pay for products"
														)}
													</button>
												</div>
											</div>
										</div>
									</div>

									<div className="p-4">
										<button
											className="flex items-center justify-between gap-4 w-full font-semibold hover:text-brand-red"
											type="button"
											onClick={(e) =>
												togglePaymentMethod(e)
											}
										>
											<span>
												<i className="fr fi-brands-paypal pr-2"></i>
												Pay with PayPal
											</span>

											<i className="fr fi-rr-angle-down text-base"></i>
										</button>

										<div className="accordion-container accordion-container-hidden">
											<div className="accordion-content-container accordion-content-container-hidden gap-4">
												<p>
													<span className="font-semibold">
														PayPal
													</span>{" "}
													- the safer, easier way to
													pay
												</p>

												<div>
													<Link
														className="bg-brand-red text-white py-2 px-4 text-center hover:bg-brand-dark-rose rounded-lg inline-block w-auto"
														href="/"
													>
														Checkout with PayPal
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</form>
						</>
					)}
				</div>

				{totalCartProducts > 0 && (
					<div className="hidden lg:grid lg:col-span-4 sticky top-20 lg:px-8">
						<div className="lg:grid gap-8">
							<h2 className="header text-xl text-center">
								Order summary
							</h2>

							<div className="divide-y divide-slate-200">
								{cartProducts.map(({ product, id }) => (
									<div
										className="flex items-center gap-4 py-2"
										key={id}
									>
										<Image
											className="object-cover aspect-square rounded-md"
											src={
												product.indexImage.data
													.attributes.url
											}
											height={60}
											width={60}
											quality={100}
											alt={product.productName}
										/>

										<div className="grid gap-0.5">
											<h3 className="font-semibold leading-0">
												{product.productName}
											</h3>

											<p className="text-brand-red slashed-zero">
												<span className="font-medium">
													$
													{
														formartAmountSum(
															product.currentPrice,
														).wholeNumber
													}
												</span>

												{formartAmountSum(
													product.currentPrice,
												).hasFractions === true && (
													<small>
														.
														{
															formartAmountSum(
																product.currentPrice,
															).fractions
														}
													</small>
												)}
											</p>
										</div>
									</div>
								))}

								<div className="py-4 grid gap-0.5 slashed-zero">
									<div className="flex items-center gap-4 justify-between">
										<p className="font-medium">Subtotal:</p>

										<p>
											<span className="font-medium">
												${formartAmount.wholeNumber}
											</span>
											{formartAmount.hasFractions ===
												true && (
												<small>
													.{formartAmount.fractions}
												</small>
											)}
										</p>
									</div>

									<div className="flex items-center gap-4 justify-between">
										<p className="font-medium">Taxes:</p>

										<p>
											$
											<span className="font-medium">
												9.
											</span>
											<small>30</small>
										</p>
									</div>
								</div>

								<div className="flex place-content-center py-4 text-3xl slashed-zero">
									<span className="font-bold">
										${formartTotalPayableAmount.wholeNumber}
									</span>
									{formartTotalPayableAmount.hasFractions ===
										true && (
										<small className="font-medium">
											.
											{
												formartTotalPayableAmount.fractions
											}
										</small>
									)}
								</div>
							</div>
						</div>
					</div>
				)}
			</div>

			<Popup
				isSuccess={isSuccess}
				message={message}
				isActive={isActive}
				setIsActive={setIsActive}
				receiptURL={receiptURL}
				setIsProcessing={setIsProcessing}
			/>
		</div>
	);
};

export default Checkout;
