import axios, { AxiosRequestConfig } from "axios";
import { MagnifyingGlass } from "phosphor-react";
import React, { useEffect, useState } from "react";
import CardCharacters from "../components/RicardoeMoreira/CardCharacters";
import FooterRicardo from "../components/RicardoeMoreira/FooterRicardo";
import HeaderRicardo from "../components/RicardoeMoreira/HeaderRicardo";
import Hero from "../components/RicardoeMoreira/Hero";

export default function RicardoMoreira() {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [previousPage, setPreviousPage] = useState("");
  const [filter, setFilter] = useState("");

  const loadCharacters = (url: string, options: AxiosRequestConfig = {}) => {
    axios
      .get(url, options)
      .then((response) => {
        if(filter) {
          const newList = response.data.results.filter((item: { name: string; }) => search(item.name))
          setCharacters(newList);
        } else {
          setCharacters(response.data.results);
          setNextPage(response.data.info.next);
          setPreviousPage(response.data.info.prev);
        }
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  function search(title: string) {
    const regex = new RegExp(filter, 'i');
    return regex.test(title);
  }

  function verMais() {
    axios.get(nextPage).then((response) => {
      setCharacters(response.data.results);
      setNextPage(response.data.info.next);
      setPreviousPage(response.data.info.prev);
    });
  }
  function verMenos() {
    axios.get(previousPage).then((response) => {
      setCharacters(response.data.results);
      setNextPage(response.data.info.next);
      setPreviousPage(response.data.info.prev);
    });
  }

  useEffect(() => {
    loadCharacters("https://rickandmortyapi.com/api/character");
  }, [filter])
  return (
    <main className="font-ricky text-lg min-h-screen bg-rosa-500 dark:bg-verde-500">
      <HeaderRicardo />
      <Hero />
      <section className="max-w-5xl mx-auto flex justify-center">
        <div className="flex bg-azul-300 dark:bg-marrom-500 place-items-center max-w-[240px] rounded-full m-3">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder='Buscar'
            className="px-3 py-2 rounded-full bg-azul-300 dark:bg-marrom-500 outline-none text-marrom-500 dark:text-rosa-500 placeholder:text-marrom-500 dark:placeholder:text-rosa-500"
          />
          <i className="text-marrom-500 dark:text-rosa-500 mr-3"><MagnifyingGlass size={25} weight="bold" /></i>
        </div>
      </section>
      <section className="grid grid-cols-2 md:grid-cols-1 gap-2 min-h-screen max-w-5xl px-3 md:px-8 mx-auto">
        {characters.map((character: any) => (
          <CardCharacters
            image={character.image}
            name={character.name}
            gender={character.gender}
            species={character.species}
            status={character.status}
            origin={character.origin.name}
            location={character.location.name}
            episodes={character.episode.length}
          />
        ))}
      </section>
      <div className="flex justify-between max-w-5xl px-3 md:px-8 mx-auto">
        <button
          onClick={verMenos}
          className="bg-verde-500 hover:bg-marrom-500 dark:hover:bg-marrom-100 hover:text-rosa-500 dark:hover:text-marrom-500 dark:bg-azul-300 rounded-full px-3 py-2 font-bold text-marrom-500 dark:text-marrom-500 transition-colors"
        >
          Página anterior
        </button>
        <button
          onClick={verMais}
          className="bg-verde-500 hover:bg-marrom-500 dark:hover:bg-marrom-100 hover:text-rosa-500 dark:hover:text-marrom-500 dark:bg-azul-300 rounded-full px-3 py-2 font-bold text-marrom-500 dark:text-marrom-500 transition-colors"
        >
          Próxima página
        </button>
      </div>
      <FooterRicardo />
    </main>
  );
}
