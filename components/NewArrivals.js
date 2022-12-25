import heroImage from "@assets/img/hero-image.png";
import colorBlock from "@assets/img/color-block.svg";
import cardImage from "@assets/img/card-left.jpg";
import demo from "@assets/img/demo-img.jpg";
import Image from "next/image";
import Link from "next/link";

const NewArrivals = () => {
	return (
		<section className="space-y-6">
			<h2 className="header text-4xl">
				<i className="fr fi-rr-bolt text-3xl"></i> New Arrivals
			</h2>

			<article className="grid gap-4 items-stretch grid-cols-1 lg:grid-cols-3">
				<div className="relative">
					<div className="bg-black text-white p-4 space-y-5 slashed-zero">
						<div className="relative after:w-full after:absolute after:h-full after:bg-gradient-to-r after:from-rose-500/80 after:to-sky-500/90 after:top-1 after:left-1 h-44">
							<Image
								className="object-center object-cover relative z-30 aspect-square"
								src={demo}
								alt="Happy Customer"
								quality={100}
								priority={true}
								layout="fill"
							/>
						</div>

						<div className="space-y-2">
							<h2 className="text-2xl font-bold">Retro Shoe</h2>

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
				</div>

				<div className="relative">
					<div className="bg-black text-white p-4 space-y-5 slashed-zero">
						<div className="relative after:w-full after:absolute after:h-full after:bg-gradient-to-r after:from-rose-500/80 after:to-sky-500/90 after:top-1 after:left-1 h-44">
							<Image
								className="object-center object-cover relative z-30 aspect-square"
								src={demo}
								alt="Happy Customer"
								quality={100}
								priority={true}
								layout="fill"
							/>
						</div>

						<div className="space-y-2">
							<h2 className="text-2xl font-bold">Retro Shoe</h2>

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
				</div>

				<div className="relative">
					<div className="bg-black text-white p-4 space-y-5 slashed-zero">
						<div className="relative after:w-full after:absolute after:h-full after:bg-gradient-to-r after:from-rose-500/80 after:to-sky-500/90 after:top-1 after:left-1 h-44">
							<Image
								className="object-center object-cover relative z-30 aspect-square"
								src={demo}
								alt="Happy Customer"
								quality={100}
								priority={true}
								layout="fill"
							/>
						</div>

						<div className="space-y-2">
							<h2 className="text-2xl font-bold">Retro Shoe</h2>

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
				</div>

				<div className="relative">
					<div className="bg-black text-white p-4 space-y-5 slashed-zero">
						<div className="relative after:w-full after:absolute after:h-full after:bg-gradient-to-r after:from-rose-500/80 after:to-sky-500/90 after:top-1 after:left-1 h-44">
							<Image
								className="object-center object-cover relative z-30 aspect-square"
								src={demo}
								alt="Happy Customer"
								quality={100}
								priority={true}
								layout="fill"
							/>
						</div>

						<div className="space-y-2">
							<h2 className="text-2xl font-bold">Retro Shoe</h2>

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
				</div>

				<div className="relative">
					<div className="bg-black text-white p-4 space-y-5 slashed-zero">
						<div className="relative after:w-full after:absolute after:h-full after:bg-gradient-to-r after:from-rose-500/80 after:to-sky-500/90 after:top-1 after:left-1 h-44">
							<Image
								className="object-center object-cover relative z-30 aspect-square"
								src={demo}
								alt="Happy Customer"
								quality={100}
								priority={true}
								layout="fill"
							/>
						</div>

						<div className="space-y-2">
							<h2 className="text-2xl font-bold">Retro Shoe</h2>

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
				</div>

				<div className="relative">
					<div className="bg-black text-white p-4 space-y-5 slashed-zero">
						<div className="relative after:w-full after:absolute after:h-full after:bg-gradient-to-r after:from-rose-500/80 after:to-sky-500/90 after:top-1 after:left-1 h-44">
							<Image
								className="object-center object-cover relative z-30 aspect-square"
								src={demo}
								alt="Happy Customer"
								quality={100}
								priority={true}
								layout="fill"
							/>
						</div>

						<div className="space-y-2">
							<h2 className="text-2xl font-bold">Retro Shoe</h2>

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
				</div>
			</article>
		</section>
	);
};

export default NewArrivals;
