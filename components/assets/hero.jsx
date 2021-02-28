import { useScrollPosition } from "react-use-scroll-position";

const Hero = () => {
	const { y } = useScrollPosition();

	return (
		<>
			{y > 0 ? (
				<section className="mt-10 relative flex items-center justify-center">
					<header className="absolute z-20 flex flex-col items-center select-none">
						<h2 className="text-6xl font-semibold text-white">Lorem Ipsum</h2>
						<p className="text-3xl font-medium text-white">
							An easy way to extend{" "}
							<span className="text-purple-200">your business</span>.
						</p>
						<br />
						<p className="text-sm font-medium text-white w-1/2 text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. In
							hendrerit gravida rutrum quisque non tellus. Quisque sagittis
							purus sit amet.
						</p>
						<br />
						<div className="flex flex-row space-x-6">
							<a
								href="#"
								className="hover:scale-105 transform duration-500 cursor-pointer bg-white text-purple-700 font-medium p-3 px-8 rounded-md"
							>
								Get started
							</a>
							<a
								href="#"
								className="hover:scale-105 transform duration-500 cursor-pointer text-white bg-purple-500 bg-opacity-50 font-medium p-3 px-8 rounded-md"
							>
								Live demo
							</a>
						</div>
					</header>

					<div className="absolute bg-purple-700 opacity-40 w-full h-full rounded-xl transform scale-95 z-10"></div>
					<img
						className="rounded-xl transform scale-95 w-full select-none"
						src="https://picsum.photos/1500/650?blur"
					/>
				</section>
			) : (
				<section className="relative flex items-center justify-center">
					<header className="absolute z-20 flex flex-col items-center select-none">
						<h2 className="text-6xl font-semibold text-white">Lorem Ipsum</h2>
						<p className="text-3xl font-medium text-white">
							An easy way to extend{" "}
							<span className="text-purple-200">your business</span>.
						</p>
						<br />
						<p className="text-sm font-medium text-white w-1/2 text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. In
							hendrerit gravida rutrum quisque non tellus. Quisque sagittis
							purus sit amet.
						</p>
						<br />
						<div className="flex flex-row space-x-6">
							<a
								href="#"
								className="hover:scale-105 transform duration-500 cursor-pointer bg-white text-purple-700 font-medium p-3 px-8 rounded-md"
							>
								Get started
							</a>
							<a
								href="#"
								className="hover:scale-105 transform duration-500 cursor-pointer text-white bg-purple-500 bg-opacity-50 font-medium p-3 px-8 rounded-md"
							>
								Live demo
							</a>
						</div>
					</header>

					<div className="absolute bg-purple-700 opacity-40 w-full h-full rounded-xl transform scale-95 z-10"></div>
					<img
						className="rounded-xl transform scale-95 w-full select-none"
						src="https://picsum.photos/1500/650?blur"
					/>
				</section>
			)}
		</>
	);
};

export default Hero;
