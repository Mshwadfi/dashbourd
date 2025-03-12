"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const handleToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
    console.log(theme);
  };
  return (
    <button
      onClick={handleToggle}
      className="p-2 hover:bg-accent rounded-full relative flex items-center justify-center"
    >
      {/* Wrapping both icons in a relative container */}
      <div className="relative w-5 h-5 cursor-pointer">
        <Sun className="absolute inset-0 h-5 w-5 transition-all transform dark:rotate-90 dark:scale-0 scale-100" />
        <Moon className="absolute inset-0 h-5 w-5 transition-all transform rotate-90 scale-0 dark:rotate-0 dark:scale-100" />
      </div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
};

export default ModeToggle;
