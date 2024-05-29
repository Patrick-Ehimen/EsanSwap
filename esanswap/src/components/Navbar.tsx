"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import { Logo } from "../../public/assets";
import { ConnectWallet } from "./ConnectWallet";
import { MintHoverCard } from "./MintHoverCard";
import { WalletDropdown } from "./WalletDropdown";
import { DeveloperHoverCard } from "./DeveloperHoverCard";

export default function MenuNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    { id: 1, title: "Swap", link: "/" },
    { id: 2, title: "Liquidity Minting", link: "/" },
    { id: 3, title: "Trading Minting", link: "/" },
    { id: 4, title: "vFRT", link: "/" },
    { id: 5, title: "Staking", link: "/pages/stake" },
    { id: 6, title: "Create a Token", link: "/" },
    { id: 7, title: "Create a Pool", link: "/" },
    { id: 8, title: "Liquidity", link: "/pages/liquidity" },
  ];

  return (
    <Navbar isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <Image src={Logo} alt="logo" />
      </NavbarContent>

      <NavbarContent justify="start" className="hidden sm:flex gap-4">
        <NavbarBrand className="">
          <Image src={Logo} alt="logo" />
          <p className="hidden sm:block text-[18.6px] font-bold text-inherit">
            Esanswap
          </p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-3">
          <NavbarItem>
            <Link
              color="foreground"
              href="/"
              className="text-[18px] font-medium text-inherit"
            >
              Swap
            </Link>
          </NavbarItem>
          <NavbarItem>
            <MintHoverCard />
          </NavbarItem>
          <NavbarItem>
            <DeveloperHoverCard />
          </NavbarItem>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className="items-center" justify="end">
        <WalletDropdown />
        <ConnectWallet />
        <div className="hidden lg:flex">
          <ModeToggle />
        </div>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href={item.link}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
