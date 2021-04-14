const Contact = () => {
  const emailPlaceholder = [
    "elonmusk@tesla.com",
    "epicswagmaster@hotmail.com",
    "example@example.com",
    "johnny@appleseed.com",
    "coolguy@epic.com",
    "matt@dont-ping.me",
    "hotmale@hotmail.com",
    "krazygurl1881@aol.com",
    "support@myspace.com",
    "you@example.com",
  ];

  const fNamePlaceholder = [
    "Johnny",
    "Johnathon",
    "John",
    "Joe",
    "Jane",
    "Foo",
    "Bar",
    "Alice",
    "Bob",
  ];

  const lNamePlaceholder = ["Appleseed", "Foo", "Bar", "Doe", "Schmoe"];

  return (
    <section className="flex flex-col justify-center items-center space-y-6">
      <form className="grid grid-cols-2 grid-rows-6 gap-x-5 gap-y-3">
        <div className="focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 flex flex-row text-gray-400 focus-within:text-gray-600 transition-colors duration-200 rounded-md relative w-full px-3 py-2 border border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline-block mr-2"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          <input
            id="f-name"
            name="First name"
            type="text"
            autoComplete="given-name"
            required
            className="appearance-none w-full inline-block placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
            placeholder={
              fNamePlaceholder[
                Math.floor(Math.random() * fNamePlaceholder.length)
              ]
            }
          />
        </div>

        <div className="focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 flex flex-row text-gray-400 focus-within:text-gray-600 transition-colors duration-200 rounded-md relative w-full px-3 py-2 border border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline-block mr-2"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          <input
            id="l-name"
            name="Last name"
            type="text"
            autoComplete="family-name"
            required
            className="appearance-none w-full inline-block placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
            placeholder={
              lNamePlaceholder[
                Math.floor(Math.random() * lNamePlaceholder.length)
              ]
            }
          />
        </div>

        <div className="col-span-2 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 flex flex-row text-gray-400 focus-within:text-gray-600 transition-colors duration-200 rounded-md relative w-full px-3 py-2 border border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline-block mr-2"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <input
            id="email-address"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="appearance-none w-full inline-block placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
            placeholder={
              emailPlaceholder[
                Math.floor(Math.random() * emailPlaceholder.length)
              ]
            }
          />
        </div>

        <div className="col-span-2 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 flex flex-row text-gray-400 focus-within:text-gray-600 transition-colors duration-200 rounded-md relative w-full px-3 py-2 border border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline-block mr-2"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <input
            id="phone"
            name="Phone number"
            type="tel"
            autoComplete="tel-national"
            className="appearance-none w-full inline-block placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
            placeholder="+1 234-567-8901"
            pattern="+[0-9]{1} [0-9]{3}-[0-9]{3}-[0-9]{4}"
          />
        </div>

        <br />

        <div className="col-span-2 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 flex flex-row text-gray-400 focus-within:text-gray-600 transition-colors duration-200 rounded-md relative w-full px-3 py-2 border border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline-block mr-2"
          >
            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
            <path
              fillRule="evenodd"
              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
              clipRule="evenodd"
            />
          </svg>
          <input
            id="subject"
            name="Subject"
            type="text"
            required
            className="appearance-none w-full inline-block placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
            placeholder="Subject"
          />
        </div>

        <div className="col-span-2 row-span-6 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-indigo-500 flex flex-row text-gray-400 focus-within:text-gray-600 transition-colors duration-200 rounded-md relative w-full px-3 py-2 border border-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="currentColor"
            className="inline-block absolute bottom-0 mb-2 mr-2"
          >
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          <textarea
            id="body"
            name="Body"
            maxLength={500}
            spellCheck={true}
            required
            className="resize-none appearance-none w-full h-full inline-block placeholder-gray-500 text-gray-900 focus:outline-none focus:z-10 sm:text-sm"
            placeholder="Body (max 500 char.)"
          />
        </div>
        <br />
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
