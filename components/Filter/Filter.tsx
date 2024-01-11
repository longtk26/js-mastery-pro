"use client";

import { useState } from "react";

const tabs = ["all", "next 13", "frontend", "backend", "fullstack"];

const Filter = () => {
  const [active, setActive] = useState("");

  return (
    <ul
      className="text-white py-[48px] gap-2 mx-auto 
    flex w-full sm:max-w-2xl max-w-full overflow-auto no-scrollbar"
    >
      {tabs.map((tab) => (
        <li
          key={tab}
          onClick={() => setActive(tab)}
          className={`capitalize text-white-800 py-[10px] whitespace-nowrap rounded-lg px-8 cursor-pointer
          ${active === tab ? "gradient_blue-purple" : "bg-transparent"}
          `}
        >
          {tab}
        </li>
      ))}
    </ul>
  );
};

export default Filter;
