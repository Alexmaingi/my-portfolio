import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress, SiPostgresql } from "react-icons/si";
import { TbApiApp, TbBrandFirebase, TbBrandZapier } from "react-icons/tb";

const Back = () => {
  const [open, setOpen] = useState(false);

  const skills = [
    {
      id: 0,
      name: "Node Js",
      icon: <FaNodeJs size={20} />,
      style: "ml-[6rem] text-[#27ae60]",
    },

    {
      id: 1,
      name: "Express framework",
      icon: <SiExpress size={20} />,
      style: "ml-[0.9rem] text-[#27ae60]",
    },
    {
      id: 2,
      name: "Postgress SQL",
      icon: <SiPostgresql size={20} />,
      style: "ml-[3rem] text-[#27ae60]",
    },
    {
      id: 3,
      name: "Knex",
      icon: <TbBrandZapier size={20} />,
      style: "ml-[7.4rem] text-[#27ae60]",
    },
    {
      id: 4,
      name: "Firebase",
      icon: <TbBrandFirebase size={20} />,
      style: "ml-[6rem] text-[#27ae60]",
    },
    {
      id: 5,
      name: "Rapid APIs",
      icon: <TbApiApp size={20} />,
      style: "ml-[4.8rem] text-[#27ae60]",
    },
  ];

  return (
    <div className="">
      <div className="w-[26rem] h-16 flex items-center bg-slate-100 cursor-pointer rounded-drop ml-6 md:ml-[10rem] mb-1 ">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="text-xl font-bold flex items-center text-[#192a56] cursor-pointer px-4"
        >
          Back End skills
          {open ? (
            <AiFillCaretUp className="ml-[12.8rem]" />
          ) : (
            <AiFillCaretDown className="ml-[12.8rem]" />
          )}
        </div>
      </div>
      <div>
        {open && (
          <ul className="w-[26rem] h-[9rem] bg-slate-100 rounded-drop ml-6 md:ml-[10rem]">
            <div className="grid grid-cols-2">
              {skills.map(({ name, id, icon, style }) => (
                <li
                  key={id}
                  className="text-[#192a56] text-base font-medium py-2 px-3 flex"
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

export default Back;
