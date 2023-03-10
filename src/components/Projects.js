import React from "react";
import movieApp from "../assets/movieApp.png";
import cryptoApp from "../assets/cryptoApp.png";
import fastFoodCafe from "../assets/fastFoodCafe.png";
import todoApp from "../assets/todoApp.png";
import projectMotel from "../assets/projectMotel.png";

const Projects = () => {
  const project = [
    {
      id: 0,
      image: todoApp,
    },
    {
      id: 1,
      image: fastFoodCafe,
    },
    {
      id: 2,
      image: projectMotel,
    },
    {
      id: 3,
      image: cryptoApp,
    },
    {
      id: 4,
      image: movieApp,
    },
    {
      id: 5,
      image: movieApp,
    },
  ];

  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center top-0 right-0 mt-[10rem] ">
        <h1 className="text-4xl font-bold text-[#192a56]">Projects</h1>
        <p className="text-3xl font-medium mb-3 text-[#192a56]">
          These are some of my projects.
        </p>
      </div>
      <div className=" rounded-list mt-6 mr-0 md:mr-[10rem] ml-0 md:ml-[10rem] grid md:grid-cols-3 p-8 gap-4">
        {project.map(({ id, image }) => (
          <div key={id} className="">
            <div className="">
              <img
                src={image}
                alt="Project"
                className="rounded-movie border w-[80rem] md:w-[30rem] h-[20rem] md:h-[16rem] object-fill"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
