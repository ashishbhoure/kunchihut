import React, { useState } from "react";
import {
  img1,
  img10,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
} from "../assets/Shoot";

export default function Gallery() {
  const [img, setImg] = useState(`${img1}`);
  return (
    <section>
      <div className=" flex max-sm:flex-col max-sm:gap-10 justify-center align-middle my-20 ">
        <div className="w-full flex align-middle justify-center object-fill">
          <img
            className="h-[80vh] w-[90%] max-sm:h-[60vh] object-cover max-sm:w-[100%] shadow-3d "
            src={img}
          />
        </div>
        <div className="shootImg w-full flex flex-wrap gap-5 h-[80vh] max-sm:h-auto overflow-y-scroll  justify-center">
          <img
            className="w-36 h-36 max-sm:w-16 max-sm:h-16 bg-cover shadow-3d "
            src={img1}
            onClick={() => setImg(img1)}
          />
          <img
            className="w-36 h-36 max-sm:w-16 max-sm:h-16 bg-cover shadow-3d "
            src={img2}
            onClick={() => setImg(img2)}
          />
          <img
            className="w-36 h-36 max-sm:w-16 max-sm:h-16 bg-cover shadow-3d "
            src={img3}
            onClick={() => setImg(img3)}
          />
          <img
            className="w-36 h-36 max-sm:w-16 max-sm:h-16 bg-cover shadow-3d "
            src={img4}
            onClick={() => setImg(img4)}
          />
          <img
            className="w-36 h-36 max-sm:w-16 max-sm:h-16 bg-cover shadow-3d "
            src={img5}
            onClick={() => setImg(img5)}
          />
          <img
            className="w-36 h-36 max-sm:w-16 max-sm:h-16 bg-cover shadow-3d "
            src={img6}
            onClick={() => setImg(img6)}
          />
          <img
            className="w-36 h-36 max-sm:w-16 max-sm:h-16 bg-cover shadow-3d "
            src={img7}
            onClick={() => setImg(img7)}
          />
          <img
            className="w-36 h-36 max-sm:w-16 max-sm:h-16 bg-cover shadow-3d "
            src={img8}
            onClick={() => setImg(img8)}
          />
          <img
            className="w-36 h-36 max-sm:w-16 max-sm:h-16 bg-cover shadow-3d "
            src={img9}
            onClick={() => setImg(img9)}
          />
          <img
            className="w-36 h-36 max-sm:w-16 max-sm:h-16 bg-cover shadow-3d "
            src={img10}
            onClick={() => setImg(img10)}
          />
        </div>
      </div>
    </section>
  );
}
