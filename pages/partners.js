import Head from "next/head";
import Loader from "../components/assets/loader";
import Nav from "../components/assets/navigation";
import Cta from '../components/assets/cta'
import Footer from "../components/assets/footer";
import Copyright from "../components/assets/copyright";

import Partner from "../components/assets/partners";

export default function Pricing() {
    return (
        <>
            <Head>
                <title>Next - Minimal - Tailwind</title>
            </Head>
            <Loader/>

            <Nav logo="/favicon.ico" name="Lorem Ipsum"/>
            <div className="mx-12 space-y-8">
                <div className="flex flex-col justify-center items-center">
                    <Partner/>
                </div>
                <br/>
                <hr/>
                <Cta/>
                <hr/>
                <Footer/>
                <Copyright/>
            </div>
        </>
    );
}
