import Head from "next/head";
import { useState, useEffect } from "react";

export default function Login() {
	const [validEmail, setValidEmailState] = useState(null);
	const [validPassword, setValidPasswordState] = useState(null);

	const [canSubmit, setSubmitState] = useState(null);

	const [emailPlaceholder, setEmailPlaceholder] = useState(null);

	useEffect(() => {
		setEmailPlaceholder(
			placeholders[Math.floor(Math.random() * placeholders.length)]
		);
	}, []);

	const placeholders = [
		"elonmusk@tesla.com",
		"epicswagmaster@hotmail.com",
		"example@example.com",
		"johnny@appleseed.com",
		"coolguy@epic.com",
		"matt@dont-ping.me",
		"hotmale@hotmail.com",
		"krazygurl1881@aol.com",
		"support@myspace.com",
		"you@example.com",
	];

	function validateEmail(email) {
		if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setValidEmailState(true);
		} else {
			setValidEmailState(false);
		}
	}

	function validatePassword(password) {
		if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(password)) {
			setValidPasswordState(true);
		} else {
			setValidPasswordState(false);
		}
	}

	function checkSubmit() {
		if (validateEmail && validatePassword) {
			setSubmitState(true);
		} else {
			setSubmitState(false);
		}
	}

	function submissionRequirements() {
		switch (canSubmit) {
			case "true":
				break;
			case "false":
				return (
					<p className="flex justify-center items-center font-medium text-lg text-red-400">
						Please recheck your input fields.
					</p>
				);
			default:
				break;
		}
	}

	return (
		<>
			<Head>
				<title>Login to Next - Minimal - Tailwind</title>
			</Head>

			<div
				className="absolute h-full w-full bg-no-repeat bg-cover bg-center"
				style={{ backgroundImage: "url(https://picsum.photos/2000/1000)" }}
			>
				<div className="bg-white flex flex-col justify-center items-center w-5/12 h-full select-none">
					<div className="flex flex-col space-y-6">
						<a href="/">
							<img src="/vercel.svg" width={125} height={125} />
						</a>

						<header className="space-y-2">
							<h1 className="font-bold text-4xl antialiased text-gray-900">
								Sign in to your account
							</h1>
							<p className="text-gray-400 text-base">
								Or{" "}
								<a
									href="#"
									className="text-indigo-600 hover:text-indigo-500 font-medium"
								>
									start your 14-day free trial
								</a>
							</p>
						</header>
						<div className="text-gray-600 flex flex-col space-y-1">
							<p className="font-medium">Sign in with</p>
							<div className="flex flex-row w-full justify-between">
								<button className="group flex justify-center items-center text-gray-500 border border-gray-300 shadow-sm p-1 px-10 rounded-md">
									<svg
										width={25}
										height={25}
										fill="currentColor"
										strokeWidth={2}
										className="duration-500 transition-opacity opacity-100 group-hover:opacity-75"
										viewBox="-10 -10 164 164"
									>
										<title>Discord</title>
										<path d="M107.75 125.001s-4.5-5.375-8.25-10.125c16.375-4.625 22.625-14.875 22.625-14.875-5.125 3.375-10 5.75-14.375 7.375-6.25 2.625-12.25 4.375-18.125 5.375-12 2.25-23 1.625-32.375-.125-7.125-1.375-13.25-3.375-18.375-5.375-2.875-1.125-6-2.5-9.125-4.25-.375-.25-.75-.375-1.125-.625-.25-.125-.375-.25-.5-.375-2.25-1.25-3.5-2.125-3.5-2.125s6 10 21.875 14.75c-3.75 4.75-8.375 10.375-8.375 10.375-27.625-.875-38.125-19-38.125-19 0-40.25 18-72.875 18-72.875 18-13.5 35.125-13.125 35.125-13.125l1.25 1.5c-22.5 6.5-32.875 16.375-32.875 16.375s2.75-1.5 7.375-3.625c13.375-5.875 24-7.5 28.375-7.875.75-.125 1.375-.25 2.125-.25 7.625-1 16.25-1.25 25.25-.25 11.875 1.375 24.625 4.875 37.625 12 0 0-9.875-9.375-31.125-15.875l1.75-2S110 19.626 128 33.126c0 0 18 32.625 18 72.875 0 0-10.625 18.125-38.25 19zM49.625 66.626c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875.125-7.625-5.625-13.875-12.75-13.875zm45.625 0c-7.125 0-12.75 6.25-12.75 13.875s5.75 13.875 12.75 13.875c7.125 0 12.75-6.25 12.75-13.875s-5.625-13.875-12.75-13.875z" />
									</svg>
								</button>
								<button className="group flex justify-center items-center text-gray-500 border border-gray-300 shadow-sm p-1 px-10 rounded-md">
									<svg
										width={22}
										height={22}
										fill="currentColor"
										strokeWidth={2}
										className="duration-500 transition-opacity opacity-100 group-hover:opacity-75"
										viewBox="-2.5 -2.5 24 24"
									>
										<title>Twitter</title>
										<path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
									</svg>
								</button>
								<button className="group flex justify-center items-center text-gray-500 border border-gray-300 shadow-sm p-1 px-10 rounded-md">
									<svg
										width={24}
										height={24}
										fill="currentColor"
										strokeWidth={2}
										className="duration-500 transition-opacity opacity-100 group-hover:opacity-75"
										viewBox="0 0 24 24"
									>
										<title>GitHub</title>
										<path d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.606 9.606 0 0112 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48C19.137 20.107 22 16.373 22 11.969 22 6.463 17.522 2 12 2z"></path>
									</svg>
								</button>
							</div>
						</div>
						<br />
						<h2 className="w-full text-center border-b border-gray-300 mt-2.5 mb-5 leading-1">
							<span className="bg-white text-gray-500 px-3">
								Or continue with
							</span>
						</h2>
						<br />
						<form className="space-y-2" action="#" method="POST">
							<input type="hidden" name="remember" value="true" />
							{validEmail ? (
								<div className="focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 flex flex-row text-gray-400 focus-within:text-gray-600 transition-colors duration-200 rounded-md relative w-full px-3 py-2 border border-gray-300">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={20}
										height={20}
										viewBox="0 0 20 20"
										fill="currentColor"
										className="inline-block mr-2"
									>
										<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
										<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
									</svg>
									<input
										onChange={() =>
											validateEmail(
												document.getElementById("email-address").value
											)
										}
										id="email-address"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="appearance-none w-full inline-block placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
										placeholder={emailPlaceholder}
									/>
								</div>
							) : (
								<div className="focus-within:ring-2 focus-within:ring-red-300 focus-within:border-red-300 flex flex-row text-gray-400 focus-within:text-gray-600 transition-colors duration-200 rounded-md relative w-full px-3 py-2 border border-gray-300">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={20}
										height={20}
										viewBox="0 0 20 20"
										fill="currentColor"
										className="inline-block mr-2"
									>
										<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
										<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
									</svg>
									<input
										onChange={() =>
											validateEmail(
												document.getElementById("email-address").value
											)
										}
										id="email-address"
										name="email"
										type="email"
										autoComplete="email"
										required
										className="appearance-none w-full inline-block placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
										placeholder={emailPlaceholder}
									/>
								</div>
							)}

							{validPassword ? (
								<div className="focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 flex flex-row text-gray-400 focus-within:text-gray-600 transition-colors duration-200 rounded-md relative w-full px-3 py-2 border border-gray-300">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={20}
										height={20}
										viewBox="0 0 20 20"
										fill="currentColor"
										className="inline-block mr-2"
									>
										<path
											fillRule="evenodd"
											d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
											clipRule="evenodd"
										/>
										<path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
									</svg>
									<input
										onChange={() =>
											validatePassword(
												document.getElementById("password").value
											)
										}
										id="password"
										name="password"
										type="password"
										autoComplete="current-password"
										required
										className="appearance-none w-full inline-block placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
										placeholder="********"
									/>
								</div>
							) : (
								<div className="focus-within:ring-2 focus-within:ring-red-300 focus-within:border-red-300 flex flex-row text-gray-400 focus-within:text-gray-600 transition-colors duration-200 rounded-md relative w-full px-3 py-2 border border-gray-300">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width={20}
										height={20}
										viewBox="0 0 20 20"
										fill="currentColor"
										className="inline-block mr-2"
									>
										<path
											fillRule="evenodd"
											d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
											clipRule="evenodd"
										/>
										<path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
									</svg>
									<input
										onChange={() =>
											validatePassword(
												document.getElementById("password").value
											)
										}
										id="password"
										name="password"
										type="password"
										autoComplete="current-password"
										required
										className="appearance-none w-full inline-block placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
										placeholder="********"
									/>
								</div>
							)}
						</form>
						<div className="flex items-center justify-between">
							<div className="flex items-center">
								<input
									id="remember_me"
									name="remember_me"
									type="checkbox"
									className="form-checkbox transition-colors duration-150 h-4 w-4 appearance-none focus:ring checked:bg-indigo-600 checked:border-transparent border border-gray-300 rounded"
								/>
								<label
									htmlFor="remember_me"
									className="ml-2 block text-sm text-gray-900"
								>
									Remember me
								</label>
							</div>

							<div className="text-sm">
								<a
									href="#"
									className="font-medium text-indigo-600 hover:text-indigo-500"
								>
									Forgot your password?
								</a>
							</div>
						</div>
						<button
							type="submit"
							onClick={() => checkSubmit()}
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							<span className="absolute left-0 inset-y-0 flex items-center pl-3">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
								>
									<path
										fillRule="evenodd"
										d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
										clipRule="evenodd"
									/>
								</svg>
							</span>
							Sign in
						</button>
						{submissionRequirements()}
					</div>
				</div>
			</div>
		</>
	);
}
