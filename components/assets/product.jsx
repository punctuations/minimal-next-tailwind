import ProductPayment from "./ui/productPayment";
import ProductForm from "./ui/productForm";

const Product = () => {
	return (
		<section className="flex flex-col justify-center items-center space-y-8">
			<header className="flex flex-col items-center justify-center">
				<h3 className="leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
					An easy way to manage your team.
				</h3>
				<p className="text-gray-400 text-base mt-4 max-w-4xl">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
					voluptate. Animi tempora nihil sed alias, excepturi sint nulla
					praesentium est, natus provident impedit sit cupiditate, atque autem
					blanditiis necessitatibus fugit.
				</p>
			</header>
			<section className="grid grid-cols-2 max-w-7xl">
				<div className="flex flex-col space-y-6">
					<header>
						<h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-800">
							Fast and easy payouts.
						</h2>
						<p className="text-gray-400 text-base mt-4 max-w-4xl">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
							perspiciatis sed quia quibusdam accusantium placeat nisi facere
							natus consequuntur nam.
						</p>
					</header>

					<div className="flex flex-row mt-4 space-x-4">
						<span className="p-3 bg-purple-400 text-white rounded-md h-11">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="h-5 w-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
								/>
							</svg>
						</span>
						<div className="flex flex-col">
							<p className="font-medium">Secure payments</p>
							<p className="text-gray-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
								error accusamus autem explicabo vitae ea nihil aliquid quisquam
								illo soluta?
							</p>
						</div>
					</div>
					<div className="flex flex-row mt-4 space-x-4">
						<span className="p-3 bg-purple-400 text-white rounded-md h-11">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="white"
								className="w-5 h-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
						</span>
						<div className="flex flex-col">
							<p className="font-medium">Fast & easy transactions</p>
							<p className="text-gray-400">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Suscipit harum enim repellendus impedit? Sint optio officia est
								illum vero sed, adipisci eum inventore dignissimos excepturi,
								nihil commodi, eveniet explicabo neque!
							</p>
						</div>
					</div>
					<div className="flex flex-row mt-4 space-x-4">
						<span className="p-3 bg-purple-400 text-white rounded-md h-11">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="h-5 w-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
								/>
							</svg>
						</span>
						<div className="flex flex-col">
							<p className="font-medium">Fast & easy transactions</p>
							<p className="text-gray-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Doloremque quis molestiae nulla soluta ipsam impedit quod
								officia? Atque exercitationem voluptatem voluptatum rerum porro
								quia delectus? Placeat debitis repellat repudiandae alias hic,
								assumenda optio similique ad?
							</p>
						</div>
					</div>
				</div>
				<ProductForm />
			</section>
			<br />
			<section className="relative grid grid-cols-2 max-w-7xl space-x-12">
				<ProductPayment />
				<div className="flex flex-col space-y-6">
					<header>
						<h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-800">
							Always know what's happening.
						</h2>
						<p className="text-gray-400 text-base mt-4 max-w-4xl">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
							perspiciatis sed quia quibusdam accusantium placeat nisi facere
							natus consequuntur nam.
						</p>
					</header>

					<div className="flex flex-row mt-4 space-x-4">
						<span className="p-3 bg-purple-400 text-white rounded-md h-11">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="h-5 w-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
								/>
							</svg>
						</span>
						<div className="flex flex-col">
							<p className="font-medium">Mobile notifications</p>
							<p className="text-gray-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Doloremque id atque, odio saepe labore unde quos vel blanditiis,
								voluptates facilis a.
							</p>
						</div>
					</div>
					<div className="flex flex-row mt-4 space-x-4">
						<span className="p-3 bg-purple-400 text-white rounded-md h-11">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								className="h-5 w-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</span>
						<div className="flex flex-col">
							<p className="font-medium">Reminder emails</p>
							<p className="text-gray-400">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Incidunt cupiditate eveniet exercitationem mollitia unde
								voluptas, maiores corrupti obcaecati laboriosam temporibus sunt,
								modi magnam!
							</p>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
};

export default Product;
