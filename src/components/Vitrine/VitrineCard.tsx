import React from "react";

export interface Produtos {
  img: string;
  name: string;
  price: string;
}

export default function VitrineCard({ img, name, price }: Produtos) {
  return (
    <div className="flex flex-col p-2 overflow-hidden text-branco-500 w-full h-full hover:bg-preto-700">
      <img src={img} alt="" className="object-cover aspect-square" />
      <p className="break-all texto-branco-500 font-bold">{name}</p>
      <p className='text-red-400'>{price}</p>
    </div>
  );
}
