import React, { useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { TbBrandPowershell } from "react-icons/tb";
import { SiGnuemacs, SiJirasoftware } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { FaGitAlt, FaSlack } from "react-icons/fa";

const Others = () => {
  const [open, setOpen] = useState(false);

  const skills = [
    {
      id: 0,
      name: "Jira",
      icon: <SiJirasoftware size={20} />,
      style: "ml-[6rem] text-[#27ae60]",
    },

    {
      id: 1,
      name: "Github",
      icon: <VscGithub size={20} />,
      style: "ml-[3rem] text-[#27ae60]",
    },
    {
      id: 2,
      name: "Slack",
      icon: <FaSlack size={20} />,
      style: "ml-[5rem] text-[#27ae60]",
    },
    {
      id: 3,
      name: "Git",
      icon: <FaGitAlt size={20} />,
      style: "ml-[5rem] text-[#27ae60]",
    },
    {
      id: 4,
      name: "Shell",
      icon: <TbBrandPowershell size={20} />,
      style: "ml-[5rem] text-[#27ae60]",
    },
    {
      id: 5,
      name: "Emacs",
      icon: <SiGnuemacs size={20} />,
      style: "ml-[3.5rem] text-[#27ae60]",
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
          Other skills
          {open ? (
            <AiFillCaretUp className="ml-[14.5rem]" />
          ) : (
            <AiFillCaretDown className="ml-[14.5rem]" />
          )}
        </div>
      </div>
      <div>
        {open && (
          <ul className="w-[26rem] h-[10rem] bg-slate-100 mb-2 rounded-drop ml-6 md:ml-[10rem]">
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

export default Others;
