import React from "react";
import { FiMail, FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";

const Contact = () => {
  const conts = [
    {
      id: 0,
      icon: <FiPhoneCall size={20} className="text-[#27ae60]" />,
      text: "+254794240566",
    },
    {
      id: 1,
      icon: <FiMail size={20} className="text-[#27ae60]" />,
      text: "maingialex18@gmail.com",
    },
    {
      id: 2,
      icon: <GoLocation size={20} className="text-[#27ae60]" />,
      text: "Nairobi, Kenya",
    },
  ];

  return (
    <div>
      <div className="md:mr-[10rem] w-full flex flex-col items-center justify-center mt-[5rem] md:mt-[10rem] ">
        <h2 className="text-4xl font-bold text-[#192a56] px-2">Contact Me</h2>
        <p className="text-3xl font-medium mb-3 text-[#192a56] px-2">
          Lets connect.
        </p>
      </div>
      <div className="md:flex items center justify-evenly w-full">
        <div className="md:mt-[6rem] md:ml-[10rem] mt-[3rem]">
          <div>
            {conts.map(({ id, icon, text }) => (
              <div className=" flex items-center ml-[5rem] py-3 md:py-6  ">
                {icon}{" "}
                <h1 className="text-xl text-[#192a56] font-bold ml-6">
                  {text}
                </h1>
              </div>
            ))}
          </div>
        </div>
        <div className="md:border-2 ml-[8rem] border-[#192a56] md:mt-[5rem] md:h-[18rem]"></div>
        <div className="md:mt-[3rem] md:mr-[10rem] mb-10">
          <form className="flex flex-col">
            <input
              type="text"
              className="border-2 border-[#192a56] my-5 h-14 md:w-[30rem] rounded-drop mx-8 p-3"
              placeholder="Enter your fullname"
            />
            <input
              type="email"
              className="border-2 border-[#192a56] mb-5 h-14 rounded-drop p-3 mx-8"
              placeholder="Enter your email"
            />
            <textarea
              placeholder="Enter your message"
              className="border-2 border-[#192a56] mb-5 h-24 rounded-drop p-3 mx-8"
            ></textarea>
            <button className=" h-11 mx-8 rounded-movie bg-[#27ae60] text-[#192a56] font-bold text-lg">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
