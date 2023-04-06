import { create } from "zustand";

const useSearchContent = create((set) => ({
    searchContent: [],
    setSearchContent: (product) => set((state) => ({ searchContent: product }))
}));

export default useSearchContent;
