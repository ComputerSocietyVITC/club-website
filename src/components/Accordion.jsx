import React, { useState } from "react";
import { items } from "../data/homeData";

const Accordion = () => {
  const [accord, setActiveAccord] = useState(-1);

  const toggleAccordion = (index) => {
    setActiveAccord(index === accord ? -1 : index);
  };

  return (
    <div className="flex justify-center w-full">
      <div className="text-white flex flex-col items-center w-full max-w-3xl">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className="m-5 bg-opacity-50 bg-gradient-to-r from-[#147199] to-[#55E0E0] mb-4 rounded-3xl cursor-pointer w-full overflow-hidden border-2 border-teal-300/[0.8] bg-gradient-to-r from-[#123838] to-[#0CB38]"
            >
              <div
                className="flex justify-between items-center px-6 py-4 bg-[#1a2e35]/90 focus:outline-none"
                onClick={() => toggleAccordion(index)}
                tabIndex={0}
                role="button"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    toggleAccordion(index);
                  }
                }}
              >
                <h3 className="font-bold text-xl uppercase tracking-wide">
                  {item.header}
                </h3>
                <div className="rounded-full p-1">
                  <img
                    src={"/public/chevrondown.svg"}
                    alt="arrow"
                    className={`select-none w-6 h-6 transition-transform duration-300 ${
                      accord === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              <div
                className={`overflow-hidden transition-max-height duration-300 ease-in-out ${
                  accord === index ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <p className="px-6 py-4 text-white bg-[#1a2e35]/90">
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
