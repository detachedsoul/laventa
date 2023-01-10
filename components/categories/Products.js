import ProductListings from "@components/ProductListings";
import newArrivals from "@data/new-arrivals";
import Link from "next/link";

const Products = () => {
    return (
        <section className="space-y-4">
            <div className="grid gap-8 pb-8 lg:grid-cols-3 border-b border-slate-200 dark:border-brand-light-black">
                { newArrivals.map((product, index) => (
                    <ProductListings product={ product } key={ index } />
                )) }
            </div>

            <div className="flex justify-between gap-4 items-center flex-wrap">
                <Link className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white" href="/">
                    <i className="fr fi-rr-angle-left text-base top-[0.20rem]"></i>
                    Prev
                </Link>

                <div className="flex gap-1 items-center">
                    <Link className="flex items-center gap-1 py-1 px-3 rounded-md bg-brand-red text-white pointer-events-none hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white" href="/">
                        1
                    </Link>

                    <Link className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white" href="/">
                        2
                    </Link>

                    <Link className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white" href="/">
                        3
                    </Link>

                    <Link className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white" href="/">
                        4
                    </Link>

                    <Link className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white" href="/">
                        5
                    </Link>
                </div>

                <Link className="flex items-center gap-1 py-1 px-3 rounded-md hover:bg-slate-200 dark:hover:bg-brand-light-black dark:hover:text-white" href="">
                    Next
                    <i className="fr fi-rr-angle-right text-base top-[0.20rem]"></i>
                </Link>
            </div>
        </section>
    );
};

export default Products;
