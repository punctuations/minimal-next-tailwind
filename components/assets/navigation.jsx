import { motion } from "framer-motion";
import Items from "../core/navItems";

const Nav = ({ name, logo }) => {
	return (
		<motion.nav className="flex justify-between w-full rounded-lg space-y-4">
			<a
				className="flex items-center select-none cursor-pointer opacity-75 hover:opacity-100 transition-opacity duration-500"
				href="/"
			>
				<img src={logo} />
				<h1 className="text-xl font-medium">{name}</h1>
			</a>

			<div className="flex items-center space-x-4">
				{Items.map((content, i) => {
					return (
						<a
							key={i}
							className="cursor-pointer font-medium text-gray-400 hover:text-gray-700 transition-colors duration-500"
						>
							{content}
						</a>
					);
				})}
			</div>

			<div className="flex items-center space-x-4">
				<a className="cursor-pointer font-medium text-gray-400 hover:text-gray-700 transition-colors duration-500">
					Sign In
				</a>
				<a className="transform hover:scale-105 cursor-pointer p-2.5 bg-purple-500 rounded-lg text-white transition-all duration-500">
					Sign Up
				</a>
			</div>
		</motion.nav>
	);
};

export default Nav;
