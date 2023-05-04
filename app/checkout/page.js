import Checkout from "@components/checkout/Checkout";
import CheckoutHero from "@components/checkout/CheckoutHero";

export const metadata = {
    title: "Laventa | Checkout",
    description: "Checkout your items",
};

const Page = () => {
    return (
        <>
            <CheckoutHero />
            <Checkout />
        </>
    );
};

export default Page;
