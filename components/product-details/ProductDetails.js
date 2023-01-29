import Image from "next/image";
import Link from "next/link";

const ProductDetails = () => {
    return (
		<div className="bg-white text-slate-900 p-4 rounded-lg grid space-y-4 dark:bg-brand-light-black dark:text-white lg:space-y-8">
			<div className="grid gap-4 items-stretch lg:grid-cols-2">
				<div className="space-y-4">
					<div className="h-[200px] relative rounded-lg lg:h-full">
						<Image
							className="rounded-lg object-cover aspect-square object-center"
							src="/img/01.jpg"
							fill
							alt="/img/01.jpg"
							quality={100}
						/>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div className="h-[150px] lg:h-[200px] relative rounded-lg">
						<Image
							className="rounded-lg object-cover aspect-square object-center"
							src="/img/02.jpg"
							fill
							alt="/img/01.jpg"
							quality={100}
						/>
					</div>

					<div className="h-[150px] lg:h-[200px] relative rounded-lg">
						<Image
							className="rounded-lg object-cover aspect-square object-center"
							src="/img/03.jpg"
							fill
							alt="/img/01.jpg"
							quality={100}
						/>
					</div>

					<div className="h-[200px] lg:h-[250px] relative rounded-lg col-span-2">
						<Image
							className="rounded-lg object-cover aspect-square object-center"
							src="/img/04.jpg"
							fill
							alt="/img/01.jpg"
							quality={100}
						/>
					</div>
				</div>
			</div>

			<div className="space-y-6 lg:w-4/5">
				<div className="space-y-1">
					<h3 className="header text-3xl">Some Random Title</h3>

					<p className="text-2xl font-medium slashed-zero">$19000</p>

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

						<span className="bg-brand-red text-white flex items-center gap-1 rounded-md py-1.5 px-3">
							<i className="fr fi-rr-ban text-base top-0.5"></i>

							<span className="header text-sm tracking-widest">
								Product Unavailable
							</span>
						</span>
					</div>
				</div>

				<div className="text-sm">
					<h4 className="header text-2xl mb-2">Highlights</h4>

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

				<div>
					<h4 className="header text-2xl mb-2">Details</h4>

					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat cupidatat non proident, sunt in culpa
						qui.
					</p>
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
	);
 };

export default ProductDetails;
