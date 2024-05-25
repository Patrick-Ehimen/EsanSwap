import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { encodeSansExpanded } from "@/fonts/font";

import { DevIcon1, DevIcon2 } from "../../public/assets";
import Link from "next/link";
import Image from "next/image";

const devArr = [
  {
    id: 1,
    img: DevIcon1,
    title: "Create a Token",
    param: "Create your own tokens with one click. No coding required!",
    link: "/",
  },
  {
    id: 2,
    img: DevIcon2,
    title: "Create a Pool",
    param:
      "Create liquidity markets for free and customize your market making strategies",
    link: "/",
  },
];

export function DeveloperHoverCard() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button
          variant="link"
          className={`font-medium text-[16.6px] ${encodeSansExpanded.className}`}
        >
          Developer
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex flex-col gap-4">
          {devArr.map((developer) => (
            <Link
              href={developer.link}
              key={developer.id}
              className="hover:bg-slate-800 dark:hover:bg-gray-600 p-3 rounded-sm"
            >
              <div className="">
                <div className="flex">
                  <div className="rounded-full bg-gray-700 p-2 mt-1">
                    <Image src={developer.img} alt="img" />
                  </div>
                  <h4 className="text-sm my-2 mx-2 font-semibold  dark:text-white text-gray-600">
                    {developer.title}
                  </h4>
                </div>
                <div className="space-y-1 ml-[30px] px-3">
                  <p className="text-sm text-gray-600 dark:text-[#d3d4e5]">
                    {developer.param}
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
