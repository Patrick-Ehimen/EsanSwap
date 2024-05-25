import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { encodeSansExpanded } from "@/fonts/font";

import { DevIcon3, DevIcon4, DevIcon5 } from "../../public/assets";
import Link from "next/link";
import Image from "next/image";

const mintArr = [
  {
    id: 1,
    img: DevIcon3,
    title: "Liquidity Minting",
    param: "Earn FTR rewards by staking assets for market making",
    link: "/",
  },
  {
    id: 2,
    img: DevIcon4,
    title: "Trading Minting",
    param: "Successfully complete a trade to get a FTR airdrop",
    link: "/",
  },
  {
    id: 3,
    img: DevIcon5,
    title: "vFTR",
    param: "Mint vFTR to earn more DoDo",
    link: "/",
  },
];

export function MintHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant="link"
          className={`font-medium text-[16.6px] ${encodeSansExpanded.className}`}
        >
          Minting
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex flex-col gap-4">
          {mintArr.map((mint) => (
            <Link
              href={mint.link}
              key={mint.id}
              className="hover:bg-slate-800 dark:hover:bg-gray-600 p-3 rounded-sm"
            >
              <div className="">
                <div className="flex">
                  <div className="rounded-full bg-gray-700 p-2 mt-1">
                    <Image src={mint.img} alt="img" />
                    {/* <AvatarFallback>{mint.title[0]}</AvatarFallback> */}
                  </div>
                  <h4 className="text-sm my-2 mx-2 font-semibold  dark:text-white text-gray-600">
                    {mint.title}
                  </h4>
                </div>
                <div className="space-y-1 ml-[30px] px-3">
                  <p className="text-sm text-gray-600 dark:text-[#d3d4e5]">
                    {mint.param}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
