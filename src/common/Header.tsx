import React from "react";
import useTheme from "../hooks/useTheme";
import ThemeButton from "./ThemeButton";
// import { wallet } from "../config";

export default function Header() {
  
  const theme = useTheme();
  return (
    <header className="border-border border-b p-page py-2 flex">
      <ThemeButton className="text-2xl p-2 aspect-square bg-foreground rounded-full flex justify-center items-center border border-front border-opacity-40" />
    </header>
  );
}
