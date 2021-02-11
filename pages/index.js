import Head from "next/head";
import Loader from "../components/assets/loader";
import Nav from "../components/assets/navigation";

export default function Home() {
	return (
		<>
			<Loader />

			<div className="mx-12">
				<Nav logo="/favicon.ico" name="Lorem Ipsum" />

				<div className="flex flex-col justify-center items-center">
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
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
								Luctus accumsan tortor posuere ac. Sed lectus vestibulum mattis
								ullamcorper velit sed ullamcorper morbi.
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
									<span className="text-purple-500 font-extrabold">/</span> CEO
									@ Obscure tech company
								</div>
							</div>
						</section>
					</section>
					<br />
					<section className="flex flex-col justify-center items-center text-3xl font-bold space-y-3">
						<h3>All-in-one platform</h3>
						<p className="text-gray-500 text-base font-medium w-3/4 text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua.
							Dignissim suspendisse in est ante in nibh.
						</p>
						<div className="grid grid-cols-3 gap-4">
							<section className="p-6 flex flex-row space-x-2">
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
									<h4 className="text-lg flex-row flex">Reminder emails</h4>
									<p className="text-gray-500 text-base font-medium">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua.
									</p>
								</div>
							</section>
							<section className="p-6 flex flex-row space-x-2">
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
									<h4 className="text-lg flex-row flex">Keyboard shortcuts</h4>
									<p className="text-gray-500 text-base font-medium">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua.
									</p>
								</div>
							</section>
							<section className="p-6 flex flex-row space-x-2">
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
									<h4 className="text-lg flex-row flex">Notifications</h4>
									<p className="text-gray-500 text-base font-medium">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua.
									</p>
								</div>
							</section>
							<section className="p-6 flex flex-row space-x-2">
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
									<h4 className="text-lg flex-row flex">24/7 Support</h4>
									<p className="text-gray-500 text-base font-medium">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua.
									</p>
								</div>
							</section>
							<section className="p-6 flex flex-row space-x-2">
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
										Instant transactions
									</h4>
									<p className="text-gray-500 text-base font-medium">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua.
									</p>
								</div>
							</section>
							<section className="p-6 flex flex-row space-x-2">
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
									<h4 className="text-lg flex-row flex">No hidden fees</h4>
									<p className="text-gray-500 text-base font-medium">
										Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
										do eiusmod tempor incididunt ut labore et dolore magna
										aliqua.
									</p>
								</div>
							</section>
						</div>
					</section>
					<br />
				</div>
				<section className="flex flex-row justify-around items-center">
					<div className="flex flex-col text-3xl font-bold">
						<h4>Ready to dive in?</h4>
						<p className="text-purple-500">Start your free trial today.</p>
					</div>
					<div className="flex space-x-5">
						<a
							href="#"
							className="hover:scale-105 transform duration-500 cursor-pointer bg-purple-700 text-white font-medium p-3 px-8 rounded-md"
						>
							Get started
						</a>
						<a
							href="#"
							className="hover:scale-105 transform duration-500 cursor-pointer bg-white text-purple-500 shadow-lg font-medium p-3 px-8 rounded-md"
						>
							Learn more
						</a>
					</div>
				</section>
				<br />
				<hr />
				<br />
				<section className="grid grid-cols-6 text-gray-500">
					<div className="col-span-2 flex flex-col space-y-2">
						<figure>
							<img className="opacity-30 w-32 h-16" src="/vercel.svg" />
							<figcaption className="antialiased text-gray-400">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</p>
							</figcaption>
						</figure>

						<div className="flex flex-row space-x-6 justify-around">
							<a
								href="https://twitter.com/atmattt/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									width={20}
									height={20}
									fill="currentColor"
									strokeWidth={2}
									className="duration-500 transition-all opacity-40 dark:opacity-75 dark:hover:opacity-40 hover:opacity-75 dark:text-white"
								>
									<title>Twitter</title>
									<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
								</svg>
							</a>{" "}
							<a
								href="https://discord.gg/R3QtA68Cbf"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									width={23}
									height={23}
									fill="currentColor"
									strokeWidth={2}
									className="duration-500 transition-all opacity-40 dark:opacity-75 dark:hover:opacity-40 hover:opacity-75 dark:text-white"
									viewBox="-10 10 164 164"
								>
									<title>Discord</title>
									<path d="M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z" />
								</svg>
							</a>
							<a
								href="https://github.com/punctuations/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									width={22}
									height={22}
									fill="currentColor"
									strokeWidth={2}
									className="duration-500 transition-all opacity-40 dark:opacity-75 dark:hover:opacity-40 hover:opacity-75 dark:text-white"
									viewBox="0 0 24 24"
								>
									<title>GitHub</title>
									<path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
								</svg>
							</a>
							<a
								href="mailto:matt@dont-ping.me"
								target="_blank"
								rel="noopener noreferrer"
							>
								<svg
									width={22}
									height={22}
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									className="duration-500 transition-all opacity-40 dark:opacity-75 dark:hover:opacity-40 hover:opacity-75 dark:text-white"
									fill="currentColor"
								>
									<title>Email</title>
									<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
									<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
								</svg>
							</a>
						</div>
					</div>
					<div className="flex flex-col space-y-2 antialiased">
						<h5 className="uppercase text-gray-400 font-medium">Resources</h5>
						<li className="list-none hover:text-black transition-colors duration-500">
							<a href="#">Documentation</a>
						</li>
						<li className="list-none hover:text-black transition-colors duration-500">
							<a href="#">Guides</a>
						</li>
						<li className="list-none hover:text-black transition-colors duration-500">
							<a href="#">Changelog</a>
						</li>
					</div>
					<div className="flex flex-col space-y-2 antialiased">
						<h5 className="uppercase text-gray-400 font-medium">Support</h5>
						<li className="list-none hover:text-black transition-colors duration-500">
							<a href="#">Pricing</a>
						</li>
						<li className="list-none hover:text-black transition-colors duration-500">
							<a href="#">Documentation</a>
						</li>
						<li className="list-none hover:text-black transition-colors duration-500">
							<a href="#">Guides</a>
						</li>
					</div>
					<div className="flex flex-col space-y-2 antialiased">
						<h5 className="uppercase text-gray-400 font-medium">Company</h5>
						<li className="list-none hover:text-black transition-colors duration-500">
							<a href="#">About</a>
						</li>
						<li className="list-none hover:text-black transition-colors duration-500">
							<a href="#">Blog</a>
						</li>
						<li className="list-none hover:text-black transition-colors duration-500">
							<a href="#">Jobs</a>
						</li>
						<li className="list-none hover:text-black transition-colors duration-500">
							<a href="#">Partners</a>
						</li>
					</div>
					<div className="flex flex-col space-y-2 antialiased">
						<h5 className="uppercase text-gray-400 font-medium">Legal</h5>
						<li className="list-none hover:text-black transition-colors duration-500">
							<a href="#">Privacy</a>
						</li>
						<li className="list-none hover:text-black transition-colors duration-500">
							<a href="#">Terms</a>
						</li>
					</div>
				</section>
				<br />
				<section className="text-gray-500 flex items-center justify-center h-full">
					<p>
						© 2021{" "}
						<a
							href="https://dont-ping.me/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline font-medium"
						>
							Matt
						</a>
						. All rights reserved.
					</p>
				</section>
			</div>
		</>
	);
}
