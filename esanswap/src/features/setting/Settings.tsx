import React from "react";
import ThemeToggle from "./ThemeToggle";
import { SwitchToggle } from "./SwitchToggle";
import CurrenyChange from "./CurrenyChange";
import LanguageChange from "./LanguageChange";

export default function Settings() {
  return (
    <div>
      <h2 className="text-gray-500 text-[15px] mt-3">Preferences</h2>
      <div className="text-[13px]">
        <ThemeToggle />
        <div className="flex gap-20 sm:gap-40 mt-10">
          <h3>Hide small balances</h3>
          <SwitchToggle />
        </div>
        <div className="flex mt-5 gap-10 sm:gap-[94px]">
          <h3>Hide unknown tokens & NFTs</h3>
          <SwitchToggle />
        </div>
        <div className="flex gap-28 sm:gap-[200px] mt-5">
          <h3>Show tesnets</h3>
          <SwitchToggle />
        </div>
        <div className="mt-10 gap-[120px] flex sm:gap-52 cursor-pointer hover:text-gray-400">
          <h3>Language</h3>
          <LanguageChange />
        </div>
        <div className="mt-10 gap-36 sm:gap-[230px] flex cursor-pointer hover:text-gray-400">
          <h3>Currency</h3>
          <CurrenyChange />
        </div>
      </div>
    </div>
  );
}
