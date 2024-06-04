"use client";

import { useState } from "react";
import SwapTokens from "@/features/dex/SwapTokens";
import LimitOrder from "@/features/dex/LimitOrder";
import BuyTokens from "@/features/dex/BuyTokens";
import SendTokens from "@/features/dex/SendTokens";

export default function Home() {
  const [view, setView] = useState("swap");

  return (
    <main className="flex md:flex-row mt-20 flex-col mx-5 md:mx-10 xxl:mx-[100px]">
      <div className="mr-[700px]">Price Chart</div>
      <div className="w-fit bg-gray-900 rounded-lg">
        <button
          onClick={() => setView("swap")}
          className={`m-5 hover:text-gray-300 ${
            view === "swap" ? "bg-gray-500 p-2 rounded-lg" : ""
          }`}
        >
          Swap
        </button>
        <button
          onClick={() => setView("limit")}
          className={`m-5 hover:text-gray-300 ${
            view === "limit" ? "bg-gray-500 p-2 rounded-lg" : ""
          }`}
        >
          Limit
        </button>
        <button
          onClick={() => setView("buy")}
          className={`m-5 hover:text-gray-300 ${
            view === "buy" ? "bg-gray-500 p-2 rounded-lg" : ""
          }`}
        >
          Buy
        </button>
        <button
          onClick={() => setView("send")}
          className={`m-5 hover:text-gray-300 ${
            view === "send" ? "bg-gray-500 p-2 rounded-lg" : ""
          }`}
        >
          Send
        </button>

        <div className="">
          {view === "swap" && <SwapTokens />}
          {view === "limit" && <LimitOrder />}
          {view === "buy" && <BuyTokens />}
          {view === "send" && <SendTokens />}
        </div>
      </div>
    </main>
  );
}
