"use client";

import useFilterOrder from "@store/useFilterOrder";
import useSearchContent from "@store/useSearchContent";
import { useState } from "react";
import CategoryFilterOptions from "@components/categories/CategoryFilterOptions";

const CategoryFilter = ({products, productFilterOptions}) => {
    const { data } = products;
    const { meta } = products;

    const [filterIsOpen, setFilterOpen] = useState(false);

    const handleFilterToggle = () => {
        setFilterOpen(() => !filterIsOpen);
    };

    // Sort categories
    const order = useFilterOrder((state) => state.order);
    const setOrder = useFilterOrder((state) => state.setOrder);
    const currentOrder = useFilterOrder((state) => state.currentOrder);
    const setCurrentOrder = useFilterOrder((state) => state.setCurrentOrder);
    const setFilteredContent = useSearchContent((state) => state.setSearchContent);
    const searchValue = useSearchContent((state) => state.searchValue);
    const setSearchValue = useSearchContent((state) => state.setSearchValue);

    const handleOrderChange = (e) => {
        if (e.target.value === "Newest") {
            setCurrentOrder(e.target.value);

            setOrder("desc");
        } else {
            setCurrentOrder(e.target.value);

            setOrder("asc");
        }
    };

    const handleSearchChange = (e) => {
        const filterContent = data.filter((params) => {
            if (e.target.value === "") return products;

            return params.id.toString().toLowerCase().includes(e.target.value.toLowerCase()) || params.attributes.productName.toLowerCase().includes(e.target.value.toLowerCase()) || params.attributes.details.toLowerCase().includes(e.target.value.toLowerCase()) || params.attributes.highlights.toLowerCase().includes(e.target.value.toLowerCase())
        });

        // Check if fiterContent is equal to the products data
        if (filterContent.length === data.length) {
            setFilteredContent({data: [], meta});
        } else {
            setFilteredContent({data: [...filterContent], meta});
        }

        setOrder(order);
        setSearchValue(e.target.value);
    };

    return (
        <div className="relative">
            <div className="absolute grid inset-0" aria-hidden="true">
                <div className="bg-brand-red"></div>
                <div className="bg-white dark:bg-brand-black"></div>
            </div>

            <div className="bg-white text-slate-900 p-4 mx-[3%] sm:mx-8 rounded-lg z-30 shadow-card relative grid">
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-12">
                    <button className={ `border border-slate-200 rounded-md py-2.5 px-3 transition-colors duration-200 ease-in-out md:col-span-2 lg:py-2 hover:bg-brand-red hover:text-white ${filterIsOpen && 'bg-brand-red text-white'}`} type="button" onClick={ handleFilterToggle }>
                        <i className="fr fi-rr-filters text-base top-0.5 pr-1"></i>
                        Filters
                    </button>

                    <form className="flex flex-nowrap border border-slate-200 rounded-lg focus-within:border-brand-dark-rose/[0.2] md:col-span-7 sm:order-2 sm:col-span-2">
                        <label className="py-0.5 px-1 w-full" htmlFor="search">
                            <input className="bg-white py-2.5 input-form w-full lg:py-2" type="search" id="search" value={searchValue} placeholder="Search collection" onChange={(e) => handleSearchChange(e)} />
                        </label>
                    </form>

                    <div className="items-center md:col-span-3 md:grid lg:grid-cols-3 md:order-2">
                        <span className="hidden lg:inline-block lg:col-span-1" id="sort-by">
                            Sort by:
                        </span>

                        <select className="select dark:focus:ring-slate-200 dark:focus:ring-offset-white dark:bg-white dark:text-slate-900 dark:border-slate-200 w-full py-2.5 lg:col-span-2 md:py-2" aria-describedby="sort-by" value={currentOrder} onChange={(e) => handleOrderChange(e)}>
                            <option value="Newest">
                                Newest
                            </option>

                            <option value="Oldest">
                                Oldest
                            </option>
                        </select>
                    </div>
                </div>

                <CategoryFilterOptions filterIsOpen={filterIsOpen} productFilterOptions={productFilterOptions} />
            </div>
        </div>
    );
};

export default CategoryFilter;
