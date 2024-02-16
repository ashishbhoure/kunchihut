import React from "react";

function Project() {
  return (
    <section className="p-10 xl:px-36 max-sm:p-5 ">
      <div className="heading ">
        <h1 className="text-blue-700 text-center font-bold text-2xl py-5">
          My Projects
        </h1>
        <p className=" text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime
          placeat molestias quae quisquam explicabo sed dolor corporis. Nesciunt
          distinctio ipsam laboriosam itaque fugiat? Assumenda impedit quasi
          ducimus alias ad!
        </p>
      </div>
      <div className="max-xl:py-20 py-10 max-sm:p-5 flex gap-8 flex-wrap justify-center">
        <div className="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105">
          <div className="flex h-full justify-center items-center">
            <span className="font-bold text-gray-500">Scale</span>
          </div>
        </div>
        <div className="transform  rounded-xl h-40 w-40 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105">
          <div className="flex h-full justify-center items-center">
            <span className="font-bold text-gray-500">Scale</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
