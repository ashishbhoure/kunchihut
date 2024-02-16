import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional - smooth scrolling animation
    });
  };
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" onClick={scrollToTop} className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                KUNCHI HUT
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    to="project"
                    onClick={scrollToTop}
                    className="hover:underline"
                  >
                    Project
                  </Link>
                </li>
                <li>
                  <Link
                    to="contact"
                    onClick={scrollToTop}
                    className="hover:underline"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link to="#" className="hover:underline ">
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-500 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between ">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <Link to="/" className="hover:underline">
              Kunchi Hut
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 max-sm:justify-center sm:mt-0">
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              <img
                className="w-5 h-5 grayscale hover:grayscale-0"
                src="data:image/jpeg;base64,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"
              />
              {/* <span className="sr-only">Facebook page</span> */}
            </Link>
            <Link
              to="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <img
                className="w-5 h-5 grayscale hover:grayscale-0"
                src="data:image/jpeg;base64,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"
              />
              {/* <span className="sr-only">Facebook page</span> */}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
