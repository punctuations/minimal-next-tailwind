import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { convert, addSymbol } from "current-currency";

import Recipients from "../core/recipients.json";

const Product = () => {
	const [select, setSelect] = useState(false);
	const [selectedRecipient, setRecipient] = useState(0);
	const [currency, setCurrency] = useState("USD");
	const [finalCurrency, setFinalCurrency] = useState("CAD");
	const [amount, setAmount] = useState(0.0);
	const [finalAmount, setFinalAmount] = useState(0.0);

	convert(currency, amount, finalCurrency)
		.then((res) => res.amount)
		.then((data) => setFinalAmount(data));

	const recipient = [];

	{
		for (const i in Recipients.recipients) {
			recipient.push(
				<>
					{selectedRecipient == i ? (
						<div class="flex items-center">
							<img
								src={Recipients.recipients[i].image}
								className="flex-shrink-0 h-6 w-6 rounded-full"
							/>
							<span className="ml-3 block font-medium truncate">
								{Recipients.recipients[i].name}{" "}
								<span className="text-gray-400 font-normal mx-3">
									{Recipients.recipients[i].tag}
								</span>
							</span>

							<span className="absolute inset-y-0 right-0 flex items-center pr-4">
								<svg
									className="h-5 w-5"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
						</div>
					) : (
						<div className="flex items-center">
							<img
								src={Recipients.recipients[i].image}
								className="flex-shrink-0 h-6 w-6 rounded-full"
							/>
							<span className="ml-3 block font-normal truncate">
								{Recipients.recipients[i].name}{" "}
								<span className="text-gray-400 mx-3">
									{Recipients.recipients[i].tag}
								</span>
							</span>
						</div>
					)}
				</>
			);
		}
	}

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
				<div className="relative flex flex-col p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-500 select-none">
					<h2 className="text-xl font-semibold text-gray-900">Send money</h2>
					<p className="text-gray-400 text-base max-w-4xl">
						Select a recipient and the amount you want to send
					</p>
					<div className="mt-2">
						<div>
							<label
								id="listbox-label"
								class="block text-sm font-medium text-gray-700"
							>
								Recipient
							</label>
							<div class="mt-1 relative">
								<button
									onClick={() => setSelect(!select)}
									type="button"
									aria-haspopup="listbox"
									aria-expanded="true"
									aria-labelledby="listbox-label"
									class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
								>
									<span class="flex items-center">
										<img
											src={Recipients.recipients[selectedRecipient].image}
											class="flex-shrink-0 h-6 w-6 rounded-full"
										/>
										<span class="ml-3 block truncate">
											{Recipients.recipients[selectedRecipient].name}
											<span className="text-gray-400 mx-3">
												{Recipients.recipients[selectedRecipient].tag}
											</span>
										</span>
									</span>
									<span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
										<svg
											class="h-5 w-5 text-gray-400"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
												clip-rule="evenodd"
											/>
										</svg>
									</span>
								</button>
								<AnimatePresence>
									{select ? (
										<motion.div
											initial={{ opacity: 0, y: -20 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0 }}
											class="absolute z-40 mt-1 w-full rounded-md bg-white shadow-lg"
										>
											<ul
												tabindex="-1"
												role="listbox"
												aria-labelledby="listbox-label"
												aria-activedescendant="listbox-item-3"
												class="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
											>
												{recipient.map((content, i) => {
													return (
														<li
															key={i}
															onClick={() => setRecipient(i)}
															id="listbox-item-0"
															role="option"
															class="text-gray-900 hover:text-white hover:bg-indigo-600 cursor-default select-none relative py-2 pl-3 pr-9"
														>
															{content}
														</li>
													);
												})}
											</ul>
										</motion.div>
									) : (
										""
									)}
								</AnimatePresence>
							</div>
						</div>
					</div>
					<hr className="my-6" />
					<div className="mt-2">
						<label for="price" class="block text-sm font-medium text-gray-700">
							How much do you want to send?
						</label>
						<div class="mt-1 relative rounded-md shadow-sm border border-gray-300">
							<div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
								<span class="text-gray-500 sm:text-sm">
									{addSymbol(currency, "")}
								</span>
							</div>
							<input
								onChange={() =>
									setAmount(document.getElementById("price").value)
								}
								type="text"
								name="price"
								id="price"
								class="focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 py-2 pr-12 sm:text-sm border-gray-300 rounded-md"
								placeholder="0.00"
							/>
							<div class="absolute inset-y-0 right-0 flex items-center">
								<label for="currency" class="sr-only">
									Currency
								</label>
								<select
									onChange={() =>
										setCurrency(document.getElementById("currency").value)
									}
									id="currency"
									name="currency"
									class="border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md rounded-l-none"
								>
									<option value="USD">USD</option>
									<option value="CAD">CAD</option>
									<option value="EUR">EUR</option>
								</select>
							</div>
						</div>
					</div>
					<div className="mt-6">
						<div className="relative flex w-full pl-3.5 py-2 pr-12 sm:text-sm border border-gray-300 rounded-md justify-between">
							<p>{`${addSymbol(currency, "")} ${((5.4 / 100) * amount).toFixed(
								2
							)} ${currency}`}</p>
							<p className="absolute right-0 pr-4 flex text-gray-400">
								Total Fees
							</p>
						</div>
					</div>
					<div className="mt-4">
						<p className="block text-sm font-medium text-gray-700">
							What recipient gets
						</p>
						<div className="relative flex w-full pl-3.5 py-2 pr-12 sm:text-sm border border-gray-300 rounded-md">
							<p className="items-start">{`${addSymbol(finalCurrency, "")} ${(
								finalAmount -
								(5.4 / 100) * amount
							).toFixed(2)}`}</p>
							<div class="absolute inset-y-0 right-0 flex items-center">
								<select
									onChange={() =>
										setFinalCurrency(
											document.getElementById("final-currency").value
										)
									}
									id="final-currency"
									name="final-currency"
									class="border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md rounded-l-none"
								>
									<option value="CAD">CAD</option>
									<option value="USD">USD</option>
									<option value="EUR">EUR</option>
								</select>
							</div>
						</div>
					</div>
					<hr className="mt-6" />
					<div className="flex flex-row-reverse mt-4 space-x-4 space-x-reverse">
						<button className="focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-gray-900 text-white font-medium rounded-md p-2 px-6">
							Continue
						</button>
						<button className="focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-400 font-medium rounded-md p-2 px-6">
							Cancel
						</button>
					</div>
				</div>
			</section>
			<br />
			<section className="grid grid-cols-2 max-w-7xl space-x-12">
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
