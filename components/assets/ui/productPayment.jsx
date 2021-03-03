const ProductPayment = () => {
	return (
		<div className="flex flex-col space-y-10 justify-center">
			<div className="relative flex items-center p-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-500 select-none">
				<img
					src="https://i.scdn.co/image/ab67706c0000bebbc779688b9d3e15872487175c"
					className="flex-shrink-0 h-12 w-12 rounded-full"
				/>
				<div className="flex flex-col ml-6">
					<p>Payment to Ludwig Ahgren</p>
					<p>
						<span className="font-medium">$25.00</span>{" "}
						<span className="text-gray-400">USD</span>
					</p>
				</div>
				<div className="absolute flex right-4 items-center bg-green-100 text-green-600 rounded-lg space-x-2 px-3">
					<div className="w-2 h-2 rounded-full bg-green-500" />
					<p className="tracking-tight">Success</p>
				</div>
			</div>
			<div className="relative flex items-center p-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-500 select-none">
				<img
					src="https://fakeface.rest/face/view?gender=female&minimum_age=19&maximum_age=35"
					className="flex-shrink-0 h-12 w-12 rounded-full"
				/>
				<div className="flex flex-col ml-6">
					<p>Payment to Halley Soderberg</p>
					<p>
						<span className="font-medium">$32.64</span>{" "}
						<span className="text-gray-400">CAD</span>
					</p>
				</div>
				<div className="absolute flex right-4 items-center bg-yellow-100 text-yellow-600 rounded-lg space-x-2 px-3">
					<div className="w-2 h-2 rounded-full bg-yellow-500" />
					<p className="tracking-tight">Processing</p>
				</div>
			</div>
			<div className="relative flex items-center p-4 px-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-500 select-none">
				<img
					src="https://fakeface.rest/face/view?gender=male&minimum_age=30&maximum_age=40"
					className="flex-shrink-0 h-12 w-12 rounded-full"
				/>
				<div className="flex flex-col ml-6">
					<p>Payment to Wade Cooper</p>
					<p>
						<span className="font-medium">€17.92</span>{" "}
						<span className="text-gray-400">EUR</span>
					</p>
				</div>
				<div className="absolute flex right-4 items-center bg-red-100 text-red-600 rounded-lg space-x-2 px-3">
					<div className="w-2 h-2 rounded-full bg-red-500" />
					<p className="tracking-tight">Failed</p>
				</div>
			</div>
		</div>
	);
};

export default ProductPayment;
