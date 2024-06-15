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
        <h1 className="text-[#f2edd7ff] text-center font-bold text-2xl py-5">
          Contect to me !!
        </h1>
        <p className=" text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime
          placeat molestias quae quisquam explicabo sed dolor corporis. Nesciunt
          distinctio ipsam laboriosam itaque fugiat? Assumenda impedit quasi
          ducimus alias ad!
        </p>
      </div>
      <div className="form mt-10 p-5  bg-[#f2edd7ff]">
        <ScrollAnimation>
          <form className="w-full mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-wrap gap-10  max-sm:gap-5 justify-between ">
              <div className="mb-5 w-[45%]">
                <label
                  for="name"
                  className="block mb-2  font-bold text-[#755139]"
                >
                  Full Name
                </label>
                <input
                  type="name"
                  name="name"
                  id="name"
                  placeholder="FirstName LatsName"
                  className="bg-[#755139] placeholder-[#f2edd7a4] font-bold  text-[#f2edd7ff]  block w-full p-2.5 "
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="mb-5 w-[45%]">
                <label
                  for="email"
                  className="block mb-2  font-bold text-[#755139]"
                >
                  Your email
                </label>
                <input
                  type="name"
                  name="email"
                  id="email"
                  className="bg-[#755139] font-bold placeholder-[#f2edd7a4] text-[#f2edd7ff]  block w-full p-2.5 "
                  placeholder="name@email.com"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="mb-5">
              <label for="message" class="block mb-2  font-bold text-[#755139]">
                Your message
              </label>
              <textarea
                id="message"
                rows="4"
                name="message"
                className="bg-[#755139] placeholder-[#f2edd7a4] font-bold border-0 text-[#f2edd7ff]  block w-full p-2.5 "
                placeholder="Leave a message..."
                onChange={handleChange}
              ></textarea>
            </div>

            <div
              className="flex
             justify-center"
            >
              <button
                type="submit"
                className="w-[50%] font-extrabold hover:bg-[#755139]  hover:text-[#f2edd7ff]  text-[#755139] border-solid border-2 border-[#755139] p-3 mt-5"
              >
                Submit
              </button>
            </div>
          </form>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default Contact;
