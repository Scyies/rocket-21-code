import React, { useState } from "react";
import useSound from "use-sound";
import storm from "../assets/music/storm-cut.mp3";
import cavalo from "../assets/music/cavalo.mp3";
import eleGoxta from "../assets/music/ele-gosta.mp3";
import uepa from "../assets/music/UEPA.mp3";
import uiii from "../assets/music/Uiii.mp3";
import pare from "../assets/music/PARE.mp3";

export default function KeyEvent() {
  const [playStorm] = useSound(storm);
  const [playCavalo] = useSound(cavalo);
  const [playEleGoxta] = useSound(eleGoxta);
  const [playUepa] = useSound(uepa);
  const [playUiii] = useSound(uiii);
  const [playPare] = useSound(pare);
  function pressK(e: React.KeyboardEvent<HTMLDivElement>) {
    switch (e.key) {
      case "q":
        playStorm();
        break;
      case "w":
        playCavalo();
        break;
      case "e":
        playEleGoxta();
        break;
      case "a":
        playUepa();
        break;
      case "s":
        playUiii();
        break;
      case "d":
        playPare();
        break;
    }
  }
  return (
    <div className="bg-azul-700 dark:bg-roxo-500 max-w-xs mt-8 
    mx-auto p-4 rounded-xl shadow-md"
      onKeyDown={() => pressK}
    >
      <p className="text-branco-500 text-center font-bold mb-4">
        Use as respectivas teclas no seu teclado para tocar os sons
      </p>
      <div className="grid grid-cols-3 grid-rows-2 font-bold relative gap-4 p-2 bg-branco-500 dark:bg-gray-500 text-preto-900 dark:text-branco-500 rounded-xl">
        <div className="bg-rosa-700 flex justify-center p-3 rounded-full shadow-md">
          Q
        </div>
        <div className="bg-rosa-700 flex justify-center p-3 rounded-full shadow-md">
          W
        </div>
        <div className="bg-rosa-700 flex justify-center p-3 rounded-full shadow-md">
          E
        </div>
        <div className="bg-rosa-700 flex justify-center p-3 rounded-full shadow-md">
          A
        </div>
        <div className="bg-rosa-700 flex justify-center p-3 rounded-full shadow-md">
          S
        </div>
        <div className="bg-rosa-700 flex justify-center p-3 rounded-full shadow-md">
          D
        </div>
      </div>
    </div>
  );
}
