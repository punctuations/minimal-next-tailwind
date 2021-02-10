import { motion } from "framer-motion";
import Items from "../core/navItems";

const Nav = ({ name, logo }) => {
	return (
		<motion.nav className="flex justify-between w-full rounded-lg">
			<a className="flex items-center select-none cursor-pointer" href="/">
				<img src={logo} />
				<h1 className="text-xl font-medium">{name}</h1>
			</a>

			<div className="flex items-center">
				{Items.map((content, i) => {
					return (
						<a className="cursor-pointer font-medium m-2 text-gray-400 hover:text-gray-700">
							{content}
						</a>
					);
				})}
			</div>

			<div className="flex items-center">
				<a className="cursor-pointer font-medium m-2 text-gray-400 hover:text-gray-700">
					Sign In
				</a>
				<a className="transition-all transform hover:scale-105 m-2 cursor-pointer p-2.5 bg-purple-500 rounded-lg text-white hover:">
					Sign In
				</a>
			</div>
		</motion.nav>
	);
};

export default Nav;
