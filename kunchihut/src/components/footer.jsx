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
    <footer className="bg-[#755139]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/" onClick={scrollToTop} className="flex items-center">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 me-3"
                alt="FlowBite Logo"
              />
              <span className="text-[#f2edd7ff] self-center text-2xl font-semibold whitespace-nowrap">
                MAHIMA SINGH
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-5 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-[#f2edd7ff] uppercase">
                Resources
              </h2>
              <ul className="text-[#f2edd7ff]  font-medium">
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
              <h2 className="mb-6 text-sm font-semibold text-[#f2edd7ff] uppercase">
                Follow us
              </h2>
              <ul className="text-[#f2edd7ff]  font-medium">
                <li className="mb-4 ">
                  <Link
                    to="https://www.instagram.com/kunchi_hut/"
                    className="hover:underline "
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:underline">
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-[#f2edd7ff] sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-[#f2edd7ff] sm:text-center">
            © 2024{" "}
            <Link
              to="/"
              onClick={scrollToTop}
              className="hover:underline hover:text-[#755139]"
            >
              Kunchi Hut
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 max-sm:justify-center sm:mt-0">
            <Link
              to="https://www.instagram.com/kunchi_hut/"
              className="text-[#f2edd7ff] hover:text-[#755139] dark:hover:text-[#f2edd7ff]"
            >
              <img
                className="w-5 h-5 grayscale hover:grayscale-0"
                src=""
                // src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUHBgj/xABHEAABAwMBAggKBwUHBQAAAAABAAIDBAURGiExBxITQVFhgZEiMjZxdJOhssHRFCNCUlSx0hdTYnKzJDNDZIKi4RUlRMLw/8QAGwEAAQUBAQAAAAAAAAAAAAAAAwABAgQFBgf/xAA7EQABAwICBAoJBAIDAAAAAAABAAIDBBEFEiExQZEGEyJRYXGBobHRFBUyNFJyweHwFiNCU2LxJDND/9oADAMBAAIRAxEAPwDcCcJJKsv1/t1hpPpFyn5MO2MY0Ze89AHOrNLSTVT8sQv4BEjjdIbNWV3zhOu9a4stTG2+HcHYD5CPORgdg7V1NNwfgjF5jmO4K/HRsHtaVy9TfLtVuLqi51khO8GZwHdnC1GUkEY5LAOxW2wsGpoUQvkftfI9x63EotgNistagMqJR2tSwFAlGa1LAUCUYNSgFAlGa1LAUCUZrUoBQJRw1LAQyUVrUpRRLJTXub4rnDzFNZMWgp6Ouq4jmKqnYf4ZCPioGJh1hDdTxO1tB7ArSh1dfKIt5OvklaPsTYeD37VXkoad/wDHcqU2EUc2tgB6NC7fTuvqSvkbT3JjaSY7GycbLHn/ANf/ALasmow58YzMNwuarsAlgGeE5hzbfuu0a4HGFmrASkklV6jvNPYrTNX1ILms2MYN73Hc0KzSUzqmURt/0ESKJ0rwxqwK8XOrvNwkra+Tjyv3D7LG8zWjmAXe01PHTRiOMWAW+yFrG5QoXFRy5EEaUGqJcitjSg1QLkZsaWGoZcitYlhqgXIzWJQaoFyM1iWAoFyM1iUAoFyMGJYCgSihtkaZSQSSRJrp0ColySJRzJI8qJKVl3/B5ql7Jo7RXycZjtlM932T90no6O5ZFdTA/uM7fNcrjuFgg1MQ0jWPr5rSgVkrkVj3CvdTW3xtuY48jRNHGGdhkcAT3DHtXWYHAI4DKdbvBdBhdPaLjDtXEcVbeZanFow1RzKYjSwxRLlMRq4sumLrettDSu5L99J4LO87+zKp1FfDT+2dPNtQZ6qCn/7Dp5tq7Cg4LZXMa6vubGuxtbBHkDtOPyWTJjnwM3rNfjgH/WzerKPgvtY/vK6td/KWD4Kscan2NHf5oXr2fY0d/mnf2ZWb8VcPWM/Qo+uZ+Yd/mkMfqR/Fvf5oDgzs34qv9Yz9CY4vPzDv81IcIaofxbuPmj/ZrZ/xVf6xn6E3rafmHf5qX6kqvhbuPmh+zWz/AIqv9Yz9Kb1tPzDv80v1JVfC3cfNA8Gto5quu7Xs/Sl62n5h3pxwkqvhb3+ajzcGVIR9RcZ2n+NjXfJSGKybWhEbwll/lGPzeqK58Hl2pQX0skNW0Dc0lru47ParDMSid7WhaVPwhpZDaQFveN65KeCWnldFURPikbvZI0tI7CrokDhcFbzJGSNzMNx0JpNmU0FHMnRtcWuDmOLXNOQ4HBBUSb60xFxYrdtMXP8A6vY6WtPjvbiQdDgcH2hc9NHxchavM6+m9FqXRbBq6jpWIX+Y1d8uE7sEvqHkEdHGOPYu1pRkgY0cwXWUsOWFg6AoHFRsysCJKDdqbMiCNd7oTRba1jLndmE05OYYD/ifxO/h/PzLDxHEiwmKI6dp8lg4piXFEwwnTtPN0Bag2NkbGsja1jGjAa0
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
