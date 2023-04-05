import { create } from "zustand";

const useFilterCategory = create((set) => ({
    filter: "products?sort=id%3Adesc&pagination[limit]=6&populate=*",
    categoryTitle: "All Categories",
    setFilter: (filter) => set({ filter }),
    setCategoryTitle: (categoryTitle) => set({ categoryTitle }),
}));

export default useFilterCategory;
