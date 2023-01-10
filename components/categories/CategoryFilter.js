"use client";

const CategoryFilter = () => {
    return (
        <div className="relative">
            <div className="absolute grid inset-0" aria-hidden="true">
                <div className="bg-brand-red"></div>
                <div className="bg-white dark:bg-brand-black"></div>
            </div>

            <div className="bg-white text-slate-900 p-[3%] mx-[3%] rounded-lg grid gap-4 z-30 shadow-card isolate relative lg:grid-cols-12">
                <button className="border border-slate-200 rounded-md py-2 px-3 transition-colors duration-200 ease-in-out lg:col-span-2 hover:bg-brand-red hover:text-white" type="button">
                    <i className="fr fi-rr-filters text-base top-0.5 pr-1"></i>
                    Filters
                </button>

                <form className="flex flex-nowrap border border-slate-200 rounded-lg focus-within:border-brand-dark-rose/[0.2] lg:col-span-7" method="POST">
                    <label className="py-0.5 px-1 w-full" htmlFor="search">
                        <input className="bg-white py-2 input-form w-full" type="search" id="search" placeholder="Search collection"
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

                    <select className="select dark:focus:ring-slate-200 dark:focus:ring-offset-white dark:bg-white dark:text-slate-900 dark:border-slate-200 w-full lg:col-span-2" aria-describedby="sort-by">
                        <option value="Newest">
                            Newest
                        </option>

                        <option value="Oldest">
                            Oldest
                        </option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default CategoryFilter;
