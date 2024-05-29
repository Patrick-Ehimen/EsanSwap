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
import Settings from "@/features/setting/Settings";

import { useState } from "react";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";

import { SettingIcon } from "../../public/assets";
import { Wallet } from "../../public/assets";

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
            <div className="flex mt-10 gap-32">
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
              <SheetTitle className="flex gap-32">
                <div>Connect a Wallet</div>
                {/* Icon to toggle settings */}
                <Image
                  src={SettingIcon}
                  alt="icon"
                  className="hover:bg-slate-600 p-2 cursor-pointer rounded-lg"
                  onClick={toggleSettings}
                  width={40}
                  height={40}
                />
              </SheetTitle>
              <SheetDescription>
                To avoid losing funds, make sure you are connecting to the
                correct website URL.
              </SheetDescription>
            </SheetHeader>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
