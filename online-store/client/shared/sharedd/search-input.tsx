"use client";

import { Search } from "lucide-react";
import React from "react";

export const SearchInput = () => {
  return (
    <>
      <div className="flex rounded-2xl flex-1 justify-between relative h-11">
        <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-black-400" />
        <input
          className="rounded-2xl outline-none w-[398px] bg-[#B7CDF3] pl-11"
          type="text"
        />
      </div>
    </>
  );
};
