import { create } from "zustand";

const usePaginate = create((set) => ({
    page: 1,
    prevPage: () => set((state) => ({ page: state.page - 1 })),
    nextPage: () => set((state) => ({ page: state.page + 1 })),
    toPage: (page) => set({ page: page }),
}));

export default usePaginate;
