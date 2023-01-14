"use client";
import { useState } from "react";

const CategoryFilter = () => {
    const [filterIsOpen, setFilterOpen] = useState(false);

    const handleFilterToggle = () => {
        setFilterOpen(() => !filterIsOpen);
    };

    return (
        <div className="relative">
            <div className="absolute grid inset-0" aria-hidden="true">
                <div className="bg-brand-red"></div>
                <div className="bg-white dark:bg-brand-black"></div>
            </div>

            <div className="bg-white text-slate-900 p-[3%] mx-[3%] rounded-lg z-30 shadow-card relative grid">
                <div className="grid gap-4 lg:grid-cols-12">
                    <button className={ `border border-slate-200 rounded-md py-2.5 px-3 transition-colors duration-200 ease-in-out lg:col-span-2 lg:py-2 hover:bg-brand-red hover:text-white ${filterIsOpen ? 'bg-brand-red text-white' : ''}`} type="button" onClick={ handleFilterToggle }>
                        <i className="fr fi-rr-filters text-base top-0.5 pr-1"></i>
                        Filters
                    </button>

                    <form className="flex flex-nowrap border border-slate-200 rounded-lg focus-within:border-brand-dark-rose/[0.2] lg:col-span-7" method="POST">
                        <label className="py-0.5 px-1 w-full" htmlFor="search">
                            <input className="bg-white py-2.5 input-form w-full lg:py-2" type="search" id="search" placeholder="Search collection"
                                required />
                        </label>

                        <button className="px-3" type="submit">
                            <i className="fr fi-rr-search top-0.5 text-base"></i>
                        </button>
                    </form>

                    <div className="items-center lg:col-span-3 lg:grid lg:grid-cols-3">
                        <span className="hidden lg:inline-block lg:col-span-1" id="sort-by">
                            Sort by:
                        </span>

                        <select className="select dark:focus:ring-slate-200 dark:focus:ring-offset-white dark:bg-white dark:text-slate-900 dark:border-slate-200 w-full py-2.5 lg:col-span-2 lg:py-2" aria-describedby="sort-by">
                            <option value="Newest">
                                Newest
                            </option>

                            <option value="Oldest">
                                Oldest
                            </option>
                        </select>
                    </div>
                </div>

                <div className={`accordion-container ${filterIsOpen ? 'accordion-container-active mt-4' : 'accordion-container-hidden mt-0'}`}>
                    <div className={ `accordion-content-container gap-4 lg:grid-cols-3 items-start ${filterIsOpen ? 'accordion-content-container-active' : 'accordion-content-container-hidden'}`}>
                        <div className="border border-slate-200 p-4 rounded-lg grid gap-4">
                            <h3 className="header text-lg">
                                Categories
                            </h3>

                            <div className="grid gap-4">
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2" htmlFor="all-categories">
                                        <input className="form-checkbox rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded" type="checkbox" id="all-categories" />
                                        All Categories
                                    </label>

                                    <span>
                                        400
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2" htmlFor="electronics">
                                        <input className="form-checkbox rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded" type="checkbox" id="electronics" />
                                        Electronics
                                    </label>

                                    <span>
                                        100
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2" htmlFor="jeans">
                                        <input className="form-checkbox rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded" type="checkbox" id="jeans" />
                                        Jeans
                                    </label>

                                    <span>
                                        50
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2" htmlFor="accessories">
                                        <input className="form-checkbox rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded" type="checkbox" id="accessories" />
                                        Accessories
                                    </label>

                                    <span>
                                        20
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2" htmlFor="bags">
                                        <input className="form-checkbox rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded" type="checkbox" id="bags" />
                                        Bags
                                    </label>

                                    <span>
                                        250
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="border border-slate-200 p-4 rounded-lg grid gap-4">
                            <h3 className="header text-lg">
                                Product Status
                            </h3>

                            <div className="grid gap-4">
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2" htmlFor="both">
                                        <input className="form-checkbox rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded" type="checkbox" id="both" />
                                        Both
                                    </label>

                                    <span>
                                        400
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2" htmlFor="in-stock">
                                        <input className="form-checkbox rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded" type="checkbox" id="in-stock" />
                                        In Stock
                                    </label>

                                    <span>
                                        400
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2" htmlFor="out-of-stock">
                                        <input className="form-checkbox rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded" type="checkbox" id="out-of-stock" />
                                        Out of Stock
                                    </label>

                                    <span>
                                        400
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="border border-slate-200 p-4 rounded-lg grid gap-4">
                            <h3 className="header text-lg">
                                Size
                            </h3>

                            <div className="grid gap-4">
                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2" htmlFor="xl">
                                        <input className="form-checkbox rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded" type="checkbox" id="xl" />
                                        XL
                                    </label>

                                    <span>
                                        400
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2" htmlFor="L">
                                        <input className="form-checkbox rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded" type="checkbox" id="L" />
                                        L
                                    </label>

                                    <span>
                                        400
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2" htmlFor="m">
                                        <input className="form-checkbox rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded" type="checkbox" id="m" />
                                        M
                                    </label>

                                    <span>
                                        400
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2" htmlFor="s">
                                        <input className="form-checkbox rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded" type="checkbox" id="s" />
                                        S
                                    </label>

                                    <span>
                                        400
                                    </span>
                                </div>

                                <div className="flex items-center justify-between">
                                    <label className="flex items-center gap-2" htmlFor="xs">
                                        <input className="form-checkbox rounded-md p-2.5 border border-slate-200 lg:p-2 focus:ring-1 focus:brand-dark-rose/[0.2] focus:ring-brand-dark-rose/[0.2] focus:ring-offset-2 text-brand-red lg;rounded-rounded" type="checkbox" id="xs" />
                                        XS
                                    </label>

                                    <span>
                                        400
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryFilter;
