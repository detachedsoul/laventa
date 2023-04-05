import { create } from "zustand";

const useFilterOrder = create((set) => ({
    order: "desc",
    setOrder: (order) => set(() => ({order})),
    currentOrder: "Newest",
    setCurrentOrder: (currentOrder) => set(() => ({currentOrder})),
}));

export default useFilterOrder;
