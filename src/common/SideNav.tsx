import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import Icon, { IconType } from "./Icon";
import { useRef, useState } from "react";
import useClickOutside from "../hooks/useClickOutside";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  const navItems: Array<{ title: string; link: string; icon: IconType }> = [
    { title: "Home", link: "/home", icon: "home" },
    { title: "Community", link: "/community", icon: "description" },
    { title: "Leaderboard", link: "/leaderboard", icon: "analytics" },
    { title: "AR Advisor", link: "advisor", icon: "ar" },
    { title: "Finny Bot", link: "/finny", icon: "robot" },
    { title: "Account", link: "/account", icon: "person" },
    { title: "Logout", link: "/", icon: "logout" },
  ];

  const [hidden, setHidden] = useState(true);
  const outclickRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  // useClickOutside(outclickRef, () => !hidden && setHidden(false));

  return (
    <>
      <nav className="flex flex-col p-6 border-r border-border mobile:hidden">
        <div className="flex items-center gap-x-2">
          <img src="/logo.png" alt="logo" className="aspect-square w-10" />
          <div className="flex flex-col gap-y-1">
            <h1 className="font-black text-2xl tracking-wider">FiHub</h1>
            <p className="text-primary text-xs font-semibold">
              Unlock Financial Wisdom
            </p>
          </div>
        </div>

        <div role="list" className="flex flex-col gap-y-2 py-4">
          {navItems.map((item, key) => (
            <NavLink
              to={item.link}
              key={key}
              role="listitem"
              className={({ isActive, isPending }) =>
                twMerge(
                  "p-2 rounded-lg",
                  isActive && "bg-primary text-back pointer-events-none",
                  !isActive && "hover:outline hover:outline-[1.5px]",
                  isPending && "animate-pulse pointer-events-none"
                )
              }
            >
              <span className="flex items-center gap-x-2 text-base font-semibold">
                <Icon icon={item.icon} className="text-lg" />
                {item.title}
              </span>
            </NavLink>
          ))}
        </div>
      </nav>

      {hidden && (
        <button onClick={() => setHidden(false)} className="widescreen:hidden">
          <Icon icon="menu" className="text-4xl absolute top-2 left-2" />
        </button>
      )}
      <div className="absolute right-3 top-3 widescreen:hidden">
        <ThemeButton className="text-2xl p-2 aspect-square bg-foreground rounded-full flex justify-center items-center border border-front border-opacity-40" />
      </div>
      {!hidden && (
        <nav
          className="z-10 flex flex-col p-6 border-r border-border widescreen:hidden absolute top-0 left-0 bg-background h-full"
          ref={outclickRef}
        >
          <div className="absolute bottom-8 right-8 flex items-center" onClick={() => (setHidden(true))}>
            <p className="underline">Close</p>
            <Icon icon="close" className="text-xl" />
          </div>
          <div className="flex items-center gap-x-2">
            <img src="/logo.png" alt="logo" className="aspect-square w-10" />
            <div className="flex flex-col gap-y-1">
              <h1 className="font-black text-2xl tracking-wider">FiHub</h1>
              <p className="text-primary text-xs font-semibold">
                Unlock Financial Wisdom
              </p>
            </div>
          </div>

          <div role="list" className="flex flex-col gap-y-2 py-4">
            {navItems.map((item, key) => (
              <NavLink
                to={item.link}
                key={key}
                role="listitem"
                className={({ isActive, isPending }) =>
                  twMerge(
                    "p-2 rounded-lg",
                    isActive && "bg-primary text-back pointer-events-none",
                    !isActive && "hover:outline hover:outline-[1.5px]",
                    isPending && "animate-pulse pointer-events-none"
                  )
                }
              >
                <span className="flex items-center gap-x-2 text-base font-semibold">
                  <Icon icon={item.icon} className="text-lg" />
                  {item.title}
                </span>
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
