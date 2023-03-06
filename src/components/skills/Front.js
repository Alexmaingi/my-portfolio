import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import {
  TbBrandBootstrap,
  TbBrandCss3,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandVite,
} from "react-icons/tb";

const Front = () => {
  const [open, setOpen] = useState(false);

  const skills = [
    {
      id: 0,
      name: "HTML",
      icon: <TbBrandHtml5 size={20} />,
      style: "ml-[6rem] text-[#27ae60]",
    },

    {
      id: 1,
      name: "CSS",
      icon: <TbBrandCss3 size={20} />,
      style: "ml-[8rem] text-[#27ae60]",
    },
    {
      id: 2,
      name: "JavaScript",
      icon: <TbBrandJavascript size={20} />,
      style: "ml-[4rem] text-[#27ae60]",
    },
    {
      id: 3,
      name: "React Js",
      icon: <TbBrandReact size={20} />,
      style: "ml-[6rem] text-[#27ae60]",
    },
    {
      id: 4,
      name: "Vite",
      icon: <TbBrandVite size={20} />,
      style: "ml-[6.7rem] text-[#27ae60]",
    },
    {
      id: 5,
      name: "Tailwind CSS",
      icon: <TbBrandTailwind size={20} />,
      style: "ml-[3.5rem] text-[#27ae60]",
    },
    {
      id: 6,
      name: "Bootstrap",
      icon: <TbBrandBootstrap size={20} />,
      style: "ml-[4rem] text-[#27ae60]",
    },
  ];

  return (
    <div className="">
      <div className="w-[26rem] h-16 flex items-center bg-slate-100 rounded-drop ml-6 md:ml-[10rem] mb-1 cursor-pointer ">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="text-xl font-bold flex items-center text-[#192a56] cursor-pointer px-4"
        >
          Front End skills
          {open ? (
            <AiFillCaretUp className="ml-[12.6rem]" />
          ) : (
            <AiFillCaretDown className="ml-[12.6rem]" />
          )}
        </div>
      </div>
      <div>
        {open && (
          <ul className="w-[26rem] h-[10rem] mb-2 bg-slate-100 rounded-drop ml-6 md:ml-[10rem]">
            <div className="grid grid-cols-2">
              {skills.map(({ name, id, icon, style }) => (
                <li
                  key={id}
                  className="text-[#192a56] text-base font-me py-2 px-3 flex"
                >
                  {name}
                  <div className={style}>{icon}</div>
                </li>
              ))}
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Front;
