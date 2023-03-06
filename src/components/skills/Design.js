import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { FaFigma } from "react-icons/fa";
import { SiMiro } from "react-icons/si";

const Design = () => {
  const [open, setOpen] = useState(false);

  const skills = [
    {
      id: 0,
      name: "Figma(For high fidelity designs)",
      icon: <FaFigma size={20} />,
      style: "ml-[6rem] text-[#27ae60]",
    },

    {
      id: 1,
      name: "Miro(For low fidelity designs)",
      icon: <SiMiro size={20} />,
      style: "ml-[7rem] text-[#27ae60]",
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
          Design skills
          {open ? (
            <AiFillCaretUp className="ml-[14rem]" />
          ) : (
            <AiFillCaretDown className="ml-[14rem]" />
          )}
        </div>
      </div>
      <div>
        {open && (
          <ul className="w-[26rem] h-[6rem] bg-slate-100 rounded-drop ml-6 md:ml-[10rem]">
            <div className="grid-2">
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

export default Design;
