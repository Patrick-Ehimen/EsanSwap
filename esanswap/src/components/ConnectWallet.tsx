"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Settings from "@/features/setting/Settings";

import { useState } from "react";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";

import { SettingIcon } from "../../public/assets";
import { Wallet } from "../../public/assets";

import Metamask from "@/features/wallet/Metamask";
import Coinbase from "@/features/wallet/Coinbase";
import Phantom from "@/features/wallet/Phantom";
import WallectConnect from "@/features/wallet/WallectConnect";

export function ConnectWallet() {
  // State to track the visibility of settings
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  // Function to toggle the settings visibility
  const toggleSettings = () => setIsSettingsOpen(!isSettingsOpen);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" className="">
          <Image src={Wallet} alt="wallet" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        {/* Conditional rendering based on isSettingsOpen state */}
        {isSettingsOpen ? (
          <>
            <div className="flex mt-10 gap-20 md:gap-32">
              {/* Example setting: Toggle button */}
              <FaArrowLeftLong
                onClick={() => setIsSettingsOpen(false)}
                className="cursor-pointer"
              />
              <p className="text-[18px] font-medium">Settings</p>
            </div>
            <Settings />
          </>
        ) : (
          <>
            <SheetHeader className="mt-10">
              <SheetTitle className="flex gap-28 ssm:gap-40 md:gap-32">
                <div className="hidden md:flex">Connect a Wallet</div>
                <div className="md:hidden">Connect Wallet</div>
                {/* Icon to toggle settings */}
                <Image
                  src={SettingIcon}
                  alt="icon"
                  className="hover:bg-slate-600 p-2 -mt-2 cursor-pointer rounded-lg"
                  onClick={toggleSettings}
                  width={40}
                  height={40}
                />
              </SheetTitle>
              <SheetDescription>
                <div className="my-5">
                  To avoid losing funds, make sure you are connecting to the
                  correct website URL.
                </div>

                <div>
                  <Metamask />
                  <Phantom />
                  <Coinbase />
                  <WallectConnect />
                </div>

                <div className="flex my-10 items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="leading-relaxed">
                    By connecting a wallet, you agree to Esanswap&apos;s Terms
                    of Service and consent to its Privacy Policy.
                  </Label>
                </div>
              </SheetDescription>
            </SheetHeader>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
