import React from "react";

import Slider from "../components/Slider";
import { profile } from "../assets/Images";

function Home() {
  return (
    <section className="xl:mx-32 p-5  max-sm:mx-0 ">
      <div className="flex flex-row max-sm:flex-col gap-5 justify-center py-12 max-sm:py-2 ">
        <div className="w-full ">
          <img className="h-96 w-96 rounded-2xl" src={profile} alt=" image " />
        </div>
        <div className="w-full self-center">
          <p className="text-justify ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            aliquam quidem ullam numquam tenetur quasi nostrum minima ipsa,
            magnam adipisci nobis ut explicabo sequi vel ipsum iste sint eos
            aut.
          </p>
          <button className="bg-blue-600 p-3 border mt-5"> Resume</button>
        </div>
      </div>

      <Slider />
    </section>
  );
}

export default Home;
