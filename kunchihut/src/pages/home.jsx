import React from "react";

import Slider from "../components/Slider";
import { profile, profile_2 } from "../assets/Images";
import ScrollAnimation from "../components/ScrollAnimation";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <section className="xl:mx-32 p-5  max-sm:mx-0 ">
      <Helmet>
        <title>HOME - Mahima Singh</title>
        <meta name="description" content="Helmet application" />
      </Helmet>

      {/* <ScrollAnimation> */}
      <div className="flex flex-row max-sm:flex-col gap-5 justify-center py-12 max-sm:py-2 ">
        <div className="w-full flex justify-center self-center">
          <img
            className="h-96 w-96 drop-shadow-2xl "
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
            <button className="w-full hover:bg-[#755139ff] bg-[#f2edd7ff] hover:text-[#f2edd7ff] text-[#755139ff] border-solid border-2 border-[#755139ff] p-3 mt-5">
              Resume
            </button>
          </div>
        </div>
      </div>

      {/* </ScrollAnimation> */}
      {/* <ScrollAnimation> */}
      <Slider />
      {/* </ScrollAnimation> */}
    </section>
  );
}

export default Home;
