import Link from "next/link";

const CheckoutHero = () => {
    return (
        <div className="flex flex-wrap justify-between gap-6 items-center px-[3%] py-12 bg-brand-red text-white">
            <h1 className="header text-2xl">
                Checkout
            </h1>

            <div className="flex items-center gap-1">
                <Link href="/">
                    <i className="fr fi-rr-bank text-base top-0.5 pr-1"></i>
                    Home
                </Link>

                <i className="fr fi-rr-angle-right text-base"></i>

                <Link href="/cart">
                    <i className="fr fi-rr-shopping-cart text-base top-0.5 pr-1"></i>
                    Cart
                </Link>

                <i className="fr fi-rr-angle-right text-base"></i>

                <span>
                    Checkout
                </span>
            </div>
        </div>
    );
};

export default CheckoutHero;
