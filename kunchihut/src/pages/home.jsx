import React from "react";

import Slider from "../components/Slider";
import { profile, profile_2 } from "../assets/Images";
import ScrollAnimation from "../components/ScrollAnimation";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <section className="xl:mx-32 p-5 mb-3  max-sm:mx-0 ">
      <Helmet>
        <title>HOME - Mahima Singh</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      {/* <ScrollAnimation> */}
      <div className="flex h-[90vh] flex-row max-sm:flex-col gap-5 mb-10 justify-center max-sm:py-2 ">
        <div className="w-full flex justify-center self-center mt-10">
          <img
            className="h-full w-auto drop-shadow-2xl z-10 "
            src={profile}
            alt="profile image"
          />
        </div>
        <div className="w-full self-center ">
          <p className="text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            aliquam quidem ullam numquam tenetur quasi nostrum minima ipsa,
            magnam adipisci nobis ut explicabo sequi vel ipsum iste sint eos
            aut.
          </p>
          <div className="flex justify-center ">
            <button className="w-full hover:bg-[#f2edd7ff] bg-[#755139ff] hover:text-[#755139ff] text-[#f2edd7ff] border-solid border-2 border-[#f2edd7ff] p-3 mt-5">
              Resume
            </button>
          </div>
        </div>
      </div>

      {/* </ScrollAnimation> */}
      {/* <ScrollAnimation> */}
      <div className="h-[100vh]  px-2 max-sm:h-auto max-sm:p-2 max-sm:py-5 align-middle justify-center flex bg-[#f2edd7ff]">
        <Slider />
      </div>
      {/* </ScrollAnimation> */}
    </section>
  );
}

export default Home;
