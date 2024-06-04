import React from "react";
import { Input } from "@nextui-org/input";
import SelectToken from "@/components/SelectToken";
import { ArrowDownCircle } from "lucide-react";

export default function SwapTokens() {
  return (
    <main className="">
      <div className="rounded-lg border m-5 border-slate-600">
        <div className="flex p-3 py-5">
          <Input
            type="number"
            label="Sell"
            // variant="bordered"
            placeholder="0.00"
            className="w-full max-w-28"
            classNames={{
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
          />
          <SelectToken />
        </div>
      </div>

      <div className="flex justify-center items-center -my-7">
        <ArrowDownCircle />
      </div>

      <div className="rounded-lg border m-5 border-slate-600">
        <div className="flex p-3 py-5">
          <Input
            type="number"
            label="buy"
            // variant="bordered"
            placeholder="0.00"
            className="w-full max-w-28"
            classNames={{
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
          />
          <SelectToken />
        </div>
      </div>
    </main>
  );
}
