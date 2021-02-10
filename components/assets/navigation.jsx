import Items from "../core/navItems";

const Nav = ({ name, logo }) => {
	return (
		<nav className="flex justify-between w-full rounded-lg">
			<div className="flex items-center">
				<img src={logo} />
				<h1 className="text-xl font-medium">{name}</h1>
			</div>

			<div className="flex items-center">
				{Items.map((content, i) => {
					return (
						<a className="cursor-pointer m-2 font-medium text-gray-400 hover:text-gray-700">
							{content}
						</a>
					);
				})}
			</div>

			<div className="flex items-center">
				<a className="cursor-pointer m-2 font-medium text-gray-400 hover:text-gray-700">
					Sign In
				</a>
				<a className="transition-all transform hover:scale-105 cursor-pointer m-2 p-2.5 bg-purple-500 rounded-lg text-white hover:">
					Sign In
				</a>
			</div>
		</nav>
	);
};

export default Nav;
