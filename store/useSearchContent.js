import { create } from "zustand";

const useSearchContent = create((set) => ({
    searchContent: [],
    setSearchContent: (product) => set((state) => ({ searchContent: product })),
    searchValue: "",
    setSearchValue: (searchValue) => set((state) => ({ searchValue }))
}));

export default useSearchContent;
