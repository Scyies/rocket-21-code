import React from "react";

export default function Hero() {
  return (
    <div className="relative">
      <img
        src="https://images6.alphacoders.com/909/thumb-1920-909641.png"
        alt=""
        className="object-cover max-h-40 w-full"
      />
      <div className="max-w-5xl mx-auto text-marrom-500 text-2xl">
        <p className="font-bold bottom-8 left-3">
          "Eu não discuto problemas, eu coloco fogo neles"
        </p>
      </div>
    </div>
  );
}
