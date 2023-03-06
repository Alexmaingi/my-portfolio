import React from "react";
import Back from "./skills/Back";
import Design from "./skills/Design";
import Front from "./skills/Front";
import Others from "./skills/Others";

const Skills = () => {
  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center mt-[8rem]">
        <h1 className="text-4xl font-extrabold text-[#192a56]">Skills</h1>
        <p className="text-3xl font-medium text-[#192a56]">
          Thes are my skills
        </p>
      </div>
      <div className="mb-6 md:grid grid-cols-2 mt-6">
        <div className="mb-4 md:ml-[12rem]">
          <Front />
        </div>
        <div className="mb-4 md:ml-[-8.5rem]">
          <Back />
        </div>
        <div className="mb-4 md:ml-[12rem]">
          <Others />
        </div>
        <div className="md:ml-[-8.5rem]">
          <Design />
        </div>
      </div>
    </div>
  );
};

export default Skills;
