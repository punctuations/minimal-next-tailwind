import Prices from "./ui/prices";

const Price = () => {
	return (
		<section className="flex flex-col justify-center items-center space-y-8">
			<br />
			<header className="flex flex-col justify-center items-center space-y-3">
				<h1 className="text-4xl font-bold text-gray-900">Pricing Plans</h1>
				<p className="text-gray-400">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
					eligendi veritatis tempore.
				</p>
			</header>
			<br />
			<Prices />
		</section>
	);
};

export default Price;
