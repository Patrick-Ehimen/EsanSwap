import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  // Destructure setTheme and theme from useTheme
  const { setTheme, theme } = useTheme();

  return (
    <div className="flex gap-5 mt-20 sm:gap-28">
      <div className="text-[13px]">Theme</div>
      <Button variant="outline" className="-mt-2 gap-5 hover:bg-transparent">
        {/* Auto Theme Toggle */}
        <div
          className={`p-1 rounded-lg ${
            theme === "system" ? "bg-amber-500" : ""
          } hover:bg-slate-500`}
          onClick={() => setTheme("system")}
        >
          Auto
        </div>
        {/* Light Theme Toggle */}
        <div
          className={`p-1 rounded-lg ${
            theme === "light" ? "bg-amber-500" : ""
          } hover:bg-slate-500`}
          onClick={() => setTheme("light")}
        >
          <Sun />
        </div>
        {/* Dark Theme Toggle */}
        <div
          className={`p-1 rounded-lg ${
            theme === "dark" ? "bg-amber-500" : ""
          } hover:bg-slate-500`}
          onClick={() => setTheme("dark")}
        >
          <Moon />
        </div>
      </Button>
    </div>
  );
}
