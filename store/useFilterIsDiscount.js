import { create } from "zustand";

const useFilterIsDiscount = create((set) => ({
    filterIsDiscount: "",
    setIsDiscount: (filterIsDiscount) => set({ filterIsDiscount }),
}));

export default useFilterIsDiscount;
