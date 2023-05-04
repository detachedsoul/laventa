import Cart from "@components/cart/Cart";
import CartHero from "@components/cart/CartHero";

export const metadata = {
	title: "Laventa | Cart",
	description: "View items in your shopping cart",
};

const Page = () => {
    return (
        <>
            <CartHero />
            <Cart />
        </>
    );
};

export default Page;
