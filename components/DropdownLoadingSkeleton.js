const DropdownLoadingSkeleton = () => {
    return (
		<div className="grid gap-4 animate-pulse md:grid-cols-2">
			<div className="grid grid-cols-12 gap-2">
				<div className="col-span-3 h-12 bg-gray-400 rounded-md"></div>

				<div className="col-span-9 h-24 bg-gray-400 rounded-md"></div>
			</div>

			<div className="grid grid-cols-12 gap-2">
				<div className="col-span-3 h-12 bg-gray-400 rounded-md"></div>

				<div className="col-span-9 h-24 bg-gray-400 rounded-md"></div>
			</div>
		</div>
	);
};

export default DropdownLoadingSkeleton;
