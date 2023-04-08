import { create } from "zustand";

const useFilterInStock = create((set) => ({
    filterInStock: "",
    setFilterInStock: (filterInStock) => set({ filterInStock }),
}));

export default useFilterInStock;
