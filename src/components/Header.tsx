import classNames from "classnames";
import { MoonStars, SunHorizon } from "phosphor-react";
import { useLayoutEffect, useState } from "react";
import { SideBarMenu } from "./SideBarMenu/SideBarMenu";

export function Header() {
  let tema = localStorage.theme;
  const [theme, setTheme] = useState<"light" | "dark">(tema);

  function handleTheme() {
    if (theme === "light") {
      setTheme("dark");
      localStorage.theme = "dark";
    }
    if (theme === "dark") {
      setTheme("light");
      localStorage.theme = "light";
    }
  }

  useLayoutEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });

  return (
    <header className="flex justify-around pr-12 p-4 border-b-2 border-slate-400 mx-8 place-items-center">
      <p className="text-base text-white font-bold text-left break-before-auto">
        21 dias de código RocketSeat
      </p>
      <button
        className="text-blue-300 dark:text-yellow-200 bg-gray-700 dark:bg-gray-500 p-1 rounded-full transition-all aspect-square h-[30px] w-[30px] flex place-items-center"
        onClick={handleTheme}
      >
        {theme === "light" ? <MoonStars size={25} /> : <SunHorizon size={25} />}
      </button>
      <SideBarMenu />
    </header>
  );
}
