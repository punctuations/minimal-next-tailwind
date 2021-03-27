import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { convert, addSymbol } from "current-currency";

import Recipients from "../../core/recipients.json";

const ProductForm = () => {
  const [select, setSelect] = useState(false);
  const [selectedRecipient, setRecipient] = useState(0);
  const [currency, setCurrency] = useState("USD");
  const [finalCurrency, setFinalCurrency] = useState("CAD");
  const [amount, setAmount] = useState(0.0);
  const [finalAmount, setFinalAmount] = useState(0.0);

  convert(currency, amount, finalCurrency)
    .then((res) => res.amount)
    .then((data) => setFinalAmount(data));

  const recipient = [];

  const [modalVisible, setModalState] = useState(false);

  {
    for (const i in Recipients.recipients) {
      recipient.push(
        <>
          {selectedRecipient == i ? (
            <div className="flex items-center">
              <img
                src={Recipients.recipients[i].image}
                className="flex-shrink-0 h-6 w-6 rounded-full"
              />
              <span className="ml-3 block font-medium truncate">
                {Recipients.recipients[i].name}{" "}
                <span className="text-gray-400 font-normal mx-3">
                  {Recipients.recipients[i].tag}
                </span>
              </span>

              <span className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </div>
          ) : (
            <div className="flex items-center">
              <img
                src={Recipients.recipients[i].image}
                className="flex-shrink-0 h-6 w-6 rounded-full"
              />
              <span className="ml-3 block font-normal truncate">
                {Recipients.recipients[i].name}{" "}
                <span className="text-gray-400 mx-3">
                  {Recipients.recipients[i].tag}
                </span>
              </span>
            </div>
          )}
        </>
      );
    }
  }

  return (
    <>
      <div className="relative flex flex-col p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-500 select-none">
        <h2 className="text-xl font-semibold text-gray-900">Send money</h2>
        <p className="text-gray-400 text-base max-w-4xl">
          Select a recipient and the amount you want to send
        </p>
        <div className="mt-2">
          <div>
            <label
              id="listbox-label"
              className="block text-sm font-medium text-gray-700"
            >
              Recipient
            </label>
            <div className="mt-1 relative">
              <button
                onClick={() => setSelect(!select)}
                type="button"
                aria-haspopup="listbox"
                aria-expanded="true"
                aria-labelledby="listbox-label"
                className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <span className="flex items-center">
                  <img
                    src={Recipients.recipients[selectedRecipient].image}
                    className="flex-shrink-0 h-6 w-6 rounded-full"
                    alt="recipient"
                  />
                  <span className="ml-3 block truncate">
                    {Recipients.recipients[selectedRecipient].name}
                    <span className="text-gray-400 mx-3">
                      {Recipients.recipients[selectedRecipient].tag}
                    </span>
                  </span>
                </span>
                <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
              <AnimatePresence>
                {select ? (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute z-40 mt-1 w-full rounded-md bg-white shadow-lg"
                  >
                    <ul
                      tabIndex="-1"
                      role="listbox"
                      aria-labelledby="listbox-label"
                      aria-activedescendant="listbox-item-3"
                      className="max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                    >
                      {recipient.map((content, i) => {
                        return (
                          <li
                            key={i}
                            onClick={() => setRecipient(i)}
                            id="listbox-item-0"
                            role="option"
                            className="text-gray-900 hover:text-white hover:bg-indigo-600 cursor-default select-none relative py-2 pl-3 pr-9"
                          >
                            {content}
                          </li>
                        );
                      })}
                    </ul>
                  </motion.div>
                ) : (
                  ""
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
        <hr className="my-6" />
        <div className="mt-2">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            How much do you want to send?
          </label>
          <div className="mt-1 relative rounded-md shadow-sm border border-gray-300">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">
                {addSymbol(currency, "")}
              </span>
            </div>
            <input
              onChange={() => setAmount(document.getElementById("price").value)}
              type="text"
              name="price"
              id="price"
              className="focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 py-2 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="currency" className="sr-only">
                Currency
              </label>
              <select
                onChange={() =>
                  setCurrency(document.getElementById("currency").value)
                }
                id="currency"
                name="currency"
                className="border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md rounded-l-none"
              >
                <option value="USD">USD</option>
                <option value="CAD">CAD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="relative flex w-full pl-3.5 py-2 pr-12 sm:text-sm border border-gray-300 rounded-md justify-between">
            <p>{`${addSymbol(currency, "")} ${((5.4 / 100) * amount).toFixed(
              2
            )} ${currency}`}</p>
            <p className="absolute right-0 pr-4 flex text-gray-400">
              Total Fees
            </p>
          </div>
        </div>
        <div className="mt-4">
          <p className="block text-sm font-medium text-gray-700">
            What recipient gets
          </p>
          <div className="relative flex w-full pl-3.5 py-2 pr-12 sm:text-sm border border-gray-300 rounded-md">
            <p className="items-start">{`${addSymbol(finalCurrency, "")} ${(
              finalAmount -
              (5.4 / 100) * amount
            ).toFixed(2)}`}</p>
            <div className="absolute inset-y-0 right-0 flex items-center">
              <select
                onChange={() =>
                  setFinalCurrency(
                    document.getElementById("final-currency").value
                  )
                }
                id="final-currency"
                name="final-currency"
                className="border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md rounded-l-none"
              >
                <option value="CAD">CAD</option>
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>
        </div>
        <hr className="mt-6" />
        <div className="flex flex-row-reverse mt-4 space-x-4 space-x-reverse">
          <button
            onClick={() => setModalState(true)}
            className="focus:outline-none focus:ring-2 focus:ring-indigo-300 bg-gray-900 text-white font-medium rounded-md p-2 px-6"
          >
            Continue
          </button>
          <button className="focus:outline-none focus:ring-2 focus:ring-indigo-300 text-gray-400 font-medium rounded-md p-2 px-6">
            Cancel
          </button>
        </div>
      </div>
      <AnimatePresence>
        {modalVisible ? (
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: {
                    duration: 0.4,
                    delay: 0.1,
                    ease: "backInOut",
                  },
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.4,
                    delay: 0.1,
                    ease: "backInOut",
                  },
                }}
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75" />
              </motion.div>

              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true"
              >
                &#8203;
              </span>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md sm:w-full"
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-headline"
              >
                <div className="bg-white px-3 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:flex-col sm:justify-center sm:items-center">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-green-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4">
                      <h3
                        className="text-lg leading-6 font-medium text-gray-900"
                        id="modal-headline"
                      >
                        Payment successful
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Temporibus excepturi dolore nulla! Aspernatur,
                          quibusdam facilis.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-col">
                  <button
                    onClick={() => setModalState(false)}
                    type="button"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-6 py-2 bg-purple-600 text-base font-medium text-white hover:bg-purplr-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Ok
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        ) : (
          ""
        )}
      </AnimatePresence>
    </>
  );
};

export default ProductForm;
