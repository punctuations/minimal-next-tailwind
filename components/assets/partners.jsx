import Prices from "./ui/prices";
import Features from "./features";
import Contact from "./ui/contact";

const Partners = () => {
  return (
    <section className="flex flex-col justify-center items-center space-y-8">
      <br />
      <header className="flex flex-col justify-center items-center space-y-3">
        <h1 className="text-4xl font-bold text-gray-900">
          Want to become a partner?
        </h1>
        <p className="text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nisi
          officiis ut.
        </p>
      </header>
      <br />
      <Contact />
    </section>
  );
};

export default Partners;
