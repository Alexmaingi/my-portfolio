import React from "react";
import about from "../assets/about.png";
import { BiDownload } from "react-icons/bi";

const About = () => {
  return (
    <div className="flex justify-evenly items-center">
      <div className="ml[10rem]">
        <img
          className="ml-[10rem] md:flex hidden max-w-[20rem] rounded-sign shadow-2xl shadow-[#27ae60] bg-[#27ae60] opacity-150"
          src={about}
          alt="bg-imag"
        />
      </div>
      <div className="md:mr-[10rem] w-full flex flex-col items-center justify-center ">
        <h2 className="text-4xl font-bold text-[#192a56] px-2">About Me</h2>
        <p className="text-3xl font-medium mb-3 text-[#192a56] px-2">
          Software Developer
        </p>
        <p className="md:px-2 mb-3 text-md max-w-[40rem] font-normal px-8 text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          accusantium, incidunt minus ad aspernatur saepe doloremque labore
          nostrum asperiores ut dignissimos magni! Suscipit tenetur commodi
          beatae totam neque numquam sint amet! Cupiditate autem recusandae
          aspernatur maiores accusamus cum corporis nesciunt iure provident.
          Suscipit voluptatem ipsa commodi quibusdam. Obcaecati quos ratione
          beatae qui soluta nam repellat facilis, maiores quas minus, inventore
          ipsa dignissimos natus iure consectetur non debitis repellendus
          excepturi harum illum provident nemo maxime! Tenetur aspernatur quia
          dolorum cum optio porro a asperiores. Vero amet pariatur delectus id.
          Officia nemo pariatur explicabo fuga impedit non sunt consectetur
          sequi facilis vero.
        </p>
        <button className="W-[10rem] flex items-center rounded-roun px-6 bg-[#27ae60] mb-3 font-bold py-0 md:py-1 text-[#192a56] md:ml-[-27rem]">
          Download CV <BiDownload size={35} className="px-2" />
        </button>
      </div>
    </div>
  );
};

export default About;
