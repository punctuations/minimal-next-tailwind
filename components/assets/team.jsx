const Team = () => {
	return (
		<section className="grid grid-cols-2 w-3/4">
			<div className="flex flex-col justify-center">
				<h3 className="text-5xl font-bold">Meet the team</h3>
				<p className="text-gray-500 font-medium w-3/4">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</p>
			</div>

			<section className="shadow-lg hover:shadow-2xl transition-shadow duration-500 rounded-2xl p-12 grid grid-cols-2">
				<div className="flex flex-col space-y-4">
					<a href="#">
						<figure className="flex flex-row space-x-4 items-center">
							<img
								className="rounded-full h-16 w-16"
								src="https://fakeface.rest/face/view?gender=male&minimum_age=19&maximum_age=25"
							/>
							<figcaption className="flex flex-col antialiased text-lg font-medium">
								<p>Jonas Syrek</p>
								<p className="text-purple-500 text-sm">Co-Founder / CEO</p>
							</figcaption>
						</figure>
					</a>

					<a href="#">
						<figure className="flex flex-row space-x-4 items-center">
							<img
								className="rounded-full h-16 w-16"
								src="https://fakeface.rest/face/view?gender=female&minimum_age=23&maximum_age=30"
							/>
							<figcaption className="flex flex-col antialiased text-lg font-medium">
								<p>Marnie Swiat</p>
								<p className="text-purple-500 text-sm">Designer</p>
							</figcaption>
						</figure>
					</a>

					<a href="#">
						<figure className="flex flex-row space-x-4 items-center">
							<img
								className="rounded-full h-16 w-16"
								src="https://fakeface.rest/face/view?gender=male&minimum_age=30&maximum_age=40"
							/>
							<figcaption className="flex flex-col antialiased text-lg font-medium">
								<p>Errol Fogarty</p>
								<p className="text-purple-500 text-sm">Backend Engineer</p>
							</figcaption>
						</figure>
					</a>
				</div>

				<div className="flex flex-col space-y-4">
					<a href="#">
						<figure className="flex flex-row space-x-4 items-center">
							<img
								className="rounded-full h-16 w-16"
								src="https://fakeface.rest/face/view?gender=female&minimum_age=22&maximum_age=25"
							/>
							<figcaption className="flex flex-col antialiased text-lg font-medium">
								<p>Trena Millson</p>
								<p className="text-purple-500 text-sm">Co-Founder / CTO</p>
							</figcaption>
						</figure>
					</a>

					<a href="#">
						<figure className="flex flex-row space-x-4 items-center">
							<img
								className="rounded-full h-16 w-16"
								src="https://fakeface.rest/face/view?gender=male&minimum_age=16&maximum_age=20"
							/>
							<figcaption className="flex flex-col antialiased text-lg font-medium">
								<p>Keneth Tombrello</p>
								<p className="text-purple-500 text-sm">
									Front-End Web Developer
								</p>
							</figcaption>
						</figure>
					</a>

					<a href="#">
						<figure className="flex flex-row space-x-4 items-center">
							<img
								className="rounded-full h-16 w-16"
								src="https://fakeface.rest/face/view?gender=male&minimum_age=20&maximum_age=25"
							/>
							<figcaption className="flex flex-col antialiased text-lg font-medium">
								<p>Dwain Doolen</p>
								<p className="text-purple-500 text-sm">
									Director, Product Devlopment
								</p>
							</figcaption>
						</figure>
					</a>
				</div>
			</section>
		</section>
	);
};

export default Team;
