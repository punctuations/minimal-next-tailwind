const logoClouds = () => {
	return (
		<section className="flex flex-col justify-center items-center text-gray-500 font-bold tracking-widest uppercase space-y-4">
			<p>Trusted by like 3 people</p>
			<div className="flex flex-row items-center justify-center font-extrabold text-xs space-x-6 select-none">
				<a
					href="#"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center hover:scale-105 transform transition-all duration-500"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={35}
						height={35}
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
					</svg>
					Company
				</a>
				<a
					href="#"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center font-bold hover:scale-105 transform transition-all duration-500"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						width={35}
						height={35}
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
						/>
					</svg>
					Not Home Depot
				</a>
				<a
					href="#"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center hover:scale-105 transform transition-all duration-500"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width={35}
						height={35}
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path d="M9.707 7.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L13 8.586V5h3a2 2 0 012 2v5a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h3v3.586L9.707 7.293zM11 3a1 1 0 112 0v2h-2V3z" />
						<path d="M4 9a2 2 0 00-2 2v5a2 2 0 002 2h8a2 2 0 002-2H4V9z" />
					</svg>
					Obscure tech company
				</a>
			</div>
			<section className="normal-case flex flex-col items-center justify-center">
				<p className="w-3/4 text-2xl text-center">
					<span className="text-6xl font-bold font-serif text-purple-400">
						“
					</span>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Luctus
					accumsan tortor posuere ac. Sed lectus vestibulum mattis ullamcorper
					velit sed ullamcorper morbi.
				</p>
				<div className="flex flex-row justify-center items-center space-x-2">
					<img
						className="rounded-full border-2 border-white"
						width={45}
						height={45}
						src="https://fakeface.rest/face/view?minimum_age=18&maximum_age=50"
					/>
					<div className="text-base font-medium">
						<span className="text-black">Charlie Smith</span>{" "}
						<span className="text-purple-500 font-extrabold">/</span> CEO @
						Obscure tech company
					</div>
				</div>
			</section>
		</section>
	);
};

export default logoClouds;
