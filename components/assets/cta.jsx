const CTA = () => {
	return (
		<section className="flex flex-row justify-between items-center mx-12">
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
					className="hover:scale-105 transform duration-500 cursor-pointer bg-white text-purple-500 shadow-md font-medium p-3 px-8 rounded-md"
				>
					Learn more
				</a>
			</div>
		</section>
	);
};

export default CTA;
