import React, { useEffect, useState } from "react";
import useTheme from "../hooks/useTheme";
import Icon, { IconType } from "./Icon";

interface ThemeButtonProps {
  className?: string;
}

export default function ThemeButton(props: ThemeButtonProps) {
  const theme = useTheme();

  function toggleTheme() {
    if (theme.current == "dark") theme.set("light");
    if (theme.current == "light") theme.set("dark");
    console.log(theme.current)
  }

  const [icon, setIcon] = useState<IconType>("light_mode");

  useEffect(() => {
    if (theme.current == "dark") setIcon("light_mode");
    if (theme.current == "light") setIcon("dark_mode");
  }, [theme.current]);

  return (
    <button onClick={toggleTheme} className={props.className}>
      <Icon icon={icon} />
    </button>
  );
}
