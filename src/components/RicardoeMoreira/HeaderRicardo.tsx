import { Alien, FlyingSaucer, MoonStars, SunHorizon } from "phosphor-react";
import React, { useLayoutEffect, useState } from "react";
import { Link } from "react-router-dom";
import RickLogo from "../../assets/rick-and-morty-logo.png";

export default function HeaderRicardo() {
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
    <header className="flex justify-between place-items-center max-w-5xl mx-auto px-4">
      <img src={RickLogo} alt="" className="max-h-24" />
      <nav className="text-2xl">
        <Link to='/semana2/ricardoemoreira' className="text-marrom-500 mr-5 font-bold hover:bg-azul-300 px-3 py-2 rounded-full">
          home
        </Link>
        <Link to='/semana2/ricardoemoreira/personagens' className="text-marrom-500 font-bold hover:bg-azul-300 px-3 py-2 rounded-full">
          personagens
        </Link>
      </nav>
      <button
        className="text-azul-900 dark:text-marrom-500 bg-verde-500 dark:bg-rosa-500 p-1 rounded-full transition-all aspect-square h-[30px] w-[30px] flex place-items-center animate-spin"
        onClick={handleTheme}
      >
        {theme === "light" ? <Alien size={25} /> : <FlyingSaucer size={25} />}
      </button>
    </header>
  );
}
