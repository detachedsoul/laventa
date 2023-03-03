"use client";

const IndexProductCategorySort = ({categories}) => {
    return (
        <select className="select">
            <option value="All Categories">All Categories</option>
            {typeof categories !== "string" &&
                categories.map((category) => (
                    <option
                        value={category.attributes.categoryName}
                        key={category.id}
                    >
                        {category.attributes.categoryName}
                    </option>
                ))}
        </select>
    )
};

export default IndexProductCategorySort;
