import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { convert, addSymbol } from "current-currency";

import Recipients from "../core/recipients.json";

const Product = () => {
	const [select, setSelect] = useState(false);
	const [selectedRecipient, setRecipient] = useState(0);
	const [currency, setCurrency] = useState("USD");
	const [finalCurreny, setFinalCurrency] = useState("CAD");
	const [amount, setAmount] = useState(0.0);

	// const finalAmount = convert("EUR", amount, "AUD").then((res) => {
	// 	console.log(res);
	// });

	const recipient = [];

	{
		for (const i in Recipients.recipients) {
			recipient.push(
				<>
					{selectedRecipient == i ? (
						<div class="flex items-center">
							<img
								src={Recipients.recipients[i].image}
								class="flex-shrink-0 h-6 w-6 rounded-full"
							/>
							<span class="ml-3 block font-medium truncate">
								{Recipients.recipients[i].name}{" "}
								<span className="text-gray-400 font-normal mx-3">
									{Recipients.recipients[i].tag}
								</span>
							</span>

							<span class="absolute inset-y-0 right-0 flex items-center pr-4">
								<svg
									class="h-5 w-5"
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
						<div class="flex items-center">
							<img
								src={Recipients.recipients[i].image}
								class="flex-shrink-0 h-6 w-6 rounded-full"
							/>
							<span class="ml-3 block font-normal truncate">
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
		<section className="flex flex-col justify-center items-center">
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
			<br />
			<section className="grid grid-cols-2 max-w-7xl">
				<div className="flex flex-col">
					<h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-800">
						Fast and easy payouts.
					</h2>
					<p className="text-gray-400 text-base mt-4 max-w-4xl">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
						perspiciatis sed quia quibusdam accusantium placeat nisi facere
						natus consequuntur nam.
					</p>
				</div>
				<div className="flex flex-col p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-500">
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
							)}`}</p>
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
							<p className="items-start">{`${addSymbol(finalCurreny, "")} ${
								6.4 - 5.4
							}`}</p>
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
				</div>
			</section>
		</section>
	);
};

export default Product;
