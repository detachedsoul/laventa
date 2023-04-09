import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";


const useCart = create(
    persist(
        (set, get) => ({
            cart: [],
            addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
            removeFromCart: (product) => set((state) => ({ cart: state.cart.filter((item) => item.id !== product.id) })),
            clearCart: () => set((state) => ({ cart: [] })),
            cartTotal: () => set((state) => ({ cart: state.cart.reduce((acc, item) => acc + item.product.currentPrice, 0) })),
        }),
        {
            name: 'cartItems',
            storage: createJSONStorage(() => sessionStorage),
        }
    )
);

export default useCart;
