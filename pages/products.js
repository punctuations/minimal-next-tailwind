import Head from "next/head";
import Loader from "../components/assets/loader";
import Nav from "../components/assets/navigation";
import Cta from "../components/assets/cta";
import Footer from "../components/assets/footer";
import Copyright from "../components/assets/copyright";

import Product from "../components/assets/product";

export default function Products() {
	return (
		<>
			<Head>
				<title>Next - Minimal - Tailwind</title>
			</Head>
			<Loader />

			<Nav logo="/favicon.ico" name="Lorem Ipsum" />
			<div className="mx-12">
				<div className="flex flex-col justify-center items-center">
					<br />
					<Product />
				</div>
				<br />
				<hr />
				<br />
				<Cta />
				<br />
				<hr />
				<br />
				<Footer />
				<br />
				<Copyright />
			</div>
		</>
	);
}
