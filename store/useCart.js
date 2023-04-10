import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const useCart = create(
	persist(
		(set, get) => ({
			cart: [],
			removeFromCart: (product) =>
				set((state) => ({
					cart: state.cart.filter(
						(item) => item.id !== product.id,
					),
				})),
			clearCart: () => set((state) => ({ cart: [] })),
			cartTotal: () =>
				set((state) => ({
					cart: state.cart.reduce(
						(acc, item) => acc + item.currentPrice,
						0,
					),
				})),
			addToCart: (product) => {
				const cart = get().cart;
				const productExists = cart.some(
					(item) => item.id === product.id,
				);
				if (!productExists) {
					set({ cart: [...cart, product] });
				}
			},
		}),
		{
			name: "cartItems",
			storage: createJSONStorage(() => localStorage),
		},
	),
);

export default useCart;
