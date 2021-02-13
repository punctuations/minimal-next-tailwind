import FeaturesItems from "../core/features.json";

const Features = () => {
	const features = [];

	{
		for (const i in FeaturesItems.features) {
			features.push(
				<section className="p-6 flex flex-row space-x-2" key={i}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						width={30}
						height={30}
						className="text-green-500 w-1/4"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M5 13l4 4L19 7"
						/>
					</svg>
					<div className="flex flex-col">
						<h4 className="text-lg flex-row flex">
							{FeaturesItems.features[i].title}
						</h4>
						<p className="text-gray-500 text-base font-medium">
							{FeaturesItems.features[i].description}
						</p>
					</div>
				</section>
			);
		}
	}

	return (
		<section className="flex flex-col justify-center items-center text-3xl font-bold space-y-3">
			<h3>All-in-one platform</h3>
			<p className="text-gray-500 text-base font-medium w-3/4 text-center">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Dignissim
				suspendisse in est ante in nibh.
			</p>
			<div className="grid grid-cols-3 gap-4">
				{features.map((content) => {
					return <>{content}</>;
				})}
			</div>
		</section>
	);
};

export default Features;
