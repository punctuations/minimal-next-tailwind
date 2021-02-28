import Head from "next/head";
import Loader from "../components/assets/loader";
import Nav from "../components/assets/navigation";
import Hero from "../components/assets/hero";
import LogoClouds from "../components/assets/logoClouds";
import Example from "../components/assets/example";
import Team from "../components/assets/team";
import Features from "../components/assets/features";
import Cta from "../components/assets/cta";
import Footer from "../components/assets/footer";
import Copyright from "../components/assets/copyright";

export default function Home() {
	return (
		<>
			<Head>
				<title>Next - Minimal - Tailwind</title>
			</Head>
			<Loader />

			<Nav logo="/favicon.ico" name="Lorem Ipsum" />
			<div className="mx-12">
				<div className="flex flex-col justify-center items-center">
					<Hero />
					<LogoClouds />
					<br />
					<Example />
					<br />
					<Features />
					<br />
					<Team />
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
