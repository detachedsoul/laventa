import Link from "next/link";

const CheckoutHero = () => {
    return (
        <div className="flex flex-wrap justify-between gap-6 items-center px-4 sm:px-8 py-12 bg-brand-red text-white">
            <h1 className="header text-2xl">
                Your Cart
            </h1>

            <div className="flex items-center gap-x-2 gap-y-3 flex-wrap">
                <Link href="/">
                    <i className="fr fi-rr-bank text-base top-0.5 pr-1"></i>
                    Home
                </Link>

                <i className="fr fi-rr-angle-right text-base"></i>

                <Link href="/categories">
                    <i className="fr fi-rr-shop text-base top-0.5 pr-1"></i>
                    Marketplace
                </Link>

                <i className="fr fi-rr-angle-right text-base"></i>

                <span>
                    Cart
                </span>
            </div>
        </div>
    );
};

export default CheckoutHero;
