const Example = () => {
	return (
		<section className="flex flex-col justify-center relative space-y-4">
			<figure className="flex flex-row space-x-4">
				<div className="flex -space-x-4 overflow-hidden h-1/2 z-20">
					<img
						className="rounded-full h-14 w-14 inline-block border-4 border-white"
						src="https://fakeface.rest/face/view?gender=male&minimum_age=20&maximum_age=25"
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="text-gray-600 rounded-full h-6 w-6 p-1 bg-white self-end"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
						<path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
					</svg>
				</div>
				<div className="border-r-2 border-gray-400 absolute h-3/4 w-3 opacity-75" />

				<figcaption className="flex flex-col antialiased">
					<p className="font-medium">Dwain Doolen</p>
					<p className="text-gray-400 text-sm mb-2">Commented 6d ago</p>
					<p className="text-gray-500 text-sm w-3/4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</figcaption>
			</figure>

			<figure className="flex items-center flex-row space-x-4">
				<div className="flex -space-x-4 overflow-hidden h-1/2 z-20 pl-2 pr-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="text-gray-600 rounded-full h-10 w-10 p-1.5 inline-block bg-gray-200 border-4 border-white"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
							clipRule="evenodd"
						/>
					</svg>
				</div>

				<figcaption className=" antialiased">
					<p className="text-gray-500">
						<span className="font-medium text-black">Jonas Syrek</span> assinged{" "}
						<span className="font-medium text-black">Keneth Tombrello</span> 3d
						ago
					</p>
				</figcaption>
			</figure>

			<figure className="flex items-center flex-row space-x-4">
				<div className="flex -space-x-4 overflow-hidden h-1/2 z-20 pl-2.5 pr-4">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="text-gray-600 rounded-full w-10 p-1.5 inline-block bg-gray-200 border-4 border-white"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fillRule="evenodd"
							d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z"
							clipRule="evenodd"
						/>
					</svg>
				</div>

				<figcaption className="antialiased w-full">
					<p className="text-gray-500">
						<span className="font-medium text-black">Marnie Swiat</span> added
						tags{" "}
						<span className="font-medium text-black inline-flex flex-row items-center border-2 border-gray-200 rounded-3xl pr-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-3 w-3 p-1 mx-1 ml-2.5 text-red-500"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<circle cx="10" cy="10" r="10" />
							</svg>
							Bug
						</span>{" "}
						<span className="font-medium text-black inline-flex flex-row items-center border-2 border-gray-200 rounded-3xl pr-4">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-3 w-3 p-1 mx-1 ml-2.5 text-purple-500"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<circle cx="10" cy="10" r="10" />
							</svg>
							Accessibility
						</span>{" "}
						8h ago
					</p>
				</figcaption>
			</figure>

			<figure className="flex flex-row space-x-4">
				<div className="flex -space-x-4 overflow-hidden h-1/2 z-20">
					<img
						className="rounded-full h-14 w-14 inline-block border-4 border-white"
						src="https://fakeface.rest/face/view?gender=male&minimum_age=30&maximum_age=40"
					/>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="text-gray-600 rounded-full h-6 w-6 p-1 bg-white self-end"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
						<path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
					</svg>
				</div>

				<figcaption className="flex flex-col antialiased justify-end">
					<p className="font-medium">Erroll Fogarty</p>
					<p className="text-gray-400 text-sm mb-2">Commented 2h ago</p>
					<p className="text-gray-500 text-sm w-3/4">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua.
					</p>
				</figcaption>
			</figure>
		</section>
	);
};

export default Example;
