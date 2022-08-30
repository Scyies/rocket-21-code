import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";

export function SideBarMenu() {
  const [sideBar, setSideBar] = useState<"closed" | "open">("closed");
  function handleSideBar() {
    if (sideBar === "closed") {
      setSideBar("open");
    } else {
      setSideBar("closed");
    }
  }

  return (
    <>
      <div
        className={classNames("absolute right-12 w-5 h-4 flex flex-col justify-between z-40 cursor-pointer", {
          "fixed right-12": sideBar === "open",
        })}
        onClick={handleSideBar}
      >
        <div
          className={classNames("h-[2px] w-5 bg-white transition-all", {
            "rotate-45 translate-y-[8px]": sideBar === "open",
          })}
        ></div>
        <div
          className={classNames("h-[2px] w-5 bg-white transition-all", {
            "opacity-0 translate-x-full": sideBar === "open",
          })}
        ></div>
        <div
          className={classNames("h-[2px] w-5 bg-white transition-all", {
            "-rotate-45 -translate-y-[6px]": sideBar === "open",
          })}
        ></div>
      </div>
      <div
        className={classNames(
          "fixed bg-slate-500 dark:bg-slate-900 text-white opacity-95 w-full sm:w-[70%] md:w-[40%] overflow-auto min-h-screen h-screen bottom-0 right-0 z-30 translate-x-full transition-all",
          {
            "transform-none overflow-hidden": sideBar === "open",
          }
        )}
      >
        <p className="uppercase text-lg border-b-2 font-bold mt-[18px] border-slate-400 mx-16 pb-4 text-center">
          Menu
        </p>
        <div>
          <p className="uppercase border-b-2 font-bold mt-4 border-slate-400 mx-20 text-center">
            Semana 1
          </p>
          <ul className="text-center p-2 flex flex-col">
            <Link to={"/"}>Hello World</Link>
            <Link to={"/botao"}>Botão Animado</Link>
            <Link to={"/calculadora"}>Calculadora</Link>
            <Link to={"/notfound"}>Página de erro 404</Link>
            <Link to={"/glasscard"}>Card glassmorphism</Link>
            <Link to={"/contador"}>Contador</Link>
          </ul>
        </div>
        <div>
          <p className="uppercase border-b-2 font-bold mt-4 border-slate-400 mx-20 text-center">
            Semana 2
          </p>
          <ul className="text-center p-2 flex flex-col">
            <Link to={"/semana2"}>Loading Bar</Link>
            <Link to={"/semana2/particles"}>Particles.js</Link>
            <Link to={"/semana2/loginform"}>Login Form</Link>
            <Link to={"/semana2/galeria"}>Galeria de imagens</Link>
            <Link to={"/semana2/quizform"}>Quizz</Link>
            <Link to={"/semana2/vitrineprodutos"}>Vitrine de Produtos</Link>
          </ul>
        </div>
      </div>
    </>
  );
}
