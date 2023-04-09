import { create } from "zustand";

const useFilterProductCategory = create((set) => ({
    filterCategory: "",
    setFilterCategory: (filterCategory) => set({ filterCategory }),
}));

export default useFilterProductCategory;
