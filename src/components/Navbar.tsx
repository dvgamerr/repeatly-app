import { ThemeToggleButton } from "@/components/ThemeToggleButton";
import { HamburgerMenu } from "@/components/HamburgerMenu";
import * as React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 dark:bg-zinc-900/80 border-b border-[#ececec] dark:border-zinc-800 shadow-sm backdrop-blur">
      <div className="max-w-3xl mx-auto flex items-center justify-between h-14 px-4">
        <Link to="/" className="font-bold text-lg text-gray-900 dark:text-white tracking-tight">
          My Minimal Finance
        </Link>
        <div className="flex items-center gap-2">
          <HamburgerMenu />
          <ThemeToggleButton />
        </div>
      </div>
    </header>
  );
}