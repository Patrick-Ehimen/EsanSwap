"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Logo } from "../../public/assets";
import { ModeToggle } from "@/components/ModeToggle";
import { MintHoverCard } from "./MintHoverCard";
import { DeveloperHoverCard } from "./DeveloperHoverCard";
import { WalletDropdown } from "./WalletDropdown";
import { ConnectWallet } from "./ConnectWallet";
import { lusitana, encodeSansExpanded } from "@/fonts/font";

const navbarArr = [
  { id: 1, title: "Swap", link: "/" },
  { id: 2, title: "Stake", link: "/pages/stake" },
  { id: 3, title: "Liquidity", link: "/pages/liquidity" },
  // { id: 4, title: "Minting" },
  // { id: 5, title: "Developer" },
];

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <nav
      className={`flex mx-[30px] my-[20px] fixed text-[#af7383] dark:text-white ${encodeSansExpanded.className}`}
    >
      <Link href="/" className="flex">
        <div className="flex">
          <Image src={Logo} alt="logo" className="lg:mt-2 xl:flex" />
          <h3 className="my-3 xl:my-4 lg:hidden xl:flex sm:flex mx-1 pr-2 text-[20px] font-bold">
            EsanSwap
          </h3>
        </div>
      </Link>
      <div className="relative mt-3 hidden lg:flex">
        {navbarArr.map((item) => (
          <Link
            key={item.id}
            href={item.link || ""}
            className="my-3 mx-4 lg:my-1 font-medium underline-offset-4 hover:underline p-1 pb-0"
          >
            {item.title}
          </Link>
        ))}
        <MintHoverCard />
        <DeveloperHoverCard />
      </div>
      <div className="my-2 ml-[320px] md11:ml-[350px] lg:ml-[220px] xl:ml-[340px] flex">
        <WalletDropdown />
        <div className="mx-2">
          <ConnectWallet />
        </div>
        <div className="mx-2 hidden md:flex">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
