import React from "react";

interface IProps {
  image: string;
  name: string;
  gender: string;
  species: string;
  status: string;
  origin: string;
  location: string;
  episodes: string;
}

export default function CardCharacters({
  image,
  name,
  gender,
  species,
  status,
  origin,
  location,
  episodes
}: IProps) {
  return (
    <div className="flex flex-col md:flex-row md:max-h-60 p-4 rounded-lg md:m-2 mb-2 bg-azul-300 dark:bg-marrom-500 md:rounded-full text-marrom-500 dark:text-rosa-500 animate-fadeIn">
      <img src={image} alt="" className="mr-5 w-full rounded-lg object-cover max-w-[200px] aspect-square md:rounded-full" />
      <div className='flex flex-col justify-center'>
        <div className='flex'>
          <label className='mr-1 font-bold'>Nome:</label>
          <p>{name}</p>
        </div>
        <div className='flex'>
          <label className='mr-1 font-bold'>Gênero:</label>
          <p>{gender}</p>
        </div>
        <div className='flex'>
          <label className='mr-1 font-bold'>Espécie:</label>
          <p>{species}</p>
        </div>
        <div className='flex'>
          <label className='mr-1 font-bold'>Status:</label>
          <p>{status}</p>
        </div>
        <div className='flex'>
          <label className='mr-1 font-bold'>Origem:</label>
          <p>{origin}</p>
        </div>
        <div className='flex'>
          <label className='mr-1 font-bold'>Localidade:</label>
          <p>{location}</p>
        </div>
        <div className='flex'>
          <label className='mr-1 font-bold'>Nº de episódios:</label>
          <p>{episodes}</p>
        </div>
      </div>
    </div>
  );
}
