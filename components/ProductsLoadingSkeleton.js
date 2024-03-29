const ProductsLoadingSkeleton = () => {
    return (
		<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
			<div className="animate-pulse">
				<div className="h-[250px] rounded-lg lg:h-[220px] bg-gray-400 w-full"></div>

				<div className="flex flex-col gap-6 p-3">
					<div className="flex flex-col gap-2">
						<div className="bg-gray-400 h-[20px] rounded-[0.15rem]"></div>

						<div className="bg-gray-400 h-[20px] rounded-[0.15rem]"></div>
					</div>

					<div className="bg-gray-400 h-[20px] rounded-[0.15rem]"></div>

					<div className="flex flex-col gap-2">
						<div className="bg-gray-400 h-[20px] rounded-[0.15rem]"></div>

						<div className="bg-gray-400 h-[20px] rounded-[0.15rem]"></div>
					</div>
				</div>
			</div>

			<div className="animate-pulse">
				<div className="h-[250px] rounded-lg lg:h-[220px] bg-gray-400 w-full"></div>

				<div className="flex flex-col gap-6 p-3">
					<div className="flex flex-col gap-2">
						<div className="bg-gray-400 h-[20px] rounded-[0.15rem]"></div>

						<div className="bg-gray-400 h-[20px] rounded-[0.15rem]"></div>
					</div>

					<div className="bg-gray-400 h-[20px] rounded-[0.15rem]"></div>

					<div className="flex flex-col gap-2">
						<div className="bg-gray-400 h-[20px] rounded-[0.15rem]"></div>

						<div className="bg-gray-400 h-[20px] rounded-[0.15rem]"></div>
					</div>
				</div>
			</div>

			<div className="animate-pulse sm:hidden sm:not-sr-only lg:block">
				<div className="h-[250px] rounded-lg lg:h-[220px] bg-gray-400 w-full"></div>

				<div className="flex flex-col gap-6 p-3">
					<div className="flex flex-col gap-2">
						<div className="bg-gray-400 h-[20px] rounded-[0.15rem]"></div>

						<div className="bg-gray-400 h-[20px] rounded-[0.15rem]"></div>
					</div>

					<div className="bg-gray-400 h-[20px] rounded-[0.15rem]"></div>

					<div className="flex flex-col gap-2">
						<div className="bg-gray-400 h-[20px] rounded-[0.15rem]"></div>

						<div className="bg-gray-400 h-[20px] rounded-[0.15rem]"></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductsLoadingSkeleton;
