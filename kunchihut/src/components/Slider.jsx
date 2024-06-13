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

function Slider() {
  return (
    <div className="slider">
      <div className="slide-track gap-6 items-center ">
        <div className="slide">
          <img
            className="  h-[300px] max-w-full "
            src={img1}
            alt=""
          />
        </div>
        <div className="slide">
          <img className=" h-[300px] max-w-full " src={img2} alt="" />
        </div>
        <div className="slide">
          <img
            className="  h-[300px] max-w-full "
            src={img3}
            alt=""
          />
        </div>
        <div className="slide">
          <img className="h-[300px] max-w-full " src={img4} alt="" />
        </div>
        <div className="slide">
          <img className="h-[300px] max-w-full " src={img5} alt="" />
        </div>
        <div className="slide">
          <img className="h-[300px] max-w-full " src={img6} alt="" />
        </div>
        <div className="slide">
          <img className="h-[300px] max-w-full " src={img7} alt="" />
        </div>
        <div className="slide">
          <img className="h-[300px] max-w-full " src={img8} alt="" />
        </div>
        <div className="slide">
          <img className="h-[300px] max-w-full " src={img9} alt="" />
        </div>
        <div className="slide">
          <img className="h-[300px] max-w-full " src={img10} alt="" />
        </div>
        <div className="slide">
          <img className="h-[300px] max-w-full " src={img11} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Slider;
