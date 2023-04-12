const AddedToCartPopup = ({ item, isActive }) => {
    return (
		<div
			className={`fixed left-[3%] top-20 w-[calc(100%-6%)] bg-green-600 text-white p-4 z-[99999] ease-linear duration-300 lg:w-1/2 lg:left-[25%] text-center ${isActive ? 'scale-100' : 'scale-0'}`}
		>
			<p>{item} has been added to cart successfully.</p>
		</div>
	);
};

export default AddedToCartPopup;
