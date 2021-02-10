import Head from "next/head";
import Loader from "../components/assets/loader";
import Nav from "../components/assets/navigation";

export default function Home() {
	return (
		<>
			<Loader />

			<div className="mx-12">
				<Nav logo="/favicon.ico" name="Lorem Ipsum" />

				<div className="flex justify-center items-center">
					<img
						className="rounded-xl transform scale-95 select-none"
						src="https://picsum.photos/1500/650"
					/>
				</div>
			</div>
		</>
	);
}
