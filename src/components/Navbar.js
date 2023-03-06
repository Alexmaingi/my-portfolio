import React, { useState } from "react";
import { FaTimes, FaBars, FaCodiepie } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      to: "/",
      id: 0,
      link: "Home",
    },
    {
      to: "/",
      id: 1,
      link: "About",
    },
    {
      to: "/",
      id: 2,
      link: "Skills",
    },
    {
      to: "/",
      id: 3,
      link: "Projects",
    },
    {
      to: "/",
      id: 4,
      link: "Contacts",
    },
  ];

  return (
    <div className="w-full right-0 left-0 h-20 flex justify-between items-center text-black bg-white shadow-slate-200 md:fixed ">
      <div className="mx-6 md:mx-[10rem] flex items-center text-2xl font-[1000] text-[#27ae60]">
        <FaCodiepie /> Maingi
      </div>
      <div className="hidden md:flex items-center mr-[10rem]">
        {links.map(({ id, link }) => (
          <div
            className="px-6 text-xl text-[#192a56] font-medium hover:text-[#27ae60] cursor-pointer "
            key={id}
          >
            {link}
          </div>
        ))}
      </div>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-[#27ae60] md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer hover:text-[#27ae60] capitalize py-6 text-3xl"
            >
              <div onClick={() => setNav(!nav)} smooth duration={500}>
                {link}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
