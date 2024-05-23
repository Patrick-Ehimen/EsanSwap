import React from "react";
import { ChevronRight } from "lucide-react";

export default function LanguageChange() {
  return (
    <div className="hover:text-gray-400 flex cursor-pointer">
      English
      <ChevronRight size={20} />
    </div>
  );
}
