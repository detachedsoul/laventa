import Image from "next/image";
import Link from "next/link";

const ProductListings = ({product, isNewArrival = false}) => {
    return (
        <article>
            <div className="relative h-[250px] rounded-lg group lg:h-[220px]">
                <Image className="rounded-lg object-center aspect-square object-cover" src={product.productImage} fill quality={100} alt={product.productName} />

                <div className="absolute flex gap-5 place-content-center place-items-center h-full left-0 w-full rounded-lg bg-black/50 p-4 opacity-0 transition ease-in-out duration-500 group-hover:opacity-100 group-focus:opacity-100 dark:text-slate-900">
                    <span className="bg-white rounded-full py-1.5 px-[0.58rem] lg:py-1 lg:px-2 cursor-pointer absolute right-4 top-4 transition ease-in-out duration-500 hover:text-brand-red">
                        <i className="fr fi-rr-heart text-base top-[0.19rem] -right-[0.05rem]"></i>
                    </span>

                    <button className="bg-white rounded-lg py-2.5 px-4 transition-colors ease-in-out duration-500 hover:text-brand-red" aria-label="Quick view of product details">
                        <i className="fr fi-rr-eye text-base top-0.5"></i>
                    </button>

                    <button className="bg-white rounded-lg py-2.5 px-4 transition-colors ease-in-out duration-500 hover:text-brand-red" aria-label="Add product to cart">
                        <i className="fr fi-rr-shopping-cart text-base top-0.5"></i>
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-6 p-3">
                <div className="flex flex-col gap-1">
                    <Link className={`transition-colors duration-500 ease-in-out hover:text-brand-red dark:hover:text-rose-500 ${isNewArrival ? 'dark:hover:text-brand-red' : ''}`} href="/">
                        {product.category}
                    </Link>

                    <Link className={`transition-colors duration-500 ease-in-out hover:text-brand-red dark:hover:text-rose-500 ${isNewArrival ? 'dark:hover:text-brand-red' : ''}`} href="/">
                        <h3 className="font-bold">
                            {product.productName}
                        </h3>
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
                                <span className={ `font-semibold rounded-md py-1 text-brand-red dark:text-rose-500 text-xl header ${isNewArrival ? 'dark:text-brand-red' : ''}`}>
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
                    <button className={ `add-to-cart ${!product.inStock ? `cursor-not-allowed pointer-events-none select-none bg-slate-100 text-brand-red dark:bg-transparent dark:text-rose-500 ${isNewArrival ? 'dark:text-brand-red' : ''}` : ''}`} type="button">
                        {!product.inStock ? '' : <i className='fr fi-rr-shopping-cart text-base top-0.5 mr-2'></i>}
                        {`${!product.inStock ? 'Out of stock' : 'Add to Cart'}`}
                    </button>

                    <button className={ `add-to-cart bg-transparent text-slate-900 hover:bg-transparent focus:bg-transparent hover:text-brand-red dark:hover:text-brand-red ${isNewArrival ? 'dark:text-brand-red dark:hover:text-brand-dark-rose' : 'dark:text-rose-600'}`} type="button">
                        <i className="fr fi-rr-eye text-base top-0.5 mr-2"></i>
                        Quick View
                    </button>
                </div>
            </div>
        </article>
    );
};

export default ProductListings;
