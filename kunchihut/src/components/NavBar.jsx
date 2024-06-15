import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#755139ff] p-4 h-[10vh] sticky top-0 shadow-lg z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* <div className="flex items-center"> */}
        <Link
          to="/"
          className="group flex items-center "
          onClick={() => setIsOpen(false)}
        >
          <img
            src="/path-to-your-logo.png"
            // alt="Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-[#f2edd7ff] group-hover:text-2xl text-xl font-bold">
            KunchiHut
          </span>
        </Link>
        {/* </div> */}
        <div className="md:hidden ">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[#f2edd7ff] focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`md:flex right-2 top-2  gap-0 md:items-center ${
            isOpen ? "absolute " : "hidden"
          }`}
          // onBlur={() => setIsOpen(false)}
        >
          <ul className="md:flex md:space-x-6 ">
            <li className="mt-0 md:mt-0 p-1 px-3 bg-[#755139ff] hover:bg-[#f2edd7ff] hover:text-[#755139ff] text-[#f2edd7ff] border-solid border-2 border-[#f2edd7ff]">
              <Link
                to="/project"
                className=""
                onClick={() => setIsOpen(!isOpen)}
                // onBlur={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li className="mt-0 md:mt-0 p-1 px-3 bg-[#755139ff] hover:bg-[#f2edd7ff] hover:text-[#755139ff] text-[#f2edd7ff] border-solid border-2 border-[#f2edd7ff]">
              <Link
                to="/contact"
                className=""
                onClick={() => setIsOpen(!isOpen)}
              >
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
