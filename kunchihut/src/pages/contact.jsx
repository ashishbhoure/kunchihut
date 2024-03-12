import React, { useState } from "react";
import ScrollAnimation from "../components/ScrollAnimation";
import { Helmet } from "react-helmet";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);

    // emailjs
    //   .send(
    //     import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
    //     import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
    //     {
    //       from_name: form.name,
    //       to_name: "Ashish",
    //       from_email: form.email,
    //       to_email: "ashishbhoure@gmail.com",
    //       message: form.message,
    //     },
    //     import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    //   )
    //   .then(() => {
    //     setIsLoading(false);
    //     showAlert({
    //       show: true,
    //       text: "Message sent successfully!",
    //       type: "success",
    //     });
    //     setTimeout(() => {
    //       hideAlert();
    //       setCurrentAnimation("idle");
    //       setForm({ name: "", email: "", message: "" });
    //     }, [3000]);
    //   })
    //   .catch((error) => {
    //     setIsLoading(false);
    //     setCurrentAnimation("idle");
    //     console.log("====================================");
    //     console.log(error);
    //     console.log("====================================");
    //     showAlert({
    //       show: true,
    //       text: `I didn't resive your message`,
    //       type: "danger",
    //     });
    //   });
  };

  return (
    <section className="p-10 xl:px-36 max-sm:p-5 ">
      <Helmet>
        <title>CONTACT - Mahima Singh</title>
        <meta name="description" content="Helmet application" />
    </Helmet>
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
        <ScrollAnimation>
          <form className="w-full mx-auto" onSubmit={handleSubmit}>
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
                  name="name"
                  id="name"
                  placeholder="john jeck"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                  onChange={handleChange}
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
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@email.com"
                  required
                  onChange={handleChange}
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
                name="message"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Leave a message..."
                onChange={handleChange}
              ></textarea>
            </div>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
