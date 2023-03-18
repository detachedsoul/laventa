import Link from "next/link";

const ProductDetailsHero = ({productDetails}) => {
	return (
		<div className="flex flex-wrap justify-between gap-6 items-center px-[3%] py-12 bg-brand-red text-white">
			<h1 className="header text-2xl">Product Details</h1>

			<div className="flex items-center gap-x-2 gap-y-3 flex-wrap">
				<Link href="/">
					<i className="fr fi-rr-bank text-base top-0.5 pr-1"></i>
					Home
				</Link>

				<i className="fr fi-rr-angle-right text-base"></i>

				<Link href={`/categories/${productDetails?.attributes?.category?.data?.attributes?.slug}`}>
					<i className="fr fi-rr-shop text-base top-0.5 pr-1"></i>
					{
						productDetails?.attributes?.category?.data?.attributes?.categoryName
					}
				</Link>

				<i className="fr fi-rr-angle-right text-base"></i>

				<span>{productDetails?.attributes?.productName}</span>
			</div>
		</div>
	);
};

export default ProductDetailsHero;
