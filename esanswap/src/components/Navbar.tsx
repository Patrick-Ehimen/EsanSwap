import React from "react";
import Link from "next/link";
import Image from "next/image";

import { Logo } from "../../public/assets";
import { ModeToggle } from "@/components/ModeToggle";
import { WalletDropdown } from "./WalletDropdown";
import { ConnectWallet } from "./ConnectWallet";
import { lusitana, encodeSansExpanded } from "@/fonts/font";

const navbarArr = [
  { id: 1, title: "Swap", link: "/" },
  { id: 2, title: "Stake", link: "/pages/stake" },
  { id: 3, title: "Liquidity", link: "/pages/liquidity" },
  { id: 4, title: "Minting" },
  { id: 5, title: "Developer" },
];

export default function Navbar() {
  return (
    <nav
      className={`flex mx-[30px] my-[20px] fixed text-[#af7383] dark:text-white ${encodeSansExpanded.className}`}
    >
      <Link href="/" className="flex">
        <div className="flex">
          <Image src={Logo} alt="logo" />
          <h3 className="my-3 mx-1 pr-2 text-[20px] font-bold">EsanSwap</h3>
        </div>
      </Link>
      {navbarArr.map((item) => (
        <Link
          key={item.id}
          href={item.link || "/"}
          className="my-3 mx-4 font-medium hover:bg-[#e2e8f0] dark:hover:bg-[#334155] p-1 rounded-lg"
        >
          {item.title}
        </Link>
      ))}
      <div className="my-2 ml-[240px] flex">
        <WalletDropdown />
        <div className="mx-2">
          <ConnectWallet />
        </div>
        <div className="mx-2">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
