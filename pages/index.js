import Head from "next/head";
import Loader from "../components/assets/loader";
import Nav from "../components/assets/navigation";

export default function Home() {
	return (
		<>
			<Loader />

			<Nav logo="/favicon.ico" name="Lorem Ipsum" />

			<div className="absolute flex justify-center items-center overflow-x-hidden">
				<img
					className="rounded-lg transform scale-90"
					src="https://picsum.photos/1920/1080"
				></img>
			</div>
		</>
	);
}
