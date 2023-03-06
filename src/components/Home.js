import React from "react";
import bgImg from "../assets/bgImg.png";
import { FaGithub } from "react-icons/fa";
import { CiInstagram, CiLinkedin, CiMail } from "react-icons/ci";

const Home = () => {
  return (
    <div className="w-full h-screen md:flex items-center right-0 left-0 justify-between bg-[#ffff]">
      <div className="ml-6 md:ml-[10rem] py-4 md:mt-[1rem] mr-6">
        <h3 className="text-3xl font-extrabold text-[#192a56]">Hello!</h3>
        <h3 className="text-4xl font-extrabold text-[#192a56]">
          I am Alex Maingi
        </h3>
        <p className="text-5xl font-bold text-[#192a56]">
          a Software Developer.
        </p>
        <p className="py-4 text-md max-w-[40rem] font-normal text-black">
          Passionate and reliable software developer with 1+ years of hands-on
          experience in UI/UX design, developing, data modelling, managing
          Projects and implementing applications and solutions using a range of
          technologies and programming languages.
        </p>
        <div className="flex text-[#27ae60] items-center font-extrabold">
          <CiLinkedin size={35} className="rounded-full pr-4" />
          <FaGithub size={30} className="rounded-full pr-4" />
          <CiMail size={35} className="rounded-full pr-4" />
          <CiInstagram size={35} className="rounded-full pr-4" />
        </div>
      </div>

      <div className="">
        <img
          className="ml-[5rem] md:mr-[13rem] mt-[1rem] max-w-[20rem] rounded-signature shadow-2xl shadow-[#27ae60] bg-[#27ae60] opacity-150"
          src={bgImg}
          alt="bg-imag"
        />
      </div>
    </div>
  );
};

export default Home;
