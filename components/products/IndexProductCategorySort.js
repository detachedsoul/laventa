"use client";

import useFilterCategory from "@store/useFilterCategory";
import { useId } from "react";

const IndexProductCategorySort = ({categories, setFilter}) => {
    const initialCategory = useFilterCategory((state) => state.categoryTitle);
    const setCategoryTitle = useFilterCategory((state) => state.setCategoryTitle);

    const category = [
        {
            id: useId(),
            attributes: {
                categoryName: "All Categories"
            }
        },
        ...categories
    ];

    const handleChange = (e) => {
        if (e.target.value === "All Categories") {
            setCategoryTitle(e.target.value);

            setFilter(`products?sort=id%3Adesc&pagination[limit]=6&populate=*`);
        } else {
            setCategoryTitle(e.target.value);

            setFilter(`products?filters[category][categoryName][$eqi]=${e.target.value}&sort=id%3Adesc&pagination[limit]=6&populate=*`);
        }
    };

    return (
		<select
			className="select"
			onChange={(e) => handleChange(e)}
            value={initialCategory}
		>
			{category.map((categoryDetails) => (
				<option
					value={categoryDetails.attributes.categoryName}
					key={categoryDetails.id}
				>
					{categoryDetails.attributes.categoryName}
				</option>
			))}
		</select>
	);
};

export default IndexProductCategorySort;
