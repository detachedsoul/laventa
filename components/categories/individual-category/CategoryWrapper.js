"use client";

import CategoryHero from "@components/categories/individual-category/CategoryHero";
import CategoryFilter from "@components/categories/CategoryFilter";
import Products from "@components/categories/Products";

const CategoryWrapper = ({ categoryData, productData, pageIndex, setPageIndex }) => {
    return (
        <>
            <CategoryHero categoryName={ categoryData?.attributes?.categoryName } />
            <CategoryFilter />

            <main className="space-y-20 py-12 px-[3%]">
                <Products
                    productData={ productData }
                    pageIndex={ pageIndex }
                    setPageIndex={ setPageIndex }
                />
            </main>
        </>
    );
};

export default CategoryWrapper;
