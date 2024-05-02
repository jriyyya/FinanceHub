import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { Theme } from "../hooks/useTheme";

interface GlobalContextType {
  modalState: {
    modal: ReactNode;
    setModal: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  };
  popupDrawerState: {
    value: ReactNode;
    setter: React.Dispatch<React.SetStateAction<React.ReactNode>>;
  };
  themeState: {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  };
}

const GlobalContext = createContext<GlobalContextType>({} as GlobalContextType);

export function GlobalContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [modal, setModal] = useState<ReactNode | null>();
  const [popupDrawer, setPopupDrawer] = useState<ReactNode>();

  useEffect(() => {
    const storedTheme = localStorage.getItem("vitess__arewefastyet__theme");
    if (storedTheme == "dark" || storedTheme == "light") {
      setTheme(storedTheme);
    } else {
      const darkColorPreference = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

      setTheme(darkColorPreference.matches ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("vitess__arewefastyet__theme", theme);
    }
  }, [theme]);

  const value = {
    modalState: { modal, setModal },
    themeState: { theme, setTheme },
    popupDrawerState: { value: popupDrawer, setter: setPopupDrawer },
  };

  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

export default function useGlobalContext() {
  return useContext(GlobalContext);
}
