import { motion } from "framer-motion";

const Prices = () => {
	return (
		<section className="flex flex-row justify-center items-center space-x-5">
			<section className="flex flex-col flex-1 shadow-xl hover:shadow-2xl transition-shadows duration-500 rounded-lg">
				<div className="px-20 pt-6 pb-4 flex flex-col items-center justify-center border-b border-gray-100">
					<header className="flex flex-col items-center justify-center">
						<h3 className="text-2xl text-gray-900 font-bold">Hobby</h3>
						<p className="text-4xl font-bold flex flex-row items-center justify-center">
							<span className="text-2xl">$</span>5
							<span className="text-xl text-gray-400 font-normal">/month</span>
						</p>
					</header>
				</div>
				<div className="pb-6 pt-4 bg-gray-50 flex flex-col items-center justify-center space-y-4 rounded-b-lg">
					<div className="flex items-center space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							width={25}
							height={25}
							className="text-green-300"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<p className="text-gray-400 text-xs">Lorem ipsum dolor sit amet.</p>
					</div>
					<div className="flex items-center space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							width={25}
							height={25}
							className="text-green-300"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<p className="text-gray-400 text-xs">Lorem ipsum dolor sit.</p>
					</div>
					<div className="flex items-center space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							width={25}
							height={25}
							className="text-green-300"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<p className="text-gray-400 text-xs">
							Lorem ipsum dolor sit amet consectetur.
						</p>
					</div>
					<button className="px-6 p-2 shadow-md text-purple-500 font-medium rounded-md transform transition-all duration-500 hover:scale-105">
						Start your trial
					</button>
				</div>
			</section>
			<section className="relative flex flex-col flex-1 border border-purple-500 rounded-lg shadow-xl hover:shadow-2xl transition-shadows duration-500">
				<p className="absolute -top-5 left-1/4 bg-purple-500 text-white px-12 p-1.5 rounded-md">
					Featured
				</p>
				<div className="px-20 pt-6 pb-4 flex flex-col items-center justify-center border-b border-gray-100">
					<header className="flex flex-col items-center justify-center">
						<h3 className="text-3xl text-gray-900 font-bold">Enterprise</h3>
						<p className="text-4xl font-bold flex flex-row items-center justify-center">
							<span className="text-2xl">$</span>110
							<span className="text-xl text-gray-400 font-normal">/month</span>
						</p>
					</header>
				</div>
				<div className="pb-6 pt-4 bg-gray-50 flex flex-col items-center justify-center space-y-4 rounded-b-lg">
					<div className="flex items-center space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							width={25}
							height={25}
							className="text-green-300"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<p className="text-gray-400 text-xs">Lorem ipsum dolor sit amet.</p>
					</div>
					<div className="flex items-center space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							width={25}
							height={25}
							className="text-green-300"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<p className="text-gray-400 text-xs">
							Lorem ipsum dolor sit amet consectetur.
						</p>
					</div>
					<div className="flex items-center space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							width={25}
							height={25}
							className="text-green-300"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<p className="text-gray-400 text-xs">Lorem ipsum dolor sit amet.</p>
					</div>
					<div className="flex items-center space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							width={25}
							height={25}
							className="text-green-300"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<p className="text-gray-400 text-xs">Lorem ipsum dolor sit.</p>
					</div>
					<button className="px-6 p-2 shadow-md bg-purple-500 text-white font-medium rounded-md transform transition-all duration-500 hover:scale-105">
						Start your trial
					</button>
				</div>
			</section>
			<section className="flex flex-col flex-1 shadow-xl hover:shadow-2xl transition-shadows duration-500 rounded-lg">
				<div className="px-20 pt-6 pb-4 flex flex-col items-center justify-center border-b border-gray-100">
					<header className="flex flex-col items-center justify-center">
						<h3 className="text-2xl text-gray-900 font-bold">Business</h3>
						<p className="text-4xl font-bold flex flex-row items-center justify-center">
							<span className="text-2xl">$</span>215
							<span className="text-xl text-gray-400 font-normal">/month</span>
						</p>
					</header>
				</div>
				<div className="pb-6 pt-4 bg-gray-50 flex flex-col items-center justify-center space-y-4 rounded-b-lg">
					<div className="flex items-center space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							width={25}
							height={25}
							className="text-green-300"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<p className="text-gray-400 text-xs">Lorem ipsum dolor sit amet.</p>
					</div>
					<div className="flex items-center space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							width={25}
							height={25}
							className="text-green-300"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<p className="text-gray-400 text-xs">
							Lorem ipsum dolor sit amet consectetur.
						</p>
					</div>
					<div className="flex items-center space-x-2">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							width={25}
							height={25}
							className="text-green-300"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M5 13l4 4L19 7"
							/>
						</svg>
						<p className="text-gray-400 text-xs">Lorem ipsum dolor sit.</p>
					</div>

					<button className="px-6 p-2 shadow-md text-purple-500 font-medium rounded-md transform transition-all duration-500 hover:scale-105">
						Start your trial
					</button>
				</div>
			</section>
		</section>
	);
};

export default Prices;
