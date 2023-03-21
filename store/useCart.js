import { create } from "zustand";

const useCart = create((set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (product) => set((state) => ({ cart: state.cart.filter((item) => item.id !== product.id) })),
    clearCart: () => set((state) => ({ cart: [] })),
    cartTotal: () => set((state) => ({ cart: state.cart.reduce((acc, item) => acc.currentPrice + item.currentPrice, 0) })),
}));

export default useCart;
