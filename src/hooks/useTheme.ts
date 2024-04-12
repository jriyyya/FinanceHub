import useGlobalContext from "../contexts/globalContext";

export default function useTheme() {
  const { themeState } = useGlobalContext();

  function set(newTheme: Theme) {
    themeState.setTheme(newTheme);
  }

  return { current: themeState.theme, set };
}

export type Theme = "dark" | "light";
