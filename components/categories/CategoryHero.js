import Link from "next/link";

const CategoryHero = () => {
    return (
        <div className="flex flex-wrap justify-between gap-6 items-center px-4 sm:px-8 py-12 bg-brand-red text-white">
            <h1 className="header text-2xl">
                Catalog of Products
            </h1>

            <div className="flex items-center gap-x-2 gap-y-3 flex-wrap">
                <Link href="/">
                    <i className="fr fi-rr-bank text-base top-0.5 pr-1"></i>
                    Home
                </Link>

                <i className="fr fi-rr-angle-right text-base"></i>

                <span>
                    Categories
                </span>
            </div>
        </div>
    );
}

export default CategoryHero;
