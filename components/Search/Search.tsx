"use client";

import Image from "next/image";
import { Input } from "../ui/input";
import { useState } from "react";

const Search = () => {
  const [value, setValue] = useState("");

  return (
    <form className="mt-10 sm:-mt-10 w-full flex-center">
      <label className="relative max-w-3xl flex-center grow">
        <Image
          src="/magnifying-glass.svg"
          alt="search_icon"
          className="absolute left-8"
          width={32}
          height={32}
        />
        <Input
          className="text-white-800 bg-black-400 text-[24px] py-[38px] pr-8 pl-[80px]
          border-transparent !ring-0 !ring-offset-0 placeholder:text-white-800"
          placeholder="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </label>
    </form>
  );
};

export default Search;
