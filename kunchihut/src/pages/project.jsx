import React from "react";

import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
} from "../assets/Images";
import ScrollAnimation from "../components/ScrollAnimation";
import { Helmet } from "react-helmet";

function Project() {
  const image = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];
  return (
    <section className="p-10 xl:px-36 max-sm:p-5 ">
      <Helmet>
        <title>PROJECT - Mahima Singh</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      <ScrollAnimation>
        <div className="heading ">
          <h1 className="text-[#f2edd7ff] text-center font-bold text-2xl py-5">
            My Projects !!
          </h1>
          <p className=" text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime
            placeat molestias quae quisquam explicabo sed dolor corporis.
            Nesciunt distinctio ipsam laboriosam itaque fugiat? Assumenda
            impedit quasi ducimus alias ad!
          </p>
        </div>
        <ScrollAnimation>
          <div className="max-xl:py-20 py-10 max-sm:p-5 flex gap-8 max-sm:gap-4 flex-wrap justify-center">
            {image.map((i) => (
              <div className=" transform max-sm:flex-auto h-40 w-40 sm:h-64 sm:w-64  transition duration-300 hover:scale-105">
                <div className="animate-pulse shadow-3d flex h-full object-cover overflow-hidden justify-center items-center">
                  <img src={i} alt="" />
                </div>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </ScrollAnimation>
    </section>
  );
}

export default Project;
