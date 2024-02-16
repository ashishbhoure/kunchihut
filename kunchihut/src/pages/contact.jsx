import React from "react";

function Contact() {
  return (
    <section className="p-10 xl:px-36 max-sm:p-5 ">
      <div className="heading ">
        <h1 className="text-blue-700 text-center font-bold text-2xl py-5">
          Contect to me !!
        </h1>
        <p className=" text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime
          placeat molestias quae quisquam explicabo sed dolor corporis. Nesciunt
          distinctio ipsam laboriosam itaque fugiat? Assumenda impedit quasi
          ducimus alias ad!
        </p>
      </div>
      <div className="form mt-10 p-5 rounded-md bg-slate-200">
        <form className="w-full mx-auto">
          <div className="flex flex-wrap gap-10  max-sm:gap-5 justify-between ">
            <div className="mb-5 w-[45%]">
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Full Name
              </label>
              <input
                type="name"
                id="name"
                placeholder="john jeck"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-5 w-[45%]">
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@email.com"
                required
              />
            </div>
          </div>
          <div className="mb-5">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Leave a message..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
