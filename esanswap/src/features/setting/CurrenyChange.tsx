import React from "react";
import { ChevronRight } from "lucide-react";

export default function CurrenyChange() {
  return (
    <div className="hover:text-gray-400 flex cursor-pointer">
      USD
      <ChevronRight size={20} />
    </div>
  );
}
